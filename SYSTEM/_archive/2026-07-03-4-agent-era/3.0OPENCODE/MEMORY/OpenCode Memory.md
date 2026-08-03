---
title: OpenCode Memory
tags: [agent, opencode, memory, long-term]
created: 2026-07-01
type: agent-memory
status: active
owner: Mavis (curator), OpenCode (reader)
---

# OpenCode Memory

> OpenCode's long-term memory. Mavis writes here. OpenCode reads here. Holds durable lessons about the codebase, the user's preferences for code, and recurring review feedback.

## What Lives Here

Three categories of memory:

1. **Codebase conventions.** Patterns OpenCode has observed across the vault that should be applied consistently. Examples: how scripts are structured, how DataviewJS blocks are written, how CSS snippets are scoped.
2. **User code preferences.** What the user likes and dislikes in code. Naming, comments density, abstraction level, library choices.
3. **Recurring review patterns.** Types of issues Mavis catches repeatedly in OpenCode's reviews. Used to refine OpenCode's own pre-review checklist.

## What Does Not Live Here

- Active task state. Use `TASKS/STATUS/`.
- Specific implementation details of any one project. Those live in the project's own `README.md` and `CHANGELOG.md`.
- Cross-agent knowledge. Use `MEMORY/` (the shared memory folder).
- Secrets, tokens, dependency manifests with sensitive data.

## Memory Write Protocol

When Mavis observes a durable lesson, Mavis appends it under the appropriate section. Each write is logged in `Write Log.md` with date, what was written, and why durable.

OpenCode reads this folder at the start of every session and incorporates observations into its own behavior. OpenCode may **suggest** a memory entry in the project folder's `NOTES.md`, but only Mavis writes to memory.

## Initial Contents

### Codebase conventions

> None recorded yet. OpenCode will document as it works.

### User code preferences

> None recorded yet. Mavis will populate as user feedback accumulates.

### Recurring review patterns

> None recorded yet. Will populate as Mavis accumulates review history.

## See Also

- OpenCode's role: [[../AGENT]]
- Coding standards: [[../RULES/Coding Standards]]
- Coding brief protocol: [[../CHAT/Coding Brief Protocol]]