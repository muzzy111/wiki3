---
type: dashboard
cssclasses: [cards]
tags:
  - canvases
  - sector
  - abstract
  - overview
---

# 30.00 CANVASES

> [!abstract] Overview
> Structural index for the **30.00 CANVASES** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "30.00 CANVASES"
WHERE file.name != this.file.name AND file.folder != "30.00 CANVASES"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "30.00 CANVASES"
WHERE file.name != this.file.name AND file.folder = "30.00 CANVASES"
SORT file.mtime DESC
```
