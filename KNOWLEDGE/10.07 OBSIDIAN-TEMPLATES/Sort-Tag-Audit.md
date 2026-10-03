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

#  Sort & Tag Audit — <% today %> @ <% now %>

> [!tip] Antigravity instructions
> Read this note top to bottom. For each item in the queues below:
> 1. Infer domain and doc-type from title + content
> 2. Apply correct tags per the taxonomy (see [[Tag Taxonomy]])
> 3. Move file to correct folder per the SORT-TARGET comment in the note, or derive from tags
> 4. [[Update]] frontmatter `[[status]]:` field to `processed`
> 5. Mark the checkbox in this audit note when done

---

##  Inbox — Unprocessed

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  doc-type AS "Type",
  domain AS "Domain",
  status AS "Status",
  file.mtime AS "Modified"
FROM "Inbox"
WHERE status = "unprocessed" OR status = "unread" OR !status
SORT file.mtime ASC
```

---

##  Missing Required Tags

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  tags AS "Current Tags",
  file.folder AS "Location"
FROM ""
WHERE !contains(tags, "domain/") AND !contains(file.path, "Templates") AND !contains(file.path, "System")
SORT file.mtime DESC
LIMIT 20
```

---

##  Misrouted Files
> Notes whose folder doesn't match their `domain` frontmatter field.

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  domain AS "Expected Domain",
  file.folder AS "Actual Folder"
FROM ""
WHERE domain AND !contains(file.folder, domain)
  AND !contains(file.path, "Inbox")
  AND !contains(file.path, "Templates")
  AND !contains(file.path, "System")
SORT domain ASC
```

---

##  Processed Today

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  domain AS "Domain",
  doc-type AS "Type"
FROM ""
WHERE processed = "<% today %>"
SORT file.name ASC
```

---

##  Vault Health Snapshot

```dataview
TABLE WITHOUT ID
  "Unprocessed" AS "Queue",
  length(rows) AS "Count"
FROM ""
WHERE status = "unprocessed" OR status = "unread"
GROUP BY true
```

```dataview
TABLE WITHOUT ID
  domain AS "Domain",
  length(rows) AS "Notes"
FROM ""
WHERE domain
GROUP BY domain
SORT length(rows) DESC
```

---

##  Antigravity Batch Tasks
> Copy this block into your Antigravity task queue when ready to run a batch.

```
ANTIGRAVITY BATCH:
  mode: sort-and-tag
  audit-note: sort-audit-<% today %>
  targets:
    - Inbox/
  rules:
    - if status == unprocessed OR status == unread:
        - infer domain from content
        - apply tags per Tag Taxonomy
        - update status to processed
        - move to Muzzy/Processed/{domain}/{doc-type}/
    - if missing domain/ tag:
        - infer and apply
    - if folder != domain:
        - move to correct folder
  output: Muzzy/Sort-Reports/sort-report-<% today %>.md
```
