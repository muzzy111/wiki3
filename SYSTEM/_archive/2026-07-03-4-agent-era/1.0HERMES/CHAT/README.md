---
title: 1.0HERMES / CHAT
tags: [agent, hermes, chat]
created: 2026-07-01
type: chat-readme
status: active
---

# 1.0HERMES / CHAT

Hermes is the only agent that talks to the user directly. This folder
holds the canonical Hermes-side chat protocol.

## Layout

```
1.0HERMES/CHAT/
|-- Chat Protocol.md      single source of truth for Hermes' chat contract
|-- README.md             this file
|-- Inbox/                (reserved) inbound briefs the user might drop here
|-- Outbox/               (reserved) outbound status updates not on the user pad
`-- Archive/              historical, moved here quarterly
```

## How chat works at runtime

The `hermes_bus` daemon at `3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/`
executes the canonical protocol. The full lifecycle is documented in
`Chat Protocol.md` and mirrored in `docs/protocol.md`.

The actual runnable entry points are:

- `python -m hermes_bus.daemon --vault <path> --once`  (single sweep)
- `python -m hermes_bus.daemon --vault <path>`          (long-running)
- `python -m hermes_bus.vault_init --vault <path>`      (idempotent init)

## See Also

- [[Chat Protocol]]
- [[../../3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/README|Loop Chat System]]
- [[../../SYSTEM/SYSTEM RECORD/2026-07-01 — Chat System Operational Rebuild]]
