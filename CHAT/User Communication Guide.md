---
title: User Communication Guide
tags: [chat, user-channel, guide, user-facing]
created: 2026-07-01
type: user-guide
status: active
---

# User Communication Guide

> How **you** (the user) talk to Hermes and control the team. Read this once; it explains the two channels and when to use which.

## Operational Status (2026-07-01)

The chat system is now runnable end-to-end. The `hermes_bus` Python
daemon watches `CHAT/INBOX.md`, dispatches commands to the right agent
CLI, runs Mavis' review, and writes the reply to `CHAT/OUTBOX.md`.

To run it now:

```bash
"C:\Python314\python.exe" -m hermes_bus.daemon \
    --vault "C:\Users\Admin\OBSIDIAN\LOOP-20260630132527112" --once
```

For a long-running watcher, drop `--once`. The full source lives at
`3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/`.

## Two Channels

You have two ways to talk to Hermes:

1. **Chat.** Real-time, conversational, in the chat window. Best for quick back-and-forth, clarifications, and steering work in progress.
2. **The Obsidian Command Pad.** Vault-native, file-based, asynchronous. Best for batched work, durable commands, and audit-friendly dispatch.

You can mix-and-match. Most days you'll use both.

## The Obsidian Command Pad

The command pad is two files in `CHAT/`:

- `CHAT/INBOX.md` — **You write here.** This is your command pad.
- `CHAT/OUTBOX.md` — **Hermes writes here.** This is where you read replies.

Plus three reference files:

- `CHAT/Command Template.md` — copy-paste template for a command.
- `CHAT/Command Reference.md` — full syntax reference (authoritative spec).
- `CHAT/Session Log.md` — Hermes' per-session log (audit trail).

## Quick Start — Your First Command

1. Open `CHAT/INBOX.md` in Obsidian.
2. Scroll to the `<!-- USER_COMMANDS_START -->` marker.
3. Below it, paste the template from `CHAT/Command Template.md`.
4. Fill in:
   - `command_id`: today's date and a sequence number. Example: `CMD-20260701-001`.
   - `type`: `task`, `question`, `status`, `system`, or `note`.
   - `priority`: `low`, `normal`, `high`, or `urgent`.
   - `agent_target`: usually `auto` (Hermes routes for you).
   - `created`: today's date and time.
   - `status`: `pending`.
   - Body: what you want Hermes to do.
   - Acceptance criteria: what "done" looks like.
5. Save the file.

Hermes picks it up at the next session start (or on the next poll cycle — default every 5 minutes). Hermes updates the status to `processing`, dispatches work, then writes a reply to `CHAT/OUTBOX.md` and sets status to `done`.

## When To Use Chat vs The Pad

| If you want to... | Use |
|---|---|
| Ask a quick factual question | Chat |
| Clarify something Hermes just said | Chat |
| Steer work in progress | Chat |
| Send a structured task with clear acceptance criteria | Pad |
| Batch multiple tasks at once | Pad |
| Dispatch work while away from chat | Pad |
| Dispatch a system command (rename, lock, audit) | Pad |
| Build a durable, auditable record of dispatch | Pad |
| Reference prior commands explicitly | Pad (use command_id) |

## Command Anatomy (Quick Reference)

```markdown
---
command_id: CMD-YYYYMMDD-NNN
type: task | question | status | system | note
priority: low | normal | high | urgent
agent_target: auto | hermes | opencode | agy | mavis
created: YYYY-MM-DD HH:MM
status: pending
---

# Command: <short title>

<your instruction>

## Acceptance Criteria

1. <what done looks like>
```

The full reference is at `CHAT/Command Reference.md`. Read it once to know what `/urgent`, `/quick`, `/no-reply`, `/batch`, `/silent`, `/draft` do.

## Reading Replies

Open `CHAT/OUTBOX.md`. Each reply has:

- The originating `command_id` it replies to.
- The outcome (`done`, `failed`, `needs-user`, `in-progress`).
- A list of artifacts created or modified (with file paths).
- Mavis' review notes (when the deliverable was reviewed).
- Followups (open questions, deferred work).

You don't edit replies. To push back, write a new command referencing the prior command_id.

## Indexes

Both `CHAT/INBOX.md` and `CHAT/OUTBOX.md` have an index table at the top. The index is your at-a-glance view of what's pending and what's done. Hermes updates it on every state change.

## Common Patterns

### Pattern 1 — Quick question

