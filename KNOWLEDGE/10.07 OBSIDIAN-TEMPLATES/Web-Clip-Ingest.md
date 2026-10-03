---
aliases: []
tags:
  - const
  - title
  - targetdir
  - await
---

# <% rawTitle || titleUsed %>

> [!quote] Source
>  [<% rawTitle || url %>](<% url %>) — clipped <% clipped %>

---

##  TL;DR
> *One-paragraph distillation. Fill manually or task Antigravity.*

<!-- ANTIGRAVITY-HINT: fetch URL, summarize content, fill TL;DR and Key Points -->

---

##  Key Points
1. 
2. 
3. 

---

##  Raw Clip
> *Paste the clipped markdown content below. Delete after extracting.*

<details>
<summary>Raw content (collapse when processed)</summary>

<!-- PASTE CLIPPED CONTENT HERE -->

</details>

---

##  Related Notes
```dataview
LIST
FROM ""
WHERE contains(tags, "domain/<% domain %>") AND file.name != this.file.name
SORT file.mtime DESC
LIMIT 8
```

---

##  Tags & Sort
> When done: change `[[status]]/unread` → `[[status]]/processed` and move to domain folder.

- [ ] TL;DR written
- [ ] Key points extracted
- [ ] Raw clip deleted or collapsed
- [ ] Tags confirmed
- [ ] File moved to correct domain folder

<%* tR += "\n<!-- SORT-TARGET: Muzzy/Processed/" + domain + "/" + clipType + " -->" %>
