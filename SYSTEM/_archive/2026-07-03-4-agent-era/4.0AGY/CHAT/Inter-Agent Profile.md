---
title: AGY Inter-Agent Profile
tags: [agent, agy, chat, inter-agent, profile]
created: 2026-07-01
type: inter-agent-profile
status: active
---

# AGY Inter-Agent Profile

> AGY's responsibilities under the inter-agent protocol. See [[../../1.0HERMES/CHAT/Inter-Agent Protocol]] for the canonical spec.

## Inbox

`4.0AGY/CHAT/Inbox/` — AGY reads these.

| Kind | Source | Purpose |
|---|---|---|
| `*-research-brief.md` | Hermes | Dispatch from Hermes (direct user request). |
| `*-handoff.md` | Hermes | Hermes-mediated handoff from OpenCode. |
| `*-Revisions.md` | Mavis | Review feedback on a research deliverable. |
| `system-*.md` (broadcast) | Hermes | Read-once system notice. |

## Outbox (AGY writes here)

| Kind | Recipient | Purpose |
|---|---|---|
| `*-completion.md` | `<Hermes>/CHAT/Inbox/` | AGY finished. For user-facing research: include a review submission marker. |
| `*-review.md` | `<Mavis>/CHAT/Inbox/` | Review submission (only for user-facing research per [[../../1.0HERMES/RULES/Routing Rules]]). |
| Research raw drop | `MEMORY/KARPATHY/raw/` | Every user-facing research writes a raw entry for Mavis to curate. |

## State Machine for Research Briefs

```
pending -> acknowledged -> accepted -> searching -> synthesizing
                                              \-> blocked
                                              \-> declined
synthesizing -> review-ready (user-facing only)
             -> done (pure exploration)
```

The `Hermes -> AGY` dispatch flow is documented in [[Research Brief Protocol]]. AGY's research delivery rules are in [[../AGENT]] ("The Research Job").

## What AGY Posts When Finishing

A `*-completion.md` written to `1.0HERMES/CHAT/Inbox/`:

```markdown
---
date: YYYY-MM-DD HH:MM
type: completion
status: posted
task_id: <task-id>
from: agy
to: hermes
priority: normal
correlation_id: <task-id>
---

# Completion of <brief subject>

AGY finished.

## Deliverables

- `<synthesis path>`
- `<raw sources path>`

## Acceptance Criteria

1. criterion 1 — met
2. criterion 2 — met

## Sourcing Discipline

- Sources: <list of URLs with access dates>
- Failed searches: <what was tried but not found>

## Karpathy Raw Drop

- Dropped to `MEMORY/KARPATHY/raw/<date> — <slug>.md` for Mavis curation.

## Notes

<one paragraph>

## Status Updates

<!-- Hermes appends here -->
```

## Handoff Receipt

When AGY receives a `*-handoff.md` from Hermes:

1. AGY reads the request body (research scope, deliverable format, deadline).
2. AGY replies with a `*-completion.md` to Hermes' inbox.
3. If user-facing, AGY also writes `*-review.md` to Mavis and a raw entry to `MEMORY/KARPATHY/raw/`.
4. AGY does NOT post back to OpenCode. Hermes is the broker.

## What AGY Does NOT Do

- AGY does not write into OpenCode's inbox directly; replies go to Hermes.
- AGY does not skip sourcing citations. Every claim cites a URL.
- AGY does not pull from the web speculatively — only per a scoped brief.
- AGY does not push to Google Drive mid-task — only via the scheduled backup (default 15min sync).

## Cross-References

- [[../../1.0HERMES/CHAT/Inter-Agent Protocol]]
- [[Research Brief Protocol]]
- [[../RULES/Research Protocol]]
- [[../RULES/Backup Protocol]]
