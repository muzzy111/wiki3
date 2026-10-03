"""
Typer CLI for vault-scraper.

Usage:
  vault-scraper scrape urls <url> [<url> ...]
  vault-scraper scrape urls --file urls.txt
  vault-scraper scrape spider <start-url> --depth 2
  vault-scraper scrape search "<query>"
  vault-scraper scrape feed <feed-url>
  vault-scraper scrape social reddit --sub python --limit 10
  vault-scraper scrape social hn --query "python asyncio"

Global flags:
  --inbox PATH        Host path to /data/inbox (required, or SCRAPER_INBOX_PATH env var)
  --dry-run           Extract and chunk but do NOT write to inbox
  --verbose / -v      DEBUG logging
"""
from __future__ import annotations

import asyncio
import logging
import sys
from pathlib import Path
from typing import List, Optional

import typer
from rich.console import Console
from rich.table import Table

from .config import get_settings
from .inbox import DropResult
from .logging_config import configure_logging

app = typer.Typer(
    name="vault-scraper",
    help="Scrape content from URLs, SERPs, feeds, social sources; drop pre-processed markdown to the agentic-knowledge-engine inbox.",
    no_args_is_help=True,
    add_completion=False,
)
scrape_app = typer.Typer(help="Scrape subcommands.", no_args_is_help=True)
app.add_typer(scrape_app, name="scrape")

console = Console(stderr=False)  # data lines go to stdout
err_console = Console(stderr=True)


def _common_flags(
    inbox: Optional[Path],
    dry_run: bool,
    verbose: bool,
) -> tuple[Path, bool]:
    settings = get_settings()
    target = Path(inbox) if inbox else settings.scraper_inbox_path
    if not dry_run:
        target.mkdir(parents=True, exist_ok=True)
    configure_logging("DEBUG" if verbose else "INFO")
    return target, dry_run


def _report_results(
    drops: List[DropResult],
    errors: List[tuple[str, str]],
    stats: dict,
    *,
    total_urls: int,
) -> None:
    """Emit per-file lines + summary table."""
    for d in drops:
        if d.skipped_duplicate:
            continue
        console.print(
            f"[green][DROPPED][/green] {d.path.name}  ({d.bytes_written:,} bytes, {d.chunk_index}/{d.chunk_total})"
        )
    for src, err in errors:
        err_console.print(f"[red][ERROR][/red] {src} — {err}")

    table = Table(show_header=False, box=None)
    table.add_row("Dropped:", f"{stats.get('dropped', 0)} files")
    table.add_row("Skipped (dup):", f"{stats.get('skipped_dup', 0)}")
    table.add_row("Errors:", f"{len(errors)}")
    table.add_row("Total URLs processed:", f"{total_urls}")
    console.print()
    console.print(table)


# ── urls ─────────────────────────────────────────────────────────────────────


@scrape_app.command("urls")
def cmd_urls(
    url: Optional[List[str]] = typer.Argument(None, help="One or more URLs to scrape."),
    file: Optional[Path] = typer.Option(None, "--file", help="Newline-separated URL list file."),
    inbox: Optional[Path] = typer.Option(None, "--inbox", help="Inbox path (default: env)."),
    dry_run: bool = typer.Option(False, "--dry-run", help="Don't write to inbox."),
    verbose: bool = typer.Option(False, "--verbose", "-v", help="DEBUG logging."),
    timeout: float = typer.Option(30.0, "--timeout", help="Per-request timeout seconds."),
    concurrency: int = typer.Option(8, "--concurrency", help="Max parallel fetches."),
) -> None:
    inbox_path, dry = _common_flags(inbox, dry_run, verbose)
    urls: List[str] = list(url or [])
    if file:
        if not file.exists():
            err_console.print(f"[red]File not found:[/red] {file}")
            raise typer.Exit(1)
        urls.extend([line.strip() for line in file.read_text(encoding="utf-8").splitlines() if line.strip()])
    if not urls:
        err_console.print("[red]No URLs provided.[/red]")
        raise typer.Exit(1)

    from .sources.urls import run_urls
    drops, errors, stats = asyncio.run(run_urls(
        urls=urls,
        inbox=inbox_path,
        timeout=timeout,
        concurrency=concurrency,
        dry_run=dry,
        chunk_bytes=get_settings().scraper_chunk_bytes,
    ))
    _report_results(drops, errors, stats, total_urls=len(urls))


