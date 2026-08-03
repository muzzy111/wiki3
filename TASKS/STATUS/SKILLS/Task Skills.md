---
title: Task Tracking Skills
tags: [tasks, status, skills]
created: 2026-07-01
type: status-skills
status: active
---

# Task Tracking Skills

> Skills for working with the task tracking system. Hermes uses these; other agents may too.

## Current Skills

### Writing a Task Card

When writing a new task card:

1. Determine the task-id: `YYYYMMDD-HHMM-<short-slug>`. Use the current date and time to the minute.
2. Create `TASKS/STATUS/<task-id>.md`.
3. Fill in frontmatter (task_id, type, status: queued, priority, owner, created).
4. Write the body per the schema in [[../RULES/Task Rules]].

### Closing a Task

When closing a task:

1. Update status to `done`, `failed`, or `cancelled`.
2. Set the `closed` field in frontmatter.
3. Fill in the Resolution section.
4. Link all final deliverables.
5. Update the Kanban board (`KANBAN/Kanban Board.md`).
6. Notify the user via Hermes.

### Reopening a Task

If a closed task needs to resume (e.g., new feedback arrived):

1. Update status back to `in-progress`.
2. Update `closed` field to `null` (or remove).
3. Add a new entry in the Sub-Tasks table.
4. Notify the user that the task is reopened.

### Cancelling a Task

When a task is cancelled:

1. Set status to `cancelled`.
2. Set `closed` field.
3. Document the cancellation reason in Resolution.
4. Do not delete the card.

### Escalating a Blocked Task

When a task is blocked for more than 30 minutes:

1. Set status to `blocked`.
2. Document the blocker in Resolution.
3. Notify Hermes via inbox.
4. Hermes decides: simplify, reassign, escalate to user, or cancel.

## See Also

- Status subfolder reference: [[../Status Subfolder Reference]]
- Tasks index: [[../../Index]]
- Task rules: [[../RULES/Task Rules]]