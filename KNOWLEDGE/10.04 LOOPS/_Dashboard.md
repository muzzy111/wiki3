---
type: dashboard
cssclasses: [cards]
tags:
  - loops
  - sector
  - abstract
  - overview
---

# 10.04 LOOPS

> [!abstract] Overview
> Structural index for the **10.04 LOOPS** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.04 LOOPS"
WHERE file.name != this.file.name AND file.folder != "10.04 LOOPS"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.04 LOOPS"
WHERE file.name != this.file.name AND file.folder = "10.04 LOOPS"
SORT file.mtime DESC
```
