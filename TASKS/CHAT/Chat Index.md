---
title: Task Chat Snapshots
tags: [tasks, chat, snapshots]
created: 2026-07-01
type: task-chat-index
status: active
---

# Task Chat Snapshots

> Chat snapshots related to tasks. Hermes writes here when a task conversation is worth keeping beyond the live chat.

## What Lives Here

- **Per-task chat summaries.** When a task generates significant back-and-forth, Hermes captures a summary here.
- **Multi-turn task threads.** Long task conversations distilled for archival.

## When To Write Here

Hermes writes here when:

- A task involves more than 10 chat turns.
- The task discussion contains decisions that should be auditable.
- The user asks for a record of the task conversation.

Hermes does not write every chat turn here. Live chat logs are in `<agent>/CHAT/Inbox/` and `<agent>/CHAT/Outbox/`.

## File Naming

`<task-id> — Chat Summary.md`.

## See Also

- Tasks index: [[../Index]]
- Hermes chat protocol: [[../../../1.0HERMES/CHAT/Chat Protocol]]