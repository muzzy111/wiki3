---
name: analyzing-windows-shellbag-artifacts
description: "Windows ShellBag artifact analysis agent. Parses ShellBag registry artifacts to reconstruct folder access history, directory browsing patterns, and evidence of accessed network shares. Use when the user asks to analyze windows shellbag artifacts."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-windows-shellbag-artifacts
---

# Analyzing Windows Shellbag Artifacts

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** SBECmd (Eric Zimmerman), ShellBags Explorer (Eric Zimmerman), Registry Explorer (Eric Zimmerman)

## When to use

- The user wants to **analyze** windows shellbag artifacts.
- Capability: Windows ShellBag artifact analysis agent. Parses ShellBag registry artifacts to reconstruct folder access history, directory browsing patterns, and evidence of accessed network shares.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, windows, shellbag, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Ingest and validate inputs for windows shellbag artifacts
2. Establish baseline context (scope, hosts, time window, hypotheses)
3. Run structured analysis using the skill tools and references
4. Extract indicators, artifacts, and high-confidence findings
5. Correlate results and document conclusions with evidence pointers

## Key concepts

- NIST SP 800-86: Guide to Integrating Forensic Techniques
- SWGDE Best Practices for Computer Forensics
- SBECmd (Eric Zimmerman): Command-line shellbag parser
- ShellBags Explorer (Eric Zimmerman): GUI shellbag viewer
- Registry Explorer (Eric Zimmerman): Registry hive analysis
- NTUSER.DAT: Software\Microsoft\Windows\Shell\BagMRU and Bags
- UsrClass.dat: Local Settings\Software\Microsoft\Windows\Shell\BagMRU and Bags
- T1083 - File and Directory Discovery

## Tools & resources

- SBECmd (Eric Zimmerman)
- ShellBags Explorer (Eric Zimmerman)
- Registry Explorer (Eric Zimmerman)

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

- `filetime_to_datetime`
- `parse_shell_item`
- `parse_bagmru_value`
- `analyze_shellbags_regipy`
- `detect_suspicious_paths`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-windows-shellbag-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
