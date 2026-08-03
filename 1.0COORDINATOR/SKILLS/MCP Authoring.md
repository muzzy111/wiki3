---
title: "MCP Authoring"
role: "coordinator"
status: active
---

# MCP Authoring

> Skill: how the Coordinator authors MCP server specifications. The Tools role wires them.

## Purpose

An MCP server spec is a structured document the Coordinator authors to define what a server should do. The spec is separate from the implementation; Tools wires it up.

## When to Use

- Adding a new MCP server to the catalog.
- Updating an existing server's tools or transport.

## Procedure

1. **Name.** Pick a stable id (e.g. `filesystem`, `memory`, `fetch`, `n8n`, `sqlite`).
2. **Folder.** Create `MCP/servers/<id>/` with: `server-spec.md`, `pyproject.toml` or `requirements.txt`, `Dockerfile`, `docker-compose.yml` (if Docker-based), `README.md`, `env.example`, `tests/`.
3. **Spec structure** — `server-spec.md` sections:
   - Purpose (one paragraph)
   - Tools (table: name, params, returns)
   - Resources (table: uri, mime, content)
   - Credentials (env var names only)
   - Transport (stdio / http / sse)
   - Verified Facts (output of the smoke call)
   - Sources (where the spec derives from)
4. **Smoke call.** Once the spec is written, write a 5-line smoke call in `README.md`: how to run the server and how to issue `initialize`.
5. **Hand off to Tools.** Move on; Tools will deploy and verify.

## Pitfalls

- **Pitfall: hard-coding credentials.** Only env var names go in `server-spec.md`. Values go in `env.example` (placeholders) and never in the repo.
- **Pitfall: omitting the smoke call.** Without it, Tools can't verify and the daemon can't use the server.

## Related Skills

- Tools: MCP Server Wiring
- Coder: MCP Implementation

## Evidence Path

`.omo/evidence/coordinator-mcp-authoring-<timestamp>.txt`

## Outputs

A `server-spec.md` and a populated `MCP/servers/<id>/` skeleton.
