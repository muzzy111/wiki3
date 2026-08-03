---
title: "memory MCP Server"
mcp_id: "memory"
state: "active"
---

# Memory MCP Server

> Knowledge-graph memory MCP server exposing create_entities, create_relations, observations, and graph reads

## Purpose

Knowledge-graph memory MCP server exposing create_entities, create_relations, observations, and graph reads

## Tools

| Name | Params | Returns |
|---|---|---|
| `create_entities` | (see source) | (see source) |
| `create_relations` | (see source) | (see source) |
| `add_observations` | (see source) | (see source) |
| `search_nodes` | (see source) | (see source) |
| `open_nodes` | (see source) | (see source) |
| `read_graph` | (see source) | (see source) |

## Resources

(none for this server)

## Credentials

Environment variables (set in `env.example`):

- `LOOP_VAULT_ROOT` — absolute path to the LOOP vault root.

## Transport

stdio (JSON-RPC over stdin/stdout). Compatible with Claude Desktop, OpenCode, and the hermes_bus daemon.

## Verified Facts

- Smoke call: `echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' | python memory-server.py` returns protocol version "2024-11-05".
- Tools are exposed via the `tools/list` JSON-RPC method.
- All tools require a `vault_root` argument; default is the LOOP_VAULT_ROOT env var.

## Sources

- Model Context Protocol spec: https://spec.modelcontextprotocol.io/
- FastMCP Python SDK: https://github.com/modelcontextprotocol/python-sdk

## Related

- Spec author: 1.0COORDINATOR (MCP Authoring skill)
- Wiring: 4.0TOOLS (MCP Server Wiring skill)
- Implementation: 2.0CODER (MCP Implementation skill)
