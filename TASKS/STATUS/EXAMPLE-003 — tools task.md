---
title: "Deploy the filesystem MCP server end-to-end"
type: task-card
status: done
owner: tools
example: true
created: 2026-07-01
completed: 2026-07-03
priority: normal
---

# EXAMPLE-003 (closed)

> Worked example of a Tools task card.

## Source

> Coordinator dispatched: "Wire the filesystem MCP server end-to-end" after the Coder authored the spec.

## Goal

Deploy `MCP/servers/filesystem/`, run the smoke call, write the deployment record.

## Acceptance Criteria

- [x] Container starts in <10s.
- [x] `initialize` JSON-RPC returns protocolVersion match.
- [x] All 4 tools (read_file, write_file, list_directory, search_files) respond.
- [x] Path traversal rejected.

## Plan

- [x] `docker build -t loop-fs-mcp:dev .`
- [x] `docker run -d --name loop-fs-mcp -v <vault>:/vault:ro loop-fs-mcp:dev`
- [x] Smoke call via JSON-RPC over stdin.
- [x] Write to `4.0TOOLS/MEMORY/Server Health.md`.

## Deliverables

- Docker image `loop-fs-mcp:dev`
- Smoke call output (in `4.0TOOLS/MEMORY/Server Health.md`)
- 4 tool tests passing

## Review

- Memory Curator verdict: **approved**; tests cover happy path + edge.

## Resolution

- status: done (closed 2026-07-03)


## Source

> User-channel command (placeholder).
> command_id: CMD-EXAMPLE-003
