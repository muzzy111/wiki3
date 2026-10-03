---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# OpenCove Tactical Refactoring Suggestions

A set of six refactoring tasks designed to address technical debt in the OpenCove repository, regardless of the chosen strategic fork direction.

## 1. Consolidate Renderer Hooks

The hooks folder (such as `useInteractions/`) is over-fractured into files under 50 lines that are only imported once (e.g. `selectionRectToggle.ts`, `terminalCreation.ts`, `websiteContextMenu.ts`).
- **Refactoring Rule:** Inline files that are less than 50 lines and imported by exactly one other file in the same directory. This reduces isolated AST graph nodes.

## 2. Unify IPC Pathways

The repository contains duplicate pathways for IPC: direct IPC calls (`pty.spawn`) and control-surface queries (`controlSurface.invoke`).
- **Action:** Retain only the `control-surface` pathway, making the renderer a thin client. This provides stronger type contracts across processes.

## 3. Convert Case Studies to Regression Tests

The case studies in `docs/cases/` cover real-world bugs (such as Vitest electron mock problems, xterm hit-testing, and worktree conflicts).
- **Action:** Convert each case study document into an active test file under `tests/cases/` to ensure the issues do not regress in future pull requests.

## 4. Flatten Renderer DDD Folders

The presentation/renderer code uses deep folder nesting mimicking backend bounded contexts (e.g. `contexts/workspace/application/`).
- **Action:** Flatten the renderer directory to use standard UI folder conventions: `features/workspace/hooks/`, `features/workspace/components/`, and `features/workspace/state/`.

## 5. Enforce typechecking Budget in CI

Type leakage is present across the codebase.
- **Action:** Add `tsc --noEmit` checks in continuous [[integration]], and enforce a maximum cap of 200 lines and restricted import counts on `OpenCoveApi` surface size to prevent API bloat.

## 6. Maintain Documentation [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Standards]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

The project has very thorough documentation files (such as `STORE_REACTIVITY.md` and `CONTROL_SURFACE.md`).
- **Action:** Preserve the descriptive, detailed tone of these architectural documents during the fork.
