---
name: analyzing-windows-lnk-files-for-artifacts
description: "Agent for analyzing Windows LNK shortcut files for forensic artifacts. Use when the user asks to analyze windows lnk files for artifacts."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-windows-lnk-files-for-artifacts
---

# Analyzing Windows Lnk Files for Artifacts

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** LnkParse3, Key LNK File Locations, Drive Types

## When to use

- The user wants to **analyze** windows lnk files for artifacts.
- Capability: Agent for analyzing Windows LNK shortcut files for forensic artifacts.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, windows, files, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse a single LNK file and extract forensic artifacts
2. Parse all LNK files in a directory
3. Filter LNK files that point to removable media
4. Filter LNK files pointing to network shares
5. Analyze Startup folder LNK files for potential persistence
6. Export parsed LNK results to CSV
7. Extract unique machine IDs and MAC addresses from LNK files

## Tools & resources

- LnkParse3
- Key LNK File Locations
- Drive Types

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

## Automation entry points

- `parse_lnk_file` — Parse a single LNK file and extract forensic artifacts.
- `parse_lnk_directory` — Parse all LNK files in a directory.
- `filter_removable_media` — Filter LNK files that point to removable media.
- `filter_network_shares` — Filter LNK files pointing to network shares.
- `detect_suspicious_startup` — Analyze Startup folder LNK files for potential persistence.
- `export_csv` — Export parsed LNK results to CSV.
- `extract_unique_machines` — Extract unique machine IDs and MAC addresses from LNK files.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-windows-lnk-files-for-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
