---
name: hunting-for-anomalous-powershell-execution
description: "PowerShell Script Block Logging threat hunting. Use when the user asks to hunt for anomalous powershell execution."
version: 1.0.0
tags:
  - hunting
  - windows
source: hunting-for-anomalous-powershell-execution
---

# Hunting for Anomalous PowerShell Execution

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** AMSI Bypass Indicators, Suspicious PowerShell Keywords, Obfuscation Indicators, python-evtx Library Usage, External References

## When to use

- The user wants to **hunt for** anomalous powershell execution.
- Capability: PowerShell Script Block Logging threat hunting agent.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, anomalous, powershell, execution`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Event 4104 script block logging entries from EVTX
2. Reassemble multi-part script blocks by ScriptBlockId
3. Check script text for AMSI bypass indicators
4. Check for known offensive tool keywords
5. Detect download cradle patterns in script text
6. Detect obfuscation and encoded command patterns
7. Run all detection checks on assembled script blocks
8. Execute PowerShell script block hunting

## Tools & resources

- AMSI Bypass Indicators
- Suspicious PowerShell Keywords
- Obfuscation Indicators
- python-evtx Library Usage
- External References

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

- `parse_evtx_4104` — Parse Event 4104 script block logging entries from EVTX.
- `reassemble_script_blocks` — Reassemble multi-part script blocks by ScriptBlockId.
- `detect_amsi_bypass` — Check script text for AMSI bypass indicators.
- `detect_suspicious_keywords` — Check for known offensive tool keywords.
- `detect_download_cradles` — Detect download cradle patterns in script text.
- `detect_obfuscation` — Detect obfuscation and encoded command patterns.
- `hunt_scripts` — Run all detection checks on assembled script blocks.
- `run_audit` — Execute PowerShell script block hunting.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-anomalous-powershell-execution`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
