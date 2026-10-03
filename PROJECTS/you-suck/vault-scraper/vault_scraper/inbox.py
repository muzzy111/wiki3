"""
Inbox drop protocol — frontmatter, atomic write, dedup, filename generation.

Implements the contract defined in the spec, Section 5:
  - YAML frontmatter (5a)
  - Cleaned body (5b)
  - Chunking at 490 KB (5c)
  - Atomic write via .tmp + rename (5d)
  - Session-level sha256 dedup (5e)
"""
from __future__ import annotations

import hashlib
import logging
import re
import shutil
import tempfile
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional, Set, Tuple
from urllib.parse import urlparse

import yaml

from .chunker import chunk_text, Chunk

logger = logging.getLogger(__name__)

# Matches all chars disallowed in Windows filenames + control chars.
_INVALID_FILENAME_CHARS = re.compile(r'[<>:"/\\|?*\x00-\x1f]')
_RESERVED_WINDOWS = {
    "CON", "PRN", "AUX", "NUL",
    *(f"COM{i}" for i in range(1, 10)),
    *(f"LPT{i}" for i in range(1, 10)),
}


@dataclass
class DropResult:
    path: Path
    bytes_written: int
    chunk_index: int
    chunk_total: int
    skipped_duplicate: bool = False


class InboxWriter:
    """Manages atomic writes to the inbox with session-level dedup."""

    def __init__(self, inbox_dir: Path, *, chunk_bytes: int = 490_000) -> None:
        self.inbox_dir = Path(inbox_dir)
        self.chunk_bytes = chunk_bytes
        self._seen_hashes: Set[str] = set()
        self._stats = {"dropped": 0, "skipped_dup": 0, "errors": 0}

    @property
    def stats(self) -> dict:
        return dict(self._stats)

    def drop(
        self,
        *,
        source_url: str,
        body: str,
        mode: str,
        query: Optional[str] = None,
        dry_run: bool = False,
    ) -> list[DropResult]:
        """
        Write body to the inbox as one or more markdown files with the required
        frontmatter. Returns a list of DropResults (one per chunk written).

        Skips entirely if a chunk's content hash has already been seen in this
        session.
        """
        self.inbox_dir.mkdir(parents=True, exist_ok=True)
        domain = _extract_domain(source_url)
        timestamp = _utc_timestamp()
        slug = _slug_from_url(source_url)

        chunks = chunk_text(body, max_bytes=self.chunk_bytes)
        results: list[DropResult] = []

        for chunk in chunks:
            frontmatter = _build_frontmatter(
                source_url=source_url,
                domain=domain,
                mode=mode,
                query=query,
                chunk_index=chunk.index,
                chunk_total=chunk.total,
            )
            full_content = frontmatter + chunk.text
            content_bytes = len(full_content.encode("utf-8"))

            content_hash = hashlib.sha256(full_content.encode("utf-8")).hexdigest()
            if content_hash in self._seen_hashes:
                self._stats["skipped_dup"] += 1
                results.append(DropResult(
                    path=Path(""), bytes_written=0,
                    chunk_index=chunk.index, chunk_total=chunk.total,
                    skipped_duplicate=True,
                ))
                continue
            self._seen_hashes.add(content_hash)

            if chunk.total > 1:
                filename = f"{domain}_{slug}_{timestamp}_part{chunk.index}.md"
            else:
                filename = f"{domain}_{slug}_{timestamp}.md"

            target = self.inbox_dir / filename

            if dry_run:
                results.append(DropResult(
                    path=target, bytes_written=content_bytes,
                    chunk_index=chunk.index, chunk_total=chunk.total,
                ))
                continue

            atomic_write(target, full_content)
            self._stats["dropped"] += 1
            results.append(DropResult(
                path=target, bytes_written=content_bytes,
                chunk_index=chunk.index, chunk_total=chunk.total,
            ))

        return results


def atomic_write(path: Path, content: str) -> None:
    """Atomic write: temp file in the same directory, fsync, rename.
    Compatible with the spec's recommended pattern (5d)."""
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp_name = tempfile.mkstemp(
        prefix=f".{path.name}.",
        suffix=".tmp",
        dir=str(path.parent),
    )
    try:
        with open(fd, "w", encoding="utf-8", newline="\n") as f:
            f.write(content)
            f.flush()
            import os
            os.fsync(f.fileno())
        shutil.move(tmp_name, str(path))
    except Exception:
        try:
            Path(tmp_name).unlink(missing_ok=True)
        except OSError:
            pass
        raise


def _build_frontmatter(
    *,
    source_url: str,
    domain: str,
    mode: str,
    query: Optional[str],
    chunk_index: int,
    chunk_total: int,
) -> str:
    """Render the YAML frontmatter block. The spec says: only these keys."""
    meta: dict = {
        "scraper_source_url": source_url,
        "scraper_domain": domain,
        "scraper_timestamp": _utc_timestamp_iso(),
        "scraper_mode": mode,
    }
    if query:
        meta["scraper_query"] = query
    if chunk_total > 1:
        meta["scraper_chunk"] = f"{chunk_index}/{chunk_total}"

    yaml_text = yaml.safe_dump(
        meta,
        sort_keys=False,
        allow_unicode=True,
        default_flow_style=False,
        width=4096,
    )
    return f"---\n{yaml_text}---\n\n"


def _extract_domain(url: str) -> str:
    try:
        host = urlparse(url).hostname or "unknown"
    except Exception:
        return "unknown"
    # Strip leading "www." for a tidier filename.
    if host.startswith("www."):
        host = host[4:]
    # Replace any remaining dots/colons with hyphens for filename safety.
    return host.replace(":", "-")


def _slug_from_url(url: str) -> str:
    """Generate a short, filesystem-safe slug from the URL path."""
    try:
        path = urlparse(url).path or ""
    except Exception:
        path = ""
    # Use last non-empty path segment, else the domain piece.
    segments = [s for s in path.split("/") if s]
    if segments:
        slug = segments[-1]
    else:
        slug = urlparse(url).hostname or "page"
    # Strip query/fragment markers, file extension.
    slug = slug.split("?")[0].split("#")[0]
    if "." in slug:
        slug = slug.rsplit(".", 1)[0]
    return _safe_filename_part(slug)


def _safe_filename_part(s: str) -> str:
    cleaned = _INVALID_FILENAME_CHARS.sub("-", s).strip(" .-_")
    if not cleaned:
        cleaned = "page"
    cleaned = cleaned[:80]
    if cleaned.upper() in _RESERVED_WINDOWS:
        cleaned = f"_{cleaned}"
    return cleaned


def _utc_timestamp() -> str:
    """UTC timestamp formatted for filename: 20250115T143200Z"""
    return datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def _utc_timestamp_iso() -> str:
    """ISO 8601 UTC timestamp for frontmatter."""
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")