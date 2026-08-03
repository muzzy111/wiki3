---
title: "DataviewJS Patterns"
role: "coder"
status: active
---

# DataviewJS Patterns

> Reusable DataviewJS blocks for dashboards, kanbans, and inline queries.

## Purpose

DataviewJS is the standard library for live data binding in the vault. The patterns below are production-ready; copy and adapt.

## When to Use

- Building a dashboard that shows vault state (counts, recent files, properties).
- Building a kanban with frontmatter-driven status.
- Building an inline table that filters by tag.

## Patterns

### Count files in a folder

```javascript
const files = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("TASKS/STATUS/"));
dv.paragraph(`Open: **${files.length}**`);
```

### Frontmatter-driven table

```javascript
dv.table(
  ["Title", "Status", "Owner"],
  dv.pages('"TASKS/STATUS"')
    .sort(p => p.file.ctime, "desc")
    .map(p => [p.file.link, p.status, p.owner])
);
```

### Last-5 inbox notes

```javascript
const inbox = app.vault.getMarkdownFiles()
  .filter(f => f.path.includes("CHAT/Inbox/"))
  .sort((a, b) => b.stat.ctime - a.stat.ctime)
  .slice(0, 5);
dv.list(inbox.map(f => dv.fileLink(f.path)));
```

## Pitfalls

- **Pitfall: heavy queries.** DataviewJS runs every render; if a query takes >500ms, memoize it.
- **Pitfall: depending on Windows-only paths.** Use forward slashes in Dataview filters.

## Related

- 1.0COORDINATOR: SKILLS dashboards
- 5.0MEMORY: Audit Playbook (uses these patterns)
