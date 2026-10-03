---
type: dashboard
cssclasses: [cards]
tags:
  - graphs
  - sector
  - abstract
  - overview
---

# 10.19 Graphs

> [!abstract] Overview
> Structural index for the **10.19 Graphs** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.19 Graphs"
WHERE file.name != this.file.name AND file.folder != "10.19 Graphs"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.19 Graphs"
WHERE file.name != this.file.name AND file.folder = "10.19 Graphs"
SORT file.mtime DESC
```
