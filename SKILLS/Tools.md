---
title: "Tools Dashboard"
role: "tools"
type: dashboard
status: active
cssclasses: ["role-dashboard"]
---

# Tools Dashboard

> Live Tools dashboard. MCP server health, backup currency, server uptime, environment changes.

### ## MCP Servers

```dataview
TABLE mcp_id, state FROM "MCP" WHERE type = "server-spec"
```

### ## Backup Log

```dataview
TABLE when, status FROM "4.0TOOLS/MEMORY" WHERE file.name = "Backup Log" LIMIT 1
```

### ## Workflows (active)

```dataview
TABLE workflow, trigger, owner FROM "WORKFLOWS" WHERE type = "workflow"
```

## Last refresh

```dataview
LIST file.mtime
FROM this
```

## Related

- `../TOOLS/AGENT.md`
- `../TOOLS/MEMORY/Tools Memory.md`
- `../../SYSTEM/agents.yaml`
