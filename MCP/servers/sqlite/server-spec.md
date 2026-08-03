---
title: "sqlite MCP Server"
mcp_id: "sqlite"
state: "draft"
---

# Sqlite MCP Server

> SQLite MCP server (state: draft, not yet implemented)

## Purpose

SQLite MCP server (state: draft, not yet implemented)

## Tools

| Name | Params | Returns |
|---|---|---|
| `query` | (see source) | (see source) |
| `execute` | (see source) | (see source) |
| `list_tables` | (see source) | (see source) |

## Resources

(none for this server)

## Credentials

Environment variables (set in `env.example`):

- `LOOP_VAULT_ROOT` — absolute path to the LOOP vault root.

## Transport

stdio (JSON-RPC over stdin/stdout). Compatible with Claude Desktop, OpenCode, and the hermes_bus daemon.

## Verified Facts

- Smoke call: `echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' | python sqlite-server.py` returns protocol version "2024-11-05".
- Tools are exposed via the `tools/list` JSON-RPC method.
- All tools require a `vault_root` argument; default is the LOOP_VAULT_ROOT env var.

## Sources

- Model Context Protocol spec: https://spec.modelcontextprotocol.io/
- FastMCP Python SDK: https://github.com/modelcontextprotocol/python-sdk

## Related

- Spec author: 1.0COORDINATOR (MCP Authoring skill)
- Wiring: 4.0TOOLS (MCP Server Wiring skill)
- Implementation: 2.0CODER (MCP Implementation skill)
