---
title: Solo Projects Index
tags: [agent, opencode, solo-projects]
created: 2026-07-01
type: solo-projects
status: active
---

# Solo Projects Index

> OpenCode's project workspace. Every dispatched coding task lives here as a project folder.

## Folder Layout

Every project follows the standard layout:

```
<project-id>/
|-- README.md          project overview, status, links
|-- PLAN.md            implementation plan, risks, decisions
|-- src/               source code
|   `-- ...
|-- tests/             test code
|   `-- ...
|-- docs/              project-specific documentation
|   `-- ...
|-- pyproject.toml     Python deps (or package.json, requirements.txt)
`-- CHANGELOG.md       version history
```

`<project-id>` matches the task-id from the dispatch brief.

## Project Lifecycle

```
dispatch received
   |
   v
PLAN.md drafted -> Hermes approves
   |
   v
src/ + tests/ + docs/ created
   |
   v
tests pass
   |
   v
README + CHANGELOG updated
   |
   v
submitted to Mavis -> review verdict
   |
   v
approved -> marked done
   |
   v
archived when superseded or deprecated (status: deprecated)
```

## Current Projects

> No active projects. This folder will populate as OpenCode takes on work.

### Project Index

| project-id | Title | Status | Owner | Created |
|---|---|---|---|---|
| (none) | | | | |

When projects are created, OpenCode appends a row here.

## See Also

- OpenCode's role: [[../AGENT]]
- Coding standards: [[../RULES/Coding Standards]]
- Coding brief protocol: [[../CHAT/Coding Brief Protocol]]
- MCP implementation: [[../SKILLS/MCP Implementation]]
- Shared project space: [[../../../PROJECTS/Index]]