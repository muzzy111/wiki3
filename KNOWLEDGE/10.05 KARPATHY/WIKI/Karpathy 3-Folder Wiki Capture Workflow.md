---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Karpathy 3-Folder Wiki Capture Workflow

The agreed workflow for capturing every Hermes session into the Karpathy 3-folder wiki at `C:\Users\Admin\OBSIDIAN\wiki\[[10.05 KARPATHY]]`. Established 2026-06-16 after a back-and-forth on how strictly to follow the `[[KARPATHY-SYSTEM-RULES]]` one-way flow.

## The Workflow

```
START OF SESSION
      |
      v
[1] Create running journal in RAW:
    RAW/YYYY-MM-DD hermes session journal.md
    with frontmatter: status: in-progress,
    source: Hermes CLI session, captured: <ISO8601>
      |
      v
[2] Append in-progress row to RAW/LEDGER.md
    (Status column = "in-progress",
     Wiki Notes column = empty)
      |
      v
[3] Throughout session: APPEND key events
    to journal. Format:
      [HH:MM] <event-type> :: <content>
    Event types: request, action, result,
    error, decision, note.
      |
      v
[4] User says "send it" (or natural break)
      |
      v
[5] Derive 1+ atomic WIKI notes from
    journal. Each note gets full frontmatter:
    type: wiki-note, domain: <x>, source:
    "[[RAW/journal filename]]", tags,
    created, modified, status: active.
      |
      v
[6] Flip LEDGER row to "processed" and
    fill Wiki Notes column with
    [[WIKI/Note1]], [[WIKI/Note2]], ...
      |
      v
[7] Do NOT touch SCHEMA unless a pattern
    recurs in 2+ WIKI notes.
```

## Why This Shape (Not The Alternatives)

The first option the user considered was "skip RAW, write WIKI notes directly." That violates two hard rules from `[[KARPATHY-SYSTEM-RULES]]`: **No skip** (RAW must precede WIKI) and **No orphans** (every WIKI note must trace to a RAW source). A WIKI note with `source: "on-demand session export"` has no provenance for future [[agents]] to follow.

The second option (full session transcript into RAW) violates the spirit of atomicity. A 250KB transcript becomes its own unwieldy artifact, and downstream WIKI notes would have to cite a 250KB blob. The journal is the right unit: compact, dated, signed by the agent that produced it, and the right size for a 1-message "send it" derivation.

## When the User Forgets

The user explicitly asked to be prompted periodically so they don't forget to send a session. Rule: **prompt "want me to send it yet?" every ~5-8 user messages** during any session that has an open journal.

## Invariants

- The journal file is **append-only after deposit**. Corrections go in a `## Corrections` section at the bottom with a `correction:` prefix, never by overwriting.
- The [[[[LEDGER]]]] row stays append-only. The [[Status]] column may transition `unprocessed` -> `in-progress` -> `processed` -> `superseded`. Never delete a row.
- WIKI notes derived from a journal must use `[[RAW/<filename>]]` as the `source` field — the exact filename, with extension.
- **Do not create SCHEMA entries for one-off observations.** A single WIKI note does not a pattern make.

## Anti-Patterns To Avoid

- Writing WIKI notes without a corresponding journal (skip-RAW)
- Letting a session end with `[[status]]: in-progress` still on the [[[[LEDGER]]]] (orphan in-progress)
- Combining unrelated ideas into one WIKI note (violates atomicity)
- Adding `type`, `domain`, or `tags` to journal frontmatter (that's WIKI's job)
- Renaming journal files after deposit (filename is part of the provenance chain)

## Related

- [[00.04 Opencode/KARPATHY-SYSTEM-RULES]] — the governing document
- `RAW/[[[[LEDGER]]]].md` — append-only deposit log
- See the journal for the first session this workflow was applied to
