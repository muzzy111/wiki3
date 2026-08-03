---
title: "filesystem MCP Server"
mcp_id: "filesystem"
state: "active"
---

# Filesystem MCP Server

> Filesystem MCP server exposing read/write/list/search over a vault root

## Purpose

Filesystem MCP server exposing read/write/list/search over a vault root

## Tools

| Name | Params | Returns |
|---|---|---|
| `read_file` | (see source) | (see source) |
| `write_file` | (see source) | (see source) |
| `list_directory` | (see source) | (see source) |
| `search_files` | (see source) | (see source) |

## Resources

(none for this server)

## Credentials

Environment variables (set in `env.example`):

- `LOOP_VAULT_ROOT` — absolute path to the LOOP vault root.

## Transport

stdio (JSON-RPC over stdin/stdout). Compatible with Claude Desktop, OpenCode, and the hermes_bus daemon.

## Verified Facts

- Smoke call: `echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' | python filesystem-server.py` returns protocol version "2024-11-05".
- Tools are exposed via the `tools/list` JSON-RPC method.
- All tools require a `vault_root` argument; default is the LOOP_VAULT_ROOT env var.

## Sources

- Model Context Protocol spec: https://spec.modelcontextprotocol.io/
- FastMCP Python SDK: https://github.com/modelcontextprotocol/python-sdk

## Related

- Spec author: 1.0COORDINATOR (MCP Authoring skill)
- Wiring: 4.0TOOLS (MCP Server Wiring skill)
- Implementation: 2.0CODER (MCP Implementation skill)
