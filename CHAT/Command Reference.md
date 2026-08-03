---
title: Command Reference
tags: [chat, user-channel, command-bus, reference]
created: 2026-07-01
type: command-reference
status: active
---

# Command Reference

> Full syntax and behavior reference for the vault-native command channel. This is the authoritative spec — Hermes implements to this.

## Overview

The command channel is a vault-native, append-only, file-based protocol between the user and Hermes. It coexists with the chat channel. The user may use either or both. The command channel is preferred for:

- **Batched work** — write multiple commands in one go.
- **Async work** — Hermes processes when the next session starts.
- **Auditable work** — every command is a markdown file with a timestamp and signature.
- **Structured work** — frontmatter ensures Hermes parses commands reliably.

The chat channel is preferred for:

- **Quick back-and-forth** — clarification, simple questions, confirmations.
- **Real-time steering** — when work is in progress and you need to redirect.
- **Conversational context** — when the work depends on a recent chat exchange.

## File Layout

| File | Owner | Purpose |
|---|---|---|
| `CHAT/INBOX.md` | user (writes), Hermes (reads) | Append-only command pad |
| `CHAT/OUTBOX.md` | Hermes (writes), user (reads) | Append-only reply pad |
| `CHAT/Command Template.md` | static | Template the user copy-pastes |
| `CHAT/Command Reference.md` | static | This file |
| `CHAT/Session Log.md` | Hermes (writes) | Per-session activity log |
| `CHAT/User Communication Guide.md` | static | User-facing how-to |

## Command Lifecycle

```
[1] user writes command in INBOX.md
   |
   v
[2] command has status: pending
   |
   v
[3] Hermes picks up at session start (or on poll)
   |   - sets status: processing
   |   - parses command
   |   - logs to Session Log.md
   |   - creates task card in TASKS/STATUS/<command_id>.md
   |
   v
[4] Hermes routes per agent_target / routing matrix
   |
   v
[5] invoked agent(s) work
   |   - status updates posted to agent's inbox
   |
   v
[6] if user-facing deliverable: Mavis reviews
   |
   v
[7] Hermes composes reply in OUTBOX.md
   |   - references command_id
   |   - lists artifacts
   |   - includes Mavis' notes
   |
   v
[8] command status -> done (or failed / needs-user / cancelled)
```

## Status Transitions

| From | To | Trigger |
|---|---|---|
| (none) | `pending` | User appends command |
| `pending` | `processing` | Hermes starts work |
| `pending` | `cancelled` | User cancels before Hermes starts |
| `processing` | `done` | Hermes completes successfully |
| `processing` | `failed` | Hermes cannot complete; reason in reply |
| `processing` | `needs-user` | Hermes has a question only the user can answer |
| `processing` | `in-progress` (long-running) | Optional intermediate state for multi-step commands |

Status transitions are Hermes' responsibility. The user may only:

- Set initial `status: pending` when appending.
- Change `pending` to `cancelled` (with `cancellation_reason` field).

## Hermes' Pickup Rules

Hermes picks up commands at:

1. **Session start.** Every new Hermes session begins with a sweep of `INBOX.md`.
2. **Periodic poll.** If running continuously, Hermes polls `INBOX.md` every N minutes (default 5).
3. **Chat trigger.** The user can say "process the inbox" in chat to force a sweep.

On pickup, Hermes:

1. Reads the entire file (cheap; vault is local).
2. Identifies all commands with `status: pending` or `status: cancelled` (cancelled ones get acknowledged in OUTBOX).
3. Sorts by `priority` (urgent > high > normal > low), then by `created` (oldest first within priority).
4. Processes one at a time. Does not parallelize within a single session unless commands are explicitly independent (rare).
5. Updates the INBOX index table as commands progress.

## Routing

If `agent_target` is `auto`, Hermes routes per [[../../1.0HERMES/RULES/Routing Rules]].

