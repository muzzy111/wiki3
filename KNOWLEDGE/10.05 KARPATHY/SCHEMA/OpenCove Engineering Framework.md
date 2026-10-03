---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# OpenCove Engineering Framework

The OpenCove Engineering Framework synthesizes the patterns, constraints, and upgrade strategies observed during the audit of the OpenCove spatial IDE repository.

## Structural Design Principles

- **Decoupled Main and Renderer Layers:** Primitives and state are split across processes. The main process and headless workers handle control interfaces (Pty, session watchers, worktrees), while the renderer acts as a canvas visualization client.
- **Strict Bounded Contexts:** Although contexts are separated, deep nesting of folders introduces high cognitive load. Refactoring should favor flat, feature-oriented folders on the renderer side (such as `features/workspace/...`) and DDD boundaries only on the backend processes.
- **Isolated Execution via Worktrees:** Concurrency is handled at the file system level by deploying separate Git worktrees per agent role or user space, which keeps the database and code state isolated.

## Upgrade Path Decisions

To [[evolve]] OpenCove into a production-grade tool, the developer must choose one of the following distinct product directions:

1. **AI Collaborative Workspace (Multi-Agent):** Introduces supervisor orchestration (Conductor [[agents]]), canvas-based messaging (typed relationship edges), and role-based workspace/worktree delegation.
2. **Offline-First Application (Local-First):** Focuses on portability by dropping Electron in favor of the Web UI, utilizing CRDT engines (such as Yjs) for workspace sync, and simplifying [[setup]] to a unified NPM bootstrapper.
3. **Traceability Engine (Workflow Recorder):** Records and plays back session actions using a canvas TimeSlider, offering branch-aware scrubbers and differential views of codebase modifications.

## Refactoring Guidelines

Addressing architectural debt requires regular compliance with three refactoring rules:
- Hook Consolidation: Inline tiny, single-caller hooks to prevent graph fragmentation.
- IPC Consolidation: Enforce control-surface queries as the sole API bridge, removing duplicate direct IPC pathways.
- Test Coverage: Transition markdown case-study documentation into regression tests to prevent recurrent errors.