```markdown
---
command_id: CMD-20260701-001
type: question
priority: low
agent_target: hermes
created: 2026-07-01 09:15
status: pending
---

# Command: What's the current state of the Karpathy wiki?

One-paragraph summary. No action needed.
```

### Pattern 2 — Batched work

Write multiple commands at once. Hermes processes in priority + creation order.

### Pattern 3 — Code request

```markdown
---
command_id: CMD-20260701-002
type: task
priority: normal
agent_target: auto
created: 2026-07-01 09:30
status: pending
---

# Command: Write a Python script to scan the vault for broken wikilinks

Use Obsidian's API or a markdown parser. Output a markdown report at `SYSTEM/STYTEM RECORD/Wikilink Audit — YYYY-MM-DD.md`.

## Acceptance Criteria

1. Script lives at `3.0OPENCODE/SOLO-PROJECTS/<project-id>/scan-wikilinks.py`.
2. Report lists every broken `[[...]]` reference with source file and target.
3. Mavis reviews the script before it runs.
4. AGY does not need to be involved.
```

### Pattern 4 — System command

```markdown
---
command_id: CMD-20260701-003
type: system
priority: high
agent_target: hermes
created: 2026-07-01 10:00
status: pending
---

# Command: Rename folder `TASKS/QUED` to `TASKS/QUEUED`

Run the migration per the plan in `SYSTEM/STYTEM RECORD/2026-07-01 — Folder Rename Backlog.md`.

## Acceptance Criteria

1. New folder `TASKS/QUEUED/` exists with all files.
2. Old folder `TASKS/QUED/` removed.
3. All wikilinks updated.
4. `SYSTEM/STYTEM RECORD/` resolution entry written.
```

## Cancellation

To cancel a command before Hermes starts it:

1. Find the command in `CHAT/INBOX.md`.
2. Change `status: pending` to `status: cancelled`.
3. Add a `cancellation_reason: <why>` field.

Hermes will acknowledge the cancellation in `CHAT/OUTBOX.md` and skip the work.

If Hermes has already started (`status: processing`), you cannot cancel by editing the file. Instead, send a chat message: "Cancel command CMD-XXX". Hermes will halt the work and write a cancellation reply.

## Tips

- **Write the acceptance criteria.** Commands without criteria are slower because Hermes has to infer completion from context.
- **Reference prior commands.** When continuing work, cite the prior command_id so Hermes has the context.
- **Use the right agent_target.** If you know the task is code-only, set `agent_target: opencode`. Hermes honors explicit routing.
- **Don't put secrets in commands.** Use env var names. Hermes never logs values.
- **Use `/urgent` sparingly.** It bumps priority AND notifies in chat. Reserve for true emergencies.
- **Use `/draft` for plans.** If you want Hermes to think through an approach before executing, `/draft` returns a plan you can review.

## What Hermes Does Not Do

- Hermes does not act on a command you have not yet saved.
- Hermes does not process a command with malformed frontmatter — you get a `failed` reply with the parse error.
- Hermes does not silently re-route explicit `agent_target` values.
- Hermes does not skip Mavis review unless `/quick` is set AND the command qualifies as trivial.
- Hermes does not delete commands or replies.

## When In Doubt

If you are not sure whether to use chat or the pad, ask Hermes in chat. Hermes will tell you which is better for the task.

## What Actually Happens When You Save A Command

1. The `hermes_bus` daemon (running in the background or via `--once`)
   notices INBOX.md changed.
2. It parses your command into a structured `Command` dataclass.
3. The `router` chooses the agent (`opencode` for code, `agy` for
   research, `mavis` for docs, `hermes` for direct answers).
4. A `TASKS/STATUS/<task-id>.md` card is created with the full plan.
5. A brief is written into the agent's `CHAT/Inbox/<task-id>.md`.
6. Hermes spawns the agent CLI (`opencode run` or `agy --print`) and
   waits for the result. Output captures land in
   `<agent>/SOLO-PROJECTS/<task-id>/agent-run.log`.
7. For user-facing deliverables, Mavis' review runs as a second
   `agy --print` with a strict JSON-verdict prompt.
8. Hermes composes the reply and **appends** it to `CHAT/OUTBOX.md`
   (true append; nothing existing is overwritten).
9. Your INBOX command is marked `status: done`; the row in the INBOX
   index is updated to reflect the outcome.

A failed or partially-routed command surfaces in the OUTBOX reply with
the same `## Reply to <command_id>` format. Use `CHAT/Session Log.md`
to audit which commands were processed when.