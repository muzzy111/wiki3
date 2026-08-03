---
title: Projects
tags: [projects, cross-agent, active]
created: 2026-07-01
type: project-index
status: active
---

# Projects

> Active cross-agent projects. Each project is a multi-agent effort with a clear scope, owner(s), and acceptance criteria.

## What Lives Here

A project is created when:

- Work spans two or more agents.
- The scope is large enough to warrant a dedicated folder.
- The user wants visibility into the work in one place.

A project is **not** created when:

- Only one agent is involved (use that agent's `SOLO-PROJECTS/`).
- The work is small and fits in a single task card.
- The work is system-level and lives in `SYSTEM/`.

## Project Layout

Each project follows this layout:

```
PROJECTS/<project-slug>/
|-- README.md          project brief, scope, acceptance criteria
|-- PLAN.md            steps, owners, deadlines, status
|-- NOTES.md           running notes during the work
|-- DELIVERABLE.md     final artifact or pointer to it
|-- CHAT/              per-project chat (when the project has its own chat thread)
`-- archive/           (optional) prior versions of artifacts
```

## Project Lifecycle

```
project proposed
   |
   v
Hermes approves scope
   |
   v
project folder created
   |
   v
PLAN.md drafted with owners and deadlines
   |
   v
work proceeds, status updates in PLAN.md and task cards in TASKS/STATUS/
   |
   v
Mavis reviews deliverables
   |
   v
project closed -> DELIVERABLE.md finalized
   |
   v
project archived (status: complete) or kept active for follow-on work
```

## Project Index

| project-slug | Title | Owners | Status | Created |
|---|---|---|---|---|
| (none yet) | | | | |

> No active projects. The folder will populate as projects are proposed.

## Project Status

- `proposed` — drafted but not approved by Hermes.
- `active` — approved, work in progress.
- `review` — deliverables submitted, awaiting Mavis review.
- `complete` — all deliverables approved and integrated.
- `archived` — superseded or no longer relevant.
- `blocked` — work halted pending resolution.

The status is tracked in `README.md` frontmatter and the project index.

## Who Owns Projects

Hermes proposes and approves project scope. Each project has a **primary owner** (typically the agent doing most of the work) and **contributors**. Hermes reviews scope, plan, and closure. Mavis reviews deliverables.

## Creating a Project

To propose a project:

1. Create `PROJECTS/<project-slug>/`.
2. Write `README.md` with brief, scope, acceptance criteria, proposed owner(s).
3. Write a draft `PLAN.md`.
4. Notify Hermes via chat or command pad (`agent_target: hermes`, `type: system`).

Hermes approves, requests changes, or declines. Once approved, the project is `active`.

## Closing a Project

When a project meets its acceptance criteria:

1. The primary owner finalizes `DELIVERABLE.md`.
2. Mavis reviews per the standard protocol.
3. Hermes confirms closure.
4. Project status becomes `complete`.
5. The folder remains for future reference; it is not deleted.

## See Also

- Hermes' routing rules: [[../1.0HERMES/RULES/Routing Rules]]
- Mavis' review protocol: [[../2.0MAVIS/CHAT/Review Protocol]]
- Tasks folder: [[../TASKS/Index]]
- Solo project spaces (per-agent):
  - [[../1.0HERMES/SOLO-PROJECTS/Index]]
  - [[../2.0MAVIS/SOLO-PROJECTS/Index]]
  - [[../3.0OPENCODE/SOLO-PROJECTS/Index]]
  - [[../4.0AGY/SOLO-PROJECTS/Index]]