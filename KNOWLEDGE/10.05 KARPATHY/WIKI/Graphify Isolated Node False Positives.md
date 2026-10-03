---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Graphify Isolated Node False Positives

An analysis of why Graphify reported 2,459 isolated nodes in the OpenCove codebase, and the identification of the single true instance of dead code.

## Root Causes of False Positives

- **Import Traversal on JavaScript Files:** The Graphify AST extractor was given TypeScript files but failed to trace calls originating from JavaScript files (such as `src/app/cli/opencove.mjs`). Consequently, 2,106 TS symbols with JS-only callers were flagged as isolated.
- **Type-Only References:** DTO and contract files referenced solely by type had their edges dropped by the extraction format, resulting in 187 isolated nodes in the `shared/` folder.
- **Unreadable File Placeholders:** Subagents failed to locate certain files due to pathing issues (e.g. absolute vs relative paths under Windows), producing 4 document placeholders (e.g. `QUALITY.md`) that appeared isolated.

## True Dead Code Finding

Only a single, genuinely dead function was discovered during the codebase audit:

- **Function:** `clampSizeToContainingSpace`
- **Location:** `src/contexts/workspace/presentation/renderer/components/workspaceCanvas/hooks/useNodesStore.clampSizeToSpace.ts`
- **Details:** The function is exported but has zero imports or references across the repository. This represents a legacy code path that was bypassed during a previous refactoring session.
