---
title: "Karpathy Wiki Curation"
role: "memory"
status: active
---

# Karpathy Wiki Curation

> Skill: how Memory Curator curates the Karpathy 3-folder wiki.

## The Three Folders

- `MEMORY/KARPATHY/raw/` — append-only source entries.
- `MEMORY/KARPATHY/wiki/` — distilled evergreen notes (one source-of-truth per topic).
- `MEMORY/KARPATHY/schema/` — Master Index, By Topic, Catalog, Gaps.

## The Flow

```
raw (capture)
  |
  +-- curate -> wiki (atomic evergreen notes)
                   |
                   +-- pattern seen 2+ times -> schema (Master Index entry)
```

## Procedure

1. Read raw entries weekly.
2. For each, decide: evergreen (promote to wiki) or transient (keep in raw only).
3. Author a wiki note with full frontmatter (title, type, domain, source, tags, created, modified, status).
4. Update `MEMORY/KARPATHY/schema/Master Index.md` alphabetically.
5. Periodically, scan wiki for patterns; promote to schema once 2+ wiki notes share a pattern.

## Frontmatter for Wiki Notes

```yaml
---
title: "Note Title"
type: wiki-note
domain: <domain>
source: "[[RAW/filename]]"
tags:
  - domain/<x>
  - type/wiki-note
  - status/active
created: YYYY-MM-DD
modified: YYYY-MM-DD
status: active
---
```

## Pitfalls

- **Pitfall: skipping raw.** Every wiki note must trace to a raw source.
- **Pitfall: combining unrelated ideas.** One idea per wiki note.
