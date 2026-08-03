---
type: dashboard
cssclasses: [cards]
tags:
  - skills
  - sector
  - abstract
  - overview
---

# [[10.03 [[SKILLS]]]]

> [!abstract] Overview
> Structural index for the **[[10.03 [[SKILLS]]]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.03 SKILLS"
WHERE file.name != this.file.name AND file.folder != "10.03 SKILLS"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.03 SKILLS"
WHERE file.name != this.file.name AND file.folder = "10.03 SKILLS"
SORT file.mtime DESC
```
