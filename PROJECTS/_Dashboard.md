---
type: dashboard
cssclasses: [cards]
tags:
  - projects
  - sector
  - abstract
  - overview
---

# 20.00 PROJECTS

> [!abstract] Overview
> Structural index for the **20.00 PROJECTS** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "20.00 PROJECTS"
WHERE file.name != this.file.name AND file.folder != "20.00 PROJECTS"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "20.00 PROJECTS"
WHERE file.name != this.file.name AND file.folder = "20.00 PROJECTS"
SORT file.mtime DESC
```
