---
title: "MCP Server Implementation"
type: wiki-note
domain: role/coder
source: "[[RAW/2026-07-03 — wiki-seed]]"
tags:
  - domain/role-coder
  - type/wiki-note
  - topic/mcp-implement
  - status/active
created: 2026-07-03
modified: 2026-07-03
status: active
---

# MCP Server Implementation

> How the Coder implements MCP server scaffolds.
> Role domain: **coder**. Status: active.

## Summary

How the Coder implements MCP server scaffolds.

## Key Points

- FastMCP or official MCP SDK; pin versions.
- Path-traversal protection is mandatory.
- 6+ pytest tests per server covering happy path plus edge cases.

## Application

When this role is the active agent in a dispatch, this wiki note provides
the working memory for the *mcp server implementation* topic. Cross-reference with
the role's persona (in `1.0COORDINATOR/PROMPTS/`, `2.0CODER/PROMPTS/`, etc).

## Source

This wiki note was seeded as part of the 5-role migration; the canonical
source is `MEMORY/KARPATHY/raw/2026-07-03 — wiki-seed.md`.

## Related

- `SYSTEM/agents.yaml` — the registry
- `CODER/AGENT.md` — the role definition
- [[Master Index]] (Karpathy schema)
