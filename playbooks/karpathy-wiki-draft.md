---
name: karpathy-wiki-draft
owning_agent: opencode, openwork
allowed_dirs:
  - MEMORY/Karpathy/
  - MEMORY/KARPATHY/
---

# Karpathy Wiki Draft

## Goal

Author new or updated Karpathy wiki entries following the three-folder curation model — raw capture first, evergreen wiki note second, schema update third.

## Shared Ownership

This playbook is shared between **opencode** (secondary owner — leads when the entry is tooling-adjacent) and **openwork** (primary owner — leads when the entry is narrative or research-adjacent). Both agents load this same file. The content-redteam reviews all wiki output before it reaches the user.

## Three-Folder Architecture

```
MEMORY/KARPATHY/raw/      — append-only source captures
MEMORY/KARPATHY/wiki/     — evergreen distilled notes (one per topic)
MEMORY/KARPATHY/schema/   — Master Index, By Topic, Catalog, Gaps
```

Flow: `raw capture → curate → wiki note → pattern detected 2+ times → schema entry`

## Workflow

### Path A: New entry from task output

1. **Write raw capture** — append a new file to `MEMORY/KARPATHY/raw/` named `{YYYY-MM-DD}-{slug}.md`. Content: the raw factual signal from the current task (source citation, date, context). Do not editorialize.

2. **Assess evergreen potential** — does this information remain true beyond this specific task? If yes → proceed to wiki note. If no (transient, task-specific) → raw only; stop here.

3. **Write wiki note** — create or update `MEMORY/KARPATHY/wiki/{slug}.md` with required frontmatter (see below). Each note covers exactly one atomic idea. No multi-topic mashups.

4. **Update Master Index** — add or update the entry in `MEMORY/KARPATHY/schema/Master Index.md` alphabetically by title.

5. **Check for pattern** — scan existing wiki notes for the topic cluster. If 2+ wiki notes share a pattern with this one, create or update the corresponding schema entry in `MEMORY/KARPATHY/schema/`.

### Path B: Correction to existing entry

1. **Read existing wiki note** — read `MEMORY/KARPATHY/wiki/{slug}.md`.
2. **Validate the raw source** — confirm the correction traces to a raw source entry.
3. **Edit the wiki note** — update content and set `modified: YYYY-MM-DD`.
4. **Update Master Index** if title or tags changed.

## Wiki Note Frontmatter

```yaml
---
title: "Note Title"
type: wiki-note
domain: {domain — e.g., agent-os, memory, tooling, security}
source: "[[KARPATHY/raw/YYYY-MM-DD-slug]]"
tags:
  - domain/{x}
  - type/wiki-note
  - status/active
created: YYYY-MM-DD
modified: YYYY-MM-DD
status: active
---
```

## Style Rules

- **One idea per note** — combine two topics and the note becomes hard to cite. Split instead.
- **Cite sources** — every wiki note must link to its raw source. No unsourced wiki notes.
- **Atomic facts** — state facts, not opinions. "Tool X requires Y" not "Tool X is great for Y."
- **No agent opinions** — the wiki records what the agents know, not what they prefer.
- **Present tense** — write in present tense for evergreen content.

## Output Contract

At minimum, each wiki draft session produces:
- One new or updated file in `MEMORY/KARPATHY/raw/`
- One new or updated file in `MEMORY/KARPATHY/wiki/` (if evergreen)
- Updated `MEMORY/KARPATHY/schema/Master Index.md`

The content-redteam reviews all outputs before user delivery. Do not self-approve.

## Guardrails

- Every wiki note must trace to a raw source. No wiki note without a raw entry.
- Do not combine unrelated ideas in one note. One topic = one file.
- Do not write wiki notes that are specific to a single task. They belong in raw only.
- Do not edit `Master Index.md` and leave it in a non-alphabetical state.
- Do not write to `MEMORY/vault.db` directly — that is hermes's responsibility.

## Question Ownership

This playbook runs in the opencode or openwork worker (subagent). AskUserQuestion is forbidden. All escalations go in the respective execution reply file.
