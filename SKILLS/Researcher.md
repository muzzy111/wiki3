---
title: "Researcher Dashboard"
role: "researcher"
type: dashboard
status: active
cssclasses: ["role-dashboard"]
---

# Researcher Dashboard

> Live Researcher dashboard. Active research briefs, sources added this week, wiki intake.

### ## Active Research Briefs

```dataview
TABLE title, created, status FROM "3.0RESEARCHER/CHAT/Inbox" SORT created DESC LIMIT 5
```

### ## Recent Wiki Entries

```dataview
TABLE title, modified FROM "MEMORY/KARPATHY/wiki" SORT modified DESC LIMIT 5
```

### ## Raw Entries (pending curation)

```dataview
TABLE title, created, status FROM "MEMORY/KARPATHY/raw" SORT created DESC LIMIT 5
```

## Last refresh

```dataview
LIST file.mtime
FROM this
```

## Related

- `../RESEARCHER/AGENT.md`
- `../RESEARCHER/MEMORY/Researcher Memory.md`
- `../../SYSTEM/agents.yaml`
