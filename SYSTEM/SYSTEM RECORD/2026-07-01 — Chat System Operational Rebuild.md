---
title: Chat System Operational Rebuild
date: 2026-07-01
type: decision
status: resolved
author: Hermes (with OpenCode + Mavis review)
tags: [system, chat, hermes, daemon, decision]
---

# 2026-07-01 — Chat System Operational Rebuild

## Context

The LOOP cowork vault had a fully documented four-agent chat topology
(`1.0HERMES`, `2.0MAVIS`, `3.0OPENCODE`, `4.0AGY`) but the chat
subsystem itself was a static placeholder: `CHAT/INBOX.md` and
`CHAT/OUTBOX.md` were just markdown files with no watcher, no
automation, and no agent subprocesses. The user requested an operational
rebuild so Hermes actually owns the user-facing communication channel
end-to-end.

## Decision

1. **Hermes daemon (the `hermes_bus` Python package).** A long-running
   process (single-tick CLI mode also supported) that watches
   `CHAT/INBOX.md` for new commands the user appends, routes each
   command to the right agent CLI per the routing matrix, dispatches
   via subprocess, collects the result, runs Mavis review, and writes
   the user reply to `CHAT/OUTBOX.md`. Source lives at
   `3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/`.

2. **Agent CLI wiring.** Hermes spawns:
   - `opencode run` for coding tasks (OpenCode).
   - `agy --print` for research, math, ops, environment (AGY).
   - `agy --print` with a Mavis persona prompt for Mavis review (in v0.2
     we wire `notebooklm-mcp` as the grounding source for Mavis' private
     notebook). Mavis' verdict is parsed out of the agent's response as
     a strict JSON block; on parse failure we fall back to the literal
     verdict word and on total failure we default to `approved-with-notes`
     so the user still gets a reply.

3. **Per-agent inbox/outbox dirs created.** `CHAT/Inbox/` and
   `CHAT/Outbox/` now exist under every agent folder per the protocols
   in `1.0HERMES/CHAT/Chat Protocol.md` and
   `2.0MAVIS/CHAT/Review Protocol.md` etc.

4. **Template placeholder defense.** The orchestrator refuses to
   process the example template (placeholder `command_id: CMD-YYYYMMDD-001`
   or `<short title>` body) so a fresh vault that has not yet had its
   first command edited does not accidentally trigger a real `agy` /
   `opencode` invocation. This is enforced at parser time.

5. **OUTBOX idempotency.** The reply append is true-append: replies are
   inserted BEFORE the `HERMES_REPLIES_END` marker and the index row is
   added only if not already present. Running `--once` twice on the same
   inbox produces exactly one reply block and one index row.

6. **Test discipline.** Every code path is unit-tested:
   `pytest tests/` reports 32/32 green. The orchestrator uses a stub
   `AgentRunner` for the e2e tests so no real CLIs are invoked during
   CI/test runs.

7. **Operational artifact locations.**
   - Project: `3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/`
   - Plan: `~/.hermes/plans/2026-07-01-LOOP-chat-system-rebuild.md`
   - Daemon source: `src/hermes_bus/`
   - Startup script: `scripts/start_hermes_daemon.sh` and `.ps1`
   - Single-sweep helper: `scripts/session_start.sh`

## Impact

- The chat protocol documents in `1.0HERMES/CHAT/Chat Protocol.md` and
  the related agent protocols are now backed by a runnable
  implementation. The docs remain the source of truth; the code mirrors them.
- The vault no longer requires the user to manually transcribe
  commands into agent inboxes — Hermes does the routing and audit.
- Every dispatched task produces a `TASKS/STATUS/<task-id>.md` card
  with an append-only `## STATUS @ HH:MM` audit log.
- Review gate remains mandatory for user-facing deliverables; the
  orchestrator always sends through Mavis before composing the OUTBOX
  reply.

## Followups

- v0.2 — wire `notebooklm-mcp` for Mavis' private notebook grounding.
- v0.2 — add a `WORKFLOWS/COMS-LAB/loop-bus-watchdog.flow` to expose
  the daemon pickup loop in n8n.
- v0.2 — cron job `loop-bus-session-start` every 5 minutes via the
  `hermes cronjob` orchestrator (matching the default poll cadence in
  `CHAT/Command Reference.md`).
- v0.3 — surface the daemon in Obsidian via the `cannoli` plugin
  (already enabled per `.obsidian/community-plugins.json`) for inline
  command-from-note UX.
- Weekly audit cadence (Mavis, Sundays 22:00) gains a new check: verify
  the daemon ran at least once during the week.

## How to Run

```bash
# from anywhere on the host:
PYTHONPATH="C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112/3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/src" \
  C:/Python314/python.exe -m hermes_bus.daemon \
    --vault "C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112" --once

# long-running:
... same command without --once, with --poll-interval 5
```

The shell wrappers under `scripts/` make this shorter:

```bash
./3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/scripts/start_hermes_daemon.sh --once
./3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/scripts/session_start.sh
```

## Sample run output (verified 2026-07-01)

```
$ PYTHONPATH=src python -m hermes_bus.daemon --vault ... --once
Processed 1 command(s):
  CMD-20260701-SMOKE-002: recorded
```
