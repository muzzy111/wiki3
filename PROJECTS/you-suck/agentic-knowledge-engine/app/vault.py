"""
Atomic writes, frontmatter serialization, and helpers for the Obsidian vault.
"""
from __future__ import annotations

import os
import re
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import yaml

INVALID_FILENAME_CHARS = re.compile(r'[<>:"/\\|?*\x00-\x1f]')
RESERVED_WINDOWS_NAMES = {
    "CON", "PRN", "AUX", "NUL",
    *(f"COM{i}" for i in range(1, 10)),
    *(f"LPT{i}" for i in range(1, 10)),
}


def safe_filename(name: str) -> str:
    """Sanitize a string for use as a filename. Replaces invalid chars with '-'."""
    cleaned = INVALID_FILENAME_CHARS.sub("-", name).strip(" .-")
    if not cleaned:
        cleaned = "untitled"
    # Truncate to avoid filesystem limits (NTFS = 255; ext4 = 255). Reserve room for suffix.
    cleaned = cleaned[:200]
    if cleaned.upper() in RESERVED_WINDOWS_NAMES:
        cleaned = f"_{cleaned}"
    return cleaned


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def build_frontmatter(meta: dict[str, Any]) -> str:
    """Render a YAML frontmatter block. Drops keys whose values are None/empty."""
    filtered: dict[str, Any] = {}
    for key, value in meta.items():
        if value is None:
            continue
        if isinstance(value, (list, str)) and len(value) == 0:
            continue
        filtered[key] = value
    yaml_text = yaml.safe_dump(
        filtered,
        sort_keys=False,
        allow_unicode=True,
        default_flow_style=False,
        width=4096,
    )
    return f"---\n{yaml_text}---\n\n"


def atomic_write(path: Path, content: str) -> None:
    """Write content to `path` atomically: write to a sibling temp file in the
    same directory (so os.rename is atomic on the same filesystem), fsync, rename."""
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp_name = tempfile.mkstemp(
        prefix=f".{path.name}.",
        suffix=".tmp",
        dir=str(path.parent),
    )
    try:
        with os.fdopen(fd, "w", encoding="utf-8", newline="\n") as f:
            f.write(content)
            f.flush()
            os.fsync(f.fileno())
        os.replace(tmp_name, path)
    except Exception:
        try:
            os.unlink(tmp_name)
        except OSError:
            pass
        raise


def safe_move(src: Path, dst: Path) -> None:
    """Atomically move a file from src to dst, creating dst's parent."""
    dst.parent.mkdir(parents=True, exist_ok=True)
    os.replace(src, dst)