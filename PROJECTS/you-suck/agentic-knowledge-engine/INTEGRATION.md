---
aliases: []
tags:
  - backend
  - scraper
  - frontend
  - inbox
---

# Wiring [[vault-scraper]] to [[agentic-knowledge-engine]]

End-to-end reference for connecting the two projects in
`C:\Users\Admin\`. The backend (`[[agentic-knowledge-engine]]`) watches
an inbox folder for dropped markdown files and synthesizes them into
Obsidian atomic notes via OpenRouter. The frontend (`[[vault-scraper]]`)
fetches content from external sources and drops pre-formatted
markdown into that same inbox. This document describes the contract
between them and walks through every common [[setup]].

```
+--------------+        drop .md         +-------------------------+        LLM        +-------------+
| vault-scraper| ----------------------->| agentic-knowledge-engine| ------------------>| Obsidian    |
| (host-side)  |   /data/inbox/*.md      | (Docker container)      |   OpenRouter API  | vault       |
+--------------+                         +-------------------------+                   +-------------+
```

## TL;DR

1. Backend writes `/data/inbox/` inside its container, mapped from a
   host path by `docker-compose.yml`.
2. Frontend runs on the host and writes to that same host path.
3. Both agree on a strict markdown frontmatter schema (6 keys, no more).
4. Frontend chunks at 490 KB to leave headroom under the backend's
   500 KB hard cap.
5. Frontend uses `tempfile + os.replace` for atomic writes; the backend
   debounces 1.5 s after the last write before processing.

If those five things are true, the system works. Everything below is
detail on each.

## The contract, end to end

### 1. Backend inbox path

`docker-compose.yml` for `[[agentic-knowledge-engine]]` mounts a single
host directory to `/data` inside the container:

```yaml
volumes:
  - ./data:/data
```

The actual inbox is `/data/inbox` inside the container, which is
`./data/inbox` on the host (relative to wherever `docker compose` is
invoked from). For the canonical install at
`C:\Users\Admin\[[agentic-knowledge-engine]]\`, the host inbox is:

```
C:\Users\Admin\agentic-knowledge-engine\data\inbox
```

`Settings.inbox_dir` defaults to `/data/inbox` (inside the container).
The `environment:` block in compose re-affirms this so changing
`DATA_DIR` propagates:

```yaml
environment:
  DATA_DIR: /data
  INBOX_DIR: /data/inbox
  NOTES_DIR: /data/notes
  ARCHIVE_DIR: /data/archive
  QUARANTINE_DIR: /data/quarantine
```

### 2. Frontend points at the same host path

`[[vault-scraper]]` runs on the host (NOT in a container — by spec design).
Configure it via `.env`:

```env
SCRAPER_INBOX_PATH=C:\Users\Admin\agentic-knowledge-engine\data\inbox
```

Or override per-command:

```bash
vault-scraper scrape urls https://example.com/article --inbox C:\Users\Admin\agentic-knowledge-engine\data\inbox
```

The CLI flag wins over the env var.

### 3. Frontmatter schema (strict)

Every `.md` the scraper writes must have exactly these YAML keys (and
nothing else, per the integration spec):

```yaml
---
scraper_source_url: "https://example.com/article"
scraper_domain: "example.com"
scraper_timestamp: "2026-06-29T14:32:00Z"
scraper_mode: "spider"                    # urls | spider | search | feed | social
scraper_query: "optional — SERP query or subreddit name"
scraper_chunk: "2/3"                       # only when chunked; "N/M"
---
```

`scraper_query` is present only when meaningful (SERP query, subreddit
name, HN query). `scraper_chunk` is present only when the body was
split into multiple files. The other four are always present.

The backend's LLM prompt generates title, tags, concepts, and body
structure. Adding extra frontmatter keys would break the backend's
content-hash dedup, so the scraper writes exactly these and nothing
else.

### 4. Body rules

- One blank line after the closing `---`, then raw extracted text.
- UTF-8 only.
- No synthetic headers, summaries, or metadata blocks injected by
  the scraper — except for Reddit and HN sources, where the source
  data has no extractable body (only structured fields). Reddit/HN
  bodies prepend a small metadata block (title, URL, score, author).
- No markdown code fences unless the source content is code.

### 5. Chunking and the 500 KB hard cap

The backend quarantines any file over **500,000 bytes**. The scraper
chunks at **490,000 bytes** to leave 10 KB headroom for frontmatter.

When chunked, each chunk becomes its own file with `scraper_chunk:
"N/M"` in the frontmatter (1-based). Single-file drops have no
`scraper_chunk` key.

Filename pattern:

```
{domain}_{slug}_{timestamp}_part{N}.md   # when chunked
{domain}_{slug}_{timestamp}.md           # when single
```

Where:
- `domain` = hostname minus `www.`, with `:` replaced by `-`.
- `slug` = last non-empty path segment, sanitized for Windows.
- `timestamp` = `YYYYMMDDTHHMMSSZ` UTC.

### 6. Atomic write

The scraper writes via `tempfile + os.replace`. The backend's
`StableFileHandler` waits 1.5 s after the last filesystem [[[[event]]]] before
processing, which guarantees it sees a complete file (or none at all
if the temp write was aborted).

### 7. Dedup

Two layers:
- **Frontend (scraper)**: session-level SHA-256 dedup. If the same
  content hash is seen twice in one scrape run, the second write is
  skipped. Catches the common case where the same URL appears in
  multiple SERP results or feed items.
- **Backend (engine)**: SQLite-backed content-hash dedup. Files
  already processed are silently skipped, even across restarts.

The two layers reinforce each other; neither is sufficient alone.

## End-to-end [[setup]]

### Step 1: Backend running

```bash
cd C:\Users\Admin\agentic-knowledge-engine
cp .env.example .env
# Edit .env: set OPENROUTER_API_KEY=sk-or-v1-...
docker compose up -d --build
docker compose logs -f knowledge-engine
```

You should see:

```
Engine running. inbox=C:\Users\Admin\agentic-knowledge-engine\data\inbox notes=...
```

Verify the inbox directory exists on the host:

```bash
ls "C:\Users\Admin\agentic-knowledge-engine\data\inbox"
# (empty — nothing dropped yet)
```

### Step 2: Frontend installed

```bash
cd C:\Users\Admin\vault-scraper
python -m venv .venv
.venv\Scripts\activate
pip install -e ".[dev]"
playwright install chromium     # one-time, ~150 MB
cp .env.example .env
# Edit .env: set SCRAPER_INBOX_PATH=C:\Users\Admin\agentic-knowledge-engine\data\inbox
```

Verify the frontend sees the same inbox:

```bash
vault-scraper --inbox C:\Users\Admin\agentic-knowledge-engine\data\inbox scrape urls --dry-run https://example.com
```

A dry-run prints `[DROPPED]` lines but writes nothing. Useful for
verifying the inbox path resolves correctly.

### Step 3: First real drop

```bash
vault-scraper scrape urls https://en.wikipedia.org/wiki/Knowledge_graph
```

Within a few seconds (debounce + LLM round-trip + write), the URL
disappears from `./data/inbox/` (moved to `./data/archive/`) and a new
note appears in `./data/notes/` with frontmatter + sections + auto-
injected wiki-links to any existing notes with matching concepts.

Tail the backend logs to watch it happen:

```bash
docker compose -C C:\Users\Admin\agentic-knowledge-engine logs -f knowledge-engine
```

You should see:

```
Processing /data/inbox/en.wikipedia.org_knowledge-graph_20260629T143200Z.md
[OK] en.wikipedia.org_knowledge-graph_...md -> /data/notes/Knowledge Graph.md
```

### Step 4: Point Obsidian at the vault

In Obsidian: **Settings -> Files & Links -> Override vault files
location**, point at `C:\Users\Admin\[[agentic-knowledge-engine]]\data\notes`.
New notes will appear live in the file list and trigger Obsidian's
link graph updates.

## Pointing the scraper at targets

The five subcommand modes each address a different kind of target.

### URLs (one-shot)

```bash
# Single URL
vault-scraper scrape urls https://blog.example.com/article

# Multiple URLs
vault-scraper scrape urls https://a.example.com/x https://a.example.com/y https://b.example.com/z

# From a file (newline-separated)
vault-scraper scrape urls --file urls.txt
```

Useful for: one-off research, copying a small list from a notebook,
re-running drops the backend deduped away.

### Spider (crawl a domain)

```bash
# Crawl a blog, depth 2, restricted to /posts/ paths
vault-scraper scrape spider https://blog.example.com \
    --depth 2 \
    --include "/posts/" \
    --concurrency 4

# Whole domain, depth 1
vault-scraper scrape spider https://docs.example.com --depth 1

# Cross-domain allowed
vault-scraper scrape spider https://news.ycombinator.com --depth 1 --no-same-domain
```

`--depth` is required — the scraper refuses to guess. `--same-domain`
is on by default; registered-domain is computed as the last two
hostname labels (`blog.example.com` and `www.example.com` both match
`example.com`).

Useful for: archiving a blog, indexing a docs site, harvesting a
forum.

### Search (SearXNG -> follow)

Requires a SearXNG instance. The simplest local one is the docker
container — see the project's `[[10.10 OSINT]]/` notes if you run one.

```bash
# 10 results per query, scrape each page body
vault-scraper scrape search "python asyncio patterns" --results 10

# Multiple queries
vault-scraper scrape search "rust async runtime" "go goroutines"

# Don't follow links — just drop a stub note with the result URLs
vault-scraper scrape search "obsidian dataview" --no-follow

# Different engines
vault-scraper scrape search "k8s operators" --engines "google,duckduckgo"
```

If SearXNG returns HTML instead of JSON (misconfigured instance), the
scraper exits with code 2 — by spec, no fallback parsing.

Useful for: research sweeps, competitor monitoring, recurring topic
discovery.

### Feed (RSS / Atom)

```bash
# Hacker News front page
vault-scraper scrape feed https://hnrss.org/frontpage --max-items 20

# Specific blog
vault-scraper scrape feed https://blog.example.com/feed.xml

# Multiple feeds at once
vault-scraper scrape feed https://hnrss.org/frontpage https://lobste.rs/rss

# Summary only (don't fetch each article body)
vault-scraper scrape feed https://hnrss.org/frontpage --max-items 50 --no-follow
```

`feedparser` handles RSS 2.0, RSS 1.0, Atom, and JSON Feed
transparently. `--follow` (default on) fetches each entry's link and
extracts the full body. Without follow, the summary is used.

Useful for: recurring reads, news monitoring, podcast show notes.

### Social (Reddit + Hacker News)

```bash
# Reddit: hot posts from r/python, with comments
vault-scraper scrape social reddit --sub python --limit 25 --include-comments

# Reddit: specific posts by URL
vault-scraper scrape social reddit \
    --url https://www.reddit.com/r/python/comments/abc123/example/

# Reddit: top posts this week
vault-scraper scrape social reddit --sub MachineLearning --sort top --limit 10

# HN: search
vault-scraper scrape social hn --query "rust async runtime" --results 20

# HN: specific story with comments
vault-scraper scrape social hn --story 8863 --include-comments
```

Reddit requires OAuth2 credentials (read-only "script" app at
<https://www.reddit.com/prefs/apps>) in `.env`:

```env
SCRAPER_REDDIT_CLIENT_ID=...
SCRAPER_REDDIT_CLIENT_SECRET=...
SCRAPER_REDDIT_USER_AGENT=vault-scraper/0.1 by u/yourusername
```

HN needs nothing.

Useful for: trend monitoring, comment-thread archival, specific
story deep-dives.

## Common [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

### Daily research sweep

Cron-driven (via Windows Task Scheduler or `cron`):

```bash
# Morning: HN front page + 2 search queries, write to inbox
vault-scraper scrape feed https://hnrss.org/frontpage --max-items 30
vault-scraper scrape search "kubernetes operators 2026" --results 5
vault-scraper scrape search "agentic systems architecture" --results 5
```

Backend picks them up automatically. By the time you sit down, the
notes are in `notes/`.

### One-shot research on a topic

```bash
# Discover, then deep-crawl the interesting hits
vault-scraper scrape search "vector databases comparison" --results 20
# Wait a minute, scan ./data/notes/ for what's interesting...
vault-scraper scrape spider https://thedailyinteresting.com/db-comparison --depth 2
```

### Archive a blog

```bash
vault-scraper scrape spider https://blog.example.com --depth 3 \
    --include "/posts/" --include "/articles/" \
    --concurrency 4
```

### Sanity-check before a big drop

```bash
vault-scraper --dry-run scrape spider https://docs.example.com --depth 2
```

`--dry-run` extracts and chunks but doesn't write. The summary table
tells you how many files you'd be dropping.

## Common problems

### "Frontend writes, but nothing appears in notes/"

Check the backend logs:

```bash
docker compose -C C:\Users\Admin\agentic-knowledge-engine logs --tail 50 knowledge-engine
```

Look for:
- `PermissionError` on `/data` — the volume mount has wrong perms.
  Fix: `chown -R 1000:1000 data/` on the host (the container's
  `akee` user is uid 1000).
- `Skipping oversized file` — a file > 500 KB made it past the
  scraper's chunking. Could be a `.tmp` file left over from a crashed
  write. Check `data/inbox/` for `*.tmp` files and delete them.
- `SynthesizerError` — the LLM call failed 4 times in a row. Check
  `OPENROUTER_API_KEY` in `.env` and your OpenRouter account balance.

### "Frontend says [DROPPED] but backend says nothing happened"

The 1.5 s debounce means the backend hasn't picked the file up yet.
Wait a few seconds and re-check. If still nothing:

```bash
ls -la "C:\Users\Admin\agentic-knowledge-engine\data\inbox"
# Look for the file. If it's there:
docker compose -C C:\Users\Admin\agentic-knowledge-engine exec knowledge-engine ls -la /data/inbox
# If it's NOT in the container, the volume mount is broken.
```

### "All my drops say [SKIP-DUP]"

Session-level dedup. The same content hash has been seen already in
this scrape run. Causes:
- A spider that hit the same URL twice (rare with the dedup logic,
  but possible if a URL appears via two paths).
- The same URL appears in multiple SERP results or feed items.

This is by design and not a bug. To force a re-drop, clear the
scraper session (run a fresh command).

### "SearXNG returns HTML"

The scraper exits with code 2 and prints an error. The SearXNG
instance isn't configured with the JSON format enabled. Fix on the
SearXNG side (`settings.yml`):

```yaml
search:
  formats:
    - html
    - json
```

Then restart SearXNG.

### "Reddit says credentials missing"

`SCRAPER_REDDIT_CLIENT_ID` or `SCRAPER_REDDIT_CLIENT_SECRET` not set
in `.env`. Create a read-only "script" OAuth app at
<https://www.reddit.com/prefs/apps> and populate the three Reddit vars.

### "Playwright fails on launch"

Run `playwright install chromium` once after installing the scraper.
The `playwright install` step downloads ~150 MB of browser binaries
to `%LOCALAPPDATA%\ms-playwright\`. Without it, the auto-detect fetcher
falls back to httpx-only mode (logged as a warning on startup).

## Operational tips

- **`--concurrency`**: 8 is a reasonable default. Raise it for
  httpx-friendly targets; lower it for sites that rate-limit or that
  the scraper is hammering via spider.
- **`--timeout`**: 30 s default. Bump to 60+ for slow sites (some
  doc sites are glacially slow on first hit).
- **`--dry-run`**: always use this first on a new spider target.
  Tells you what would be dropped without writing.
- **Backend archive**: the engine moves processed files from
  `data/inbox/` to `data/archive/`. Don't delete `data/archive/` —
  it's your audit trail of what got dropped and when.
- **Backend quarantine**: the engine moves failed files from
  `data/inbox/` to `data/quarantine/`. Inspect these for content the
  LLM couldn't parse (binary garbage, encoding-broken text, etc.).
  No automatic cleanup; sweep periodically.

## Reference

- Backend code: `C:\Users\Admin\[[agentic-knowledge-engine]]\`
- Frontend code: `C:\Users\Admin\[[vault-scraper]]\`
- Backend inbox contract: see `[[agentic-knowledge-engine]]/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md`
  section on watcher / inbox drop
- Frontend inbox implementation: `vault_scraper/inbox.py`
- Karpathy wiki notes on the architecture (this wiki):
  - [[Vault Scraper Frontend Architecture]]
  - [[Vault Scraper Inbox Drop Protocol]]
  - [[Agentic Knowledge Synthesis Engine Architecture]]
  - [[Agentic Knowledge Engine Watcher and Worker Pool]]