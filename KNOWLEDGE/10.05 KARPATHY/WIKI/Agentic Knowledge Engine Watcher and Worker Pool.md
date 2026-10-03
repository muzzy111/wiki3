---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Agentic Knowledge Engine Watcher and Worker Pool

`app/watcher.py` is the runtime backbone. It binds the file system to
the [[Agentic Knowledge Engine Synthesizer (OpenRouter Extraction)]]
through three pieces: a debouncing watchdog handler, a bounded thread
pool, and a SQLite [[[[ledger]]]] for idempotency.

## The three pieces

### 1. StableFileHandler (debounce loop)

watchdog fires `on_created` / `on_modified` / `on_moved` events. Each
[[[[event]]]] enqueues the path into a `_pending` dict with an `enqueue_at =
now + FILE_STABLE_SECONDS`. A background `_flush_loop` thread wakes
every 500ms, checks each pending path's `mtime` and `size`:

- If either changed since last check, push `enqueue_at` forward by
  another `FILE_STABLE_SECONDS` (defaults 1.5s).
- If unchanged AND `enqueue_at <= now`, the path is "stable" — pop it
  and call `on_stable(path)`.

This kills the partial-write problem (a half-flushed file triggers
`on_modified`, then more `on_modified` as the rest arrives, and only
when the stream goes quiet for 1.5s does it actually process).

Backlog cap: 1024 pending paths. Overflow logs `Pending backlog full`
and drops the new entry. Configurable via `MAX_PENDING` if needed.

### 2. ThreadPoolExecutor (worker pool)

```
max_workers = WORKER_CONCURRENCY (default 2)
```

Each stable path is submitted as a future. The Engine tracks them in
`_in_flight` so `RUN_ONCE` mode can wait for them to drain before exit.
`worker_concurrency=2` means two LLM calls happen in parallel — more
than enough for typical inbox traffic on a local host.

### 3. State (SQLite [[[[ledger]]]])

`state.db` lives at `/data/state.db` with two tables:

```sql
CREATE TABLE processed (
    path TEXT PRIMARY KEY,           -- resolved absolute path
    processed_at TEXT NOT NULL,      -- UTC ISO
    note_path TEXT                   -- where the synthesized note landed
);
CREATE TABLE failures (
    path TEXT PRIMARY KEY,
    attempts INTEGER NOT NULL DEFAULT 0,
    last_error TEXT,
    last_attempt_at TEXT
);
```

WAL journal mode is enabled (`PRAGMA journal_mode=WAL`) so reads
(Engine sweep) don't block writes (worker threads). `check_same_thread=False`
because the worker pool and the watcher thread both touch it; a `threading.Lock`
serializes access.

The dedup check `state.is_processed(path_str)` is the first thing
`_enqueue` does — if the inbox file was already processed in a previous
run, the future never starts. Crash-restart-safe.

## Engine class lifecycle

```
Engine(settings, on_processed, on_failed)
  .start()       -> sweep inbox, build vault index, spawn observer + flusher
  .run_blocking() -> installs SIGTERM/SIGINT handlers, blocks until stop
  .stop()        -> joins observer, shuts down executor, closes DB + httpx
```

In `_process`:
1. Call `synthesizer.synthesize_file(path)`.
2. On success: `safe_move(path, archive_dir)` + `state.mark_processed(...)`
   + `state.refresh_vault_index()` so subsequent notes see the new title.
3. On `SynthesizerError`: `_quarantine(path, exc)` + `state.record_failure(...)`.
4. On any other exception: log + quarantine (defensive).

## PollingObserver fallback

Docker bind mounts on macOS / Windows often don't propagate inotify
events reliably. The Engine tries `Observer()` first; on any
construction failure it falls back to `PollingObserver()`. The fallback
is slightly more CPU-hungry but works everywhere.

## Why no async

Everything in the engine is threaded, not async. Three reasons:
- httpx's sync client fits the existing `def`-based architecture
  cleanly.
- The bottleneck is OpenRouter latency (seconds), not local IO. A
  2-thread pool saturates the upstream perfectly well.
- asyncio would force `aiofiles` for atomic writes, `aiosqlite`
  for state, and complicate the SIGTERM handler. Threading is the
  pragmatic choice at this scale.

If single-host scale ever changes (say, a torrent of inbox drops
requiring 50+ concurrent LLM calls), the synthesizer is the only
file that needs an async rewrite — and the change is local.

## Honest limitation

The engine does NOT delete `/data/quarantine/` entries. After many
runs it will accumulate. A maintenance task (not implemented in v1.0)
should sweep quarantine after, e.g., 7 days or 50 attempts.

## See also

- [[Agentic Knowledge Synthesis Engine Architecture]]
- [[Agentic Knowledge Engine Configuration (Pydantic Settings)]]
- [[Local Docker Stack Runbook]] (sibling pattern for managing single-host Docker services)
- [[RAW/2026-06-28 hermes session journal]]