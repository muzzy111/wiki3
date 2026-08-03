---
title: Task Tracking Rules
tags: [tasks, status, rules]
created: 2026-07-01
type: status-rules
status: active
---

# Task Tracking Rules

> How tasks are created, updated, prioritized, and closed. Subordinate to `SYSTEM/SYSTEM RULES/`.

## Creation

- Every task card lives at `TASKS/STATUS/<task-id>.md`.
- `<task-id>` format: `YYYYMMDD-HHMM-<short-slug>`.
- The card has full frontmatter (task_id, type, status, priority, owner, created).
- The card body has: Source, Goal, Acceptance Criteria, Plan, Sub-Tasks, Deliverables, Review, Resolution.

## Status Transitions

```
queued -> in-progress -> review -> done
                  |          |
                  v          v
              blocked    changes required -> in-progress
                  |
                  v
              done | failed | cancelled
```

## Priority

- `urgent`: notify user on start and completion.
- `high`: process before normal.
- `normal`: process in order.
- `low`: batch and process when no higher-priority work pending.

## Closure

A task is closed (`status: done`) only when:

1. All acceptance criteria are met (or explicitly waived by the user).
2. All deliverables are linked from the card.
3. Mavis has reviewed the user-facing deliverables.
4. The user has been notified (via Hermes).

A task with `status: failed` includes the reason in the Resolution section. The card is kept for audit.

A task with `status: cancelled` includes the cancellation reason. The card is kept.

## Auto-Close Rules

- Tasks in `in-progress` for more than 7 days without a status update are flagged in the weekly audit.
- Tasks in `review` for more than 3 days without a verdict are flagged.
- Tasks in `queued` for more than 30 days are reviewed for relevance.

## Authority

- Hermes creates and updates task cards.
- The assigned agent updates status fields during work.
- Mavis updates the Review section.
- The user may close any task directly via chat or command pad.

## See Also

- Status subfolder reference: [[../Status Subfolder Reference]]
- Tasks index: [[../../Index]]
- System rules: [[../../../SYSTEM/SYSTEM RULES/Rules]]