---
name: processing-karpathy-raw
description: Use when processing raw capture notes, conversation exports, or dumps into structured wiki notes according to the Karpathy three-stage knowledge pipeline.
tags:
  - wiki
  - notes
  - folder
  - processing
---

# Processing Karpathy Raw

## Overview
This [[10.03 SKILLS/processing-karpathy-raw/SKILL]] details the process for transitioning captured materials from the RAW layer to structured knowledge in the WIKI and SCHEMA layers, maintaining strict formatting [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[standards]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] and [[[[ledger]]]] integrity.

## When to Use
- Processing files deposited in the RAW folder of the Karpathy wiki system.
- Structuring raw conversation dumps, meeting transcripts, or research notes.
- Updating the RAW [[[[ledger]]]] to reflect ingestion progress.

## When Not to Use
- Project-specific configuration (use CLAUDE.md instead).
- General code refactoring tasks outside the wiki ecosystem.

## Core Principles

- **One-Way Knowledge Flow:** Information moves strictly from RAW to WIKI, and then optionally from WIKI to SCHEMA. Never edit or delete files in the RAW folder once they are deposited.
- **Strict Textual Formatting:** Do not use emojis, icons, or visual markers in titles, headers, callouts, or content. Keep all markdown text-only.
- **Word and Meaning Preservation:** When reorganizing files as requested by the user, keep all original wording, content, and details completely intact. Do not summarize or omit points unless explicitly instructed to do so.
- **Atomic Processing:** Split large RAW files into separate, atomic concept notes in the WIKI folder. Ensure one concept per note.

## Implementation Steps

### 1. Ingest Logging and [[Status]] Management
- Open the [[[[ledger]]]] file at `RAW/[[[[LEDGER]]]].md`.
- Ensure the RAW file is logged with:
  - Timestamp (ISO 8601: `YYYY-MM-DD HH:mm`)
  - Filename
  - Source
  - Description
  - [[Status]] (initially `unprocessed` or `in-progress`)

### 2. Processing to WIKI Notes
For each distinct, atomic concept identified in the RAW file, create a new note in the `WIKI/` folder.
- **WIKI File Naming:** Title Case and descriptive, using only letters and spaces (no dates in the filename).
- **Frontmatter [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]:**
  ```yaml
  title: "Concept Title"
  type: wiki-note
  domain: primary-domain
  source: "[[RAW/raw-filename.md]]"
  tags:
    - domain/primary-domain
    - type/wiki-note
    - status/active
  created: YYYY-MM-DD
  modified: YYYY-MM-DD
  status: active
  ```
- **Structure:** Use H1 for the main concept title, and H2, H3, H4 for logical sub-structures. Format with standard text-only markdown.

### 3. Schema Abstraction (Optional)
When a recurring pattern is identified across two or more WIKI notes:
- Create a pattern framework note in the `SCHEMA/` folder.
- **Frontmatter [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]:**
  ```yaml
  title: "Framework Name"
  type: schema
  domain: primary-domain
  derived-from:
    - "[[WIKI/Note1]]"
    - "[[WIKI/Note2]]"
  tags:
    - domain/primary-domain
    - type/schema
    - status/active
  created: YYYY-MM-DD
  modified: YYYY-MM-DD
  ```

### 4. [[[[Ledger]]]] Finalization
Once all notes have been created and saved:
- Open `RAW/[[[[LEDGER]]]].md`.
- Set the entry [[status]] to `processed`.
- Add the `Wiki Notes` column if missing and list the markdown links to the newly created WIKI notes.

## Common Mistakes
- **Adding Emojis to Headers:** Adding decorative emojis (e.g. , , ) violates the textual-only formatting directive. Ensure headers are clean.
- **Losing Raw Provenance:** Creating WIKI notes without citing the source `[[RAW/filename]]` in the frontmatter breaks the lineage trail. Always verify the source property is present.
- **Summarizing Out Original Content:** Summarizing or omitting data during document organization tasks violates the word preservation rule. Always keep the text identical if requested.
