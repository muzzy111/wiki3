---
title: Review Protocol
tags: [agent, mavis, chat, review, protocol]
created: 2026-07-01
type: protocol
status: active
---

# Review Protocol

> The canonical protocol Mavis uses to review deliverables from OpenCode and AGY before they reach the user.

## Core Principle

No deliverable reaches the user without Mavis' review stamp. This is not bureaucracy — it is the team's defense against silent mistakes, security holes, broken references, and tone drift.

## Channels

Mavis receives review requests in `2.0MAVIS/CHAT/Inbox/`. The request format is set by Hermes and follows a standard template (see below).

Mavis posts review verdicts into the same inbox file under a `## VERDICT` heading, then notifies Hermes via a status update.

## Request Format

Hermes writes a review request as `2.0MAVIS/CHAT/Inbox/<task-id> — Review.md`. The file contains:

```markdown
---
date: YYYY-MM-DD HH:MM
type: review-request
status: pending
task_id: <task-id>
deliverable_agent: OpenCode | AGY | Mavis
deliverable_paths:
  - <path 1>
  - <path 2>
priority: low | normal | high | urgent
---

## Brief

<one paragraph: what the deliverable is and why it exists>

## Acceptance Criteria

<numbered list: what "done" looks like>

## Deliverables

<list of files and links>

## Deadline

<when Mavis' verdict is needed>
```

## Verdict Format

Mavis posts a verdict into the same file under a `## VERDICT` heading:

```markdown
## VERDICT

**Verdict:** approved | approved with notes | changes required | escalate to user

**Reviewed by:** Mavis
**Reviewed at:** YYYY-MM-DD HH:MM

### Findings

1. <finding with file path and line number when applicable>
2. ...

### Suggestions

1. <improvement that is not a blocker>

### Questions

1. <anything that needs clarification>

### Notes

<any other context the originating agent or Hermes should know>
```

Mavis then updates the frontmatter `status` to `approved` / `approved-with-notes` / `changes-required` / `escalated`.

## The Review Process

### 1. Receipt

Mavis reads the request. Mavis checks:

- Are the deliverables linked and present?
- Is the brief clear?
- Are the acceptance criteria measurable?
- Is the deadline reasonable for the scope?

If the request is malformed, Mavis sends it back to Hermes with notes. Mavis does not start reviewing incomplete requests.

### 2. Read Everything

Mavis reads every linked file end-to-end. Mavis reads dependencies (config files, related notes) as needed to understand context.

### 3. Apply the Checklist

The relevant checklist is in `2.0MAVIS/RULES/Review Checklist.md`. Mavis applies it section by section.

### 4. Reproduce (When Applicable)

For code, Mavis attempts to run the code or the test suite. If the code cannot run in Mavis' environment, Mavis notes the gap and asks OpenCode to provide a run log.

For research, Mavis spot-checks citations by visiting two or three of the most load-bearing source URLs.

For environment changes, Mavis verifies the change by reading the diff and the related system record entry.

### 5. Compose the Verdict

Mavis writes the verdict in the format above. Mavis is precise. Mavis is not vague. Mavis does not flatter. The verdict is for the team to act on.

### 6. Notify

Mavis updates the task card in `TASKS/STATUS/<task-id>.md` with the verdict. Mavis posts a status update into the originating agent's inbox:

```markdown
## REVIEW READY @ HH:MM
- task_id: <task-id>
- verdict: <verdict>
- file: <path to verdict>
```

## Verdict Semantics

- **approved** — Mavis found nothing that blocks delivery. Hermes may compose the user reply.
- **approved with notes** — Mavis found non-blocking improvements. Hermes includes the notes in the user reply; the originating agent may address them in a follow-up.
- **changes required** — Mavis found blockers. The deliverable goes back to the originating agent. Hermes holds the user reply until the next review cycle.
- **escalate to user** — Mavis found something only the user can decide (scope question, security question, conflict with a stated preference). Hermes stops and asks.

## What Mavis Does Not Review

- Hermes' chat replies themselves. The user reviews Hermes' replies by replying.
- Internal Mavis notes. Mavis is self-auditing via the weekly audit.
- `SYSTEM/LOCK/` files. These are locked; Mavis reads but does not review.

## Failure Modes Mavis Watches For

- **Reviewing without reading.** Mavis does not rubber-stamp. Every verdict is grounded in concrete findings.
- **Reviewing too long.** If a review takes longer than half the deadline, Mavis posts a `progress` update and may downgrade scope to deliver a partial verdict.
- **Confusing blockers with nits.** A blocker is something that would embarrass the team if it reached the user. A nit is something the agent could fix in a follow-up. Mavis does not promote nits to blockers.
- **Skipping reproduction.** Mavis does not approve code Mavis has not run or seen run.

## Inbox Hygiene

Mavis' inbox files persist. Files move to `2.0MAVIS/CHAT/Archive/<year>/` quarterly. The archive is searchable; Mavis uses it to check for recurring issues with the same agent on similar deliverables.