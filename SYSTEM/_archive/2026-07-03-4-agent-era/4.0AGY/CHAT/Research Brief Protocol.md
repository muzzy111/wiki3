---
title: Research Brief Protocol
tags: [agent, agy, chat, research, protocol]
created: 2026-07-01
type: protocol
status: active
---

# Research Brief Protocol

> How AGY receives research work from Hermes, executes it, and reports back.

## Channel

AGY's inbox is `4.0AGY/CHAT/Inbox/`. Outbox is `4.0AGY/CHAT/Outbox/`. Hermes writes briefs into the inbox; AGY posts status updates into the same inbox file. Final completion posts to the outbox.

## Brief Format

Hermes writes a brief as `4.0AGY/CHAT/Inbox/<task-id>.md`. The brief contains:

```markdown
---
date: YYYY-MM-DD HH:MM
type: research-brief
status: pending | acknowledged | searching | synthesizing | review-ready | done | failed | cancelled
task_id: <task-id>
priority: low | normal | high | urgent
---

## Question

<the question AGY must answer>

## Acceptance Criteria

1. <numbered, measurable>
2. ...

## Scope

- **Topics:** <what to cover>
- **Out of scope:** <what to exclude>
- **Depth:** <overview | standard | deep>
- **Sources:** <preferred source types or specific sources>
- **Forbidden:** <what AGY must not consult, e.g., specific domains>

## Output Format

<markdown report | summary | raw data | etc.>

## Context

- <links to prior notes, files, prior commands>

## Deadline

<when this should be done>

## Review Notes (from Mavis, if pre-dispatched)

<if Mavis pre-reviewed the spec, her notes go here>
```

## Status Updates

AGY posts status updates into the same inbox file under `## STATUS @ HH:MM` headings:

```markdown
## STATUS @ HH:MM
- state: acknowledged | searching | synthesizing | review-ready | blocked
- notes: <one or two lines>
```

Status transitions:

- `pending` -> `acknowledged` when AGY reads the brief.
- `acknowledged` -> `searching` when AGY starts web research.
- `searching` -> `synthesizing` when AGY moves from gathering to writing.
- `synthesizing` -> `review-ready` when AGY submits to Mavis (only if user-facing).
- `synthesizing` -> `done` when AGY completes (only if not user-facing).
- `review-ready` -> `synthesizing` if Mavis sends back revisions.
- `review-ready` -> `done` when Mavis approves.
- any state -> `blocked` if AGY cannot proceed; reason in notes.
- any state -> `cancelled` if Hermes cancels.

## Research Output

AGY writes the research report at `4.0AGY/SOLO-PROJECTS/<project-id>/report.md`. The report follows the format from `../AGENT.md` under "The Research Job":

1. Brief recap.
2. Method.
3. Findings.
4. Synthesis.
5. Caveats.
6. Sources.

For each user-facing deliverable, AGY also drops a raw entry into `MEMORY/KARPATHY/raw/YYYY-MM-DD — <slug>.md` for Mavis to potentially curate into the wiki.

## Review Submission

When AGY is ready for Mavis' review (only for user-facing research), AGY:

1. Marks status `review-ready`.
2. Writes a review request to `2.0MAVIS/CHAT/Inbox/<task-id> — Review.md`.
3. Waits for Mavis' verdict.

Mavis checks per the research section of [[../../2.0MAVIS/RULES/Review Checklist]].

## Final Delivery

When Mavis approves (or for non-user-facing research, when AGY completes):

1. AGY marks status `done` in the inbox file.
2. AGY writes a completion note to `4.0AGY/CHAT/Outbox/<task-id>.md`.
3. AGY does not announce to the user. Hermes reads the outbox and composes the user reply.

## Pure Exploration vs User-Facing

Not every research task is user-facing. Pure exploration (e.g., "scan the web for X and tell me if anything is interesting") may not need Mavis' review. Hermes marks user-facing intent in the brief via the `review: required | optional | not-required` field (Hermes may extend the frontmatter).

Default: `review: required` if the research will be quoted to the user; `not-required` otherwise.

## Cancellation

Hermes may cancel by setting status to `cancelled`. AGY halts, writes a status update, and marks the task `cancelled`.

## See Also

- AGY's role: [[../AGENT]]
- Research protocol: [[../RULES/Research Protocol]]
- Backup protocol: [[../RULES/Backup Protocol]]
- Review protocol: [[../../2.0MAVIS/CHAT/Review Protocol]]
- Routing rules: [[../../1.0HERMES/RULES/Routing Rules]]