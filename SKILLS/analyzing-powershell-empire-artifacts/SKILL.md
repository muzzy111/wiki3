---
name: analyzing-powershell-empire-artifacts
description: "Detect PowerShell Empire framework artifacts in Windows event logs. Use when the user asks to analyze powershell empire artifacts."
version: 1.0.0
tags:
  - analyzing
  - windows
  - incident-response
source: analyzing-powershell-empire-artifacts
---

# Analyzing PowerShell Empire Artifacts

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** PowerShell Empire, Empire Module Signatures, Default Empire Staging URIs, Elastic KQL Detection

## When to use

- The user wants to **analyze** powershell empire artifacts.
- Capability: Detect PowerShell Empire framework artifacts in Windows event logs.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, powershell, empire, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query Windows Event Log for specific event ID using wevtutil
2. Parse Event ID 4104 Script Block Logging events from XML
3. Attempt to decode Base64 encoded PowerShell payload
4. Analyze a script block for Empire indicators
5. Scan PowerShell event logs for Empire artifacts
6. Analyze a PowerShell script file or exported log for Empire artifacts

## Tools & resources

- PowerShell Empire
- Empire Module Signatures
- Default Empire Staging URIs
- Elastic KQL Detection

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

- `query_event_log` — Query Windows Event Log for specific event ID using wevtutil.
- `parse_script_block_events` — Parse Event ID 4104 Script Block Logging events from XML.
- `decode_base64_payload` — Attempt to decode Base64 encoded PowerShell payload.
- `analyze_script_block` — Analyze a script block for Empire indicators.
- `scan_event_logs` — Scan PowerShell event logs for Empire artifacts.
- `analyze_script_file` — Analyze a PowerShell script file or exported log for Empire artifacts.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-powershell-empire-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
