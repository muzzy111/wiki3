---
name: performing-lateral-movement-detection
description: "Agent for performing lateral movement detection. Analyzes Windows event logs and network flow data to detect Pass-the-Hash, PsExec, WMI, RDP, and SMB-based lateral movement mapped to MITRE ATT&CK TA0008 techniques. Use when the user asks to perform lateral movement detection."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-lateral-movement-detection
---

# Performing Lateral Movement Detection

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** lateral movement detection.
- Capability: Agent for performing lateral movement detection. Analyzes Windows event logs and network flow data to detect Pass-the-Hash, PsExec, WMI, RDP, and SMB-based lateral movement mapped to MITRE ATT&CK TA0008 techniques.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, lateral, movement, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Confirm scope, authorization, and safety constraints
2. Prepare tooling and environment for lateral movement detection
3. Execute the technique methodically and record evidence
4. Validate outcomes and eliminate false paths
5. Report results with clear remediation guidance

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-lateral-movement-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
