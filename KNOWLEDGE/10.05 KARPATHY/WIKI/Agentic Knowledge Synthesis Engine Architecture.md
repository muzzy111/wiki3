---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# [[Agentic Knowledge Synthesis Engine]] Architecture

The engine is a single-host, single-container Python service that turns raw
unstructured text into structured Obsidian atomic notes. The whole pipeline
fits in five cooperating modules under `app/` plus a thin `main.py`.

## The pipeline (data flow)

```
inbox/          watchdog         Synthesizer          vault index
  *.md  --->  StableFileHandler  --->  OpenRouter  --->  notes/*.md
   |              (debounce)            (JSON)              |
   |                                                       +-- [[wikilinks]]
   |                                                       +-- YAML frontmatter
   v
archive/    (success)        quarantine/    (failure, after N attempts)
```

## Module boundaries

| File | Owns | Does NOT do |
|---|---|---|
| `app/config.py` | Env-var loading, type-validated settings, directory bootstrap, key-prefix validation | Anything else |
| `app/vault.py` | Filename sanitization, YAML frontmatter, atomic note writes, safe file moves | Filename selection from LLM output, wiki-link logic |
| `app/linking.py` | In-memory vault index, concept-to-note matching (greedy longest-first), wiki-link injection into `## Related` section | Note generation, LLM calls |
| `app/synthesizer.py` | Strict JSON system prompt to OpenRouter, retries, fence-tolerant parsing, schema assembly, note write | File watching, threading |
| `app/watcher.py` | watchdog Observer + PollingObserver fallback, debounce loop, ThreadPoolExecutor, SQLite state (WAL), Engine orchestration | LLM schema design |

The boundaries are deliberate: each module is testable in isolation
(see [[Ad-hoc Verification Script Pattern for Hermes Projects]]), and the
Engine class is the only place where watcher + worker pool + state +
synthesizer are wired together.

## Cross-cutting properties

- **Single mount point** — everything lives under `/data` inside the
  container, mapped from `./data` on the host. `inbox/`, `notes/`,
  `archive/`, `quarantine/`, `logs/`, `state.db` — six things, one mount.
- **Idempotent on restart** — SQLite [[[[ledger]]]] of processed inbox paths;
  the watcher sweeps existing inbox at boot but the state table prevents
  re-processing. See [[Agentic Knowledge Engine Watcher and Worker Pool]].
- **Failure isolation** — every exception path lands the offending file
  in `/data/quarantine/` with the error recorded; the engine never dies.
- **No external services** beyond OpenRouter. No Redis, no Postgres, no
  message queue. SQLite WAL is enough for single-instance dedup.

## Honest architectural gaps

These are conscious limitations of v1.0, not bugs:

- The engine has no HTTP surface. The `HEALTHCHECK` in the Dockerfile
  points at `/healthz` which doesn't exist — Docker will mark the
  container unhealthy after 20s until either (a) the line is removed or
  (b) a small `aiohttp` / `http.server` health endpoint is added in
  v1.1. The engine runs either way; only Docker's reported state
  changes.
- Scaling is single-host. The SQLite [[[[ledger]]]] is file-locked. A second
  instance on the same mount would race. Not a v1 problem; flagged for
  future scale.
- No backpressure signal between the watcher and the LLM. If
  `WORKER_CONCURRENCY=2` can't keep up with a torrent of inbox drops,
  pending files accumulate in the debounce buffer (capped at 1024)
  with overflow logged.

## See also

- [[Agentic Knowledge Engine Configuration (Pydantic Settings)]]
- [[Agentic Knowledge Engine Synthesizer (OpenRouter Extraction)]]
- [[Agentic Knowledge Engine Watcher and Worker Pool]]
- [[Agentic Knowledge Engine Deployment (Docker + Compose)]]
- [[Obsidian Wiki-Link Auto-Injection Strategy]]
- [[Karpathy 3-Folder Wiki Capture Workflow]] (sibling wiki-discipline this engine plugs into)
- [[RAW/2026-06-28 hermes session journal]]