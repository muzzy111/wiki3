---
name: hunting-for-lateral-movement-via-wmi
description: "Agent for hunting lateral movement via WMI. Detects WMI-based lateral movement by parsing Windows Event ID 4688 and Sysmon Event 1 for WmiPrvSE.exe child process patterns, suspicious command lines, and WMI event.... Use when the user asks to hunt for lateral movement via wmi."
version: 1.0.0
tags:
  - hunting
source: hunting-for-lateral-movement-via-wmi
---

# Hunting for Lateral Movement via WMI

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** WMI-Activity Log Location

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** lateral movement via wmi.
- Capability: Agent for hunting lateral movement via WMI. Detects WMI-based lateral movement by parsing Windows Event ID 4688 and Sysmon Event 1 for WmiPrvSE.exe child process patterns, suspicious command lines, and WMI event subscription persistence.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, lateral, movement`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Form a threat hypothesis grounded in TTPs or intel
2. Select data sources and time range for for lateral movement via wmi
3. Execute hunt queries and pivot on anomalies
4. Triage hits into benign, suspicious, or confirmed malicious
5. Capture IOCs, lessons learned, and detection opportunities

## Tools & resources

- WMI-Activity Log Location

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

*High-level skill guide for `hunting-for-lateral-movement-via-wmi`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
