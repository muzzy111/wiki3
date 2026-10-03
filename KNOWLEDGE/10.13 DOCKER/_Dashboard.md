---
type: dashboard
cssclasses: [cards]
tags:
  - docker
  - sector
  - abstract
  - overview
---

# 10.13 DOCKER

> [!abstract] Overview
> Structural index for the **10.13 DOCKER** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "10.13 DOCKER"
WHERE file.name != this.file.name AND file.folder != "10.13 DOCKER"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "10.13 DOCKER"
WHERE file.name != this.file.name AND file.folder = "10.13 DOCKER"
SORT file.mtime DESC
```
