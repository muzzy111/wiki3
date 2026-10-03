---
type: dashboard
cssclasses: [cards]
tags:
  - root
  - sector
  - abstract
  - overview
---

# 00.00 Root

> [!abstract] Overview
> Structural index for the **00.00 Root** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "00.00 Root"
WHERE file.name != this.file.name AND file.folder != "00.00 Root"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "00.00 Root"
WHERE file.name != this.file.name AND file.folder = "00.00 Root"
SORT file.mtime DESC
```
