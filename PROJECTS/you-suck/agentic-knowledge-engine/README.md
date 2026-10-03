---
aliases: []
tags:
  - file
  - obsidian
  - inbox
  - notes
---

# [[Agentic Knowledge Synthesis Engine]]

A lightweight, containerized Python service that watches an inbox folder, sends
raw unstructured text to OpenRouter (Nous Hermes 3 by default), and writes
highly-structured atomic notes into your Obsidian vault — with auto-injected
`[[wikilinks]]` between them.

```
┌────────────┐    ┌──────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│  /inbox/   │ ─► │  File Watcher    │ ─► │  Synthesizer    │ ─► │  Linking Engine  │
│  *.md,*.txt│    │  (watchdog)      │    │  (OpenRouter)   │    │  (vault index)   │
└────────────┘    └──────────────────┘    └─────────────────┘    └─────────────────┘
                          │                       │                       │
                          ▼                       ▼                       ▼
                  ┌──────────────┐         ┌────────────┐         ┌──────────────┐
                  │  SQLite      │         │  JSON      │         │  /notes/*.md │
                  │  state.db    │         │  schema    │         │  + frontmatter│
                  └──────────────┘         └────────────┘         └──────────────┘
                          │                                               │
                          ▼                                               ▼
                  ┌──────────────┐                                 ┌──────────────┐
                  │ /archive/    │                                 │ /quarantine/ │
                  │ (successes)  │                                 │ (failures)   │
                  └──────────────┘                                 └──────────────┘
```

## Quick start (Docker)

```bash
cd agentic-knowledge-engine
cp .env.example .env          # then put your real OpenRouter key inside
docker compose up -d --build
```

Drop a raw note into `./data/inbox/` (any `.md`, `.txt`, `.rst`, or `.org` file).
A few seconds later it disappears into `./data/archive/` and the synthesized
atomic note appears in `./data/notes/`.

Watch it live:

```bash
docker compose logs -f knowledge-engine
```

## Quick start (local Python)

```bash
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env so DATA_DIR (and INBOX_DIR etc.) point somewhere real
python main.py
```

## Configuration

All settings come from environment variables (or a `.env` file). See
[`.env.example`](.env.example) for the full list. Highlights:

| Variable                       | Default                                   | Purpose                                |
|--------------------------------|-------------------------------------------|----------------------------------------|
| `OPENROUTER_API_KEY`           | _(required)_                              | Your OpenRouter key                    |
| `OPENROUTER_MODEL`             | `nousresearch/hermes-3-llama-3.1-70b-instruct` | Any OpenRouter model id            |
| `DATA_DIR`                     | `/data`                                   | Root for inbox / notes / archive        |
| `WORKER_CONCURRENCY`           | `2`                                       | Parallel LLM calls                     |
| `FILE_STABLE_SECONDS`          | `1.5`                                     | Debounce window before processing      |
| `INJECT_VAULT_LINKS`           | `true`                                    | Auto-link concepts to existing notes   |
| `RUN_ONCE`                     | `false`                                   | If true, process inbox once and exit    |

## The note it produces

```markdown
---
title: JSON Web Tokens in Microservices
tags:
  - jwt
  - authentication
  - microservices
concepts:
  - JSON Web Token
  - HMAC
  - Microservices
source_file: 2025-06-28-meeting.md
generated_at: 2025-06-28T18:42:11Z
generator: agentic-knowledge-engine
model: nousresearch/hermes-3-llama-3.1-70b-instruct
---

## Summary
Brief recap of why we're adopting [[JSON Web Token]] for service-to-service auth
and what tradeoffs we accept.

## Key Points
- Stateless verification removes session store pressure
- Rotation cadence is 24h with a 7-day refresh window
- ...

## References
- RFC 7519

## Action Items

- [ ] Update gateway middleware to enforce JWT exp claim
- [ ] Document rotation playbook

## Related

- [[Authentication]]
- [[Microservices]]
```

## Robustness

- **Retries** with exponential backoff on 429/5xx from OpenRouter.
- **Stable-file debounce** — partial writes don't get processed.
- **Idempotent** — a SQLite [[[[ledger]]]] tracks every processed inbox path; restart
  and nothing is reprocessed.
- **Quarantine** — any file that fails synthesis gets moved to `/quarantine/`
  with the error logged to `state.db`.
- **Atomic writes** — notes are written via `tempfile + fsync + os.replace`,
  so Obsidian never sees a half-written file.
- **Graceful shutdown** — `SIGTERM` / `SIGINT` flush in-flight work.
- **PollingObserver fallback** — works on Docker bind mounts on macOS/Windows
  where native inotify events don't propagate.

## Feeding the engine

Drop raw `.md`/`.txt` files into `./data/inbox/` (either manually or via
a feeder tool). For an end-to-end reference covering the inbox drop
contract, how to wire [`vault-scraper`](../vault-scraper/) to this
engine, and how to point the scraper at various target types, see
[`INTEGRATION.md`](INTEGRATION.md).

## File layout

```
agentic-knowledge-engine/
├── app/
│   ├── __init__.py
│   ├── config.py        # Pydantic settings
│   ├── linking.py       # Vault index + wiki-link injection
│   ├── synthesizer.py   # OpenRouter extraction agent
│   ├── vault.py         # Atomic writes + YAML frontmatter
│   └── watcher.py       # watchdog + worker pool + SQLite state
├── main.py              # entry point
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── README.md
```

Inside the container (and on the host, under `./data/`):

```
/data/
├── inbox/        # drop raw files here
├── notes/        # synthesized atomic notes (this is your Obsidian vault)
├── archive/      # processed inbox files (kept for audit)
├── quarantine/   # files that failed synthesis
├── logs/         # engine.log
└── state.db      # SQLite dedup + failure ledger
```

Point Obsidian at `./data/notes/` and you're done.

## Pointing Obsidian at the vault

In Obsidian: **Settings → Files & Links → "Override vault files location"**, then
pick `[[agentic-knowledge-engine]]/data/notes`. New notes generated by the engine
will appear live in the file list and trigger Obsidian's link graph updates.