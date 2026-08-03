---
title: Session Log
tags: [chat, hermes, session-log, audit]
created: 2026-07-01
type: session-log
status: active
owner: Hermes (writes)
---

# Session Log

> Hermes' per-session activity log. Hermes-only writes. Append-only. Used to audit which commands were processed when, and how long each took.

## How to Append

At the start and end of every Hermes session, Hermes appends a session block. Each block lists:

- Session start/end timestamps.
- Commands picked up (with IDs).
- Commands completed (with outcomes).
- Commands still in progress (will resume next session).
- Anything notable that happened during the session (escalations, retries, deviations).

## Current Sessions

### Session 2026-07-01 — Bootstrap

- **Start:** 2026-07-01 (initial vault bootstrap)
- **End:** ongoing
- **Operator:** Mavis (on behalf of the user)
- **Commands processed:** none (bootstrap session, not a command-processing session)
- **Notable:** Vault structure initialized. Command channel created at `CHAT/INBOX.md` and `CHAT/OUTBOX.md`. Awaiting first user command.
- **Next session:** pending first command or chat message.