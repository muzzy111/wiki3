---
title: Queued Tasks
tags: [tasks, queued, waiting]
created: 2026-07-01
type: queue
status: active
---

# Queued Tasks

> Tasks that have been created but not yet picked up for work. Typically low-priority, scheduled, or batched work.

> [!note] Folder name misspelling
> This folder is named `QUED` (should be `QUEUED`). The misspelling is preserved to keep wikilinks valid. A future rename is tracked in [[2026-07-01 — Folder Rename Backlog]].

## What Lives Here

Tasks here are:

- Created (have a task card) but not yet started.
- Waiting for the right agent to have capacity.
- Scheduled for future execution.
- Batched for later in the day or week.

## Queue Index

| task_id | Title | Priority | Owner | Created |
|---|---|---|---|---|
| (none yet) | | | | |

> No queued tasks. Tasks will be added as they are created.

## Promotion to Active

When an agent picks up a queued task:

1. The task card is moved from `QUED/<task-id>.md` to `STATUS/<task-id>.md` (or, if the card lives only in STATUS, the status field is updated from `queued` to `in-progress`).
2. The Queue Index is updated.

## Scheduled Tasks

Tasks scheduled for future execution (e.g., "next Monday") live here until the schedule triggers. A scheduled trigger may be a cron-style timer or a Hermes decision at session start.

## See Also

- Tasks index: [[../Index]]
- Kanban board: [[../KANBAN/Kanban Board]]
- Rename backlog: [[2026-07-01 — Folder Rename Backlog]]