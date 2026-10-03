---
type: dashboard
cssclasses: [cards]
tags:
  - karpathy
  - sector
  - abstract
  - overview
---

# 2026-06-17 G: Drive Reorganization Session

Full restructure of `G:\My Drive` (Google Drive for Desktop mount). User requested: organize files and folders, create and delete folders allowed, do not delete any files.

## Initial State

Root directory had **42 folders + 5 loose files** with no hierarchy. Key problems:

- **14 legal folders** scattered at root (Common Law, Conditional Acceptance, Contracts, Court Strategy, Estate Planning, FCRA, Jurisdiction, Jurisprudence, Legal research resources, paralegal, Procedural, treasury_and_irs, Trusts, UCC, USC)
- **6 tech folders** at root (Agent OS, AI and Machine Learning, Android stuff, Colab Notebooks, Google AI Studio, MCP Servers, Python, Termux)
- **`Sort/` folder** containing **108 unsorted files** — mostly legal documents that belonged in the existing legal folders
- **Empty folders**: `sync` (0 files), `Youtube Transcripts` (0 files), `Agent OS\TEST-OBS` (empty)
- **Loose orphan folders**: Gene Keeding, Yuseph El, Opal, Links_Bookmarks, Transcripts at root
- **Loose root files**: Source recievable.gdoc, To-do list.gsheet, 2x [[10.04 LOOPS/Untitled]] document.gdoc

## Actions Taken

### Phase 1 — Created category hierarchy

Created 7 top-level parent folders at root:
- `Legal/`
- `Tech & AI/`
- `Reference/`
- `Media/`
- `_Archives/`
- (Existing: `Personal/`, `[[[[Prompts]]]]/` kept as top-level)

### Phase 2 — Moved existing folders into categories

**Legal/** — 15 subfolders moved:
Common Law (52 files), UCC (23 files), Court Strategy (14 files), Procedural (12 files), treasury_and_irs (11 files), Contracts (8 files), Legal research resources (9 files), FCRA (5 files), USC (5 files), Trusts (5 files), Conditional Acceptance (5 files), Estate Planning (4 files), paralegal (5 files), Jurisdiction (1 file), Jurisprudence (1 file)

**Tech & AI/** — 9 subfolders moved:
MCP Servers (38 files), Termux (25 files), Android stuff (3 files), AI and Machine Learning (3 files), Google AI Studio (2 files), Colab Notebooks (2 files), Python (1 file), Opal (1 file), Agent OS (0 files — deleted after removing empty TEST-OBS)

**Reference/** — 4 subfolders moved:
Dictionaries & Linguistics (81 files), Books (4 files), Bibles (2 files), Links_Bookmarks (2 files)

**Media/** — 3 subfolders moved:
Vids_pics (37 files), YouTube (4 files), Transcripts (4 files)

### Phase 3 — Deleted empty folders
- `sync` — was empty
- `Youtube Transcripts` — was empty
- `Tech & AI/Agent OS/TEST-OBS` — was empty (cascade deleted Agent OS as well)

### Phase 4 — Archived bulk items
- `Sort/` → `_Archives/Sort/` (before distribution)
- `Zips_Sort/` → `_Archives/Zips_Sort/`
- `Takeout/` → `_Archives/Takeout/`

### Phase 5 — Distributed Sort/ files (108 files)

Ran two-pass PowerShell categorization script matching filenames against patterns:

**Pass 1 (45 files):** Common Law (24), UCC (12), via regex matching on keywords (Strawman, Sovereign, Redemption, UCC, Common Law, etc.)

**Pass 2 (56 files):** Contracts (4), Common Law (11), UCC (2), treasury_and_irs (6), Conditional Acceptance (4), Court Strategy (6), Procedural (10), FCRA (4), Estate Planning (2), Legal research resources (5), [[[[Prompts]]]] (5)

**Stragglers (7 files):** Moved individually via `-LiteralPath` (special characters in filenames caused wildcard failures): The_Significance_of_Stamps_Used_on_Bank_Notes.pdf, LETTER OF ADVICE FREEDOM.doc, Blue Master Offset Bond.jpg, Outline of the Constitution.jpg, KEATING'Smoneyorder.doc, Do Not Detain List- Dip[lomatic Immunity.pdf, A_Treatise_on_the_Law_of_Set_off_Recoupm.pdf

**Result:** `_Archives/Sort/` deleted after all files distributed.

### Phase 6 — Root loose items
- Gene Keeding/ → Personal/
- Yuseph El/ → Personal/
- Opal/ → Tech & AI/
- Links_Bookmarks/ → Reference/
- Transcripts/ → Media/
- [[10.04 LOOPS/Untitled]] document.gdoc → Personal/
- [[10.04 LOOPS/Untitled]] document (2).gdoc → Personal/
- Source recievable.gdoc — kept at root
- To-do list.gsheet — kept at root

## Final State

```
G:\My Drive\
 Legal\              (160 files, 15 subfolders)
 Tech & AI\           (75 files, 8 subfolders)
 Reference\           (89 files, 4 subfolders)
 Media\               (45 files, 3 subfolders)
 Personal\            (13 files, 2 subfolders)
 Prompts\             (34 files)
 _Archives\           (Zips_Sort + Takeout)
 To-do list.gsheet
 Source recievable.gdoc
```

Root reduced from **42 folders** to **7 categories**. Zero files deleted.

## Technical Notes

- Google Drive for Desktop (G:\\) handles Windows paths — PowerShell `Move-Item` works for both folders and files
- Special characters in filenames (`[`, `'`, parentheses) required `-LiteralPath` instead of `-Path`
- Sort/ file distribution used two-stage approach: broad regex patterns first, then explicit name matching for stragglers
- The `[[[[Prompts]]]]/` folder already existed with 34 files — left as-is at root since it's actively used content
- `desktop.ini` system files ignored throughout
