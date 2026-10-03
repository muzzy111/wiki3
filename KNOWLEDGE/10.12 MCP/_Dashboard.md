---
type: dashboard
cssclasses: [cards]
tags:
  - sector
  - abstract
  - overview
  - structural
---

# 10.12 MCP

> [!abstract] Overview
> Structural index for the **10.12 MCP** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.12 MCP"
WHERE file.name != this.file.name AND file.folder != "10.12 MCP"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.12 MCP"
WHERE file.name != this.file.name AND file.folder = "10.12 MCP"
SORT file.mtime DESC
```
