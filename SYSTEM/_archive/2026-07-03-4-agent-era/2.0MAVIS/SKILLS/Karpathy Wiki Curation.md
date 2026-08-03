---
title: Karpathy Wiki Curation
tags: [agent, mavis, skill, karpathy, wiki]
created: 2026-07-01
type: skill
status: active
---

# Karpathy Wiki Curation

> How Mavis maintains the Karpathy knowledge wiki at `MEMORY/KARPATHY/`.

## Scope

The Karpathy wiki is a curated knowledge base named for and inspired by Andrej Karpathy's approach to learning in public — atomic, dense, permanent notes. The wiki is one of Mavis' signature responsibilities.

## Location

```
MEMORY/KARPATHY/
|-- raw/        (unprocessed source material)
|-- wiki/       (processed, permanent knowledge entries)
`-- schema/     (human-readable catalog and master index)
```

## The Three Folders

### `raw/`

`raw/` holds unprocessed source material. Each item is a single markdown file with frontmatter:

```yaml
---
source: <URL or "user note" or "import: ...">
ingested: YYYY-MM-DD
type: article | paper | video | podcast | book | lecture | note | import
topic: <short topic label>
status: unprocessed | processed | archived
---
```

Rules:

- No edits to the body of the source. Mavis preserves the original content verbatim.
- One file per source.
- Naming: `YYYY-MM-DD — <short slug>.md` or, for imports that keep their original name, the original filename with a date prefix.
- Mavis does not delete from `raw/` unless the task explicitly says so.

### `wiki/`

`wiki/` holds processed, permanent knowledge entries. Each entry is atomic (one concept per entry), densely linked, and evergreen.

Entry format:

```markdown
---
title: <concept name>
created: YYYY-MM-DD
modified: YYYY-MM-DD
type: karpathy-wiki
topic: <topic label>
status: evergreen | seedling
source_refs:
  - "[[../raw/<source file>]]"
---

# <Concept Name>

<one-paragraph summary in the vault voice>

## Core Idea

<the concept explained, atomic>

## Why It Matters

<significance in context>

## How It Connects

- [[Related Concept 1]]
- [[Related Concept 2]]

## Sources

- [[../raw/<source file>]]
```

Rules:

- One concept per entry.
- The first paragraph is a standalone summary (callout-friendly).
- The entry is evergreen — written in present tense, no time-bound language ("recently", "last week").
- Backlinks accumulate naturally; Mavis does not force links.
- `status` is `seedling` for new entries and `evergreen` once the entry has been referenced from at least three other wiki entries or notes.

### `schema/`

`schema/` holds the human-readable catalog and the master index.

Files:

- `Master Index.md` — alphabetical list of every wiki entry with one-line summary.
- `By Topic.md` — wiki entries grouped by topic.
- `Catalog.md` — per-entry detailed catalog entry with title, summary, source type, date processed, link to wiki entry.
- `Gaps.md` — known gaps in the wiki (topics the user has asked about that have no entry yet).

Catalog entry format:

```markdown
### <Title>

- **Summary:** <one sentence>
- **Source type:** <article | paper | ...>
- **Source date:** YYYY-MM-DD
- **Processed:** YYYY-MM-DD
- **Status:** seedling | evergreen
- **Wiki entry:** [[../wiki/<Title>]]
- **Sources:** [[../../raw/<source file>]]
```

## The Curation Pipeline

1. **Intake.** A source arrives (user share, web research from AGY, manual import). Mavis creates a `raw/` entry with frontmatter.
2. **Distillation.** Mavis reads the source, extracts the atomic concept(s), and drafts `wiki/` entry(ies).
3. **Linking.** Mavis searches `wiki/` for related entries and adds `[[...]]` links in the new entry's `How It Connects` section. Mavis also adds a backlink reference in the related entries if it strengthens the network.
4. **Catalog update.** Mavis updates `schema/Catalog.md` with a new entry and refreshes `Master Index.md` and `By Topic.md`.
5. **Status transition.** New entries start as `seedling`. Mavis transitions them to `evergreen` when they meet the linkage threshold.

## Linking Strategy

The Karpathy wiki is a graph. Density matters. Mavis follows these principles:

- Every wiki entry has at least 2 outgoing links to other wiki entries.
- Every wiki entry is reachable from `Master Index.md` within two clicks.
- `seedling` entries are aggressively linked-to by other entries to bring them to `evergreen` status.
- `evergreen` entries are the canonical anchors of the wiki — links to them are preferred in other notes.

## Atomicity

A wiki entry is atomic when it answers exactly one question. Examples:

- "What is a transformer?" — one entry.
- "What is multi-head attention?" — separate entry, linked from the transformer entry.
- "How does attention scale with sequence length?" — separate entry, references both above.

Mavis splits long source material into multiple atomic entries rather than writing one long entry per source.

## Voice

Wiki entries are written for an intermediate technical audience. They:

- Define specialized terms on first use.
- Do not over-explain foundational concepts.
- Use precise language.
- Use analogies only for genuinely novel concepts.
- No emojis, no icons.
- Use Obsidian callouts sparingly.

## Review

Wiki entries are reviewed by Mavis before they graduate from `seedling` to `evergreen`. The review checks atomicity, linkage, voice, and citation integrity.

## How Mavis Uses the Wiki

When Mavis needs to answer a question, Mavis:

1. Searches `wiki/` first.
2. If a relevant entry exists, uses it as the source of truth.
3. If not, identifies the gap and writes it into `schema/Gaps.md`.
4. If the gap is critical, Mavis dispatches AGY for research and creates a `raw/` entry to start the pipeline.

## Master Index Maintenance

`schema/Master Index.md` is the canonical catalog of the wiki. It is updated every time a wiki entry is created, modified, or deprecated. The index format:

```markdown
# Master Index

> Alphabetical index of every wiki entry. Updated by Mavis on every wiki change.

| Entry | Topic | Status | Processed |
|---|---|---|---|
| [[../wiki/<Title>\|<Title>]] | <topic> | seedling/evergreen | YYYY-MM-DD |
| ... | ... | ... | ... |
```

## See Also

- Mavis' role: [[../../AGENT]]
- Review protocol: [[../../CHAT/Review Protocol]]
- Documentation standards: [[../../RULES/Documentation Standards]]
- AGY research protocol: [[../../../4.0AGY/RULES/Research Protocol]]