If `agent_target` is specific (e.g., `opencode`), Hermes dispatches only to that agent. Hermes does not second-guess explicit routing.

If Hermes disagrees with the explicit routing, Hermes writes a `needs-user` reply explaining the concern and asks the user to confirm. Hermes does not silently re-route.

## Conflict Resolution

### Two channels, same instruction

If the user gives the same instruction in chat and in a command note, Hermes:

1. Notes the conflict.
2. Honors the more recent instruction.
3. Cancels the older one with `status: cancelled` and a note "superseded by chat at <time>".

### Conflicting commands in INBOX

If two commands in INBOX conflict (e.g., "rename folder X" and "create file in folder X"), Hermes:

1. Processes them in priority + creation order.
2. If the conflict only becomes apparent during processing, Hermes pauses and writes a `needs-user` reply for the second command.

### Chat instruction during command processing

If the user sends a chat instruction while a command is processing, Hermes:

1. Acknowledges briefly in chat.
2. Continues the in-progress command unless the chat explicitly cancels it.
3. Processes the chat instruction after the command completes (unless urgent).

## Special Directives

| Directive | Behavior |
|---|---|
| `/no-reply` | Hermes executes but does not write to OUTBOX. Used for fire-and-forget commands. Hermes still updates the command's status and logs to Session Log. |
| `/quick` | Skip Mavis review. Hermes confirms the command qualifies as trivial before honoring. If not, Hermes writes a normal reply with review. |
| `/urgent` | Bumps priority to `urgent` regardless of frontmatter. Hermes notifies the user on start and on completion via chat AND OUTBOX. |
| `/batch` | Treats the entire INBOX as a single batched job. Hermes processes in order and replies with one consolidated reply when done. |
| `/silent` | Hermes does not notify in chat. The user checks OUTBOX. |
| `/draft` | Hermes drafts a plan and writes it to OUTBOX without executing. The user reviews and re-submits with `status: pending` to execute. |

Directives are case-insensitive. They appear anywhere in the command body. Hermes parses them once at pickup.

## Long-Running Commands

For commands expected to take more than one session:

- Hermes creates a task card at `TASKS/STATUS/<command_id>.md`.
- Status updates posted to the task card.
- Hermes processes across sessions; command status remains `processing` until done.
- If a session ends mid-command, the next session resumes from the task card.

## Failure Handling

### Command cannot be parsed

Hermes writes a `failed` reply with the reason. The command is marked `failed`. The user may fix the syntax and re-submit (as a new command referencing the old command_id).

### Command violates a system rule

Hermes writes a `failed` reply with the violated rule and the system-record reference. The command is marked `failed`. No work is done.

### Command requires a secret Hermes does not have

Hermes writes a `needs-user` reply listing the required secret (by name only, never value) and how to provide it (env var, file path, etc.).

### Agent dispatched but fails

Hermes follows the [[../../1.0HERMES/CHAT/Chat Protocol]] failure handling. The command remains `processing` until Hermes has either resolved the failure or escalated to the user.

## Indexes

Both INBOX.md and OUTBOX.md maintain an index table at the top. Hermes updates these tables on every state change. The index is the canonical "what's pending / what's done" view — agents and operators read it before doing anything else.

## Archival

Quarterly, Hermes archives INBOX and OUTBOX to `CHAT/Archive/<year>/<quarter>/`. The current quarter's files stay in `CHAT/` and remain append-only. Archival does not delete originals.

## See Also

- [[INBOX]] — the command pad
- [[OUTBOX]] — the reply pad
- [[Command Template]] — copy-paste template
- [[User Communication Guide]] — user-facing how-to
- [[Session Log]] — Hermes' per-session activity record
- [[../../1.0HERMES/CHAT/Chat Protocol]] — chat protocol (companion channel)
- [[../../1.0HERMES/RULES/Routing Rules]] — routing matrix
- [[../../SYSTEM/SYSTEM RULES/Rules]] — binding rule set