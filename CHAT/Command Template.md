---
title: Command Template
tags: [chat, user-channel, command-bus, template]
created: 2026-07-01
type: command-template
status: active
---

# Command Template

> Copy this template, fill it in, append it to [[INBOX]].

## The Template

```markdown
---
command_id: CMD-YYYYMMDD-NNN
type: task | question | status | system | note
priority: low | normal | high | urgent
agent_target: auto | hermes | opencode | agy | mavis
created: YYYY-MM-DD HH:MM
status: pending
---

# Command: <short, descriptive title>

<the actual instruction. Write it like you're talking to a colleague. Be specific. State what you want, not what you don't want.>

## Acceptance Criteria

1. <what "done" looks like — measurable, observable>
2. <optional second criterion>
3. ...

## Context

- <links to prior notes, files, or commands>
- <what the user has already tried or decided>

## Notes

- <optional: caveats, deadlines, related work, anything else Hermes should know>
```

## Field Reference

### `command_id` (required)

Format: `CMD-YYYYMMDD-NNN`. Date + zero-padded sequence number for that day. Hermes assigns IDs to commands the user did not pre-number (Hermes appends and updates the ID before processing).

### `type` (required)

- `task` — work that produces a deliverable.
- `question` — a question Hermes answers in the reply (no dispatch).
- `status` — Hermes reports on the current state of something (no new work).
- `system` — a system-level command (rename, lock, rotate, audit). See `agent_target: hermes`.
- `note` — a note for Hermes' memory or a piece of information to file. No action expected beyond recording.

### `priority` (required)

- `low` — Hermes batches these and runs them when no higher-priority work is pending.
- `normal` — default; Hermes processes in order received.
- `high` — Hermes processes before normal commands.
- `urgent` — Hermes notifies the user immediately when started and when complete.

### `agent_target` (required)

- `auto` — Hermes routes per the matrix in [[../../1.0HERMES/RULES/Routing Rules]]. Default.
- `hermes` — only Hermes handles this (system commands, configuration).
- `opencode` — only OpenCode handles this (code-only tasks).
- `agy` — only AGY handles this (research, backup, math, environment).
- `mavis` — only Mavis handles this (documentation-only tasks).

If you are unsure, use `auto`. Hermes will route correctly.

### `created` (required)

Date and time you wrote the command. ISO-ish format: `YYYY-MM-DD HH:MM`. Hermes uses this for ordering when multiple commands have the same priority.

### `status` (managed by Hermes)

You set this to `pending` when you append the command. Hermes updates it:

- `pending` -> `processing` when Hermes starts working.
- `processing` -> `done` when complete.
- `processing` -> `failed` if Hermes cannot complete.
- `processing` -> `needs-user` if Hermes has a question only you can answer.
- `pending` -> `cancelled` if you cancel before Hermes starts.

You can cancel by changing `status: pending` to `status: cancelled` and adding a `cancellation_reason` field. Hermes will not start cancelled commands.

## Body Sections

### Command title

A short, descriptive H1 title. One line. Example: "Refactor MCP server template to use env-var injection".

### Body

The actual instruction. Write naturally. Be specific. State constraints. Reference prior commands by ID when continuing prior work.

### Acceptance Criteria (optional but recommended)

Numbered list of what "done" looks like. Without this, Hermes has to infer completion from context, which can drift.

### Context (optional)

Links and prior work. Wikilinks preferred. Also where you describe what you have already tried.

### Notes (optional)

Anything else. Deadlines. Caveats. Related work.

## Special Directives

You can include any of these directives in the body to override defaults:

- `/no-reply` — Hermes executes but does not write to OUTBOX. Use for fire-and-forget commands.
- `/quick` — skip Mavis review (only valid for trivial commands; Hermes confirms). Use sparingly.
- `/urgent` — bumps priority regardless of what you put in the `priority` field.
- `/batch` — multiple commands in one block, processed in order.
- `/silent` — Hermes does not notify on completion; you check OUTBOX yourself.
- `/draft` — Hermes drafts a plan but does not execute. Reply contains the plan.

## Example Commands

### Quick task

```markdown
---
command_id: CMD-20260701-001
type: task
priority: normal
agent_target: auto
created: 2026-07-01 14:30
status: pending
---

# Command: Add a "Last Reviewed" property to all operational notes

For every markdown file in the vault, ensure frontmatter includes a `last_reviewed: YYYY-MM-DD` field. Set to today's date if the note is reviewed, leave unset if not reviewed.

## Acceptance Criteria

1. All notes in `SYSTEM/`, `1.0HERMES/`, `2.0MAVIS/`, `3.0OPENCODE/`, `4.0AGY/` have `last_reviewed` set to 2026-07-01.
2. A script in `3.0OPENCODE/SOLO-PROJECTS/<project-id>/` performs the update.
3. Mavis reviews the script before it runs.
```

### Question

```markdown
---
command_id: CMD-20260701-002
type: question
priority: low
agent_target: hermes
created: 2026-07-01 14:35
status: pending
---

# Command: What's the current status of the Karpathy wiki?

Just want a one-paragraph summary. Is it bootstrapped? Are there any entries? When is the first intake expected?

## Acceptance Criteria

1. One-paragraph summary.
2. Link to `MEMORY/KARPATHY/` state.
```

### System command

```markdown
---
command_id: CMD-20260701-003
type: system
priority: high
agent_target: hermes
created: 2026-07-01 14:40
status: pending
---

# Command: Lock `MCP/servers/google-drive-credentials.md`

I just put credentials in `MCP/servers/google-drive-credentials.md`. Move it to `SYSTEM/LOCK/` and update the locked index.

## Acceptance Criteria

1. File moved to `SYSTEM/LOCK/`.
2. `SYSTEM/LOCK/Locked Index.md` updated.
3. `SYSTEM/STYTEM RECORD/` entry written documenting the lock.
```

## See Also

- [[INBOX]] — the command pad
- [[OUTBOX]] — the reply pad
- [[Command Reference]] — full syntax and behavior reference
- [[User Communication Guide]] — user-facing how-to
- [[Session Log]] — Hermes' per-session activity record