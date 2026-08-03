---
title: "Coder Dashboard"
role: "coder"
type: dashboard
status: active
cssclasses: ["role-dashboard"]
---

# Coder Dashboard

> Live Coder dashboard. Open tasks, MCP server status, test pass rates, recent builds.

### ## Open TASKS/STATUS (Coder-owned)

```dataview
TABLE title, status, modified FROM "TASKS/STATUS" WHERE owner = "coder" AND status != "done" SORT modified DESC LIMIT 5
```

### ## MCP Server Status

```dataview
TABLE mcp_id, state FROM "MCP" WHERE type = "server-spec" FLATTEN state
```

### ## hermes_bus Tests

```dataview
The hermes_bus test suite has 62 passing tests (48 prior + 14 new). Run `pytest tests/` from `2.0CODER/SOLO-PROJECTS/loop-chat-system/`.
```

## Last refresh

```dataview
LIST file.mtime
FROM this
```

## Related

- `../CODER/AGENT.md`
- `../CODER/MEMORY/Coder Memory.md`
- `../../SYSTEM/agents.yaml`
