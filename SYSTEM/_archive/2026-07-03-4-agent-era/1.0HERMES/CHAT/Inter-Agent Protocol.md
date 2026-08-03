---
title: Inter-Agent Protocol
tags: [agent, hermes, chat, inter-agent, protocol, opencode, agy, mavis]
created: 2026-07-01
type: protocol
status: active
---

# Inter-Agent Protocol

> The canonical protocol for messages between HERMES, OPENCODE, AGY, and MAVIS. This is the inter-agent counterpart to [[Chat Protocol]] (which covers user↔Hermes only). This file is the single source of truth; per-agent profiles in `2.0MAVIS/CHAT/`, `3.0OPENCODE/CHAT/`, and `4.0AGY/CHAT/` are scoped mirrors.

## Core Principle

Hermes is the only agent that ever speaks to the user. Within the team, **Hermes is the broker** for any cross-agent coordination. OpenCode and AGY do not read each other's inboxes. OpenCode↔AGY handoffs go through Hermes. Mavis reviews every user-facing deliverable but does not address the user.

## Edge Inventory

| Edge | Direction | Path | Authorship |
|---|---|---|---|
| Hermes → OpenCode | one-way dispatch | `<OpenCode>/CHAT/Inbox/<task-id> — coding-brief.md` | Hermes writes, OpenCode reads |
| Hermes → AGY | one-way dispatch | `<AGY>/CHAT/Inbox/<task-id> — research-brief.md` | Hermes writes, AGY reads |
| OpenCode → Hermes | completion notice | `<Hermes>/CHAT/Inbox/<task-id> — completion.md` (or `<OpenCode>/CHAT/Outbox/` mirror) | OpenCode writes, Hermes reads |
| AGY → Hermes | completion notice | `<Hermes>/CHAT/Inbox/<task-id> — completion.md` | AGY writes, Hermes reads |
| OpenCode → Mavis | review submission | `<Mavis>/CHAT/Inbox/<task-id> — review.md` | OpenCode writes, Mavis reads |
| AGY → Mavis | review submission (user-facing only) | `<Mavis>/CHAT/Inbox/<task-id> — review.md` | AGY writes, Mavis reads |
| Mavis → Hermes | verdict | `<Hermes>/CHAT/Inbox/<task-id> — verdict.md` | Mavis writes, Hermes reads |
| Mavis → agent (revised) | review feedback | `<agent>/CHAT/Inbox/<task-id> — revisions.md` | Mavis writes, agent reads |
| Hermes → agent (handoff) | brokered request between OpenCode and AGY | `<recipient>/CHAT/Inbox/<task-id> — handoff.md` | Hermes writes, recipient reads |
| Hermes → all | broadcast (rare) | every `CHAT/Inbox/` directory with a `system-*.md` notice | Hermes writes, all read |

> [!note] Empty rows are intentional. OpenCode and AGY do NOT have a direct edge. There is no `OPENCODE <-> AGY` path in this protocol. Mavis does NOT address OpenCode or AGY about non-review work. Hermes is the only hub.

## File Format Conventions

Every inter-agent message is a single markdown file with strict YAML-lite frontmatter. Each follows this skeleton:

```markdown
---
date: YYYY-MM-DD HH:MM
type: <kind>            # one of: coding-brief | research-brief | completion | review-submission | verdict | revisions | handoff | system-notice
status: <state>         # see State Machines
task_id: <task-id>      # matches the parent TASKS/STATUS/ card
from: hermes | opencode | agy | mavis
to: hermes | opencode | agy | mavis | all
priority: low | normal | high | urgent
correlation_id: <uuid>  # ties a reply to the original; populated on edges 3, 5, 7, 8
---

# <Brief subject line>

<optional one-paragraph preamble>

## Body

<the actual message content>

## Acceptance Criteria

1. <numbered when applicable>

## Status Updates

<!-- Hermes or the recipient appends ## STATUS @ HH:MM sections here as work progresses -->

```

