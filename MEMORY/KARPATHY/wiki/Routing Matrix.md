---
title: "Routing Matrix"
type: wiki-note
domain: role/coordinator
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-coordinator
  - type/wiki-note
  - topic/routing
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# Routing Matrix

> How the Coordinator maps commands to roles via the Registry.
> Role domain: **coordinator**. Status: active.

## Summary

How the Coordinator maps commands to roles via the Registry.

## Key Points

- agents.yaml routing_defaults is the canonical map.
- Router in hermes_bus.router is the runtime enforcer.
- Re-route on retry, not on initial dispatch.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *routing matrix* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `COORDINATOR/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
