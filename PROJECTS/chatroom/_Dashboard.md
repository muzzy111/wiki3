---
type: dashboard
cssclasses: [cards]
tags:
  - chatroom
  - sector
  - abstract
  - overview
---

# 00.05 Chatroom

> [!abstract] Overview
> Structural index for the **00.05 Chatroom** sector.

## Nested Structure
```dataview
LIST rows.file.link
FROM "00.05 Chatroom"
WHERE file.name != this.file.name AND file.folder != "00.05 Chatroom"
GROUP BY file.folder
```

## Sector Contents
```dataview
TABLE file.mtime AS "Last Modified", length(file.outlinks) AS "Out Links", length(file.inlinks) AS "In Links"
FROM "00.05 Chatroom"
WHERE file.name != this.file.name AND file.folder = "00.05 Chatroom"
SORT file.mtime DESC
```
