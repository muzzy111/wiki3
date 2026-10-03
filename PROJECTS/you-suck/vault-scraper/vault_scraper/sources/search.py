"""
scrape search — SearXNG SERP scrape + optional follow.

Hits the SearXNG JSON endpoint, collects result URLs, optionally fetches each.
"""
from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import List
from urllib.parse import urlencode

from ..config import get_settings
from ..extractor import extract_text
from ..fetcher import Fetcher, FetchError
from ..inbox import InboxWriter, DropResult

logger = logging.getLogger(__name__)


class SearchConfigError(Exception):
    """Raised when SearXNG returns HTML instead of JSON, or is unreachable."""


async def run_search(
    *,
    queries: List[str],
    inbox: Path,
    timeout: float,
    concurrency: int,
    searxng_url: str,
    results_per_query: int,
    engines: str,
    follow: bool,
    dry_run: bool,
    chunk_bytes: int,
) -> tuple[list[DropResult], list[tuple[str, str]], dict]:
    writer = InboxWriter(inbox, chunk_bytes=chunk_bytes)
    sem = asyncio.Semaphore(concurrency)
    drops: list[DropResult] = []
    errors: list[tuple[str, str]] = []

    async with Fetcher(timeout=timeout) as fetcher:
        for query in queries:
            try:
                urls = await _searxng_query(
                    fetcher=fetcher,
                    searxng_url=searxng_url,
                    query=query,
                    results=results_per_query,
                    engines=engines,
                )
            except SearchConfigError as exc:
                raise  # propagate to CLI which exits 2

            if not follow:
                # Drop a stub note per query that lists the result URLs.
                body_lines = [f"# SearXNG results for: {query}", ""]
                body_lines.append(f"Source: {searxng_url}")
                body_lines.append(f"Engines: {engines}")
                body_lines.append(f"Results: {len(urls)}")
                body_lines.append("")
                body_lines.append("## Result URLs")
                for u in urls:
                    body_lines.append(f"- {u}")
                rs = writer.drop(
                    source_url=f"{searxng_url}/search?q={query}",
                    body="\n".join(body_lines),
                    mode="search",
                    query=query,
                    dry_run=dry_run,
                )
                drops.extend(rs)
                continue

            async def one(result_url: str, q: str) -> None:
                async with sem:
                    try:
                        r = await fetcher.fetch(result_url)
                        text = extract_text(r.html)
                        if not text.strip():
                            errors.append((result_url, "empty extracted text"))
                            return
                        rs = writer.drop(
                            source_url=r.final_url or result_url,
                            body=text,
                            mode="search",
                            query=q,
                            dry_run=dry_run,
                        )
                        drops.extend(rs)
                    except FetchError as exc:
                        errors.append((result_url, str(exc)))
                    except Exception as exc:
                        errors.append((result_url, f"{type(exc).__name__}: {exc}"))

            await asyncio.gather(*(one(u, query) for u in urls))

    return drops, errors, writer.stats


async def _searxng_query(
    *,
    fetcher: Fetcher,
    searxng_url: str,
    query: str,
    results: int,
    engines: str,
) -> List[str]:
    """Hit SearXNG JSON endpoint. Returns list of result URLs."""
    base = searxng_url.rstrip("/")
    params = {
        "q": query,
        "format": "json",
        "engines": engines,
        "pageno": 1,
    }
    url = f"{base}/search?{urlencode(params)}"
    logger.debug("SearXNG GET %s", url)

    resp = await fetcher._client.get(url)
    if resp.status_code != 200:
        raise SearchConfigError(f"SearXNG returned {resp.status_code} for {url}")
    ct = resp.headers.get("content-type", "")
    if "json" not in ct.lower():
        raise SearchConfigError(
            f"SearXNG did not return JSON (content-type: {ct!r}). "
            "Check that the instance has 'json' format enabled."
        )
    data = resp.json()
    out: list[str] = []
    for entry in data.get("results", []):
        u = entry.get("url")
        if u:
            out.append(u)
        if len(out) >= results:
            break
    return out