# ── spider ───────────────────────────────────────────────────────────────────


@scrape_app.command("spider")
def cmd_spider(
    start_url: str = typer.Argument(..., help="Seed URL."),
    depth: int = typer.Option(..., "--depth", help="Max crawl depth (required, no default)."),
    inbox: Optional[Path] = typer.Option(None, "--inbox"),
    dry_run: bool = typer.Option(False, "--dry-run"),
    verbose: bool = typer.Option(False, "--verbose", "-v"),
    timeout: float = typer.Option(30.0, "--timeout"),
    concurrency: int = typer.Option(8, "--concurrency"),
    same_domain: bool = typer.Option(True, "--same-domain/--no-same-domain", help="Restrict to same registered domain."),
    include: List[str] = typer.Option([], "--include", help="Regex; only crawl URLs matching (repeatable)."),
    exclude: List[str] = typer.Option([], "--exclude", help="Regex; skip URLs matching (repeatable)."),
) -> None:
    inbox_path, dry = _common_flags(inbox, dry_run, verbose)
    if depth < 0:
        err_console.print("[red]--depth must be >= 0[/red]")
        raise typer.Exit(1)

    from .sources.spider import run_spider
    drops, errors, stats = asyncio.run(run_spider(
        start_url=start_url,
        depth=depth,
        inbox=inbox_path,
        timeout=timeout,
        concurrency=concurrency,
        same_domain=same_domain,
        include_patterns=list(include),
        exclude_patterns=list(exclude),
        dry_run=dry,
        chunk_bytes=get_settings().scraper_chunk_bytes,
    ))
    _report_results(drops, errors, stats, total_urls=stats.get("dropped", 0) + len(errors))


# ── search ───────────────────────────────────────────────────────────────────


@scrape_app.command("search")
def cmd_search(
    query: List[str] = typer.Argument(..., help="One or more search queries."),
    inbox: Optional[Path] = typer.Option(None, "--inbox"),
    dry_run: bool = typer.Option(False, "--dry-run"),
    verbose: bool = typer.Option(False, "--verbose", "-v"),
    timeout: float = typer.Option(30.0, "--timeout"),
    concurrency: int = typer.Option(8, "--concurrency"),
    searxng_url: Optional[str] = typer.Option(None, "--searxng-url", help="SearXNG base URL."),
    results: int = typer.Option(10, "--results", help="Results per query."),
    engines: str = typer.Option("google,bing,brave", "--engines", help="Comma-separated engine list."),
    follow: bool = typer.Option(True, "--follow/--no-follow", help="Scrape each result page body."),
) -> None:
    inbox_path, dry = _common_flags(inbox, dry_run, verbose)
    settings = get_settings()
    base = searxng_url or settings.scraper_searxng_url

    from .sources.search import run_search, SearchConfigError
    try:
        drops, errors, stats = asyncio.run(run_search(
            queries=list(query),
            inbox=inbox_path,
            timeout=timeout,
            concurrency=concurrency,
            searxng_url=base,
            results_per_query=results,
            engines=engines,
            follow=follow,
            dry_run=dry,
            chunk_bytes=settings.scraper_chunk_bytes,
        ))
    except SearchConfigError as exc:
        err_console.print(f"[red]{exc}[/red]")
        raise typer.Exit(2)

    _report_results(drops, errors, stats, total_urls=sum(stats.get(k, 0) for k in ("dropped", "skipped_dup")) + len(errors))


# ── feed ─────────────────────────────────────────────────────────────────────


