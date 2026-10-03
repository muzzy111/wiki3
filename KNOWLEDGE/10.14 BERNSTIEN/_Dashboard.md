---
type: dashboard
cssclasses: [cards]
tags:
  - bernstien
  - sector
  - abstract
  - overview
---

# 10.14 BERNSTIEN

> [!abstract] Overview
> Structural index for the **10.14 BERNSTIEN** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.14 BERNSTIEN"
WHERE file.name != this.file.name AND file.folder != "10.14 BERNSTIEN"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.14 BERNSTIEN"
WHERE file.name != this.file.name AND file.folder = "10.14 BERNSTIEN"
SORT file.mtime DESC
```
