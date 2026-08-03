---
title: Solo Projects Index
tags: [agent, agy, solo-projects]
created: 2026-07-01
type: solo-projects
status: active
---

# Solo Projects Index

> AGY's project workspace. Research reports, math deliverables, environment changes, and the Google Drive sync implementation all live here.

## Folder Layout

Each AGY project follows this layout:

```
<project-id>/
|-- README.md          project overview, status, links
|-- PLAN.md            (optional for research; required for code/env changes)
|-- report.md          (research reports)
|-- data/              (raw data, inputs, intermediate computations)
|-- scripts/           (any code AGY writes for the project)
|-- output/            (final artifacts)
`-- CHANGELOG.md       (for code projects)
```

`<project-id>` matches the task-id from the dispatch brief.

## Project Categories

- **Research** — `report.md` is the main artifact.
- **Math** — `report.md` plus `data/` for inputs and intermediate results.
- **Environment** — `README.md` documents the change; the change itself is in `.obsidian/` (or the relevant config path).
- **Google Drive sync** — code project. Lives at `google-drive-sync/`.

## Current Projects

> No active projects. This folder will populate as AGY takes on work.

### Project Index

| project-id | Title | Category | Status | Created |
|---|---|---|---|---|
| (none) | | | | |

## See Also

- AGY's role: [[../AGENT]]
- Research protocol: [[../RULES/Research Protocol]]
- Backup protocol: [[../RULES/Backup Protocol]]
- Environment maintenance: [[../SKILLS/Environment Maintenance]]
- Shared project space: [[../../../PROJECTS/Index]]