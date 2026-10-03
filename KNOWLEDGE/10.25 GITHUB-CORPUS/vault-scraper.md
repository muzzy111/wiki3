---
title: "vault-scraper"
type: wiki-note
domain: corpus/github
source: "C:\Users\Admin\Documents\GitHub\vault-scraper\README.md"
tags:
  - corpus/github
  - corpus/repo-readme
  - status/active
created: 2026-07-05
modified: 2026-07-05
status: active
stub: false
---

# vault-scraper

**Source:** `C:\Users\Admin\Documents\GitHub\vault-scraper\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md`

**Size:** 5,465 bytes (original)

---

# vault-scraper

Frontend scraper for the [[agentic-knowledge-engine]] inbox.
Fetches content from URLs, spiders, SearXNG results, RSS/Atom feeds, Reddit, and
Hacker News; chunks + dedups + atomic-writes pre-formatted `.md` files into the
backend's `/data/inbox/` directory. The backend then synthesizes each drop into
a structured Obsidian atomic note.

## Install

```bash
cd C:\Users\Admin\Downloads\vault-scraper
python -m venv .venv
.venv\Scripts\activate
pip install -e ".[dev]"
playwright install chromium
```

## Configure

```bash
cp .env.example .env
# Edit .env:
#   SCRAPER_INBOX_PATH=C:\Users\Admin\Downloads\agentic-knowledge-engine\data\inbox
#   SCRAPER_SEARXNG_URL=http://localhost:8080
#   SCRAPER_REDDIT_CLIENT_ID=...
#   SCRAPER_REDDIT_CLIENT_SECRET=...
#   SCRAPER_REDDIT_USER_AGENT=vault-scraper/0.1 by u/<your-handle>
```

Reddit credentials: create a read-only "script" OAuth app at
<https://www.reddit.com/prefs/apps>.

## Usage

```bash
vault-scraper scrape urls https://example.com/article-1 https://example.com/article-2
vault-scraper scrape urls --file urls.txt
vault-scraper scrape spider https://blog.example.com --depth 2 --include "/blog/"
vault-scraper scrape search "python asyncio patterns" --results 10
vault-scraper scrape search "LLM agent architecture" --no-follow
vault-scraper scrape feed https://hnrss.org/frontpage --max-items 20
vault-scraper scrape social reddit --sub python --sub MachineLearning --limit 25 --include-comments
vault-scraper scrape social reddit --url https://www.reddit.com/r/python/comments/abc123/...
vault-scraper scrape social hn --query "rust async runtime"
vault-scraper scrape social hn --story 8863 --include-comments

# Global flags (any subcommand):
#   --inbox PATH       Override SCRAPER_INBOX_PATH
#   --dry-run          Extract but do not write
#   --verbose / -v     DEBUG logging
```

## How it works

1. Fetch HTML with `httpx` + realistic browser headers.
2. On failure (timeout, non-2xx, transport error), fall back to `playwright`
   headless Chromium with `wait_until="networkidle"`.
3. Extract text: `trafilatura` (favor_recall=True), fall back to BeautifulSoup
   `.get_text(separator="\n", strip=True)` if trafilatura returns < 200 chars.
4. Build a YAML frontmatter block per the backend contract:
   ```yaml
   ---
   scraper_source_url: "..."
   scraper_domain: "..."
   scraper_timestamp: "2025-01-15T14:32:00Z"
   scraper_mode: "urls"
   scraper_query: "..."        # only when relevant
   scraper_chunk: "2/3"        # only when chunked
   ---
   ```
5. Size-check the resulting file. If > 490 KB, split into chunks at paragraph
   boundaries (`\n\n`); never mid-sentence. Each chunk gets its own file
   `{domain}_{slug}_{timestamp}_part{N}.md`.
6. SHA-256 dedup against a session-level seen-set (skips duplicate drops).
7. Atomic write: tempfile in the same directory -> `os.replace` -> final path.

## Inbox contract (summary)

| Constraint | Value |
|---|---|
| Allowed extensions | `.md` |
| Hard file size cap | 500,000 bytes |
| Stable-file trigger | 1.5 s after last write |
| Frontmatter keys | `scraper_source_url`, `scraper_domain`, `scraper_timestamp`, `scraper_mode`, optional `scraper_query`, optional `scraper_chunk` |
| Dedup | Backend uses content hash; we add session-level hash dedup on top |

The scraper **never writes anything else** to the inbox - title, tags,
concepts, and body structure are all left to the backend's LLM.

## End-to-end wiring

For a complete [[integration]] guide covering the inbox drop contract, how
this scraper feeds `[[agentic-knowledge-engine]]`, environment configuration,
troubleshooting, and every common workflow, see
[`../agentic-knowledge-engine/INTEGRATION.md`](../agentic-knowledge-engine/INTEGRATION.md).

## Tests

```bash
pytest --basetemp=.pytest-tmp
```

(`--basetemp` works around a locked default temp directory on this host.)

Tests cover:
- `chunker.py` - 600 KB body splits correctly; paragraph boundaries preserved;
  oversized paragraph falls back to sentence split; chunk metadata is 1-based
  contiguous.
- `extractor.py` - mock trafilatura returning `None`; verify bs4 fallback runs
  and returns non-empty text. Control characters stripped.
- `inbox.py` - atomic write leaves no `.tmp` artifact; dedup skips identical
  second drop; chunked drop creates part files with `scraper_chunk` keys;
  dry-run writes nothing to disk.

No network calls in tests. All external I/O is mocked.

## Honest non-goals (per spec)

- No proxy support. No auth flow (cookie / login). If a page requires auth it
  errors and is skipped.
- No scheduling daemon. Use Windows Task Scheduler or `cron` to drive it.
- No robots.txt respect. Aggressive / no throttle.
- No cross-session deduplication (session-only seen-set is sufficient).
- No GUI, TUI, or web server.

## Project layout

```
vault-scraper/
├── pyproject.toml
├── .env.example
├── README.md
├── vault_scraper/
│   ├── __init__.py
│   ├── cli.py
│   ├── config.py
│   ├── fetcher.py
│   ├── extractor.py
│   ├── chunker.py
│   ├── inbox.py
│   ├── logging_config.py
│   └── sources/
│       ├── __init__.py
│       ├── urls.py
│       ├── spider.py
│       ├── search.py
│       ├── feed.py
│       └── social.py
└── tests/
    ├── test_chunker.py
    ├── test_extractor.py
    └── test_inbox.py
```

## See also

- [[10.25 GITHUB-CORPUS]] — sector index
- [[claude-legal-skill]]
- [[crawlee-python]]
- [[docketscraperapi]]
- [[dotagents]]
