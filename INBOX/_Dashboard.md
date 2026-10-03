---
type: dashboard
cssclasses: [cards]
tags:
  - inbox
  - sector
  - abstract
  - overview
---

# 01.00 INBOX

> [!abstract] Overview
> Structural index for the **01.00 INBOX** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "01.00 INBOX"
WHERE file.name != this.file.name AND file.folder != "01.00 INBOX"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "01.00 INBOX"
WHERE file.name != this.file.name AND file.folder = "01.00 INBOX"
SORT file.mtime DESC
```
