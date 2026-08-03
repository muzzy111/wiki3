---
name: analyzing-powershell-script-block-logging
description: "PowerShell Script Block Logging Analyzer - Parses Event 4104 from EVTX for obfuscated commands. Use when the user asks to analyze powershell script block logging."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-powershell-script-block-logging
---

# Analyzing PowerShell Script Block Logging

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** python-evtx Library, lxml etree Parsing, Script Block Reconstruction

## When to use

- The user wants to **analyze** powershell script block logging.
- Capability: PowerShell Script Block Logging Analyzer - Parses Event 4104 from EVTX for obfuscated commands.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, powershell, script, block, logging`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Calculate Shannon entropy of a string to detect obfuscation
2. Parse Event ID 4104 entries from a PowerShell Operational EVTX file
3. Reconstruct full scripts from multi-part script block entries
4. Attempt to decode Base64-encoded command strings found in scripts
5. Analyze a single reconstructed script for suspicious patterns
6. Generate PowerShell script block analysis report

## Tools & resources

- python-evtx Library
- lxml etree Parsing
- Script Block Reconstruction

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

- `calculate_entropy` — Calculate Shannon entropy of a string to detect obfuscation.
- `parse_evtx_4104` — Parse Event ID 4104 entries from a PowerShell Operational EVTX file.
- `reconstruct_scripts` — Reconstruct full scripts from multi-part script block entries.
- `decode_base64_commands` — Attempt to decode Base64-encoded command strings found in scripts.
- `analyze_script` — Analyze a single reconstructed script for suspicious patterns.
- `generate_report` — Generate PowerShell script block analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-powershell-script-block-logging`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
