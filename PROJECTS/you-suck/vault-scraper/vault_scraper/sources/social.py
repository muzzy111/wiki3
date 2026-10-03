"""
scrape social — Reddit (asyncpraw) + Hacker News (Algolia).

Reddit credentials come from env (SCRAPER_REDDIT_*). HN needs nothing.
"""
from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import List, Optional

from ..inbox import InboxWriter, DropResult

logger = logging.getLogger(__name__)


async def run_social(
    *,
    platform: str,                # "reddit" | "hn"
    inbox: Path,
    timeout: float,
    concurrency: int,
    dry_run: bool,
    chunk_bytes: int,
    # Reddit-specific
    subreddits: Optional[List[str]] = None,
    reddit_post_urls: Optional[List[str]] = None,
    reddit_sort: str = "hot",
    reddit_limit: int = 25,
    reddit_include_comments: bool = False,
    reddit_comment_limit: int = 20,
    # HN-specific
    hn_query: Optional[str] = None,
    hn_story_id: Optional[int] = None,
    hn_results: int = 20,
    hn_include_comments: bool = False,
    reddit_client_id: str = "",
    reddit_client_secret: str = "",
    reddit_user_agent: str = "vault-scraper/0.1",
) -> tuple[list[DropResult], list[tuple[str, str]], dict]:
    if platform == "reddit":
        return await _run_reddit(
            inbox=inbox,
            timeout=timeout,
            concurrency=concurrency,
            dry_run=dry_run,
            chunk_bytes=chunk_bytes,
            subreddits=subreddits or [],
            reddit_post_urls=reddit_post_urls or [],
            sort=reddit_sort,
            limit=reddit_limit,
            include_comments=reddit_include_comments,
            comment_limit=reddit_comment_limit,
            client_id=reddit_client_id,
            client_secret=reddit_client_secret,
            user_agent=reddit_user_agent,
        )
    elif platform == "hn":
        return await _run_hn(
            inbox=inbox,
            timeout=timeout,
            concurrency=concurrency,
            dry_run=dry_run,
            chunk_bytes=chunk_bytes,
            query=hn_query,
            story_id=hn_story_id,
            results=hn_results,
            include_comments=hn_include_comments,
        )
    else:
        raise ValueError(f"unknown social platform: {platform}")


# ── Reddit ───────────────────────────────────────────────────────────────────


async def _run_reddit(
    *,
    inbox: Path,
    timeout: float,
    concurrency: int,
    dry_run: bool,
    chunk_bytes: int,
    subreddits: List[str],
    reddit_post_urls: List[str],
    sort: str,
    limit: int,
    include_comments: bool,
    comment_limit: int,
    client_id: str,
    client_secret: str,
    user_agent: str,
) -> tuple[list[DropResult], list[tuple[str, str]], dict]:
    if not (client_id and client_secret):
        raise RuntimeError(
            "Reddit credentials missing: set SCRAPER_REDDIT_CLIENT_ID and "
            "SCRAPER_REDDIT_CLIENT_SECRET in your .env"
        )

    try:
        import asyncpraw
    except ImportError as exc:
        raise RuntimeError(f"asyncpraw not installed: {exc}") from exc

    writer = InboxWriter(inbox, chunk_bytes=chunk_bytes)
    sem = asyncio.Semaphore(concurrency)
    drops: list[DropResult] = []
    errors: list[tuple[str, str]] = []

    reddit = asyncpraw.Reddit(
        client_id=client_id,
        client_secret=client_secret,
        user_agent=user_agent,
        read_only=True,
    )

    try:
        async def from_sub(sub_name: str) -> None:
            try:
                sub = await reddit.subreddit(sub_name)
                if sort == "hot":
                    it = sub.hot(limit=limit)
                elif sort == "new":
                    it = sub.new(limit=limit)
                elif sort == "top":
                    it = sub.top(limit=limit)
                elif sort == "rising":
                    it = sub.rising(limit=limit)
                else:
                    errors.append((f"r/{sub_name}", f"unknown sort: {sort}"))
                    return
                async for post in it:
                    await _process_post(
                        post=post,
                        sub_name=sub_name,
                        include_comments=include_comments,
                        comment_limit=comment_limit,
                        writer=writer,
                        sem=sem,
                        drops=drops,
                        errors=errors,
                        mode="social",
                        query=f"r/{sub_name}",
                        dry_run=dry_run,
                    )
            except Exception as exc:
                errors.append((f"r/{sub_name}", f"{type(exc).__name__}: {exc}"))

        async def from_url(url: str) -> None:
            try:
                post = await reddit.submission(url=url)
                await _process_post(
                    post=post,
                    sub_name="",
                    include_comments=include_comments,
                    comment_limit=comment_limit,
                    writer=writer,
                    sem=sem,
                    drops=drops,
                    errors=errors,
                    mode="social",
                    query=None,
                    dry_run=dry_run,
                )
            except Exception as exc:
                errors.append((url, f"{type(exc).__name__}: {exc}"))

        await asyncio.gather(
            *(from_sub(s) for s in subreddits),
            *(from_url(u) for u in reddit_post_urls),
        )
    finally:
        await reddit.close()

    return drops, errors, writer.stats


