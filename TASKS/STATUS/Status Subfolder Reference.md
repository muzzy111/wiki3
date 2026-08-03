---
title: Task Status — Subfolder Reference
tags: [tasks, status, subfolder-reference]
created: 2026-07-01
type: status-subfolder-reference
status: active
---

# Task Status — Subfolder Reference

> Reference for the nested subfolders inside `STATUS/`. STATUS/ holds one task card per file at the top level. The subfolders hold task-tracking meta-resources.

## Subfolders

### `CHAT-HISTORY/`

Per-task chat history snapshots. Long task conversations distilled into summaries. Hermes writes here when a task generates enough back-and-forth to warrant a summary.

See [[CHAT-HISTORY/History Index]].

### `MEMORY/`

Task-related memory. Cross-task observations that Mavis curates. Examples: "Hermes tends to skip the plan when tasks are tiny — pattern worth watching."

See [[MEMORY/Task Memory]].

### `PROMPTS/`

Task-related prompt templates. Reusable prompt fragments for common task types. Hermes authors; Mavis reviews.

See [[PROMPTS/Task Prompts]].

### `RULES/`

Task-tracking rules. Subordinate to `SYSTEM/SYSTEM RULES/`. Examples: how tasks are prioritized, when they are auto-closed.

See [[RULES/Task Rules]].

### `SKILLS/`

Task-tracking skills. Examples: how to write a task card, how to close one.

See [[SKILLS/Task Skills]].

### `SOLO-PROJECTS/`

Solo projects initiated from tasks. When a task grows into something bigger, the task is closed and a solo project is created. The handoff is documented here.

See [[SOLO-PROJECTS/Solo Index]].

## Why The Duplication

The six-subfolder shape (`CHAT-HISTORY`, `MEMORY`, `PROMPTS`, `RULES`, `SKILLS`, `SOLO-PROJECTS`) mirrors the per-agent folder layout. This is intentional — same shape across all agent-shaped folders enables consistent tooling, audit, and mental model.

## See Also

- Tasks index: [[../Index]]
- Per-agent folder shape: [[../../../SYSTEM/SYSTEM GRAPH/Graph]]