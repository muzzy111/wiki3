---
title: Loop Chat System
tags: [project, opencode, hermes, chat, daemon]
created: 2026-07-01
type: project-readme
status: active
---

# Loop Chat System

The operational implementation that turns the LOOP vault's documented
four-agent topology into something that actually runs.

## What This Project Does

1. **Hermes daemon** watches `CHAT/INBOX.md` for commands the user appends.
2. **Router** classifies each command and dispatches to OpenCode (code),
   AGY (research/ops), or Mavis (docs/review).
3. **Agent runner** spawns the appropriate CLI (`opencode run` or
   `agy --print`) and waits for completion.
4. **Mavis review** runs the deliverable through the configured review
   pipeline and returns a structured verdict.
5. **Hermes composes** the user reply and appends it to `CHAT/OUTBOX.md`.
6. **Index updates** mark the command done in both INBOX and the per-row
   index table.

## Folder Layout

```
loop-chat-system/
|-- pyproject.toml
|-- requirements.txt
|-- README.md
|-- PLAN.md
|-- CHANGELOG.md
|-- src/hermes_bus/
|   |-- __init__.py
|   |-- frontmatter.py    # YAML-ish frontmatter parser
|   |-- parser.py         # INBOX.md command parser
|   |-- router.py         # routing matrix
|   |-- agent_runner.py   # subprocess wrapper for opencode/agy
|   |-- mavis_runner.py   # Mavis review flow
|   |-- inbox_watcher.py  # watchdog / polling listener
|   |-- orchestrator.py   # session loop
|   `-- daemon.py         # long-running entry point
|-- tests/
|   |-- __init__.py
|   |-- test_frontmatter.py
|   |-- test_parser.py
|   |-- test_router.py
|   |-- test_mavis_runner.py
|   `-- test_orchestrator.py
`-- docs/
    `-- protocol.md   # quick spec mirror of the source-of-truth
                      # in 1.0HERMES/CHAT/Chat Protocol.md
```

## Install

```bash
python -m venv .venv
. .venv/Scripts/activate    # Windows
# or:    . .venv/bin/activate  (Linux/macOS)
pip install -e .
```

`watchdog` is required for filesystem events. Without it the daemon
falls back to a polling loop, which is slower but still works.

## Run

### One-shot (process current inbox and exit)

```bash
python -m hermes_bus.daemon --vault "C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112" --once
```

### Long-running daemon

```bash
python -m hermes_bus.daemon \
    --vault "C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112" \
    --poll-interval 5
```

## Tests

```bash
pytest tests/
```

## How It Maps To The Vault

| Module                | Vault file it implements                              |
|-----------------------|-------------------------------------------------------|
| daemon.py             | `CHAT/INBOX.md` + `CHAT/OUTBOX.md`                    |
| orchestrator.py       | `TASKS/STATUS/<task-id>.md` card lifecycle            |
| parser.py             | `CHAT/Command Template.md` parser                     |
| mavis_runner.py       | `2.0MAVIS/CHAT/Review Protocol.md` implementation     |
| agent_runner.py       | `2.0CODER/CHAT/Coding Brief Protocol.md` execution |
| inbox_watcher.py      | "Hermes polls every N minutes" pickup rule            |

## Notes

- The orchestrator is **subprocess-only**. No HTTP, no WebSocket, no
  socket. The CLIs we invoke (`opencode run`, `agy --print`) are the
  source of model execution; Hermes owns file IO and audit only.
- Mavis reviews every user-facing deliverable by routing it back
  through `agy --print` with a strict review-format JSON prompt. The
  verdict is parsed and stored.
- All file paths in the project use plain Windows or POSIX style. The
  orchestrator is unit-tested headlessly on a stub inbox.
