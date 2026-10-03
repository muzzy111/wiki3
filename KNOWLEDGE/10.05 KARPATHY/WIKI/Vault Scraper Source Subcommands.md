---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault Scraper Source Subcommands

The five source modules under `vault_scraper/sources/` implement the
five scraping modes exposed by the CLI. They share the same contract:
fetch raw HTML, extract text, chunk, drop to inbox, return (drops,
errors, stats) for the CLI's reporting layer.

## urls (`sources/urls.py`)

```bash
vault-scraper scrape urls <url> [<url> ...]
vault-scraper scrape urls --file urls.txt
```

- Fetches each URL with the standard auto-detect fetcher.
- Extracts text with the standard extractor pipeline.
- No follow, no spider, no domain filter — just a flat list.
- Concurrency via `asyncio.Semaphore(concurrency)`.

## spider (`sources/spider.py`)

```bash
vault-scraper scrape spider <start-url> --depth 2 --include "/blog/"
```

- Hand-rolled BFS using `asyncio.Queue`-equivalent (`collections.deque`
  with bounded task pool).
- `--depth` is required (no default — forces explicit choice).
- `--same-domain/--no-same-domain` (default on).
- `--include` / `--exclude` repeatable regex filters applied to both
  the URL and the in-flight queue.
- Registered-domain filter: 2-label suffix of the seed hostname
  (`blog.example.com` → `example.com`). Coarse but adequate at
  single-user scale.
- Task pool capped at `--concurrency` via `asyncio.create_task` + `wait`
  loop.

I chose to write the BFS by hand instead of pulling in `crawlee`
because crawlee's dependency surface is heavier (crawlee + httpx +
beautifulsoup4 + many crawlee-specific utils) and its behavior at
single-user scale is overkill. The hand-rolled version is ~180 lines,
covers the spec's requirements, and is easy to reason about.

## search (`sources/search.py`)

```bash
vault-scraper scrape search "<query>" --results 10 --follow
```

- Hits the SearXNG JSON endpoint at `{searxng_url}/search?q=...&format=json`.
- Parses `results[].url`. Caps at `--results` per query.
- `--follow/--no-follow` (default on). When on, fetches each result
  page body. When off, drops a stub note listing the result URLs.
- **Exit code 2** if SearXNG returns HTML instead of JSON (instance
  misconfigured). The spec is explicit about this; we don't try to
  parse HTML as a fallback.

## feed (`sources/feed.py`)

```bash
vault-scraper scrape feed <feed-url> [--max-items 50] [--follow]
```

- `feedparser.parse(feed_url)` handles RSS 2.0, RSS 1.0, Atom, and
  JSON Feed transparently.
- `--follow` (default on) fetches each entry's `link` and extracts
  full body. Without follow, falls back to `entry.summary` or
  `entry.content[0].value`, stripped of HTML.
- `--max-items` caps entries per feed (default 50).
- Multiple feeds in one command; `feed_url` is a list argument.

## social (`sources/social.py`)

Reddit + Hacker News via the `social` subcommand group.

### Reddit

```bash
vault-scraper scrape social reddit --sub python --limit 25
vault-scraper scrape social reddit --url https://www.reddit.com/r/python/comments/abc/...
```

- asyncpraw in read-only mode. Credentials from
  `SCRAPER_REDDIT_CLIENT_ID` / `SCRAPER_REDDIT_CLIENT_SECRET` /
  `SCRAPER_REDDIT_USER_AGENT` env vars.
- `--sort {hot,new,top,rising}` (default `hot`).
- `--limit INT` posts per subreddit (default 25).
- `--include-comments` pulls top-level comments (default off).
- `--comment-limit INT` max comments per post (default 20).
- Body is a metadata block + selftext + (optional) comment block.
  Comment lines are prefixed with `> ` for blockquote markdown.

### Hacker News

```bash
vault-scraper scrape social hn --query "rust async runtime"
vault-scraper scrape social hn --story 8863 --include-comments
```

- Algolia HN Search API. No auth.
- `--query` does a `tags=story` search; `--results` controls page size.
- `--story ID` fetches a single story via the items endpoint.
- `--include-comments` parses `children[].text` (top-level only, HTML
  stripped via bs4).
- Body is a metadata block (title, URL, points, author, created) plus
  optional comment block.

## Shared return contract

Every source runner returns a 3-tuple:

```python
(drops: list[DropResult], errors: list[tuple[str, str]], stats: dict)
```

Where:
- `drops` are DropResult objects with `path`, `bytes_written`,
  `chunk_index`, `chunk_total`, `skipped_duplicate` flags.
- `errors` are `(url, message)` pairs (the CLI prints `[ERROR]` lines).
- `stats` is the `InboxWriter.stats` dict: `{"dropped": N,
  "skipped_dup": M, "errors": K}`.

The CLI's `_report_results` is the single consumer — it formats the
color-coded lines and the summary table.

## See also

- [[Vault Scraper Frontend Architecture]]
- [[Vault Scraper CLI Surface]]
- [[Vault Scraper Inbox Drop Protocol]]
- [[RAW/2026-06-29 hermes session journal]]