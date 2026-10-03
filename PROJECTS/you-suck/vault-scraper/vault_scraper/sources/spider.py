"""
scrape spider — BFS crawler starting from a seed URL.

Hand-rolled asyncio.Queue BFS rather than crawlee: lighter dependency surface,
easier to reason about at single-user scale, no surprise behavior.
"""
from __future__ import annotations

import asyncio
import logging
import re
from collections import deque
from pathlib import Path
from typing import List, Set
from urllib.parse import urljoin, urlparse

from bs4 import BeautifulSoup

from ..extractor import extract_text
from ..fetcher import Fetcher, FetchError
from ..inbox import InboxWriter, DropResult

logger = logging.getLogger(__name__)


async def run_spider(
    *,
    start_url: str,
    depth: int,
    inbox: Path,
    timeout: float,
    concurrency: int,
    same_domain: bool,
    include_patterns: list[str],
    exclude_patterns: list[str],
    dry_run: bool,
    chunk_bytes: int,
) -> tuple[list[DropResult], list[tuple[str, str]], dict]:
    writer = InboxWriter(inbox, chunk_bytes=chunk_bytes)
    sem = asyncio.Semaphore(concurrency)

    visited: Set[str] = set()
    queued: Set[str] = {start_url}
    queue: deque[tuple[str, int]] = deque([(start_url, 0)])
    base_host = urlparse(start_url).hostname or ""
    if base_host.startswith("www."):
        base_host = base_host[4:]
    registered_domain = _registered_domain(base_host)

    include_res = [re.compile(p) for p in include_patterns]
    exclude_res = [re.compile(p) for p in exclude_patterns]

    drops: list[DropResult] = []
    errors: list[tuple[str, str]] = []

    async with Fetcher(timeout=timeout) as fetcher:
        async def process(url: str, current_depth: int) -> None:
            # Skip if domain filter fails.
            if same_domain:
                host = urlparse(url).hostname or ""
                if host.startswith("www."):
                    host = host[4:]
                if _registered_domain(host) != registered_domain:
                    return

            # Apply include/exclude filters.
            if include_res and not any(r.search(url) for r in include_res):
                return
            if exclude_res and any(r.search(url) for r in exclude_res):
                return

            if url in visited:
                return
            visited.add(url)

            async with sem:
                try:
                    result = await fetcher.fetch(url)
                except FetchError as exc:
                    errors.append((url, str(exc)))
                    return
                except Exception as exc:
                    errors.append((url, f"{type(exc).__name__}: {exc}"))
                    return

            text = extract_text(result.html)
            if text.strip():
                rs = writer.drop(
                    source_url=result.final_url or url,
                    body=text,
                    mode="spider",
                    dry_run=dry_run,
                )
                drops.extend(rs)

            if current_depth >= depth:
                return

            # Enqueue same-domain links.
            for link in _extract_links(result.html, base_url=result.final_url or url):
                if link in visited or link in queued:
                    continue
                if same_domain:
                    host = urlparse(link).hostname or ""
                    if host.startswith("www."):
                        host = host[4:]
                    if _registered_domain(host) != registered_domain:
                        continue
                if include_res and not any(r.search(link) for r in include_res):
                    continue
                if exclude_res and any(r.search(link) for r in exclude_res):
                    continue
                queued.add(link)
                queue.append((link, current_depth + 1))

        # BFS loop.
        in_flight: Set[asyncio.Task] = set()
        while queue or in_flight:
            while queue and len(in_flight) < concurrency:
                url, d = queue.popleft()
                task = asyncio.create_task(process(url, d))
                in_flight.add(task)
                task.add_done_callback(in_flight.discard)
            if in_flight:
                await asyncio.wait(in_flight, return_when=asyncio.FIRST_COMPLETED)

    return drops, errors, writer.stats


def _extract_links(html: str, *, base_url: str) -> list[str]:
    """Extract absolute hrefs from <a> tags."""
    if not html:
        return []
    try:
        soup = BeautifulSoup(html, "lxml")
    except Exception:
        try:
            soup = BeautifulSoup(html, "html.parser")
        except Exception:
            return []
    out: list[str] = []
    seen: set[str] = set()
    for a in soup.find_all("a", href=True):
        href = a.get("href", "").strip()
        if not href or href.startswith(("javascript:", "mailto:", "tel:", "#")):
            continue
        absolute = urljoin(base_url, href)
        # Drop fragments for dedup simplicity.
        absolute = absolute.split("#")[0]
        if absolute and absolute not in seen:
            seen.add(absolute)
            out.append(absolute)
    return out


def _registered_domain(host: str) -> str:
    """Coarse-grained registered domain extraction.
    For our purposes: last two labels (e.g. 'example.com' from 'blog.example.com').
    """
    if not host:
        return ""
    parts = host.split(".")
    if len(parts) <= 2:
        return host
    return ".".join(parts[-2:])