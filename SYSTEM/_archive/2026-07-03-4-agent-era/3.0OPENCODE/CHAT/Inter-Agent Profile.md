---
title: OpenCode Inter-Agent Profile
tags: [agent, opencode, chat, inter-agent, profile]
created: 2026-07-01
type: inter-agent-profile
status: active
---

# OpenCode Inter-Agent Profile

> OpenCode's responsibilities under the inter-agent protocol. See [[../../1.0HERMES/CHAT/Inter-Agent Protocol]] for the canonical spec.

## Inbox

`3.0OPENCODE/CHAT/Inbox/` — OpenCode reads these.

| Kind | Source | Purpose |
|---|---|---|
| `*-coding-brief.md` | Hermes | Dispatch from Hermes. OpenCode begins work. |
| `*-Revisions.md` | Mavis | Code review feedback; OpenCode applies changes. |
| `*-Re-review.md` | Hermes | Resubmit signal after revision. |
| `*-handoff-reply.md` | Hermes | Answer to a handoff OpenCode sent earlier (e.g. AGY's research result via Hermes). |
| `system-*.md` (broadcast) | Hermes | Read-once system notice. |

## Outbox (OpenCode writes here)

| Kind | Recipient | Purpose |
|---|---|---|
| `*-completion.md` | `<Hermes>/CHAT/Inbox/` | OpenCode finished; deliverables live under `SOLO-PROJECTS/<task-id>/`. |
| `*-review.md` | `<Mavis>/CHAT/Inbox/` | Review submission (must precede any `completion.md` whose deliverable is user-facing). |
| `*-handoff-request.md` | `<Hermes>/CHAT/Inbox/` | OpenCode needs something from AGY (research, math, library lookup) — requests Hermes-mediated handoff. |

OpenCode also mirrors the completion to `3.0OPENCODE/CHAT/Outbox/<task-id>.md` for its own audit log.

## State Machine for Coding Briefs

```
pending -> acknowledged -> accepted -> working -> review-ready -> done
                                       \-> blocked
                                       \-> declined
```

The `Hermes -> OpenCode` dispatch flow is documented in [[Coding Brief Protocol]]. OpenCode's parent state machine is governed there; this profile focuses on the inter-agent completion-and-handoff edges.

## What OpenCode Posts When Finishing

A `*-completion.md` written to `1.0HERMES/CHAT/Inbox/`:

```markdown
---
date: YYYY-MM-DD HH:MM
type: completion
status: posted
task_id: <task-id>
from: opencode
to: hermes
priority: normal
correlation_id: <task-id>     # same as task_id for the initial dispatch
---

# Completion of <brief subject>

OpenCode finished work on <task-id>.

## Deliverables

- `<path relative to vault>`
- `<path>`

## Tests

- `pytest tests/` result: <one-line summary>

## Acceptance Criteria

1. criterion 1 — met
2. criterion 2 — met

## Notes

<one paragraph of caveats>

## Status Updates

<!-- Hermes appends ## STATUS @ HH:MM as it integrates the deliverable -->
```

OpenCode mirrors this to `3.0OPENCODE/CHAT/Outbox/<task-id>.md` so its own audit trail is intact.

## What OpenCode Does NOT Do

- OpenCode does not write into AGY's inbox directly; cross-agent requests go through Hermes via a `*-handoff-request.md`.
- OpenCode does not skip Mavis review on user-facing work. The coding brief's `review: required|optional|not-required` field tells OpenCode whether to write the `*-review.md`.
- OpenCode does not address the user. Completion notes go to Hermes.
- OpenCode does not edit the chat protocol or any other agent's inbox.

## Handoff Pattern

When OpenCode needs information only AGY can fetch:

1. OpenCode writes `3.0OPENCODE/CHAT/Inbox/<task-id> — handoff-request.md` then **mirrors** to `1.0HERMES/CHAT/Inbox/<task-id> — handoff-request.md`.
   - Hermes' watcher reads its own inbox, not OpenCode's; the mirror is the trigger.
   - Frontmatter `from: opencode`, `to: hermes`, `type: handoff-request`.
2. Hermes validates the request is non-trivial and not skipping Mavis review.
3. Hermes writes `4.0AGY/CHAT/Inbox/<task-id>-H1 — handoff.md` with the research brief.
4. AGY completes and writes `1.0HERMES/CHAT/Inbox/<task-id>-H1 — completion.md`.
5. Hermes writes `3.0OPENCODE/CHAT/Inbox/<task-id>-H1 — handoff-reply.md` linking the AGY completion.
6. OpenCode resumes its task.

The `-H1` suffix keeps the handoff's task-id distinct from OpenCode's parent task. Mavis audits handoff chains via the parent task.

## Cross-References

- [[../../1.0HERMES/CHAT/Inter-Agent Protocol]]
- [[Coding Brief Protocol]]
- [[../RULES/Coding Standards]]
