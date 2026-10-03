"""
scrape feed — RSS / Atom via feedparser.
"""
from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import List

import feedparser

from ..extractor import extract_text
from ..fetcher import Fetcher, FetchError
from ..inbox import InboxWriter, DropResult

logger = logging.getLogger(__name__)


async def run_feed(
    *,
    feed_urls: List[str],
    inbox: Path,
    timeout: float,
    concurrency: int,
    max_items: int,
    follow: bool,
    dry_run: bool,
    chunk_bytes: int,
) -> tuple[list[DropResult], list[tuple[str, str]], dict]:
    writer = InboxWriter(inbox, chunk_bytes=chunk_bytes)
    sem = asyncio.Semaphore(concurrency)
    drops: list[DropResult] = []
    errors: list[tuple[str, str]] = []

    async with Fetcher(timeout=timeout) as fetcher:
        for feed_url in feed_urls:
            try:
                resp = await fetcher._client.get(feed_url)
                resp.raise_for_status()
                parsed = feedparser.parse(resp.text)
            except Exception as exc:
                errors.append((feed_url, f"feed fetch failed: {exc}"))
                continue

            entries = list(parsed.entries)[:max_items]
            logger.info("Feed %s: %d entries (showing %d)", feed_url, len(parsed.entries), len(entries))

            async def one(entry, fu: str) -> None:
                title = getattr(entry, "title", "") or "(untitled)"
                link = getattr(entry, "link", "") or ""
                summary = getattr(entry, "summary", "") or ""
                if not link:
                    errors.append((fu, f"entry has no link: {title!r}"))
                    return

                body: str = ""
                if follow and link:
                    async with sem:
                        try:
                            r = await fetcher.fetch(link)
                            body = extract_text(r.html)
                        except FetchError as exc:
                            errors.append((link, str(exc)))
                            return
                        except Exception as exc:
                            errors.append((link, f"{type(exc).__name__}: {exc}"))
                            return

                if not body:
                    # Fall back to summary / content.
                    if summary:
                        body = _strip_html(summary)
                    elif getattr(entry, "content", None):
                        try:
                            body = _strip_html(entry.content[0].value or "")
                        except Exception:
                            body = ""

                if not body.strip():
                    errors.append((link, "no body available"))
                    return

                # Prepend metadata so the LLM has the title + source.
                meta_block = f"Title: {title}\nFeed: {fu}\nLink: {link}\n\n"
                rs = writer.drop(
                    source_url=link,
                    body=meta_block + body,
                    mode="feed",
                    dry_run=dry_run,
                )
                drops.extend(rs)

            await asyncio.gather(*(one(e, feed_url) for e in entries))

    return drops, errors, writer.stats


def _strip_html(html: str) -> str:
    """Strip HTML tags from feed summary/content using stdlib."""
    from bs4 import BeautifulSoup
    try:
        soup = BeautifulSoup(html, "lxml")
        for tag in soup(["script", "style"]):
            tag.decompose()
        return soup.get_text(separator="\n", strip=True)
    except Exception:
        # Last resort: crude regex strip.
        import re
        return re.sub(r"<[^>]+>", "", html)