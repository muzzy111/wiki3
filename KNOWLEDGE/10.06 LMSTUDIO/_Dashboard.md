---
type: dashboard
cssclasses: [cards]
tags:
  - lmstudio
  - sector
  - abstract
  - overview
---

# [[10.06 LMSTUDIO]]

> [!abstract] Overview
> Structural index for the **[[10.06 LMSTUDIO]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.06 LMSTUDIO"
WHERE file.name != this.file.name AND file.folder != "10.06 LMSTUDIO"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.06 LMSTUDIO"
WHERE file.name != this.file.name AND file.folder = "10.06 LMSTUDIO"
SORT file.mtime DESC
```
