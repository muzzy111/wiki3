---
name: performing-steganography-detection
description: "Steganography detection agent using Pillow, numpy, and subprocess tools. Use when the user asks to perform steganography detection."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-steganography-detection
---

# Performing Steganography Detection

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Finding Types

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** steganography detection.
- Capability: Steganography detection agent using Pillow, numpy, and subprocess tools.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, steganography, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check for data appended after JPEG/PNG end markers
2. Perform LSB analysis on image channels
3. Extract LSB data from red channel and check for file signatures
4. Run binwalk to detect embedded files
5. Run zsteg on PNG/BMP files for LSB detection
6. Attempt steghide extraction with multiple passwords
7. Full steganalysis pipeline for a single file

## Tools & resources

- Finding Types

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

- `check_trailing_data` — Check for data appended after JPEG/PNG end markers.
- `lsb_analysis` — Perform LSB analysis on image channels.
- `extract_lsb_data` — Extract LSB data from red channel and check for file signatures.
- `run_binwalk` — Run binwalk to detect embedded files.
- `run_zsteg` — Run zsteg on PNG/BMP files for LSB detection.
- `run_steghide_extract` — Attempt steghide extraction with multiple passwords.
- `analyze_file` — Full steganalysis pipeline for a single file.
- `print_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-steganography-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
