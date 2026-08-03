---
title: "MCP Server Wiring"
role: "tools"
status: active
---

# MCP Server Wiring

> Skill: how the Tools role deploys MCP servers.

## Procedure

1. Read the Coordinator-authored `MCP/servers/<id>/server-spec.md`.
2. Choose transport per the spec (stdio / http / sse).
3. **Code-based servers:** install dependencies via `pip install -e .`; verify entry point imports; document launch command.
4. **Docker-based servers:** build the image; run with explicit env vars; expose only what the spec requires.
5. Smoke call: `echo '{"jsonrpc":"2.0","id":1,"method":"initialize",...}' | <server-launch>` (or HTTP GET on the HTTP transport). Confirm response.
6. Write deployment record to `4.0TOOLS/MEMORY/Server Health.md`.

## Pitfalls

- **Pitfall: spec/implementation mismatch.** Tools does NOT modify the spec; if the implementation disagrees, escalate to Coordinator.
- **Pitfall: no smoke call.** Always run the smoke; never assume a deploy worked.

## Related

- `2.0CODER/SKILLS/MCP Implementation.md`
- `1.0COORDINATOR/SKILLS/MCP Authoring.md`
