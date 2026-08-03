---
title: "Daemon Registry Refactor"
type: system-record
status: resolved
created: 2026-07-03
---

# Daemon Registry Refactor

> Decision record: replace hard-coded agent names in `hermes_bus` source with a role-keyed Registry loaded from `SYSTEM/agents.yaml`.

## Decision

Adopt the new `hermes_bus.config.Registry` as the source of truth for role/folder mapping. The daemon CLI surface (`python -m hermes_bus.daemon --vault <path> --once`) is preserved unchanged.

## What Changed

| Module | Change |
|---|---|
| `hermes_bus/config.py` | NEW: Registry, Role, load_registry(), pydantic-style validation |
| `hermes_bus/router.py` | Replace hard-coded agent name with role key; reject legacy names with ValueError |
| `hermes_bus/agent_runner.py` | Add `run_role(role_key, prompt, workdir)`; keep legacy facades (deprecated) |
| `hermes_bus/inter_agent.py` | Add `InterAgentHandler` (role-keyed inbox/outbox); preserve legacy `handle_*` functions |
| `hermes_bus/inbox_watcher.py` | Build inbox list from registry roles |
| `hermes_bus/orchestrator.py` | Accept a registry at construction; resolve paths via registry |
| `hermes_bus/review_runner.py` | NEW: Memory Curator's runner; alias `MavisRunner` in `mavis_runner.py` for back-compat |

## Tests

- All 48 prior tests pass.
- 14 new tests: 10 config tests + 2 router tests + 2 5-slot smoke tests.
- **Total: 62 of 62 tests pass** (verified via `pytest tests/`).

## Risks and Mitigations

- **Risk:** legacy test code that imports `AgentRunner.run_opencode` / `run_agy` still works (kept as deprecated facades; the role-keyed path is the recommended default).
- **Risk:** `inter_agent.py` retained legacy `AGENT_DIRS` and `handle_*` functions alongside the new role-keyed class, so existing callers continue to work during the migration window.

## Related

- `SYSTEM/agents.yaml`
- `SYSTEM/STYTEM RECORD/2026-07-03 — 5-Role Migration.md`
- `2.0CODER/SOLO-PROJECTS/loop-chat-system/tests/test_config.py`
