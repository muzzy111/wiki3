---
name: performing-lateral-movement-with-wmiexec
description: "Agent for performing lateral movement detection and simulation with WMIExec — authorized testing only. Use when the user asks to perform lateral movement with wmiexec."
version: 1.0.0
tags:
  - performing
source: performing-lateral-movement-with-wmiexec
---

# Performing Lateral Movement with Wmiexec

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Impacket wmiexec.py, CrackMapExec, SharpWMI

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** lateral movement with wmiexec.
- Capability: Agent for performing lateral movement detection and simulation with WMIExec — authorized testing only.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, lateral, movement, wmiexec`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Detect WMIExec lateral movement artifacts in Windows Event Logs
2. Execute command via Impacket wmiexec (authorized pentest use)
3. Analyze PCAP for WMI lateral movement network indicators
4. Check for WMI-based persistence mechanisms on local system

## Key concepts

- Windows WMI Activity Log: Microsoft-Windows-WMI-Activity/Operational
- Sysmon Event 19/20/21: WMI filter/consumer/binding creation

## Tools & resources

- Impacket wmiexec.py
- CrackMapExec
- SharpWMI

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

- `detect_wmiexec_artifacts_evtx` — Detect WMIExec lateral movement artifacts in Windows Event Logs.
- `run_wmiexec_impacket` — Execute command via Impacket wmiexec (authorized pentest use).
- `detect_wmi_network_traffic` — Analyze PCAP for WMI lateral movement network indicators.
- `check_wmi_persistence` — Check for WMI-based persistence mechanisms on local system.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-lateral-movement-with-wmiexec`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
