---
type: dashboard
cssclasses: [cards]
tags:
  - python
  - sector
  - abstract
  - overview
---

# [[10.08 PYTHON]]

> [!abstract] Overview
> Structural index for the **[[10.08 PYTHON]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.08 PYTHON"
WHERE file.name != this.file.name AND file.folder != "10.08 PYTHON"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.08 PYTHON"
WHERE file.name != this.file.name AND file.folder = "10.08 PYTHON"
SORT file.mtime DESC
```
