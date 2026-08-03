---
title: 2.0MAVIS / CHAT
tags: [agent, mavis, chat, review]
created: 2026-07-01
type: chat-readme
status: active
---

# 2.0MAVIS / CHAT

This folder holds Mavis' chat protocol and the review request inbox
Hermes uses to request verdicts from Mavis.

## Layout

```
2.0MAVIS/CHAT/
|-- Review Protocol.md           format Hermes writes for review requests
|-- README.md                    this file
|-- Inbox/                       incoming review requests from Hermes
`-- Outbox/                      verdict replies Mavis posts to Hermes
```

## How Hermes dispatches a review to Mavis

1. After an agent (OpenCode or AGY) finishes a user-facing task,
   Hermes writes a review request at
   `2.0MAVIS/CHAT/Inbox/<task-id> — Review.md` with the deliverable list.
2. Hermes spawns `agy --print "<Mavis persona + JSON verdict prompt>"`
   with cwd = the originating agent's `SOLO-PROJECTS/<task-id>/`.
3. Mavis produces a verdict (approved, approved-with-notes,
   changes-required, or escalate).
4. Mavis writes her verdict into the review file
   (`<task-id> — Review.md` under `## VERDICT`) and updates the
   frontmatter `status` field.
5. Hermes parses the verdict and composes the user reply.

## Verdict format (strict)

Mavis is required to return a JSON block in this exact shape:

```json
{
  "verdict": "approved" | "approved-with-notes" | "changes-required" | "escalate",
  "findings": ["..."],
  "suggestions": ["..."],
  "questions": ["..."],
  "notes": "..."
}
```

The hermes_bus daemon tolerates prose wrappers around the JSON block
and falls back to verdict-word heuristics if the JSON is missing.

## See Also

- [[Review Protocol]]
- [[../AGENT]]
