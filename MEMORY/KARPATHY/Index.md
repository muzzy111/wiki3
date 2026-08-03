---
title: Karpathy Wiki
tags: [karpathy, wiki, memory, knowledge]
created: 2026-07-01
type: karpathy-wiki
status: active
owner: Mavis
---

# Karpathy Wiki

> The team's curated knowledge base. Atomic, evergreen, densely linked notes on topics the user and the team care about. Named for and inspired by Andrej Karpathy's approach to learning in public.

## Structure

```
KARPATHY/
|-- Index.md         (this file)
|
|-- raw/             unprocessed source material
|-- wiki/            processed, permanent knowledge entries
`-- schema/          human-readable catalog and master index
```

## The Three Folders

### `raw/`

Unprocessed source material — articles, papers, videos, user notes, web clippings. Mavis does not edit the body of raw files. Mavis does not delete from raw/ unless explicitly told to.

See [[../2.0MAVIS/SKILLS/Karpathy Wiki Curation]] for the full curation pipeline.

### `wiki/`

Atomic, evergreen, densely linked knowledge entries. Each entry is one concept. The entry's body is written in present tense and uses the vault voice. Status is `seedling` (new) or `evergreen` (mature).

### `schema/`

Human-readable catalog:

- `Master Index.md` — alphabetical list of every wiki entry.
- `By Topic.md` — wiki entries grouped by topic.
- `Catalog.md` — per-entry catalog with summary, source, status, link.
- `Gaps.md` — known gaps in the wiki.

## Curation Pipeline

```
source arrives -> raw/  (status: unprocessed)
                   |
                   v
            Mavis reviews
                   |
                   +--> atomic & evergreen -> wiki/<entry>
                   |    (status: seedling, then evergreen)
                   |
                   +--> cross-agent but not atomic -> MEMORY/DEVELOPED/<note>
                   |
                   +--> not useful -> raw/<file> (status: archived)
```

## Atomicity

One concept per wiki entry. Long source material is split into multiple atomic entries rather than written as one long entry.

## Linking

The wiki is a graph. Every wiki entry:

- Has at least 2 outgoing links to other wiki entries.
- Is reachable from `schema/Master Index.md` within two clicks.
- Accumulates backlinks naturally.

## Voice

Wiki entries are written for an intermediate technical audience. They define specialized terms on first use. They do not over-explain foundational concepts. They use Obsidian callouts sparingly. No emojis, no icons.

## Cadence

- **Intake:** As sources arrive.
- **Distillation:** Mavis runs as part of the weekly audit or on user request.
- **Catalog update:** Every wiki change updates the schema/ catalog.
- **Review:** Mavis reviews entries before they graduate from `seedling` to `evergreen`.

## Current State

- `raw/` is empty (no sources ingested yet).
- `wiki/` is empty (no entries yet).
- `schema/` is empty.

The wiki is bootstrapped and ready for intake. The first sources come from:

- AGY research outputs (auto-dropped to `raw/` per the AGY research protocol).
- User-provided notes and clippings.
- Imports from other systems.

## See Also

- Mavis' role: [[../../2.0MAVIS/AGENT]]
- Wiki curation skill: [[../../2.0MAVIS/SKILLS/Karpathy Wiki Curation]]
- AGY research protocol: [[../../4.0AGY/RULES/Research Protocol]]
- Shared memory index: [[../Index]]