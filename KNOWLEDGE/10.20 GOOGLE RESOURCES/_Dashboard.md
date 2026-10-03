---
type: dashboard
cssclasses: [cards]
tags:
  - google
  - resources
  - sector
  - abstract
---

# 10.20 GOOGLE RESOURCES

> [!abstract] Overview
> Structural index for the **10.20 GOOGLE RESOURCES** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.20 GOOGLE RESOURCES"
WHERE file.name != this.file.name AND file.folder != "10.20 GOOGLE RESOURCES"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.20 GOOGLE RESOURCES"
WHERE file.name != this.file.name AND file.folder = "10.20 GOOGLE RESOURCES"
SORT file.mtime DESC
```
