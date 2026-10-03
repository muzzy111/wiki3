---
type: dashboard
cssclasses: [cards]
tags:
  - android
  - sector
  - abstract
  - overview
---

# 10.11 ANDROID

> [!abstract] Overview
> Structural index for the **10.11 ANDROID** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.11 ANDROID"
WHERE file.name != this.file.name AND file.folder != "10.11 ANDROID"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.11 ANDROID"
WHERE file.name != this.file.name AND file.folder = "10.11 ANDROID"
SORT file.mtime DESC
```