@scrape_app.command("feed")
def cmd_feed(
    feed_url: List[str] = typer.Argument(..., help="One or more RSS/Atom feed URLs."),
    inbox: Optional[Path] = typer.Option(None, "--inbox"),
    dry_run: bool = typer.Option(False, "--dry-run"),
    verbose: bool = typer.Option(False, "--verbose", "-v"),
    timeout: float = typer.Option(30.0, "--timeout"),
    concurrency: int = typer.Option(8, "--concurrency"),
    max_items: int = typer.Option(50, "--max-items", help="Max items per feed."),
    follow: bool = typer.Option(True, "--follow/--no-follow", help="Scrape full article body per item."),
) -> None:
    inbox_path, dry = _common_flags(inbox, dry_run, verbose)
    from .sources.feed import run_feed
    drops, errors, stats = asyncio.run(run_feed(
        feed_urls=list(feed_url),
        inbox=inbox_path,
        timeout=timeout,
        concurrency=concurrency,
        max_items=max_items,
        follow=follow,
        dry_run=dry,
        chunk_bytes=get_settings().scraper_chunk_bytes,
    ))
    _report_results(drops, errors, stats, total_urls=sum(stats.get(k, 0) for k in ("dropped", "skipped_dup")) + len(errors))


# ── social ───────────────────────────────────────────────────────────────────


social_app = typer.Typer(help="Reddit + Hacker News.")
scrape_app.add_typer(social_app, name="social")


@social_app.command("reddit")
def cmd_social_reddit(
    sub: List[str] = typer.Option([], "--sub", help="Subreddit name(s) (repeatable)."),
    url: List[str] = typer.Option([], "--url", help="Direct post URL(s)."),
    inbox: Optional[Path] = typer.Option(None, "--inbox"),
    dry_run: bool = typer.Option(False, "--dry-run"),
    verbose: bool = typer.Option(False, "--verbose", "-v"),
    timeout: float = typer.Option(30.0, "--timeout"),
    concurrency: int = typer.Option(8, "--concurrency"),
    sort: str = typer.Option("hot", "--sort", help="{hot,new,top,rising}"),
    limit: int = typer.Option(25, "--limit"),
    include_comments: bool = typer.Option(False, "--include-comments"),
    comment_limit: int = typer.Option(20, "--comment-limit"),
) -> None:
    inbox_path, dry = _common_flags(inbox, dry_run, verbose)
    if not sub and not url:
        err_console.print("[red]Provide --sub or --url[/red]")
        raise typer.Exit(1)
    settings = get_settings()
    from .sources.social import run_social
    drops, errors, stats = asyncio.run(run_social(
        platform="reddit",
        inbox=inbox_path,
        timeout=timeout,
        concurrency=concurrency,
        dry_run=dry,
        chunk_bytes=settings.scraper_chunk_bytes,
        subreddits=list(sub),
        reddit_post_urls=list(url),
        reddit_sort=sort,
        reddit_limit=limit,
        reddit_include_comments=include_comments,
        reddit_comment_limit=comment_limit,
        reddit_client_id=settings.scraper_reddit_client_id,
        reddit_client_secret=settings.scraper_reddit_client_secret,
        reddit_user_agent=settings.scraper_reddit_user_agent,
    ))
    _report_results(drops, errors, stats, total_urls=sum(stats.get(k, 0) for k in ("dropped", "skipped_dup")) + len(errors))


@social_app.command("hn")
def cmd_social_hn(
    query: Optional[str] = typer.Option(None, "--query", help="Algolia HN Search query."),
    story: Optional[int] = typer.Option(None, "--story", help="HN item id."),
    inbox: Optional[Path] = typer.Option(None, "--inbox"),
    dry_run: bool = typer.Option(False, "--dry-run"),
    verbose: bool = typer.Option(False, "--verbose", "-v"),
    timeout: float = typer.Option(30.0, "--timeout"),
    concurrency: int = typer.Option(8, "--concurrency"),
    results: int = typer.Option(20, "--results"),
    include_comments: bool = typer.Option(False, "--include-comments"),
) -> None:
    inbox_path, dry = _common_flags(inbox, dry_run, verbose)
    if not query and story is None:
        err_console.print("[red]Provide --query or --story[/red]")
        raise typer.Exit(1)
    from .sources.social import run_social
    drops, errors, stats = asyncio.run(run_social(
        platform="hn",
        inbox=inbox_path,
        timeout=timeout,
        concurrency=concurrency,
        dry_run=dry,
        chunk_bytes=get_settings().scraper_chunk_bytes,
        hn_query=query,
        hn_story_id=story,
        hn_results=results,
        hn_include_comments=include_comments,
    ))
    _report_results(drops, errors, stats, total_urls=sum(stats.get(k, 0) for k in ("dropped", "skipped_dup")) + len(errors))


if __name__ == "__main__":
    app()