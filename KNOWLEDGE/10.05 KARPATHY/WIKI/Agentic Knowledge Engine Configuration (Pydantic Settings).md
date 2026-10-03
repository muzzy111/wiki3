---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Agentic Knowledge Engine Configuration (Pydantic Settings)

`app/config.py` is the single source of truth for every tunable in the
engine. It uses `pydantic-settings` (`BaseSettings`) with `env_file=".env"`,
case-insensitive keys, and `extra="ignore"` for forward-compat with extra
keys in `.env` files that this version doesn't read.

## Three layers of validation

1. **Type validation** — Pydantic rejects malformed env values at startup
   (e.g. `TEMPERATURE=purple` blows up with a clear `ValidationError`).
2. **Field validators** — `openrouter_api_key` must start with `sk-or-`
   (`Field(..., min_length=20)` + a `_looks_like_openrouter_key`
   validator); `temperature` must be in `[0.0, 2.0]`. Both raise with
   helpful messages instead of silently accepting nonsense.
3. **Bootstrap side effects** — `Settings().ensure_directories()` creates
   `inbox/`, `notes/`, `archive/`, `quarantine/`, `logs/`, plus the root
   `data/` if missing. Idempotent; safe to call at every startup.

## Path resolution under `/data`

All filesystem paths default to `/data/...` and resolve relative to that
mount. The compose file re-affirms these via `environment:` so a user can
override `DATA_DIR` to a different mount and have every sub-path follow.

```
DATA_DIR        = /data
INBOX_DIR       = /data/inbox
NOTES_DIR       = /data/notes
ARCHIVE_DIR     = /data/archive
QUARANTINE_DIR  = /data/quarantine
LOG_DIR         = /data/logs
DB_PATH         = /data/state.db
```

## Singleton accessor

```python
@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
```

`get_settings()` is the canonical accessor; everything in the engine
imports it. Tests can poke the env first, then call `get_settings()`
(after `get_settings.cache_clear()` if they need a fresh load mid-test).

## Tunables worth knowing

| Variable | Default | Why you'd touch it |
|---|---|---|
| `OPENROUTER_MODEL` | `nousresearch/hermes-3-llama-3.1-70b-instruct` | Swap to any OpenRouter model id. Hermes 3 is a strong default for JSON-mode instruction following. |
| `WORKER_CONCURRENCY` | `2` | Parallel LLM calls. Raise if you have a fat OpenRouter budget and a torrent of inbox drops. |
| `FILE_STABLE_SECONDS` | `1.5` | Debounce window before processing a file. Raise if your inbox writes are slow (large files over slow links). |
| `MAX_FILE_SIZE_BYTES` | `512000` | Hard cap. Above this the file is skipped + logged. |
| `INJECT_VAULT_LINKS` | `true` | Toggle the wiki-link injection pass. See [[Obsidian Wiki-Link Auto-Injection Strategy]]. |
| `RUN_ONCE` | `false` | Process existing inbox and exit. Useful for cron-driven one-shot runs. |

## What this file deliberately does NOT do

- No secrets management. The OpenRouter key sits in plain text in `.env`.
  For local-dev this is fine; in any shared deployment, swap to a
  secrets file or env-var-from-secret-manager.
- No config-file-format beyond `.env`. TOML/YAML are easy to add later
  via `pydantic-settings` but not needed for v1.0.
- No runtime mutation. `get_settings()` is cached; changing env vars
  at runtime requires a restart. That's a feature, not a bug — silent
  live reconfiguration is how you get split-brain behavior in long-
  running services.

## See also

- [[Agentic Knowledge Synthesis Engine Architecture]]
- [[Agentic Knowledge Engine Watcher and Worker Pool]] (consumes settings)
- [[Ad-hoc Verification Script Pattern for Hermes Projects]]
- [[RAW/2026-06-28 hermes session journal]]