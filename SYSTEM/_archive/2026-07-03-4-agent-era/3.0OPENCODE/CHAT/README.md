---
title: 3.0OPENCODE / CHAT
tags: [agent, opencode, chat, code]
created: 2026-07-01
type: chat-readme
status: active
---

# 3.0OPENCODE / CHAT

This folder holds OpenCode's chat protocol and the inbox/outbox Hermes
uses to dispatch to OpenCode.

## Layout

```
3.0OPENCODE/CHAT/
|-- Coding Brief Protocol.md    brief format Hermes writes into Inbox/
|-- README.md                    this file
|-- Inbox/                       incoming coding briefs from Hermes
`-- Outbox/                      completion notices OpenCode posts back to Hermes
```

## How Hermes dispatches to OpenCode

1. Hermes writes a coding brief at
   `3.0OPENCODE/CHAT/Inbox/<task-id> — coding-brief.md`.
2. Hermes spawns `opencode run "<persona + brief prompt>"` with cwd
   `3.0OPENCODE/SOLO-PROJECTS/<task-id>/`.
3. OpenCode writes code (and tests) into that workdir.
4. On completion, OpenCode submits to Mavis for review.
5. After review, OpenCode marks the brief `done` and posts a note to
   `3.0OPENCODE/CHAT/Outbox/<task-id>.md`.
6. Hermes composes the OUTBOX reply.

## See Also

- [[Coding Brief Protocol]]
- [[../AGENT]]
- [[SOLO-PROJECTS/loop-chat-system/README|Loop Chat System (this daemon's source lives here)]]
