---
type: dashboard
cssclasses: [cards]
tags:
  - prompts
  - sector
  - abstract
  - overview
---

# [[10.01 [[[[PROMPTS]]]]]]

> [!abstract] Overview
> Structural index for the **[[10.01 [[[[PROMPTS]]]]]]** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.01 PROMPTS"
WHERE file.name != this.file.name AND file.folder != "10.01 PROMPTS"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.01 PROMPTS"
WHERE file.name != this.file.name AND file.folder = "10.01 PROMPTS"
SORT file.mtime DESC
```
