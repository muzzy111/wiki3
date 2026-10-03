---
type: dashboard
cssclasses: [cards]
tags:
  - opencove
  - sector
  - abstract
  - overview
---

# 10.18 Opencove

> [!abstract] Overview
> Structural index for the **10.18 Opencove** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.18 Opencove"
WHERE file.name != this.file.name AND file.folder != "10.18 Opencove"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.18 Opencove"
WHERE file.name != this.file.name AND file.folder = "10.18 Opencove"
SORT file.mtime DESC
```
