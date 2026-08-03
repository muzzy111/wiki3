---
name: analyzing-mft-for-deleted-file-recovery
description: "MFT Deleted File Recovery Agent - Parses NTFS Master File Table for deleted file artifacts. Use when the user asks to analyze mft for deleted file recovery."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-mft-for-deleted-file-recovery
---

# Analyzing MFT for Deleted File Recovery

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** MFT Attribute Types, Tools, Standards, Key Technical References, NTFS Specifications

## When to use

- The user wants to **analyze** mft for deleted file recovery.
- Capability: MFT Deleted File Recovery Agent - Parses NTFS Master File Table for deleted file artifacts.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, deleted, file, recovery`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Convert FILETIME to datetime
2. Parse a single MFT entry
3. Parse an extracted MFT file
4. Find deleted file entries in MFT
5. Analyze deleted files for forensic significance
6. Generate MFT analysis report

## Key concepts

- NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response
- ISO/IEC 27037: Guidelines for identification, collection, acquisition and preservation of digital evidence
- SWGDE Best Practices for Computer Forensics
- NTFS Documentation (Microsoft): File system internals and MFT structure
- MFTECmd by Eric Zimmerman: Primary parsing tool for $MFT, $J, $LogFile, $Boot
- analyzeMFT (Python): Open-source MFT parser for cross-platform analysis
- ntfstool (GitHub): Forensics tool for NTFS parsing, MFT, BitLocker, deleted files
- T1070.004 - Indicator Removal: File Deletion

## Tools & resources

- MFT Attribute Types
- Tools
- Standards
- Key Technical References
- NTFS Specifications

## How the agent should work

1. **Orient** — Restate the user's goal, scope, and constraints in one short paragraph.
2. **Load depth as needed** — Do **not** dump raw API tables into the chat. Read only the reference sections required for the current step.
   - Workflows and playbooks: `references/workflows.md` (if present)
   - Standards, data models, event IDs: `references/standards.md` (if present)
   - CLI/API flags and query snippets: `references/api-reference.md`
3. **Prefer automation** — Use `scripts/agent.py` (and `scripts/process.py` if present) for repeatable collection/analysis when the environment allows.
4. **Explain at the right altitude** — Lead with decisions and findings; put flags, full queries, and hex dumps in collapsible detail or appendices.
5. **Close the loop** — Summarize confidence, residual risk, and concrete next steps.

## Package layout

| Path | Purpose |
|------|---------|
| `SKILL.md` | This high-level playbook (start here) |
| `references/` | Deep procedure, standards, and CLI/API detail |
| `scripts/` | Automation helpers for collection/analysis |
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `filetime_to_dt` — Convert FILETIME to datetime.
- `parse_mft_entry` — Parse a single MFT entry.
- `parse_mft_file` — Parse an extracted MFT file.
- `find_deleted_files` — Find deleted file entries in MFT.
- `analyze_deleted_files` — Analyze deleted files for forensic significance.
- `generate_report` — Generate MFT analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-mft-for-deleted-file-recovery`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
