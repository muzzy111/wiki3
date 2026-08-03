---
title: Coding Brief Protocol
tags: [agent, opencode, chat, protocol]
created: 2026-07-01
type: protocol
status: active
---

# Coding Brief Protocol

> How OpenCode receives work from Hermes, executes it, and reports back.

## Channel

OpenCode's inbox is `3.0OPENCODE/CHAT/Inbox/`. Outbox is `3.0OPENCODE/CHAT/Outbox/`. Hermes writes briefs into the inbox; OpenCode posts status updates into the same inbox file. Final completion is posted to the outbox.

## Brief Format

Hermes writes a brief as `3.0OPENCODE/CHAT/Inbox/<task-id>.md`. The brief contains:

```markdown
---
date: YYYY-MM-DD HH:MM
type: coding-brief
status: pending | acknowledged | planning | implementing | testing | review-ready | done | failed | cancelled
task_id: <task-id>
priority: low | normal | high | urgent
---

## Goal

<one paragraph: what to build>

## Acceptance Criteria

1. <numbered, measurable>
2. ...

## Constraints

- **Language:** <Python | Node | ...>
- **Dependencies:** <list or "any"/>
- **Interfaces:** <what this code must integrate with>
- **Forbidden:** <what not to do, e.g., "no third-party API calls">

## Context

- <links to prior notes, files, prior commands>

## Deadline

<when this should be done>

## Review Notes (from Mavis, if pre-dispatched)

<if Mavis pre-reviewed the spec, her notes go here>
```

## Status Updates

OpenCode posts status updates into the same inbox file under `## STATUS @ HH:MM` headings:

```markdown
## STATUS @ HH:MM
- state: acknowledged | planning | implementing | testing | review-ready | blocked
- notes: <one or two lines>
```

Status transitions:

- `pending` -> `acknowledged` when OpenCode reads the brief.
- `acknowledged` -> `planning` when OpenCode starts planning.
- `planning` -> `implementing` when OpenCode starts coding.
- `implementing` -> `testing` when OpenCode runs tests.
- `testing` -> `review-ready` when OpenCode submits to Mavis.
- `review-ready` -> `implementing` if Mavis sends back revisions.
- `review-ready` -> `done` when Mavis approves.
- any state -> `blocked` if OpenCode cannot proceed; reason in notes.
- any state -> `cancelled` if Hermes cancels.

## Plan Submission

Before implementing non-trivial work, OpenCode writes a plan:

- `3.0OPENCODE/SOLO-PROJECTS/<project-id>/PLAN.md`
- Posted to inbox as a status update with a link to the plan.

The plan includes:

- Files to be created or modified (paths).
- Dependencies to be added.
- Tests to be written.
- Order of operations.
- Risks and tradeoffs.
- Estimated complexity (small / medium / large).

Hermes may approve the plan, request changes, or escalate. OpenCode does not start implementing before Hermes approves the plan, unless the brief explicitly says "skip planning" or the change is trivial (one-file, <50 lines).

## Implementation Standards

OpenCode follows `../RULES/Coding Standards.md`. Highlights:

- Type hints (Python/TS).
- Tests written alongside code.
- No secrets in code.
- Dependencies pinned to exact versions.
- Error handling explicit, not silent.
- Comments explain *why*, not *what*.

## Review Submission

When OpenCode is ready for Mavis' review, OpenCode:

1. Marks status `review-ready`.
2. Writes a review request to `2.0MAVIS/CHAT/Inbox/<task-id> — Review.md` with:
   - Brief recap (one paragraph).
   - Acceptance criteria with status (met / partially met / not met) for each.
   - File list.
   - Test results.
   - Known limitations.
3. Waits for Mavis' verdict.

Mavis' verdict follows the format in [[../../2.0MAVIS/CHAT/Review Protocol]]. OpenCode addresses `changes required` items and re-submits.

## Final Delivery

When Mavis approves (`approved` or `approved with notes`):

1. OpenCode marks status `done` in the inbox file.
2. OpenCode writes a completion note to `3.0OPENCODE/CHAT/Outbox/<task-id>.md` with:
   - Summary of what was delivered.
   - Path to the project folder.
   - Path to Mavis' review verdict.
   - Path to tests.
   - Any followup notes.
3. OpenCode does not announce to the user. Hermes reads the outbox and composes the user reply.

## Cancellation

Hermes may cancel a task by setting status to `cancelled` in the inbox file. OpenCode halts work in progress, writes a status update noting where work stopped, and marks the task `cancelled`.

## Multi-Project Work

If a brief implies multiple deliverables (e.g., "build X and document Y"), OpenCode:

1. Asks Hermes to split into separate tasks.
2. Or, if the split is impractical, treats each deliverable as a sub-task with its own PLAN.md and review cycle.

OpenCode does not silently bundle multiple deliverables into one review.

## See Also

- OpenCode's role: [[../AGENT]]
- Coding standards: [[../RULES/Coding Standards]]
- Review protocol: [[../../2.0MAVIS/CHAT/Review Protocol]]
- Routing rules: [[../../1.0HERMES/RULES/Routing Rules]]