---
title: "Tasks"
type: tasks-index
status: active
---

# Tasks

> Task tracking. Roles reference each task by `task_id`.

## Role-Owned Field

Every task card has an `owner: <role>` frontmatter field. Allowed values: `coordinator`, `coder`, `researcher`, `tools`, `memory`.

## Layout

```
TASKS/
+-- Index.md           this file
+-- KANBAN/            live Kanban board
+-- STATUS/            completed tasks
+-- QUED/              queued tasks (note: misspelled, rename planned)
+-- CHAT/              task-related chat
+-- JOBS/              long-running jobs
```

## See Also

- `CHAT/Command Template.md`
- `5.0MEMORY/RULES/Review Checklist.md`
- `1.0COORDINATOR/RULES/Routing Rules.md`
