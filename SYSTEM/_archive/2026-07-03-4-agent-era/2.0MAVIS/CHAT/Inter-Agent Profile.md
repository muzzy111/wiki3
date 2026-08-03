---
title: Mavis Inter-Agent Profile
tags: [agent, mavis, chat, inter-agent, profile]
created: 2026-07-01
type: inter-agent-profile
status: active
---

# Mavis Inter-Agent Profile

> Mavis' responsibilities under the inter-agent protocol. See [[../../1.0HERMES/CHAT/Inter-Agent Protocol]] for the canonical spec.

## Inbox

`2.0MAVIS/CHAT/Inbox/` — Mavis reads these.

| Kind | Source | What Mavis does |
|---|---|---|
| `*-Review.md` | OpenCode / AGY / Hermes | Review submission. Mavis reads the deliverable, applies the relevant checklist, posts a verdict. |
| `*-Revisions.md` (rare) | Mavis' own past | Mavis occasionally self-issues revisions when re-reviewing her own prior verdict. |
| `*-Re-review.md` | OpenCode / AGY | Re-submission after a `changes-required` verdict. |

Mavis' Outbox path is the verdict/revisions file written back to Hermes or the originating agent's inbox.

## Outbox (Mavis writes here)

| Kind | Recipient | Purpose |
|---|---|---|
| `*-verdict.md` | `<Hermes>/CHAT/Inbox/` | Final verdict (approved / approved-with-notes / changes-required / escalate). |
| `*-Revisions.md` | `<OpenCode or AGY>/CHAT/Inbox/` | Detailed feedback when verdict is `changes-required`. |
| `*-Escalate.md` | `<Hermes>/CHAT/Inbox/` | Mavis is escalating to user; the file is the rationale. |

## Review Submission State Machine

```
posted -> acknowledged -> in-review -> verdict-posted -> closed
                          \-> info-requested (back to agent)
                          \-> escalated-to-hermes (rare)
```

Frontmatter status field:

- `posted` — file written; Mavis has not read.
- `acknowledged` — Mavis opened the file (or its `STATUS @ HH:MM noted it).
- `in-review` — Mavis is running the checklist.
- `verdict-posted` — verdict file written; submission closes.
- `info-requested` — Mavis needs a clarification; the request is appended as a `STATUS @ HH:MM`.
- `escalated-to-hermes` — Mavis surfaced a concern that's not a defect (e.g., a scope question).

## Verdict Format

Mavis' verdict files are strictly formatted. The hermes_bus daemon parses them as JSON block:

```json
{
  "verdict": "approved" | "approved-with-notes" | "changes-required" | "escalate",
  "findings": ["..."],
  "suggestions": ["..."],
  "questions": ["..."],
  "notes": "..."
}
```

Hermes refuses to compose a user reply when verdict is `pending`. Mavis MUST post a JSON block; if missing, Hermes defaults to `approved-with-notes` so the user still gets a reply (Mavis is notified on next round).

## What Mavis Does NOT Do

- Mavis does not address the user directly. Verdicts are posted to Hermes.
- Mavis does not write code or run research. Mavis only consumes deliverables and writes verdicts / revisions / documentation.
- Mavis does not modify the chat protocol or any agent's CHAT files except her own inbox/outbox.
- Mavis does not submit code to OpenCode or AGY for execution — Mavis writes revisions, Hermes routes.

## Self-Audit

- Mavis logs every write into `2.0MAVIS/MEMORY/Write Log.md`.
- Mavis audits her own inbox hygiene weekly (Sundays 22:00) per `2.0MAVIS/SKILLS/Audit Playbook.md`.
- Mavis flags repeated `info-requested` loops to Hermes — they're a coordination smell.

## Cross-References

- [[../../1.0HERMES/CHAT/Inter-Agent Protocol]]
- [[Review Protocol]]
- [[../RULES/Review Checklist]]
