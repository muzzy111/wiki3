---
title: Raw Material
tags: [memory, raw, unprocessed]
created: 2026-07-01
type: raw
status: active
---

# Raw Material

> Unprocessed source material that may eventually become developed knowledge or wiki entries. Append-only.

## What Lives Here

- Research outputs from AGY that haven't been distilled yet.
- User-provided notes and clippings.
- Web pages or articles saved for future reference.
- Imports from other systems.
- Drafts of knowledge entries before they are ready for promotion.

## Rules

- **Append-only.** New material is added; existing material is not edited.
- **One source per file.** Each file represents a single source.
- **Preserve verbatim.** The original content is kept as-is. Annotations go in a separate section at the bottom if needed.
- **Frontmatter.** Every file has frontmatter with `source`, `ingested`, `type`, `topic`, `status`.

## Status Lifecycle

| Status | Meaning |
|---|---|
| `unprocessed` | just ingested, not yet looked at |
| `processed` | Mavis has reviewed and either distilled it (entry in DEVELOPED/ or wiki/) or explicitly skipped it |
| `archived` | older than 90 days and not relevant; kept for audit but not actively referenced |

## Curation Pipeline

```
source arrives
   |
   v
MEMORY/RAW/<file>  (status: unprocessed)
   |
   v
Mavis reviews
   |
   +--> atomic and evergreen -> KARPATHY/wiki/<entry>
   |    (raw file marked processed)
   |
   +--> developed but not atomic -> MEMORY/DEVELOPED/<note>
   |    (raw file marked processed)
   |
   +--> not useful -> status: archived
        (raw file kept but flagged)
```

## Pruning

Quarterly, Mavis reviews raw files:

- Files older than 90 days with `status: unprocessed` -> flag for review (delete or process).
- Files with `status: archived` older than 1 year -> eligible for deletion (with audit log entry).

Mavis does not delete raw files silently. Every deletion is logged in `SYSTEM/STYTEM RECORD/`.

## See Also

- Shared memory index: [[../Index]]
- Developed knowledge: [[../DEVELOPED/Developed Index]]
- Karpathy wiki: [[../../MEMORY/KARPATHY/Index]]