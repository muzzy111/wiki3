---
title: "Docker Compose for MCP"
type: wiki-note
domain: role/tools
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-tools
  - type/wiki-note
  - topic/docker
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# Docker Compose for MCP

> Standard compose layout for code-based MCP servers.
> Role domain: **tools**. Status: active.

## Summary

Standard compose layout for code-based MCP servers.

## Key Points

- stdio transport by default; no ports exposed unless HTTP.
- Bind-mount vault root read-only into /vault.
- Non-root user inside the container.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *docker compose for mcp* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `TOOLS/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
