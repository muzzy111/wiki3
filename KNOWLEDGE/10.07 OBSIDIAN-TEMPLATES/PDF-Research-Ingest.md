---
<%*
//  PDF RESEARCH INGEST TEMPLATE 
// Requires: Templater, QuickAdd
// Usage: Run via QuickAdd or Templater hotkey after placing PDF in vault/Inbox/

// --- Prompt for core metadata tags:
  - const
  - source
  - await
  - domain
---
const title     = await tp.system.prompt("Paper / doc title");
const authors   = await tp.system.prompt("Author(s) (comma-separated, or 'unknown')");
const year      = await tp.system.prompt("Year (YYYY or leave blank)");
const source    = await tp.system.prompt("Source URL or file path");
const domain    = await tp.system.suggester(
  ["AI / ML","OSINT","Security","Finance","PKM / Tools","Other"],
  ["ai-ml","osint","security","finance","pkm-tools","other"]
);
const docType   = await tp.system.suggester(
  ["Research paper","Technical [[[[report]]]]","Article","Book chapter","Documentation","Other"],
  ["research-paper","technical-[[[[report]]]]","article","book-chapter","documentation","other"]
);
const [[status]]    = "unprocessed";
const created   = tp.date.now("YYYY-MM-DD");
const fileTitle = title.replace(/[^a-zA-Z0-9 _-]/g,"").trim().replace(/ +/g,"-");
await tp.file.rename(`${created}-${fileTitle}`);
-%>
title: "<% title %>"
aliases: []
authors: [<% authors %>]
year: <% year || "unknown" %>
source: "<% source %>"
domain: <% domain %>
doc-type: <% docType %>
[[status]]: <% [[status]] %>
priority: normal
tags:
  - source/pdf
  - domain/<% domain %>
  - [[status]]/unprocessed
  - type/<% docType %>
created: <% created %>
processed: ~
antigravity-task: ~
---

# <% title %>

> [!info] Source metadata
> **Authors:** <% authors %> | **Year:** <% year || "unknown" %> | **Domain:** `<% domain %>`  
> **Source:** <% source %>  
> **Ingested:** <% created %>

---

##  Abstract / Summary
> *Paste abstract or write a 3–5 sentence summary after reading.*

<!-- ANTIGRAVITY-HINT: summarize this note and fill the above callout -->

---

##  Key Concepts
- 

---

##  Claims & Evidence
| Claim | Evidence / Quote | Confidence |
|-------|-----------------|------------|
|       |                 | high/med/low |

---

##  Connections
```dataview
LIST
FROM [[]]
WHERE contains(tags, "domain/<% domain %>") AND file.name != this.file.name
SORT file.mtime DESC
LIMIT 10
```

---

##  My Notes & Critique
> *Personal commentary, disagreements, open questions.*

---

##  Action Items
- [ ] 

---

##  Tagging Checklist
> Run `Antigravity: tag-and-sort` on this note when ready.
- [ ] Abstract filled
- [ ] Key concepts extracted
- [ ] Connections reviewed
- [ ] [[Status]] updated to `processed`

<%* // Auto-sort stub: write a frontmatter flag Antigravity can poll
tR += "\n<!-- SORT-TARGET: Muzzy/Processed/" + domain + "/" + docType + " -->"
%>
