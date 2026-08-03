---
title: Inter-Agent Protocol Implementation
date: 2026-07-01
type: decision
status: resolved
author: Hermes (with OpenCode and Mavis review)
tags: [system, chat, inter-agent, hermes, opencode, agy, mavis, decision]
---

# 2026-07-01 — Inter-Agent Protocol Implementation

## Context

The 2026-07-01 Chat System Operational Rebuild made the user<->Hermes
channel runnable, but the inter-agent edges were still placeholders.
The system rules and authority graph in `SYSTEM/SYSTEM GRAPH/Graph.md`
define four pure-message edges — Hermes->OpenCode/AGY/Mavis (dispatch
and review), OpenCode->Hermes (completion), OpenCode<->Hermes<->AGY
(brokered handoff), Mavis->Hermes (verdict), Mavis->agent (revisions) —
without any runnable implementation.

Without the inter-agent protocol:

- Agent completion notes had no audit trail in the system. OpenCode and
  AGY had no canonical way to announce "I finished; here is my
  deliverable" without bypassing Hermes.
- Mavis review submissions from agents were not actually triggered;
  the only review path was Hermes-generated review requests.
- OpenCode could not solicit a research answer from AGY without violating
  the rule "OpenCode <-> AGY: none direct — must go through Hermes".

## Decision

1. **Spec at `1.0HERMES/CHAT/Inter-Agent Protocol.md`.** Defines all
   nine inter-agent message edges, the YAML-lite frontmatter contract,
   the state machine for each message kind, and the binding authority
   rules. Single source of truth; per-agent profiles mirror it.

2. **Per-agent profiles** at:
   - `2.0MAVIS/CHAT/Inter-Agent Profile.md`
   - `3.0OPENCODE/CHAT/Inter-Agent Profile.md`
   - `4.0AGY/CHAT/Inter-Agent Profile.md`
   Each describes that agent's inbox/outbox responsibilities, the
   message kinds it sends and receives, and what it explicitly does
   NOT do (e.g., OpenCode never reads AGY's inbox).

3. **Implementation in `hermes_bus.inter_agent`** (new Python module):
   - `handle_completion(vault, inbox_file)` — agent->Hermes; updates
     the parent task card; idempotent on replay.
   - `handle_self_submission(vault, submission_file, runner)` —
     agent->Mavis; runs the Mavis verdict flow and mirrors the verdict
     into Hermes' inbox. Mirrors the parent task card.
   - `handle_handoff(vault, handoff_request_file)` — OpenCode->Hermes;
     validates the request, writes a `*-handoff.md` brief into the
     recipient's (AGY) inbox, with task-id suffixed `-H1` (or `-Hn`)
     to keep handoff chains distinct from the parent task. Rejects
     self-handoffs and handoffs from non-OpenCode/AGY requesters.
   - `handle_handoff_reply(vault, completion_file)` — AGY completion
     whose task-id is a sibling (`<parent>-H1`) gets advanced against
     the parent card and mirrored back to the originating agent's
     inbox as `*-handoff-reply.md`.
   - `poll_all_inboxes(vault, runner, seen)` — top-level scan that
     routes every actionable inbox item to the right handler.

4. **Daemon wiring.** `daemon.py::run` now invokes
   `_sweep_inter_agent(vault, seen)` after every user-channel sweep,
   so a single daemon process drives both layers.

5. **Session-start entry point.** `python -m hermes_bus.session_start
   --vault <path>` runs vault-init, user-channel sweep, and
   inter-agent sweep in order and prints a summary. The shell wrapper
   `scripts/session_start.sh` invokes it.

6. **Orphan audit.** If a completion arrives whose parent task card
   is missing, `inter_agent._orphan_completion` writes a line to
   `SYSTEM/STYTEM RECORD/Orphan Completions.md` and the file is not
   processed. Mavis reviews the orphan log on the weekly audit.

7. **Test discipline.** 13 new tests in `tests/test_inter_agent.py`
   exercise every handler and the top-level scan. 3 new tests in
   `tests/test_session_start.py` exercise the entry point. All
   48 pytest tests pass.

## Impact

- The four-agent topology is now end-to-end runnable, not just
  declared. OpenCode or AGY can post completion or review-submission
  messages and Hermes picks them up automatically.
- Cross-agent requests are brokered through Hermes, preserving the
  existing system rule against direct OpenCode<->AGY communication.
- Mavis review triggers the moment an agent self-submits; no longer
  only when Hermes requests it.
- Audit trail is preserved: every inbox file advances its frontmatter
  status and gains a `## STATUS @ HH:MM` block.

## Followups

- v0.2 — wire NotebookLM grounding for Mavis' review (extending
  `mavis_runner.py`).
- v0.2 — add a `WORKFLOWS/COMS-LAB/inter-agent-watchdog.flow` n8n
  flow that runs `session_start.py` on a schedule.
- v0.2 — Prometheus-style counters for inter-agent message kinds
  (helps Mavis spot handoff-loops early).
- v0.3 — broadcast notifications: when `system-*.md` notices land in
  any agent's inbox, the recipient posts a `## STATUS @ HH:MM`
  acknowledge; the daemon could collect these as a unified read-receipt
  report.

## How to Run

```bash
# one-shot sweep of every layer (recommended at session start)
PYTHONPATH="C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112/3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/src" \
  C:/Python314/python.exe -m hermes_bus.session_start \
    --vault "C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112"

# long-running daemon (also drives inter-agent sweeps on every file event)
PYTHONPATH=src C:/Python314/python.exe -m hermes_bus.daemon \
    --vault "C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112"
```

The shell wrapper is the shortest:

```bash
"C:/Users/Admin/OBSIDIAN/LOOP-20260630132527112/3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/scripts/session_start.sh"
```

## Sample run output (verified 2026-07-01)

```
$ PYTHONPATH=src python -m hermes_bus.daemon --vault ... --once
Processed 1 command(s):
  CMD-20260701-FINAL-001: recorded
[hermes-bus] inter-agent sweep handled:
  - completion: acknowledged completion of 20260701-1700-ia-test from opencode
```
