---
type: dashboard
cssclasses: [cards]
tags:
  - obsidian
  - templates
  - sector
  - abstract
---

# [[Tag-Taxonomy]] Guide

The Tag Taxonomy note is not a Templater [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] in the traditional sense — it does not generate new notes. Instead, it is the **canonical tag reference document** for this vault. Every agent (Antigravity, Hermes), every Templater [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], and every QuickAdd macro derives its tag choices from this single source of truth. Understanding and maintaining this document is how you control the entire vault's tagging behavior.

## Structure and Function of the Document

1. **Purpose Callout**: An `[!info]` block at the top that declares this document as the canonical tag reference and instructs [[agents]] never to add tags outside the taxonomy without updating this file first.

2. **Source Tags** (`source/`):
   - Describe *where* a note came from.
   - Six options: `source/pdf`, `source/web-clip`, `source/markdown`, `source/plaintext`, `source/manual`, `source/agent`.
   - Every ingested note (PDF, web clip, file import) gets exactly one source tag.

3. **Domain Tags** (`domain/`):
   - Describe *what field or subject area* a note belongs to.
   - Seven options: `domain/ai-ml`, `domain/osint`, `domain/security`, `domain/finance`, `domain/pkm-tools`, `domain/dev-code`, `domain/other`.
   - Every note gets exactly one domain tag (two only if genuinely dual-domain).

4. **Type Tags** (`type/`):
   - Describe *what kind of document* the note is.
   - Eleven options covering all common document types from research papers to audit notes.
   - Used by Dataview queries to filter by document type across the vault.

5. **[[Status]] Tags** (`[[status]]/`):
   - Describe *where the note sits in the processing pipeline*.
   - Five stages: `[[status]]/unread` → `[[status]]/in-progress` → `[[status]]/processed` → `[[status]]/archived`.
   - `[[status]]/unprocessed` is the entry state for PDFs and imports.

6. **Relevance Tags** (`relevance/`):
   - Optional priority signal, primarily used for web clips and PDFs.
   - Four levels: `critical`, `high`, `normal`, `archive`.

7. **System Tags** (`system/`):
   - Reserved for vault infrastructure notes only — audit reports, taxonomy definitions, [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] files.
   - Never apply `system/` tags to content notes.

8. **Tag Rules**: Five hard rules governing how tags are applied — the single most important section for [[agents]] and humans alike.

9. **Folder → Domain Mapping**: A reference table showing which vault folder corresponds to each domain tag — used to determine where a processed note should be filed.

## How to Use the Tag Taxonomy

### As a Human

1. **Before tagging any note**, open [[Tag-Taxonomy]] and check which tags are valid for the `source/`, `domain/`, `type/`, and `[[status]]/` categories.
2. Apply at minimum one tag from each of the four required categories to every content note.
3. If a note genuinely fits two domains, add a second `domain/` tag — but do not default to this. Choose the primary domain.
4. If no existing tag fits the content, use `domain/other` temporarily and add a comment or flag the note for taxonomy [[review]].
5. **Never invent tags** outside the taxonomy without first adding them to this document.

### As a Vault Administrator (Adding New Tags)

To extend the taxonomy:

1. Open `[[10.07 OBSIDIAN-TEMPLATES]]/[[Tag-Taxonomy]].md`.
2. Find the correct category section for the new tag.
3. Add a new row to the table with the tag string and its meaning.
4. If you are adding a new domain, also add the corresponding folder mapping at the bottom of the document.
5. Notify Antigravity and Hermes of the change — they derive tag choices from this file and may need to reload their context.

### As an Agent (Antigravity / Hermes)

When tagging or sorting a note:

1. Read this file first, or confirm it is already in your context.
2. Select tags strictly from the tables in this document. Do not use `domain/ai`, `domain/cybersec`, or any shorthand variants — use the exact strings listed.
3. If a note's domain is ambiguous, use `domain/other` and set `antigravity-task: needs-reclassification` in frontmatter.
4. Use the **Folder → Domain Mapping** table at the bottom to determine the correct destination folder when moving processed notes.

## Keeping the Taxonomy Current

The taxonomy should be reviewed and potentially extended when:

- A significant new domain of content enters the vault (e.g., a new project like [[Mad River AI]] introduces OSINT-specific sub-types).
- A new document type is being ingested regularly that doesn't fit existing `type/` tags.
- The Sort & Tag Audit consistently shows notes landing in `domain/other` — a signal that a new domain tag is needed.

When you [[update]] the taxonomy, also [[update]] any Templater suggester dropdowns in the ingest templates ([[PDF-Research-Ingest]] and [[Web-Clip-Ingest]]) that present domain and type choices to users.
