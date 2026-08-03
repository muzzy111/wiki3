---
title: Documentation Standards
tags: [agent, mavis, rules, docs, standards]
created: 2026-07-01
type: documentation-standards
status: active
---

# Documentation Standards

> The standards every markdown file in the vault follows. Mavis enforces.

## Global Style

> [!warning] No emojis or icons
> Per the root `CLAUDE.md`, no emojis or icons in any markdown file, header, callout, or content. Text only. No exceptions for "decorative" purposes.

Additional global rules:

- Voice: direct, technical, no fluff.
- Voice: match the user's tone in user-facing docs (Mavis drafts based on the user's last few messages).
- Language: English (the vault's primary language; localized content gets its own folder).
- Tense: present for current state, past for completed actions.

## Frontmatter

Every operational note carries YAML frontmatter with at minimum:

```yaml
---
title: <short title>
tags: [tag1, tag2]
created: YYYY-MM-DD
type: <note type>
status: draft | active | complete | deprecated
---
```

`type` is a controlled vocabulary (see `## Note Types` below).

`status` is one of:

- `draft` — work in progress, not yet reviewed.
- `active` — reviewed and current.
- `complete` — finished, archival value only.
- `deprecated` — superseded by another note; kept for backlink integrity.

`title` matches the file name (sans `.md`) unless the note is a redirect.

## Wikilinks

- Use `[[Note Name]]` for cross-references.
- Use `[[Note Name|Alias]]` when the display text should differ from the note name.
- Use `[[Note Name#Heading]]` for section references.
- Use bare relative paths only inside code blocks.
- Do not link to files that do not exist unless the task explicitly scaffolds them.

## Headings

- `#` for note title only — one per note.
- `##` for major sections.
- `###` for subsections.
- Avoid going deeper than `###` in body text. Deeper nesting belongs in lists or callouts.

## Lists

- Bullets for unordered.
- Numbered for sequences and steps.
- Indent sublists two spaces.
- One sentence per bullet when bullets describe actions or findings.

## Callouts

Use Obsidian callouts for warnings, tips, notes, info, examples. Choose the right type:

| Type | When |
|---|---|
| `note` | Neutral explanation, definition, context |
| `info` | Background information the reader needs |
| `tip` | Suggestion or shortcut |
| `warning` | Non-blocking but important caution |
| `danger` | Blocking, must-read caution |
| `example` | Worked example or illustration |
| `quote` | Direct quotation from external source |
| `success` | Confirmation of correct behavior |
| `question` | Open question for the reader or the user |

Do not over-callout. A note with five callouts is harder to read than a note with one or two well-placed callouts and good body text.

## Code Blocks

Code blocks live inside labeled callouts when they appear in body text:

```
> [!example] Python — description
> ```python
> code here
> ```
```

The callout header names the language and gives a one-line description. Inline comments only for non-obvious logic. No line-by-line explanations for standard syntax.

For multi-step CLI workflows, use a numbered callout sequence (one callout per step).

## Tables

- Use markdown tables for tabular data.
- Align columns with `|` and `--`.
- Keep tables short. Long tables belong in a Dataview query or a separate CSV.

## Color and Typography

- Use `**bold**` for key terms on first use and critical callouts.
- Use `==highlights==` for terms that will be wikilinked or indexed.
- Use `*italics*` for emphasis or file/path names.
- Limit color to meaningful signal — do not decorate for aesthetics.

## Note Types

Controlled vocabulary for `type` in frontmatter:

- `agent` — defines an agent's role
- `agent-memory` — long-term memory for an agent
- `audit` — vault audit report
- `canvas` — canvas layout
- `catalog` — wiki catalog entry
- `decision` — system decision record
- `deviation` — system deviation record
- `documentation-standards` — this file
- `index` — entry point for a folder
- `karpathy-wiki` — wiki entry
- `lock` — vault lock description
- `lock-index` — locked items index
- `memory-log` — audit trail for memory writes
- `mcp-server` — MCP server documentation
- `note` — generic operational note
- `persona` — agent persona prompt
- `project` — active project
- `protocol` — operating protocol
- `raw` — raw, unprocessed material
- `rename` — folder rename record
- `review-checklist` — review rules
- `routing-rules` — task routing matrix
- `rule` — operating rule
- `skill` — skill description
- `solo-projects` — agent solo work index
- `system-goals` — system goals doc
- `system-graph` — system topology
- `system-record` — append-only system log
- `system-rules` — system-level rule set
- `task-status` — task card
- `workflow` — workflow definition

## Review Standards

When Mavis reviews a doc, Mavis checks:

1. Frontmatter complete and consistent with type/status controlled vocabulary.
2. Wikilinks resolve.
3. Callouts used appropriately, not excessively.
4. Voice matches vault voice.
5. No emojis, no icons.
6. Code blocks wrapped in labeled callouts when in body text.
7. Tables short and meaningful.
8. Headers follow the heading hierarchy rule.

A doc that fails any of these is `changes required`.

## See Also

- Mavis' role: [[../AGENT]]
- Review checklist: [[Review Checklist]]
- Review protocol: [[../CHAT/Review Protocol]]
- System rules: [[../../../SYSTEM/SYSTEM RULES/Rules]]