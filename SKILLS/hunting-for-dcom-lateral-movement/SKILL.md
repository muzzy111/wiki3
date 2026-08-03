---
name: hunting-for-dcom-lateral-movement
description: "DCOM Lateral Movement Detection Agent - Hunts for DCOM object abuse via Sysmon event correlation. Use when the user asks to hunt for dcom lateral movement."
version: 1.0.0
tags:
  - hunting
source: hunting-for-dcom-lateral-movement
---

# Hunting for Dcom Lateral Movement

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** WMI, Network Indicators, python-evtx, Atomic Red Team, Impacket

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** dcom lateral movement.
- Capability: DCOM Lateral Movement Detection Agent - Hunts for DCOM object abuse via Sysmon event correlation.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, dcom, lateral, movement`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Sysmon EVTX file into structured events using python-evtx
2. Detect MMC20.Application DCOM lateral movement: mmc.exe spawning suspicious children
3. Detect ShellWindows/ShellBrowserWindow: explorer.exe spawning cmd/powershell
4. Detect DCOM via dllhost.exe spawning suspicious children
5. Detect inbound RPC endpoint mapper connections (port 135) from Sysmon Event ID 3
6. Correlate RPC connections with DCOM process creation for high-confidence detections
7. Audit local DCOM configuration for high-risk COM objects (Windows only)
8. Generate JSON detection report

## Tools & resources

- WMI
- Network Indicators
- python-evtx
- Atomic Red Team
- Impacket

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

- `parse_evtx_records` — Parse Sysmon EVTX file into structured events using python-evtx.
- `detect_mmc20_lateral` — Detect MMC20.Application DCOM lateral movement: mmc.exe spawning suspicious children.
- `detect_shell_dcom_lateral` — Detect ShellWindows/ShellBrowserWindow: explorer.exe spawning cmd/powershell.
- `detect_dllhost_lateral` — Detect DCOM via dllhost.exe spawning suspicious children.
- `detect_rpc_connections` — Detect inbound RPC endpoint mapper connections (port 135) from Sysmon Event ID 3.
- `correlate_rpc_with_process` — Correlate RPC connections with DCOM process creation for high-confidence detections.
- `audit_dcom_config` — Audit local DCOM configuration for high-risk COM objects (Windows only).
- `generate_report` — Generate JSON detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-dcom-lateral-movement`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
