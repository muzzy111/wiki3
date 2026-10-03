"""
scrape urls — fetch a list of arbitrary URLs and drop each to inbox.
"""
from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import List
from urllib.parse import urlparse

from ..extractor import extract_text
from ..fetcher import Fetcher, FetchError
from ..inbox import InboxWriter, DropResult

logger = logging.getLogger(__name__)


async def run_urls(
    *,
    urls: List[str],
    inbox: Path,
    timeout: float,
    concurrency: int,
    dry_run: bool,
    chunk_bytes: int,
) -> tuple[list[DropResult], list[tuple[str, str]]]:
    """Fetch each URL, extract text, drop to inbox. Returns (drops, errors).
    Errors are a list of (url, message) tuples for reporting."""
    writer = InboxWriter(inbox, chunk_bytes=chunk_bytes)
    sem = asyncio.Semaphore(concurrency)
    drops: list[DropResult] = []
    errors: list[tuple[str, str]] = []

    async with Fetcher(timeout=timeout) as fetcher:
        async def one(url: str) -> None:
            async with sem:
                try:
                    result = await fetcher.fetch(url)
                    text = extract_text(result.html)
                    if not text.strip():
                        errors.append((url, "empty extracted text"))
                        return
                    rs = writer.drop(
                        source_url=result.final_url or url,
                        body=text,
                        mode="urls",
                        dry_run=dry_run,
                    )
                    drops.extend(rs)
                except FetchError as exc:
                    errors.append((url, str(exc)))
                except Exception as exc:
                    errors.append((url, f"{type(exc).__name__}: {exc}"))

        await asyncio.gather(*(one(u) for u in urls))

    return drops, errors, writer.stats