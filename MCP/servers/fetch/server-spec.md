---
title: "fetch MCP Server"
mcp_id: "fetch"
state: "active"
---

# Fetch MCP Server

> URL fetching with markdown extraction and link extraction; honors robots.txt by default

## Purpose

URL fetching with markdown extraction and link extraction; honors robots.txt by default

## Tools

| Name | Params | Returns |
|---|---|---|
| `fetch_url` | (see source) | (see source) |
| `extract_text` | (see source) | (see source) |
| `extract_links` | (see source) | (see source) |

## Resources

(none for this server)

## Credentials

Environment variables (set in `env.example`):

- `LOOP_VAULT_ROOT` — absolute path to the LOOP vault root.

## Transport

stdio (JSON-RPC over stdin/stdout). Compatible with Claude Desktop, OpenCode, and the hermes_bus daemon.

## Verified Facts

- Smoke call: `echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' | python fetch-server.py` returns protocol version "2024-11-05".
- Tools are exposed via the `tools/list` JSON-RPC method.
- All tools require a `vault_root` argument; default is the LOOP_VAULT_ROOT env var.

## Sources

- Model Context Protocol spec: https://spec.modelcontextprotocol.io/
- FastMCP Python SDK: https://github.com/modelcontextprotocol/python-sdk

## Related

- Spec author: 1.0COORDINATOR (MCP Authoring skill)
- Wiring: 4.0TOOLS (MCP Server Wiring skill)
- Implementation: 2.0CODER (MCP Implementation skill)
