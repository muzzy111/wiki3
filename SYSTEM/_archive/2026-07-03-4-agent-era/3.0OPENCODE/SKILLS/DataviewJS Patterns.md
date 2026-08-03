---
title: DataviewJS Patterns
tags: [agent, opencode, skill, dataviewjs]
created: 2026-07-01
type: skill
status: active
---

# DataviewJS Patterns

> Reusable patterns OpenCode uses when writing DataviewJS blocks in vault notes.

## When to Use DataviewJS vs DQL

- **DQL** (Dataview Query Language, in ` ```dataview ` blocks) is preferred for simple table, list, task, and calendar queries.
- **DataviewJS** (in ` ```dataviewjs ` blocks) is for cases DQL cannot express:
  - Recursive graph traversal.
  - Aggregations not supported by DQL.
  - Conditional rendering.
  - API calls (rare; usually a Templater script is better).
  - Dynamic grouping or computed columns.
  - Charts and graphs.

If DQL can do it, use DQL. DataviewJS is heavier and slower.

## Block Placement

- DataviewJS blocks live inside notes, not standalone.
- Place near the top of the note for "live" sections.
- Comment the block with intent and inputs.

## The `dv.*` API

Common API surface OpenCode uses:

- `dv.pages(source)` — pages matching a source string (`'"folder"'`, `'#tag'`, etc.).
- `dv.page(path)` — single page by path.
- `dv.current()` — current page.
- `dv.table(headers, rows)` — render a table.
- `dv.list(rows)` — render a list.
- `dv.taskList(tasks, groupBy)` — render a task list.
- `dv.header(level, text)` — render a header.
- `dv.paragraph(text)` — render a paragraph.
- `dv.span(text)` — render inline.
- `dv.el(selector, text)` — render an arbitrary element.

Full reference: [Dataview API documentation].

## Common Patterns

### Tasks Across the Vault

```dataviewjs
// Group in-progress tasks by priority, sorted by created date.
const tasks = dv.pages('"PROJECTS" or "TASKS/STATUS"')
  .where(p => p.type === "task-status" && p.status === "in-progress")
  .sort(p => p.created, "asc");

dv.taskList(tasks, groupBy: p => p.priority);
```

### Recent Edits

```dataviewjs
// Show the 10 most recently modified notes in the vault.
const recent = dv.pages()
  .sort(p => p.file.mtime, "desc")
  .limit(10);

dv.table(
  ["Note", "Modified", "Tags"],
  recent.map(p => [p.file.link, p.file.mtime.toISODate(), p.file.tags])
);
```

### Backlink Counts

```dataviewjs
// Top 10 most-linked notes in the vault.
const top = dv.pages()
  .sort(p => p.file.inlinks.length, "desc")
  .limit(10);

dv.table(
  ["Note", "Inbound Links"],
  top.map(p => [p.file.link, p.file.inlinks.length])
);
```

### Conditional Rendering

```dataviewjs
// Show a banner if any task is overdue.
const overdue = dv.pages('"TASKS/STATUS"')
  .where(p => p.due && p.due < dv.date("today") && p.status !== "done");

if (overdue.length > 0) {
  dv.el("div", `<strong>${overdue.length} overdue tasks.</strong>`, { cls: "callout-warning" });
  dv.list(overdue.map(p => p.file.link));
}
```

### Aggregations

```dataviewjs
// Sum of hours logged across all project notes.
const projects = dv.pages('"PROJECTS"').array();
const totalHours = projects.reduce((sum, p) => sum + (p.hours || 0), 0);
dv.paragraph(`Total hours across projects: **${totalHours}**.`);
```

### Dynamic Grouping

```dataviewjs
// Group wiki entries by topic, count per group.
const wiki = dv.pages('"MEMORY/KARPATHY/wiki"').where(p => p.type === "karpathy-wiki");
const byTopic = wiki.groupBy(p => p.topic);

for (const [topic, pages] of Object.entries(byTopic)) {
  dv.header(3, `${topic} (${pages.length})`);
  dv.list(pages.map(p => p.file.link));
}
```

## Performance Discipline

DataviewJS runs every time the note is opened. To keep it fast:

- Scope queries tightly (`dv.pages('"specific/folder"')`, not `dv.pages()`).
- Use `.where()` early, before `.sort()` and `.limit()`.
- Cache results if a block needs the same data twice.
- Avoid API calls inside DataviewJS. Use Templater scripts for that.
- Profile with `console.time` if a block feels slow.

## Error Handling

DataviewJS errors are visible to the user. OpenCode:

- Wraps risky logic in try/catch.
- Logs errors to the console (visible in Obsidian's dev tools).
- Falls back to a graceful message when something fails.

Example:

```dataviewjs
try {
  const data = dv.pages('"PROJECTS"').where(p => p.budget);
  dv.table(["Project", "Budget"], data.map(p => [p.file.link, p.budget]));
} catch (e) {
  dv.paragraph(`Could not render budget table: ${e.message}`);
  console.error(e);
}
```

## Commenting

Every DataviewJS block starts with a comment describing intent:

```dataviewjs
// INTENTS:
//   1. Show all open tasks across the team, grouped by agent.
//   2. Highlight urgent tasks at the top.
// INPUTS:
//   - None (queries the vault directly).
// NOTES:
//   - Update this block if the task-status folder structure changes.
```

## Common Mistakes

- **Forgetting quotes around folder paths.** `'""folder""'` not `"folder"`. The double-quotes inside the single-quoted string are Dataview's source-string syntax.
- **Sorting before filtering.** Always filter first.
- **Mutating `dv.pages()` results directly.** `dv.pages()` returns a proxy. If you need to mutate, call `.array()`.
- **Heavy blocks in frequently-opened notes.** Profile. Move to a dashboard note if it gets slow.

## When DataviewJS Is Not Enough

If the logic needs file system access, network calls, or substantial computation, write a Templater script that runs on note open (startup template or user script) and writes the result into the note. DataviewJS is for queries and small renderings.

## See Also

- Coding standards: [[../RULES/Coding Standards]]
- Coding brief protocol: [[../CHAT/Coding Brief Protocol]]
- Dataview documentation: https://blacksmithgu.github.io/obsidian-dataview/