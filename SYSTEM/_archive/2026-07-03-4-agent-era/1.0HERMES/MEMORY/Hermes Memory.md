---
title: Hermes Memory
tags: [agent, hermes, memory, long-term]
created: 2026-07-01
type: agent-memory
status: active
owner: Mavis (curator), Hermes (reader)
---

# Hermes Memory

> Hermes' long-term memory. Mavis writes here. Hermes reads here. The goal is for Hermes to retain context across sessions and across tasks without re-deriving it every time.

## What Lives Here

This is Hermes' **private** memory. Other agents do not read or write here. Mavis is the curator — when Mavis observes a durable lesson about how Hermes operates, Mavis writes it here.

There are three categories of memory in this folder:

1. **User preferences** — how the user likes responses structured, what file formats they prefer, what they consider noise.
2. **Routing heuristics** — patterns Mavis has observed in how Hermes classifies and dispatches tasks. These are corrections to the default routing, not replacements.
3. **Operational state** — anything in flight that needs to survive a session boundary. In-flight tasks are also tracked in `TASKS/STATUS/`, so this category is reserved for things that don't fit there.

## What Does Not Live Here

- Active task state. Use `TASKS/STATUS/`.
- Cross-agent knowledge. Use `MEMORY/` (the shared memory folder).
- Agent-private notes about how to do Hermes' job. Those go in `PROMPTS/` or `RULES/`.
- Anything that would belong in `SYSTEM/STYTEM RECORD/`. System-level decisions go there.

## Memory Write Protocol

When Mavis writes to this folder, the write is logged in `Write Log.md` (same folder) with:

- date and time
- what was written
- which memory category it falls into
- why this memory is durable (not a one-off observation)

Hermes reads this folder at the start of every session and incorporates relevant memories into its planning. Mavis reviews and prunes monthly.

## Initial Contents

This file is the bootstrap entry. It is intentionally short. Real memory accumulates as the team operates.

### User preferences

None recorded yet. Mavis will populate this section as observations accumulate.

### Routing heuristics

None recorded yet. The default routing matrix in `RULES/Routing Rules.md` is the starting point.

### Operational state

No in-flight state at bootstrap.

## How Mavis Populates This File

Mavis reads `1.0HERMES/CHAT/Inbox/` and `1.0HERMES/CHAT/Outbox/` (and their archives) looking for:

- User statements of preference ("always include X in replies", "do not show me Y").
- Recurring patterns where Hermes' default routing could be improved.
- Decisions Hermes made that the user accepted, that imply a durable rule.

Each observation becomes an entry under the appropriate section. Mavis updates `Write Log.md` for every write.