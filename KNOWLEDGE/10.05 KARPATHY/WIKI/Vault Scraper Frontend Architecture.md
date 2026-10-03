---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault Scraper Frontend Architecture

`[[vault-scraper]]` is the frontend half of a two-stage pipeline: it scrapes
content from external sources, pre-processes it, and drops clean markdown
files into the inbox of [[Agentic Knowledge Synthesis Engine Architecture]] —
the backend service that watches the inbox, calls OpenRouter, and writes
atomic Obsidian notes. The two projects never share code; they communicate
purely through the filesystem contract.

## Pipeline

```
URLs / SERPs / Feeds / Reddit / HN
        |
        v
   Fetcher   (httpx -> Playwright fallback)
        |
        v
   Extractor (trafilatura -> bs4 fallback)
        |
        v
   Chunker   (paragraph-aware, 490 KB hard cap)
        |
        v
   InboxWriter  (frontmatter + atomic write + sha256 dedup)
        |
        v
   <inbox>/{domain}_{slug}_{timestamp}[_partN].md
        |
        v
   agentic-knowledge-engine picks it up (1.5 s stable-file debounce)
```

## Module boundaries

| File | Owns | Does NOT do |
|---|---|---|
| `vault_scraper/config.py` | Env-var loading, type-validated settings, default inbox path | Anything else |
| `vault_scraper/fetcher.py` | httpx + Playwright auto-detect, single browser reused across pages | HTML extraction, URL list management |
| `vault_scraper/extractor.py` | trafilatura + bs4 fallback chain, control-char stripping | Filename, frontmatter, network |
| `vault_scraper/chunker.py` | Paragraph/sentence/byte-bounded splitter | Frontmatter, atomic write |
| `vault_scraper/inbox.py` | Frontmatter builder, atomic_write, sha256 dedup, filename gen | Network, HTML extraction |
| `vault_scraper/sources/*.py` | Per-source-type logic (URLs, spider, search, feed, social) | Cross-cutting concerns (those live in the modules above) |
| `vault_scraper/cli.py` | Typer app, subcommand registration, color-coded output | Source logic (delegates to sources/) |

The boundaries mirror the backend's discipline: each module is testable
in isolation (see [[Ad-hoc Verification Script Pattern for Hermes Projects]])
and the CLI is the only place where everything wires together.

## Cross-cutting properties

- **No Docker** — the scraper runs on the Windows host and writes
  directly to the host-side inbox path. The backend alone is containerized.
- **No scheduler** — run-and-exit only. Windows Task Scheduler or cron
  drive it externally.
- **No cross-session dedup** — only session-level SHA-256 dedup.
- **Strict inbox contract** — frontmatter keys are exactly the six
  required by the spec (scraper_source_url, scraper_domain,
  scraper_timestamp, scraper_mode, optional scraper_query,
  optional scraper_chunk). Nothing else is added; the backend LLM
  generates everything else. See
  [[Vault Scraper Inbox Drop Protocol]].

## Sibling project

The backend this scraper feeds lives at
`C:\Users\Admin\[[agentic-knowledge-engine]]\` and is documented in
[[Agentic Knowledge Synthesis Engine Architecture]]. The two
projects were built across two consecutive days (2026-06-28 and
2026-06-29) as a complete pipeline. The next obvious extension is
a SCHEMA note on "agentic inbox pipelines" if a third such pipeline
appears.

## See also

- [[Vault Scraper Inbox Drop Protocol]]
- [[Vault Scraper Fetcher and Auto-Detect (httpx + Playwright)]]
- [[Vault Scraper HTML Extraction Pipeline (trafilatura + bs4)]]
- [[Vault Scraper Chunking Strategy]]
- [[Vault Scraper Source Subcommands]]
- [[Vault Scraper CLI Surface]]
- [[Agentic Knowledge Synthesis Engine Architecture]]
- [[Agentic Knowledge Engine Watcher and Worker Pool]]
- [[RAW/2026-06-29 hermes session journal]]