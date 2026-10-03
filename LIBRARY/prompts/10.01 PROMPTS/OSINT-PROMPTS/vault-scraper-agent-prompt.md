---
aliases: []
tags:
  - file
  - write
  - backend
  - content
---

# CODING AGENT PROMPT — Vault Scraper Frontend
**Project:** `[[vault-scraper]]`
**Role:** You are building the **frontend scraping layer** for an existing agentic knowledge synthesis pipeline. You write code only. No explanation unless a decision requires justification. Follow every constraint exactly.

---

## 1. CONTEXT — THE EXISTING BACKEND

The backend is a Dockerized Python service called `[[agentic-knowledge-engine]]` located at:
```
C:\Users\Admin\agentic-knowledge-engine\
```

It watches a directory (`/data/inbox/` inside the container, mapped to a host path via `docker-compose.yml`) for dropped text files and processes them through an LLM synthesis pipeline. You do not touch this service. Your only contract with it is the inbox drop protocol defined in Section 5.

Backend constraints you must respect:
- **Allowed extensions:** `.md`, `.txt`, `.rst`, `.org` — drop `.md` always.
- **Hard file size cap:** 512,000 bytes (500 KB) per file. Files exceeding this are quarantined and wasted.
- **SQLite dedup:** The backend deduplicates by content hash. Identical drops are silently skipped.
- **Stable-file trigger:** The watcher waits 1.5 seconds after the last write [[[[event]]]] before processing. Write atomically (temp file → rename) to avoid partial-read races.

---

## 2. YOUR TASK — WHAT TO BUILD

Build `[[vault-scraper]]`: a Python CLI tool that scrapes content from multiple source types, pre-processes it, and drops chunked `.md` files into the backend inbox.

### Source types to support:
| Mode | CLI subcommand |
|------|---------------|
| Arbitrary URL list | `scrape urls` |
| Full domain spider | `scrape spider` |
| SearXNG SERP scrape | `scrape search` |
| RSS / Atom feed | `scrape feed` |
| Reddit or Hacker News | `scrape social` |

---

## 3. TECH STACK

- **Language:** Python 3.11+
- **HTTP:** `httpx` (async, with `httpx[http2]`)
- **Headless browser fallback:** `playwright` (async API, Chromium)
- **HTML extraction:** `trafilatura` for readability-mode; raw `.get_text()` via `bs4` as fallback
- **Spider:** `crawlee` (Python port) **or** a hand-rolled async BFS with `asyncio.Queue` — choose whichever you judge more maintainable at the scale of a single-user OSINT tool
- **RSS parsing:** `feedparser`
- **Reddit:** `asyncpraw` (read-only, OAuth2 app credentials from env)
- **HN:** Algolia HN Search API (`https://hn.algolia.com/api/v1/`) — no auth required
- **CLI framework:** `typer` with `rich` for terminal output
- **Config:** `pydantic-settings`, `.env` file, same pattern as the backend
- **Packaging:** `pyproject.toml` (no `[[setup]].py`)
- **No additional Docker container.** This tool runs on the host (Windows, no WSL dependency) and writes directly to the host-side inbox path.

---

## 4. CLI INTERFACE SPECIFICATION

### Global flags (all subcommands):
```
--inbox PATH        Host path to /data/inbox (required, or SCRAPER_INBOX_PATH env var)
--dry-run           Extract and chunk but do NOT write to inbox; print summary to stdout
--verbose / -v      DEBUG-level logging
```

### `scrape urls`
```
vault-scraper scrape urls <url> [<url> ...]
vault-scraper scrape urls --file urls.txt   # newline-separated URL list

Options:
  --timeout FLOAT     Per-request timeout seconds (default: 30)
  --concurrency INT   Max parallel fetches (default: 8)
```

### `scrape spider`
```
vault-scraper scrape spider <start-url>

Options:
  --depth INT         Max crawl depth (required, no default — force explicit choice)
  --same-domain       Only follow links under the same registered domain (default: on)
  --include PATTERN   Regex; only crawl URLs matching this pattern (repeatable)
  --exclude PATTERN   Regex; skip URLs matching this pattern (repeatable)
  --concurrency INT   Max parallel fetches (default: 8)
```

### `scrape search`
```
vault-scraper scrape search "<query>" [<query> ...]

Options:
  --searxng-url URL   SearXNG instance base URL (or SCRAPER_SEARXNG_URL env var)
  --results INT       Number of results to fetch and scrape per query (default: 10)
  --engines STR       Comma-separated SearXNG engine list (default: "google,bing,brave")
  --follow            After collecting result URLs, scrape each page body (default: on)
```

### `scrape feed`
```
vault-scraper scrape feed <feed-url> [<feed-url> ...]

Options:
  --max-items INT     Max items to pull per feed (default: 50)
  --follow            Scrape full article body from each item link (default: on)
```

