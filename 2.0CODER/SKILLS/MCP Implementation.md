---
title: "MCP Implementation"
role: "coder"
status: active
---

# MCP Implementation

> How the Coder role implements MCP servers.

## Purpose

The Coordinator authors the spec; the Coder implements the server. The Coder follows the spec, not the other way around.

## When to Use

- Implementing any new MCP server that's been spec'd.

## Procedure

1. Read `MCP/servers/<id>/server-spec.md`.
2. Choose transport (stdio / http / sse) per the spec.
3. Use FastMCP (`from mcp.server.fastmcp import FastMCP`) or the official SDK directly.
4. Implement every tool from the spec; raise `ToolError` on invalid params.
5. Implement path-traversal protection for any filesystem-touching tool.
6. Write tests in `tests/test_server.py` (one test file per server) covering happy path + at least one edge case per tool.
7. Use `pytest -q` from the server's root; capture output to `.omo/evidence/`.

## Pitfalls

- **Pitfall: omitting path-traversal protection.** Always resolve and reject `..` segments.
- **Pitfall: misnaming tools.** The tool name is part of the spec contract; changing it breaks clients.

## Related

- 1.0COORDINATOR: MCP Authoring (the spec)
- 4.0TOOLS: MCP Server Wiring (the deploy)

## Evidence Path

.omo/evidence/coder-mcp-impl-<timestamp>.txt
