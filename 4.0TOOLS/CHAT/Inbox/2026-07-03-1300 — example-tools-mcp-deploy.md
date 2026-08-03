---
brief_id: B-20260703-004
from_role: coordinator
to_role: tools
created: 2026-07-03 13:00
---

# Brief: Wire the filesystem MCP server end-to-end

## Context

The Coordinator authored `MCP/servers/filesystem/server-spec.md`. Tools should deploy the server, verify the smoke call, and write the deployment record.

## Acceptance Criteria

- [ ] Server starts in <10s
- [ ] `initialize` JSON-RPC returns protocolVersion match
- [ ] All 4 tools (read_file, write_file, list_directory, search_files) respond to a smoke call
- [ ] Path traversal rejected

## Evidence Path

.omo/evidence/tools-fs-mcp-2026-07-03.txt