### `scrape social`
```
vault-scraper scrape social reddit --sub <subreddit> [--sub <subreddit> ...]
vault-scraper scrape social reddit --url <post-url> [--url <post-url> ...]
vault-scraper scrape social hn --query "<query>"
vault-scraper scrape social hn --story <story-id>

Reddit options:
  --sort {hot,new,top,rising}   (default: hot)
  --limit INT                   Posts per subreddit (default: 25)
  --include-comments            Pull top-level comments (default: off)
  --comment-limit INT           Max comments per post if --include-comments (default: 20)

HN options:
  --results INT                 Number of stories to fetch (default: 20)
  --include-comments            Pull top-level comments (default: off)
```

---

## 5. INBOX DROP PROTOCOL ([[INTEGRATION]] CONTRACT)

This section is the hard contract. Every deviation breaks the backend.

### 5a. Frontmatter block
Every `.md` file written to inbox MUST begin with a YAML frontmatter block:

```yaml
---
scraper_source_url: "https://example.com/article"
scraper_domain: "example.com"
scraper_timestamp: "2025-01-15T14:32:00Z"   # ISO 8601 UTC
scraper_mode: "spider"                        # urls | spider | search | feed | social
scraper_query: "optional — SERP query or subreddit name"
---
```

Do not add any other keys. The backend LLM will generate title, tags, concepts, and body from the content. Let it.

### 5b. Body content
- Immediately after the closing `---`, one blank line, then the raw extracted text.
- Text must be UTF-8. Strip null bytes, surrogate characters, and non-printable control characters (except `\n`, `\t`).
- Do not wrap in markdown code fences unless the source content is code.

### 5c. Chunking (CRITICAL — 500 KB cap)
Before writing, measure the full file size in bytes (`len(content.encode("utf-8"))`).

If a single page's content + frontmatter exceeds **490,000 bytes** (leave 10 KB headroom):
1. Split the body into chunks of ≤ 490,000 bytes at paragraph boundaries (double newline). Never split mid-sentence.
2. Write each chunk as a separate file.
3. Filename pattern: `{domain}_{slug}_{timestamp}_part{n}.md`
4. Each chunk file gets its own complete frontmatter block, with an added key `scraper_chunk: "N/M"` (e.g., `"1/3"`).

If content fits in one file: filename pattern `{domain}_{slug}_{timestamp}.md`. No `scraper_chunk` key.

### 5d. Atomic write
```python
import tempfile, os, shutil

def atomic_write(path: Path, content: str) -> None:
    tmp = path.with_suffix(".tmp")
    tmp.write_text(content, encoding="utf-8")
    shutil.move(str(tmp), str(path))
```
Never write directly to the final path. Always rename from a `.tmp` sibling.

### 5e. Dedup before drop
Before writing any file, compute `hashlib.sha256(content.encode()).hexdigest()`. Maintain a local session-level seen-set. Do not write if hash already seen this session. This prevents duplicate drops when the same URL appears in multiple SERP results or feed items.

---

## 6. RENDERING ENGINE — AUTO-DETECT LOGIC

```
Attempt 1: httpx GET with realistic browser headers (User-Agent, Accept-Language, Accept-Encoding)
  → Parse response with trafilatura (favor_recall=True, include_comments=False)
  → If trafilatura returns None or result < 200 chars:
      → Fallback: BeautifulSoup .get_text(separator="\n", strip=True)
  → If httpx raises (connection error, timeout, TLS, non-200 status):
      → Attempt 2: Playwright async Chromium

Attempt 2 (Playwright):
  → Launch browser once per scrape session (reuse context across pages)
  → page.goto(url, wait_until="networkidle", timeout=30000)
  → page.content() → same trafilatura → bs4 fallback chain as above
  → If Playwright also fails: log warning, skip URL, continue
```

**Playwright install:** Include `playwright install chromium` as a documented [[setup]] step in `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md`. Do not auto-run it in code.

**Browser headers for httpx:**
```python
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}
```

---

## 7. RATE LIMITING

**Default mode: aggressive / no throttle.** Do not add artificial delays. Do not read or respect `robots.txt`. Concurrency is controlled by the `--concurrency` flag only.

Implement a simple semaphore-based concurrency limiter:
```python
sem = asyncio.Semaphore(concurrency)
async with sem:
    result = await fetch(url)
```

Do not implement exponential backoff. On error: log, skip, continue.

---

## 8. SOURCE-SPECIFIC NOTES

### SearXNG
- Query endpoint: `GET {searxng_url}/search?q={query}&format=json&engines={engines}&pageno=1`
- Parse `results[].url` from JSON response.
- If `--follow` is set (default), fetch and extract each result URL body.
- If SearXNG returns HTML instead of JSON (instance misconfigured), log an error and abort the search subcommand with exit code 2.

### Reddit (asyncpraw)
- Credentials from env: `SCRAPER_REDDIT_CLIENT_ID`, `SCRAPER_REDDIT_CLIENT_SECRET`, `SCRAPER_REDDIT_USER_AGENT`
- Read-only mode only (`reddit = asyncpraw.Reddit(..., read_only=True)`)
- For posts: serialize title + selftext (or URL) + score + author into body.
- For comments (if `--include-comments`): include top-level comment bodies only, prefixed with `> ` (blockquote style).

