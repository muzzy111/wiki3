---
type: dashboard
cssclasses: [cards]
tags:
  - karpathy
  - sector
  - abstract
  - overview
---

# [[10.05 KARPATHY]]

> [!abstract] Overview
> Structural index for the **[[10.05 KARPATHY]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.05 KARPATHY"
WHERE file.name != this.file.name AND file.folder != "10.05 KARPATHY"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.05 KARPATHY"
WHERE file.name != this.file.name AND file.folder = "10.05 KARPATHY"
SORT file.mtime DESC
```
