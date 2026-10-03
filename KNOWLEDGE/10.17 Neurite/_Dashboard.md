---
type: dashboard
cssclasses: [cards]
tags:
  - neurite
  - sector
  - abstract
  - overview
---

# 10.17 Neurite

> [!abstract] Overview
> Structural index for the **10.17 Neurite** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.17 Neurite"
WHERE file.name != this.file.name AND file.folder != "10.17 Neurite"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.17 Neurite"
WHERE file.name != this.file.name AND file.folder = "10.17 Neurite"
SORT file.mtime DESC
```