### Hacker News (Algolia)
- Stories endpoint: `GET https://hn.algolia.com/api/v1/search?query={query}&tags=story&hitsPerPage={results}`
- Single story: `GET https://hn.algolia.com/api/v1/items/{story_id}`
- Serialize: title, URL, points, author, created_at, and (if `--include-comments`) comment text from `children[].text` (top-level only, strip HTML tags).

### RSS / Atom
- `feedparser.parse(feed_url)` — handle both RSS and Atom transparently.
- If `--follow` (default): fetch `entry.link` for each item and scrape body.
- If body not available and `--follow` off: use `entry.summary` or `entry.content[0].value`, strip HTML.

---

## 9. PROJECT STRUCTURE

```
vault-scraper/
├── pyproject.toml
├── .env.example
├── README.md
├── vault_scraper/
│   ├── __init__.py
│   ├── cli.py              # typer app, subcommand registration
│   ├── config.py           # pydantic-settings Settings class
│   ├── fetcher.py          # httpx + Playwright fetch logic, auto-detect
│   ├── extractor.py        # trafilatura + bs4 extraction pipeline
│   ├── chunker.py          # size check, paragraph-split, chunk writer
│   ├── inbox.py            # atomic_write, frontmatter builder, dedup set
│   ├── sources/
│   │   ├── __init__.py
│   │   ├── urls.py         # scrape urls subcommand logic
│   │   ├── spider.py       # BFS crawler
│   │   ├── search.py       # SearXNG integration
│   │   ├── feed.py         # RSS/Atom
│   │   └── social.py       # Reddit + HN
│   └── logging_config.py   # structlog or stdlib logging setup
└── tests/
    ├── test_chunker.py
    ├── test_extractor.py
    └── test_inbox.py
```

---

## 10. CONFIGURATION (`.env.example`)

```env
# Required
SCRAPER_INBOX_PATH=C:\Users\Admin\agentic-knowledge-engine\data\inbox

# SearXNG
SCRAPER_SEARXNG_URL=http://localhost:8080

# Reddit (read-only OAuth2 app)
SCRAPER_REDDIT_CLIENT_ID=
SCRAPER_REDDIT_CLIENT_SECRET=
SCRAPER_REDDIT_USER_AGENT=vault-scraper/1.0 by u/yourusername

# Optional overrides
SCRAPER_DEFAULT_CONCURRENCY=8
SCRAPER_DEFAULT_TIMEOUT=30
```

---

## 11. `pyproject.toml` REQUIREMENTS

```toml
[project]
name = "vault-scraper"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = [
    "typer[all]>=0.12",
    "rich>=13",
    "httpx[http2]>=0.27",
    "playwright>=1.44",
    "trafilatura>=1.9",
    "beautifulsoup4>=4.12",
    "feedparser>=6.0",
    "asyncpraw>=7.7",
    "pydantic-settings>=2.2",
    "pyyaml>=6.0",
]

[project.scripts]
vault-scraper = "vault_scraper.cli:app"
```

---

## 12. TESTS

Write unit tests for:
- `chunker.py`: verify a 600 KB body splits into multiple files, each ≤ 490,000 bytes, split only at paragraph boundaries.
- `extractor.py`: mock trafilatura returning `None`; verify bs4 fallback runs and returns non-empty string.
- `inbox.py`: verify `atomic_write` produces the final file and leaves no `.tmp` artifact; verify dedup skips a second write of identical content.

Use `pytest` + `pytest-asyncio`. No network calls in tests. Mock all external I/O.

---

## 13. OUTPUT BEHAVIOR

On each successful inbox drop, print one line to stdout:
```
[DROPPED] example.com_article-title_20250115T143200Z.md  (12,450 bytes, 1/1)
```

On skip (dedup):
```
[SKIP-DUP] https://example.com/article
```

On error:
```
[ERROR] https://example.com/broken — Connection timeout
```

Use `rich.console.Console` with appropriate styles. All three line types must be distinguishable by color (green / yellow / red).

On completion, print a summary table:
```
Dropped: 14 files  |  Skipped (dup): 3  |  Errors: 1  |  Total URLs processed: 18
```

---

## 14. CONSTRAINTS AND NON-GOALS

- **No GUI, no TUI, no web server.** CLI only.
- **No scheduling daemon.** Run-and-exit only. Use cron / Task Scheduler externally.
- **No login / session / cookie auth.** If a page requires auth, it will error; log and skip.
- **No proxy support** in v1. Do not add `--proxy` flag.
- **No content deduplication across sessions** (session-only seen-set is sufficient).
- **Do not modify the backend** (`[[agentic-knowledge-engine]]`) in any way.
- **Windows-compatible paths throughout.** Use `pathlib.Path` everywhere. No hardcoded forward slashes in filesystem operations.
- **Python only.** No Node.js, no shell scripts in the core logic.