async def _process_post(
    *,
    post,
    sub_name: str,
    include_comments: bool,
    comment_limit: int,
    writer: InboxWriter,
    sem: asyncio.Semaphore,
    drops: list[DropResult],
    errors: list[tuple[str, str]],
    mode: str,
    query: Optional[str],
    dry_run: bool,
) -> None:
    url = f"https://www.reddit.com{post.permalink}"
    title = post.title or "(untitled)"
    selftext = post.selftext or ""
    score = post.score
    author = str(post.author) if post.author else "[deleted]"

    body_lines = [
        f"Title: {title}",
        f"Subreddit: r/{sub_name}" if sub_name else "Subreddit: (via URL)",
        f"Author: u/{author}",
        f"Score: {score}",
        f"URL: {url}",
    ]
    if selftext:
        body_lines += ["", "## Selftext", "", selftext]
    if include_comments:
        async with sem:
            try:
                post.comment_sort = "top"
                await post.load()
                comments = post.comments[:comment_limit]
                body_lines += ["", "## Top comments", ""]
                for c in comments:
                    try:
                        text = c.body or ""
                        if text:
                            body_lines.append(f"> {text}")
                            body_lines.append("")
                    except Exception:
                        continue
            except Exception as exc:
                errors.append((url, f"comment load failed: {exc}"))

    body = "\n".join(body_lines)
    rs = writer.drop(
        source_url=url,
        body=body,
        mode=mode,
        query=query,
        dry_run=dry_run,
    )
    drops.extend(rs)


# ── Hacker News ──────────────────────────────────────────────────────────────


async def _run_hn(
    *,
    inbox: Path,
    timeout: float,
    concurrency: int,
    dry_run: bool,
    chunk_bytes: int,
    query: Optional[str],
    story_id: Optional[int],
    results: int,
    include_comments: bool,
) -> tuple[list[DropResult], list[tuple[str, str]], dict]:
    import httpx

    writer = InboxWriter(inbox, chunk_bytes=chunk_bytes)
    drops: list[DropResult] = []
    errors: list[tuple[str, str]] = []

    async with httpx.AsyncClient(timeout=timeout) as client:
        try:
            if query:
                stories = await _hn_search(client, query, results)
            elif story_id is not None:
                stories = [await _hn_item(client, story_id, include_comments=include_comments)]
            else:
                errors.append(("hn", "no --query or --story provided"))
                return drops, errors, writer.stats
        except Exception as exc:
            errors.append(("hn", f"{type(exc).__name__}: {exc}"))
            return drops, errors, writer.stats

        for story in stories:
            url = story.get("url") or f"https://news.ycombinator.com/item?id={story.get('objectID', '')}"
            title = story.get("title", "(untitled)")
            points = story.get("points")
            author = story.get("author", "")
            created_at = story.get("created_at", "")

            body_lines = [
                f"Title: {title}",
                f"URL: {url}",
                f"Points: {points}",
                f"Author: {author}",
                f"Created: {created_at}",
            ]
            if include_comments and story_id is not None:
                # _hn_item already fetched children when include_comments=True.
                children = story.get("_children", [])
                if children:
                    body_lines += ["", "## Top comments", ""]
                    for c in children:
                        text = c.get("text") or ""
                        if text:
                            from bs4 import BeautifulSoup
                            cleaned = BeautifulSoup(text, "lxml").get_text(separator=" ", strip=True)
                            body_lines.append(f"> {cleaned}")
                            body_lines.append("")

            body = "\n".join(body_lines)
            rs = writer.drop(
                source_url=url,
                body=body,
                mode="social",
                query=f"hn: {query}" if query else None,
                dry_run=dry_run,
            )
            drops.extend(rs)

    return drops, errors, writer.stats


async def _hn_search(client, query: str, results: int) -> list[dict]:
    url = "https://hn.algolia.com/api/v1/search"
    resp = await client.get(url, params={"query": query, "tags": "story", "hitsPerPage": results})
    resp.raise_for_status()
    data = resp.json()
    return data.get("hits", [])


async def _hn_item(client, story_id: int, *, include_comments: bool) -> dict:
    url = f"https://hn.algolia.com/api/v1/items/{story_id}"
    resp = await client.get(url)
    resp.raise_for_status()
    item = resp.json()
    item["objectID"] = str(story_id)
    if include_comments:
        children = item.get("children") or []
        item["_children"] = children[:20]  # top-level cap
    return item