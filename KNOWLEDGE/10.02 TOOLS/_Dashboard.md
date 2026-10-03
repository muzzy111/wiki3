---
type: dashboard
cssclasses: [cards]
tags:
  - tools
  - sector
  - abstract
  - overview
---

# [[10.02 TOOLS]]

> [!abstract] Overview
> Structural index for the **[[10.02 TOOLS]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.02 TOOLS"
WHERE file.name != this.file.name AND file.folder != "10.02 TOOLS"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.02 TOOLS"
WHERE file.name != this.file.name AND file.folder = "10.02 TOOLS"
SORT file.mtime DESC
```