**Filename convention:** `<task-id> — <kind>.md` for task-bound messages; `<ISOdate> — <slug>.md` for broadcasts.

## State Machines

Every inter-agent message has a `status` field. The state is managed by the recipient, not the sender.

### Dispatch (Hermes → agent)

```
pending -> acknowledged -> accepted -> working -> review-ready
                                          \-> blocked
                                          \-> declined
```

- **pending** — Hermes wrote the file; agent has not read it.
- **acknowledged** — agent's CLI subprocess read the file and started.
- **accepted** — agent posted a STATUS update accepting scope; ready to work.
- **working** — agent is producing output.
- **review-ready** — agent finished a user-facing deliverable; awaits Mavis verdict.
- **blocked** — agent cannot proceed; reason in a `## STATUS @` note.
- **declined** — agent rejected the brief; must include reason; Hermes re-scopes or escalates to user.

### Completion (agent → Hermes)

```
posted -> acknowledged -> integrated -> resolved
                       \-> needs-revision -> posted (loop)
                       \-> discarded
```

- **posted** — agent wrote the completion note; Hermes has not processed.
- **acknowledged** — Hermes read it.
- **integrated** — Hermes bundled the deliverable into the user reply.
- **needs-revision** — Hermes sent a revisions file back; agent reworks.
- **discarded** — Hermes dropped the completion (e.g., task was already-cancelled).

### Review Submission (agent → Mavis)

```
posted -> acknowledged -> in-review -> verdict-posted -> closed
                          \-> info-requested (rare; back to agent)
                          \-> escalated-to-hermes (rare)
```

### Verdict (Mavis → Hermes)

```
posted -> acknowledged -> applied
```

- Agent does not see verdict unless Mavis also writes a `revisions.md` to that agent.

### Revisions (Mavis → agent)

```
posted -> acknowledged -> working -> review-ready (loop back)
       \-> declined (agent refuses to revise; Hermes arbitrates)
```

### Handoff (Hermes → other-agent; recipient ≠ originating agent)

```
pending -> accepted -> working -> complete
                    \-> declined  (recipient refuses; Hermes picks another path or escalates)
```

## Channel Hygiene

- **Inbox** (`<agent>/CHAT/Inbox/`) — incoming messages an agent reads. Files here are read by the agent and are never deleted (chat log).
- **Outbox** (`<agent>/CHAT/Outbox/`) — completion notices the agent posts back to Hermes. Files here are read by Hermes.
- Status updates are appended to the same inbox file under `## STATUS @ HH:MM` sections.
- Files in Inbox and Outbox are NOT deleted; Mavis archives them quarterly into `<agent>/CHAT/Archive/<year>/<quarter>/`.

## Authority Rules (binding)

1. **Hermes is the only hub.** OpenCode↔AGY communication goes through Hermes via a handoff message routed to the recipient agent's inbox. Direct cross-agent reading is forbidden.
2. **Mavis reviews every user-facing deliverable.** Code from OpenCode and research from AGY that reaches the user must first pass a verdict from Mavis.
3. **No silent work.** Every message that is posted triggers a `## STATUS @ HH:MM` update within 5 minutes.
4. **Verdicts are final for the originating task.** A subsequent task-id shares no verdict; each task-id is a separate ledger.
5. **Revisions loop, not reopen.** "changes-required" verdicts loop back to the originating agent as `revisions.md` with a new correlation_id, not a new task.
6. **Handoffs don't bypass Mavis.** If OpenCode's request to AGY would change what the user sees, AGY's reply goes through Mavis before Hermes wires it back into the user's OUTBOX.

## Failure Modes

