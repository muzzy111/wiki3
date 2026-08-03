---
name: analyzing-slack-space-and-file-system-artifacts
description: "Agent for analyzing NTFS slack space and file system artifacts. Use when the user asks to analyze slack space and file system artifacts."
version: 1.0.0
tags:
  - analyzing
source: analyzing-slack-space-and-file-system-artifacts
---

# Analyzing Slack Space and File System Artifacts

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** USN Journal Parsing, bulk_extractor, foremost

## When to use

- The user wants to **analyze** slack space and file system artifacts.
- Capability: Agent for analyzing NTFS slack space and file system artifacts.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, slack, space, file, system, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse MFT using analyzeMFT and return deleted/timestomped files
2. Extract slack space from a disk image using blkls from The Sleuth Kit
3. Search extracted slack space for forensic keywords
4. Parse NTFS USN Change Journal ($UsnJrnl:$J) records
5. List Alternate Data Streams using fls from The Sleuth Kit
6. Detect timestomping by comparing $SI and $FN timestamps in MFT CSV output
7. Generate a structured forensic report

## Tools & resources

- USN Journal Parsing
- bulk_extractor
- foremost

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

- `parse_mft_with_analyzeMFT` — Parse MFT using analyzeMFT and return deleted/timestomped files.
- `extract_slack_space` — Extract slack space from a disk image using blkls from The Sleuth Kit.
- `search_slack_keywords` — Search extracted slack space for forensic keywords.
- `parse_usn_journal` — Parse NTFS USN Change Journal ($UsnJrnl:$J) records.
- `find_ads_in_image` — List Alternate Data Streams using fls from The Sleuth Kit.
- `detect_timestomping` — Detect timestomping by comparing $SI and $FN timestamps in MFT CSV output.
- `generate_report` — Generate a structured forensic report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-slack-space-and-file-system-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
