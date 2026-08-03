---
name: analyzing-lnk-file-and-jump-list-artifacts
description: "Windows LNK file and Jump List artifact analysis agent. Parses Windows Shell Link (.lnk) files and Jump List artifacts to extract file access evidence, program execution history, and user activity timelines. Uses.... Use when the user asks to analyze lnk file and jump list artifacts."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-lnk-file-and-jump-list-artifacts
---

# Analyzing Lnk File and Jump List Artifacts

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** LECmd (Eric Zimmerman), LnkParse3 (Python), Magnet AXIOM

## When to use

- The user wants to **analyze** lnk file and jump list artifacts.
- Capability: Windows LNK file and Jump List artifact analysis agent. Parses Windows Shell Link (.lnk) files and Jump List artifacts to extract file access evidence, program execution history, and user activity timelines. Uses LnkParse3 for binary parsing and supports LECmd/JLECmd CSV output analysis.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, file, jump, list, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Compute SHA-256 hash of file
2. Parse LNK file using LnkParse3 library
3. Parse LNK file header manually from raw bytes
4. Convert Windows FILETIME to ISO string
5. Decode Shell Link header flags
6. Scan Jump List directory for automatic and custom destinations
7. Detect suspicious characteristics in LNK files
8. Scan directory for LNK files and analyze each

## Key concepts

- MS-SHLLINK: Shell Link Binary File Format (Microsoft Open Specifications)
- NIST SP 800-86: Guide to Integrating Forensic Techniques
- SWGDE Best Practices for Computer Forensics
- LECmd (Eric Zimmerman): LNK file parser
- JLECmd (Eric Zimmerman): Jump List parser
- LnkParse3 (Python): Cross-platform LNK parser
- Magnet AXIOM: Commercial forensic tool with LNK/Jump List support
- Recent files: %APPDATA%\Microsoft\Windows\Recent\

## Tools & resources

- LECmd (Eric Zimmerman)
- LnkParse3 (Python)
- Magnet AXIOM

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

- `compute_hash` — Compute SHA-256 hash of file.
- `parse_lnk_with_lnkparse3` — Parse LNK file using LnkParse3 library.
- `parse_lnk_header_raw` — Parse LNK file header manually from raw bytes.
- `filetime_to_datetime` — Convert Windows FILETIME to ISO string.
- `decode_link_flags` — Decode Shell Link header flags.
- `scan_jump_lists` — Scan Jump List directory for automatic and custom destinations.
- `detect_suspicious_lnk` — Detect suspicious characteristics in LNK files.
- `scan_lnk_directory` — Scan directory for LNK files and analyze each.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-lnk-file-and-jump-list-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
