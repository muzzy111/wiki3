---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault Scraper Inbox Drop Protocol

The contract between `[[vault-scraper]]` and the `[[agentic-knowledge-engine]]`
backend. Every markdown file the scraper writes to `/data/inbox/` must
follow this protocol exactly. Any deviation — extra frontmatter keys,
non-UTF-8 bytes, mid-sentence chunk splits, non-atomic writes — breaks
the backend's processing or synthesis.

## Frontmatter (required keys only)

```yaml
---
scraper_source_url: "https://example.com/article"
scraper_domain: "example.com"
scraper_timestamp: "2026-06-29T14:32:00Z"   # ISO 8601 UTC
scraper_mode: "spider"                        # urls | spider | search | feed | social
scraper_query: "optional — SERP query or subreddit name"
scraper_chunk: "2/3"                          # only when chunked; "N/M"
---
```

The backend's LLM prompt forbids it from inventing these keys, and the
dedup-by-content-hash policy means a stray extra key would silently
prevent re-processing. The scraper writes exactly these and nothing
else.

## Body rules

- Immediately after the closing `---`, one blank line, then the raw
  extracted text.
- UTF-8 only. Strip null bytes, surrogate characters, and non-printable
  control characters (except `\n`, `\t`).
- No markdown code fences unless the source content is code.
- No synthetic headers, summaries, or metadata blocks injected by the
  scraper — the LLM does that. Exception: Reddit and HN sources
  include a small metadata block (title, URL, score, author) because
  the source data has no useful body content to extract from.

## Chunking

Hard cap: **500,000 bytes** per file. Anything larger is quarantined by
the backend and wasted. The scraper chunks at **490,000 bytes** to leave
10 KB headroom for the frontmatter.

Chunking rules:
1. Split only at paragraph boundaries (`\n\n`).
2. Never split mid-sentence — if a paragraph is itself over 490 KB,
   fall back to sentence boundaries (`(?<=[.!?])\s+`).
3. Never split mid-word — if a sentence is over 490 KB, fall back to
   whitespace tokens.
4. Last resort only — byte-split a single token.

Filename patterns:
- Single chunk: `{domain}_{slug}_{timestamp}.md`
- Multiple chunks: `{domain}_{slug}_{timestamp}_part{N}.md` where N is 1-based.

Each chunk file gets its own complete frontmatter block, with
`scraper_chunk: "N/M"` added.

## Atomic write

```python
import tempfile, os, shutil

def atomic_write(path, content):
    fd, tmp_name = tempfile.mkstemp(prefix=f".{path.name}.", suffix=".tmp", dir=str(path.parent))
    try:
        with os.fdopen(fd, "w", encoding="utf-8", newline="\n") as f:
            f.write(content)
            f.flush()
            os.fsync(f.fileno())
        os.replace(tmp_name, path)
    except Exception:
        try: os.unlink(tmp_name)
        except OSError: pass
        raise
```

The backend's StableFileHandler waits 1.5 seconds after the last write
[[[[event]]]] before processing. The atomic write guarantees the backend never
sees a half-written file. On Windows, `os.replace` is atomic on the same
filesystem (the temp file lives in the same directory as the final path).

## Dedup

Before writing, compute `hashlib.sha256(content.encode()).hexdigest()`.
Maintain a session-level seen-set. If the hash matches a previous drop
this session, skip the write and increment `skipped_dup` in stats.

This catches the common case where the same URL appears in multiple
SERP results or feed items. It does NOT catch cross-session duplicates
(spec is explicit: session-only dedup is sufficient).

## Filename safety

- Strip characters disallowed in Windows filenames: `< > : " / \ | ? *` and
  control chars 0x00-0x1F.
- Strip leading/trailing `.-_ ` whitespace.
- Truncate to 80 chars per filename segment.
- Prefix reserved Windows names (`CON`, `PRN`, `AUX`, `NUL`, `COM1-9`,
  `LPT1-9`) with `_`.

## Implementation reference

`vault_scraper/inbox.py` is the single source of truth. Every public
function (`InboxWriter.drop`, `atomic_write`) is exercised by
`tests/test_inbox.py` (8 tests including atomic_write, dedup,
chunked-drop, dry-run).

## See also

- [[Vault Scraper Frontend Architecture]]
- [[Vault Scraper Chunking Strategy]]
- [[Agentic Knowledge Engine Watcher and Worker Pool]] (consumer of this protocol)
- [[Agentic Knowledge Synthesis Engine Architecture]]
- [[RAW/2026-06-29 hermes session journal]]