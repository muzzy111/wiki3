---
title: "Local Server Bridge"
type: wiki-note
domain: role/tools
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-tools
  - type/wiki-note
  - topic/tools
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# Local Server Bridge

> The ttyd-based Hermes terminal bridge.
> Role domain: **tools**. Status: active.

## Summary

The ttyd-based Hermes terminal bridge.

## Key Points

- Auth token via TTYD_TOKEN env var.
- Default port 7681; backed by a static listener.
- Health: HTTP 200 on root; 401 with bad token.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *local server bridge* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `TOOLS/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
