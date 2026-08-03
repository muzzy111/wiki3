---
title: "Memory Dashboard"
role: "memory"
type: dashboard
status: active
cssclasses: ["role-dashboard"]
---

# Memory Dashboard

> Live Memory Curator dashboard. Audit last-run, review queue, memory write log, performance metrics, drift score.

### ## Audit Log Entries

```dataview
TABLE title, status, created FROM "SYSTEM/STYTEM RECORD" SORT created DESC LIMIT 5
```

### ## Review Queue

```dataview
TABLE request_id, target, status FROM "5.0MEMORY/CHAT/Inbox" SORT created DESC LIMIT 5
```

### ## Verdicts Issued

```dataview
TABLE verdict_id, target, status FROM "5.0MEMORY/CHAT/Outbox" SORT created DESC LIMIT 5
```

### ## Drift Score (last run)

```dataview
Run `python 5.0MEMORY/SOLO-PROJECTS/utility-scripts/agent_drift_detector.py --vault-root .` to compute. Scores above 0.30 trigger a system-record note.
```

## Last refresh

```dataview
LIST file.mtime
FROM this
```

## Related

- `../MEMORY/AGENT.md`
- `../MEMORY/MEMORY/Memory Memory.md`
- `../../SYSTEM/agents.yaml`
