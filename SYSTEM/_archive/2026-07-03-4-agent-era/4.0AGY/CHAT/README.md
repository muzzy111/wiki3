---
title: 4.0AGY / CHAT
tags: [agent, agy, chat, research]
created: 2026-07-01
type: chat-readme
status: active
---

# 4.0AGY / CHAT

This folder holds AGY's chat protocol and the inbox/outbox Hermes uses
to dispatch to AGY at runtime.

## Layout

```
4.0AGY/CHAT/
|-- Research Brief Protocol.md     brief format Hermes writes into Inbox/
|-- README.md                       this file
|-- Inbox/                          incoming research briefs from Hermes
`-- Outbox/                         completion notices AGY posts to Hermes
```

## How Hermes dispatches to AGY

1. Hermes writes a research brief at
   `4.0AGY/CHAT/Inbox/<task-id> — research-brief.md`.
2. Hermes spawns `agy --print "<persona + brief prompt>"` with cwd
   `4.0AGY/SOLO-PROJECTS/<task-id>/`.
3. AGY writes deliverables into that workdir.
4. AGY posts a completion note to
   `4.0AGY/CHAT/Outbox/<task-id>.md`.
5. Hermes pulls the result, runs Mavis review, and writes the user reply.

## See Also

- [[Research Brief Protocol]]
- [[../AGENT]]
