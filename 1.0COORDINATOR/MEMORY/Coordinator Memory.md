---
title: "Coordinator Memory"
role: "coordinator"
status: active
---

# Coordinator Memory

> Long-term memory for the Coordinator role.

## Long-term Memory

> Patterns the Coordinator role has internalized.

- **Sweep cadence:** default 5-minute inbox sweep via the `scripts/session-start.*` cron. The Memory Curator reviews sweep throughput weekly.
- **User channel:** the user speaks via `CHAT/INBOX.md` and the in-chat reply is the only authoritative user-facing surface.
- **Routing matrix:** mirrored from `SYSTEM/agents.yaml:routing_defaults`; this file mirrors that mapping. Update both when the routing logic changes.
- **Memory Curator reviews every user-facing artifact** — even trivial responses. This is the design.

## Recent Context

> Last 5 sessions' worth of context. Trimmed weekly by Memory Curator.

- **2026-07-03:** Migration to 5-role topology completed. Routing matrix updated. Inbox sweep stable.
- **2026-07-01:** Vault bootstrap completed (4-agent era). Inter-agent protocol implemented.

## Outstanding Questions

- Should the Coordinator maintain a "needs user reply" flag on briefs the user should glance at? Currently no.

## How to Update

- Append to "Recent Context" for each session.
- Promote stable patterns to "Long-term Memory" once they've held across 3+ sessions.
- Move resolved items out of "Outstanding Questions" to `1.0COORDINATOR/CHAT/Archive/`.
