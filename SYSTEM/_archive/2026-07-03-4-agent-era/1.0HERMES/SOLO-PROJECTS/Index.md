---
title: Solo Projects Index
tags: [agent, hermes, solo-projects]
created: 2026-07-01
type: solo-projects
status: active
---

# Solo Projects Index

> Hermes' personal project scratchpad. Used for work Hermes owns end-to-end without dispatching — typically configuration, lightweight tooling, and MCP server maintenance.

## What Goes Here

- MCP server specifications and configurations in progress.
- Workflow drafts (Hermes owns workflows end-to-end, with Mavis review).
- Small automation scripts Hermes writes for routing or chat hygiene.
- Anything that does not need OpenCode's code-engineering rigor but is not user-facing enough to live in `PROJECTS/`.

## What Does Not Go Here

- Code with non-trivial logic — that is OpenCode's domain. Hermes drafts spec, OpenCode builds.
- User-facing deliverables — those live in `PROJECTS/`.
- Anything secret or credentialed — those go in `MCP/servers/<name>/env.example` or in the user's `.env`.

## Current Projects

> None active. This folder will populate as Hermes takes on solo work.

### Project Template

When Hermes starts a solo project, the project folder follows this layout:

```
<project-slug>/
|-- README.md        (project brief, acceptance criteria, status)
|-- PLAN.md          (steps, owner, deadlines)
|-- NOTES.md         (running notes during the work)
`-- DELIVERABLE.md   (final artifact or link to it)
```

Hermes updates `INDEX.md` (this file) with a one-line summary of each project.

## See Also

- Hermes' role: [[../AGENT]]
- Routing rules: [[../RULES/Routing Rules]]
- MCP authoring: [[../SKILLS/MCP Authoring]]
- Shared project space: [[../../../PROJECTS/Index]]