| Symptom | Detection | Hermes reaction |
|---|---|---|
| Silent agent | No `## STATUS @` in 10 minutes after dispatch | Hermes pings the agent's inbox with a `STATUS?` note; extends timeout |
| Conflicting completions | Two agents post completion for the same task-id | Hermes arbitrates; logs in `TASKS/STATUS/<task-id>.md`; escalates if user-impacting |
| Review missing | Agent posts `complete` without Mavis verdict | Hermes withholds the OUTBOX reply until Mavis verdict lands |
| Handoff refused | Recipient posts `declined` on the handoff | Hermes picks another path or escalates to user |
| Verdict arrived but task cancelled | Task already moved to `cancelled` | Hermes files the verdict in `2.0MAVIS/CHAT/Archive/` and ignores |
| Cross-agent leak attempt | OpenCode writes into AGY's inbox or AGY reads OpenCode's | Hermes flags with a `SYSTEM/STYTEM RECORD/` deviation entry; reverses the write if possible |

## Anti-Patterns

- Hermes does not relay raw agent output to the user. Hermes composes the reply.
- An agent does not address the user in any file, even in a comment.
- An agent does not write to another agent's inbox except via a Hermes-mediated handoff.
- Status updates are append-only; agents do not edit prior STATUS entries.
- The `correlation_id` field is honored: replies reference the original message's id, not the task-id alone.

## Operational Runtime

The `hermes_bus` daemon implements this protocol:

- **Watcher loops.** `inbox_watcher.py` adds a multi-directory watcher that fires when files appear in any `CHAT/Inbox/`.
- **Dispatch flow.** (existing) `orchestrator.py` writes briefs into agent inboxes.
- **Completion handler.** (new) `inter_agent.py::handle_completion` reads agent → Hermes completion notes; updates task card; integrates into reply.
- **Self-submission handler.** (new) `inter_agent.py::handle_self_submission` reads agent → Mavis review submissions; runs Mavis verdict flow.
- **Handoff handler.** (new) `inter_agent.py::handle_handoff` brokers OpenCode ↔ AGY requests: writes a handoff brief into the recipient's inbox and tracks the cross-task correlation.

The full cycle:

```
USER -> INBOX.md -> Hermes dispatch -> <agent>/CHAT/Inbox/<task-id> — <brief>.md
   -> agent CLI runs -> <agent>/SOLO-PROJECTS/<task-id>/
   -> agent writes <agent>/CHAT/Outbox/<task-id>.md AND
            <Hermes>/CHAT/Inbox/<task-id> — completion.md
   -> (user-facing) agent writes <Mavis>/CHAT/Inbox/<task-id> — review.md
   -> Mavis writes <Hermes>/CHAT/Inbox/<task-id> — verdict.md
   -> (changes-required) Mavis writes <agent>/CHAT/Inbox/<task-id> — revisions.md
   -> agent reworks
   -> Hermes composes OUTBOX.md reply
```

A handoff between OpenCode and AGY looks like this:

```
OpenCode running task T1 needs a research answer:
   OpenCode writes <Hermes>/CHAT/Inbox/<T1> — handoff-request.md
   Hermes reads; if valid, Hermes writes <AGY>/CHAT/Inbox/<T1>-H1 — handoff.md
   AGY runs the dependency
   AGY writes <Hermes>/CHAT/Inbox/<T1>-H1 — completion.md
   Hermes writes <OpenCode>/CHAT/Inbox/<T1>-H1 — handoff-reply.md
   OpenCode continues task T1
```

The `-H1` suffix on the handoff task-id prevents collision with the parent task and lets Mavis audit the handoff chain.

## See Also

- [[Chat Protocol]] — user↔Hermes channel
- [[../3.0OPENCODE/CHAT/Coding Brief Protocol]] — how OpenCode receives work
- [[../4.0AGY/CHAT/Research Brief Protocol]] — how AGY receives work
- [[../../3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/README|Loop Chat System]] — runnable implementation
- [[../../SYSTEM/SYSTEM RULES/Rules]] — binding rules
- [[../../SYSTEM/SYSTEM RECORD/2026-07-01 — Inter-Agent Protocol Implementation]] — decision record
