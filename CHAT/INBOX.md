---
title: User Inbox — Command Pad
tags: [chat, user-channel, command-bus, hermes-inbox]
created: 2026-07-01
type: user-inbox
status: active
owner: user (writes), Hermes (reads)
---

# User Inbox — Command Pad

> **Your command pad.** Write commands here. Hermes picks them up at the next session start or on the next poll cycle.

## How This File Works

This is the **vault-native channel** between you and Hermes. It exists alongside the chat channel — you can use either or both.

**Rules:**

1. You write commands by appending them at the bottom of this file. Each command is a self-contained block.
2. Commands use the template in [[Command Template]]. Copy-paste, fill in, append.
3. Each command has a unique `command_id` in the format `CMD-YYYYMMDD-NNN` (NNN is a zero-padded sequence number for that day).
4. Hermes sets `status: pending` when you write the command, then `processing` when it picks up the command, then `done` (or `failed`) when complete.
5. You may write multiple commands in a single batch. Hermes processes them in order.
6. Do not edit a command after Hermes has set `status: processing`. To cancel, write a new command with `status: cancelled` and reference the original.
7. Replies from Hermes land in [[OUTBOX]]. Each reply references the originating command_id.

## Active Commands

> Append your commands below this line. Use `---` as a separator between commands.

<!-- USER_COMMANDS_START -->

### Example — Replace with Your First Command

```
---
command_id: CMD-YYYYMMDD-001
type: task
priority: normal
agent_target: auto
created: YYYY-MM-DD HH:MM
status: pending
---

# Command: <short, descriptive title>

<your actual instruction to Hermes>

## Acceptance Criteria

1. <what "done" looks like>

## Context

<links to notes, files, prior commands>

## Notes

<optional>
```

To submit: change `status: pending` (it is already pending in the template), update `command_id` to today's date and sequence number, fill in the body, save the file.



---

command_id: CMD-20260701-SMOKE-002
type: question
priority: low
agent_target: hermes
created: 2026-07-01 12:30
status: done
---

# Command: List all four agents and one-line each

A sanity-check reply. Hermes should answer directly without any agent dispatch.



---

command_id: CMD-20260701-FINAL-001
type: question
priority: low
agent_target: hermes
created: 2026-07-01 13:00
status: done
---

# Command: Final smoke — confirm the chat system is operational

A final post-build smoke test. Hermes should ack directly without any sub-agent dispatch.



---

command_id: CMD-20260701-INTERAGENT-FINAL
type: question
priority: low
agent_target: hermes
created: 2026-07-01 17:00
status: done
---

# Command: Inter-agent protocol smoke

Confirms the inter-agent sweep runs after the user-channel sweep. Hermes direct ack only.

<!-- USER_COMMANDS_END -->

## Commands Index

| command_id | title | type | priority | status | created |
|---|---|---|---|---|---|
| `CMD-20260701-SMOKE-001` | Smoke test — confirm chat system is wired | question | low | done | 2026-07-01 12:00 |