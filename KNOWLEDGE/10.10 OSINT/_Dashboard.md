---
type: dashboard
cssclasses: [cards]
tags:
  - osint
  - sector
  - abstract
  - overview
---

# [[10.10 OSINT]]

> [!abstract] Overview
> Structural index for the **[[10.10 OSINT]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.10 OSINT"
WHERE file.name != this.file.name AND file.folder != "10.10 OSINT"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.10 OSINT"
WHERE file.name != this.file.name AND file.folder = "10.10 OSINT"
SORT file.mtime DESC
```
