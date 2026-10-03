---
type: dashboard
cssclasses: [cards]
tags:
  - obsidian
  - templates
  - sector
  - abstract
---

# [[10.07 OBSIDIAN-TEMPLATES]]

> [!abstract] Overview
> Structural index for the **[[10.07 OBSIDIAN-TEMPLATES]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.07 OBSIDIAN-TEMPLATES"
WHERE file.name != this.file.name AND file.folder != "10.07 OBSIDIAN-TEMPLATES"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.07 OBSIDIAN-TEMPLATES"
WHERE file.name != this.file.name AND file.folder = "10.07 OBSIDIAN-TEMPLATES"
SORT file.mtime DESC
```
