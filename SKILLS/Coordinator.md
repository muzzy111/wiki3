---
title: "Coordinator Dashboard"
role: "coordinator"
type: dashboard
status: active
cssclasses: ["role-dashboard"]
---

# Coordinator Dashboard

> Live Coordinator dashboard. INBOX/OUTBOX counts, last 5 messages, current routing matrix, agent dispatch frequency.

### ## Last 5 Inbox Messages

```dataview
TABLE title, created, status FROM "1.0COORDINATOR/CHAT/Inbox" SORT created DESC LIMIT 5
```

### ## Last 5 Outbox Completions

```dataview
TABLE title, completed, status FROM "1.0COORDINATOR/CHAT/Outbox" SORT completed DESC LIMIT 5
```

### ## Routing Matrix

```dataview
TABLE type, default_role FROM "SYSTEM/agents.yaml" FLATTEN routing_defaults
```

## Last refresh

```dataview
LIST file.mtime
FROM this
```

## Related

- `../COORDINATOR/AGENT.md`
- `../COORDINATOR/MEMORY/Coordinator Memory.md`
- `../../SYSTEM/agents.yaml`
