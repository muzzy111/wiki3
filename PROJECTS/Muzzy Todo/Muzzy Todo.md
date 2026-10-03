---
title: "009 — Karpathy wiki question: multi-agent writes"
type: todo
status: open
priority: low
created: 2026-06-18
modified: 2026-06-18
tags:
  - wiki
  - agent
  - karpathy
  - agents
---

# Muzzy Todo

> *The task queue for Bernie "The Big Muzzowski" 777. Tasks created by Hermes, worked by Muzzy. Each file is self-contained: what to do, why, and how.*

---

## How This Works

- Files are named `NNN-short-slug.md` and sort in priority order
- Each has a **what** (one line), **how** (numbered steps), **why** (rationale)
- When done: flip `[[status]]: open` → `[[status]]: done` and add a done date
- New tasks land here, not in chat. Chat is for the work; this folder is for your queue

---

## Current Tasks

```dataview
TABLE WITHOUT ID
  file.link AS "Task",
  urgency AS "Urgency",
  category AS "Category",
  status AS "Status"
FROM "Muzzy Todo"
WHERE type = "task" AND status = "open"
SORT file.name ASC
```

---

## Task Categories

| Category | Scope |
|---|---|
| `github-org` | Settings on `github.com/organizations/Mad-River-AI` |
| `github-account` | Personal account settings (`muzzy111`, etc.) |
| `github-security` | 2FA, tokens, codeowners |
| `github-repos` | Direct changes to a specific repo |
| `website` | Squarespace / Cloudflare / DNS for `madriverai.com` |
| `opsec` | Credentials, secrets, threat model |
| `external-service` | Google Workspace, Hostinger, Squarespace, etc. |
| `hermes-self` | Changes to how Hermes works |

---

## The Pace Rule

> **Hermes will not start more than 2 tasks per session without explicit go-ahead.** If Hermes runs out of work, it says so and waits.

---

## Related Nodes

| Node | Relationship |
|---|---|
| [[Mad River AI]] | Project these tasks belong to |
| [[00.03 Hermes]] | Agent that creates tasks in this queue |
| [[00.01 Antigravity]] | Secondary agent that may assist |
