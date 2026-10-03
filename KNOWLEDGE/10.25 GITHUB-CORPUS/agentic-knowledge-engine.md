---
title: "agentic-knowledge-engine"
type: wiki-note
domain: corpus/github
source: "C:\Users\Admin\Documents\GitHub\agentic-knowledge-engine\README.md"
tags:
  - corpus/github
  - corpus/repo-readme
  - status/active
created: 2026-07-05
modified: 2026-07-05
status: active
stub: false
---

# agentic-knowledge-engine

**Source:** `C:\Users\Admin\Documents\GitHub\agentic-knowledge-engine\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md`

**Size:** 6,739 bytes (original)

---

# [[Agentic Knowledge Synthesis Engine]]

A lightweight, containerized Python service that watches an inbox folder, sends
raw unstructured text to OpenRouter (Nous Hermes 3 by default), and writes
highly-structured atomic notes into your Obsidian vault - with auto-injected
`[[wikilinks]]` between them.

```
+-------------+      +----------------+      +----------------+      +------------------+
|  /inbox/    | ---> |  File Watcher  | ---> |  Synthesizer   | ---> |  Linking Engine  |
|  *.md,*.txt |      |  (watchdog)    |      |  (OpenRouter)  |      |  (vault index)   |
+-------------+      +----------------+      +----------------+      +------------------+
                          |                        |                        |
                          v                        v                        v
                  +--------------+         +------------+         +--------------+
                  |  SQLite      |         |  JSON      |         |  /notes/*.md |
                  |  state.db    |         |  schema    |         |  + frontmatter|
                  +--------------+         +------------+         +--------------+
                          |                                                |
                          v                                                v
                  +--------------+                                 +--------------+
                  | /archive/    |                                 | /quarantine/ |
                  | (successes)  |                                 | (failures)   |
                  +--------------+                                 +--------------+
```

## Quick start (Docker)

```bash
cd C:\Users\Admin\Downloads\agentic-knowledge-engine
cp .env.example .env
docker compose up -d --build
```

Drop a raw note into `./data/inbox/` (any `.md`, `.txt`, `.rst`, or `.org`
file). A few seconds later it disappears into `./data/archive/` and the
synthesized atomic note appears in `./data/notes/`.

Watch it live:

```bash
docker compose logs -f knowledge-engine
```

## Quick start (local Python)

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env so DATA_DIR (and INBOX_DIR etc.) point somewhere real
python main.py
```

## Configuration

All settings come from environment variables (or a `.env` file). See
[`.env.example`](.env.example) for the full list.

| Variable                       | Default                                   | Purpose                                |
|--------------------------------|-------------------------------------------|----------------------------------------|
| `OPENROUTER_API_KEY`           | _required_                                | Your OpenRouter key                    |
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
  - [[authentication]]
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
Brief recap of why we're adopting JSON Web Token for service-to-service auth
and what tradeoffs we accept.

## Key Points
- Stateless verification removes session store pressure
- Rotation cadence is 24h with a 7-day refresh window
- ...

## References
- RFC 7519

## Action Items

- [ ] [[Update]] gateway middleware to enforce JWT exp claim
- [ ] Document rotation playbook

## See also

- [[10.25 GITHUB-CORPUS]] — sector index
- [[agentic-system-prompts]]
- [[agentloop]]
- [[agents]]
- [[anthropic-cybersecurity-skills]]
