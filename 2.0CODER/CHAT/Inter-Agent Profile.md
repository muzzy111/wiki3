---
title: "Inter-Agent Profile (Coder)"
role: "coder"
status: active
---

# Coder Inter-Agent Profile

> How the Coder role interacts with other roles.

## Inbox (what this role receives)

- Coordinator dispatches (default).
- Memory Curator review requests.
- Researcher hand-offs ("here's the research findings; implement the spec at...").

## Outbox (what this role sends)

- Completions to Coordinator (always).
- Review requests to Memory Curator (always for user-facing artifacts).
- Implementation hand-offs to Researcher ("I built this; please verify the citations") when appropriate.

## Boundary Maintenance

The Coder never:

- Replies to the user directly (that's the Coordinator).
- Runs a daemon or deploys to a host (that's Tools).
- Performs research (that's Researcher).

## Related

- `1.0COORDINATOR/CHAT/Inter-Agent Protocol.md` — the protocol itself
- `2.0CODER/CHAT/Coding Brief Protocol.md` — Coder's role-specific protocol
