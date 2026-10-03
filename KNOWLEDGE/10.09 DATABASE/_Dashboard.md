---
type: dashboard
cssclasses: [cards]
tags:
  - database
  - sector
  - abstract
  - overview
---

# [[10.09 DATABASE]]

> [!abstract] Overview
> Structural index for the **[[10.09 DATABASE]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.09 DATABASE"
WHERE file.name != this.file.name AND file.folder != "10.09 DATABASE"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.09 DATABASE"
WHERE file.name != this.file.name AND file.folder = "10.09 DATABASE"
SORT file.mtime DESC
```
