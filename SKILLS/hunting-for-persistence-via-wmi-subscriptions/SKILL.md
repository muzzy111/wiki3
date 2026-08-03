---
name: hunting-for-persistence-via-wmi-subscriptions
description: "Agent for hunting WMI event subscription persistence (T1546.003). Use when the user asks to hunt for persistence via wmi subscriptions."
version: 1.0.0
tags:
  - hunting
source: hunting-for-persistence-via-wmi-subscriptions
---

# Hunting for Persistence via WMI Subscriptions

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** WMI Classes Enumerated, WMI Subscription Components, Consumer Types and Risk, Detection Events, Known APT Usage

## When to use

- The user wants to **hunt for** persistence via wmi subscriptions.
- Capability: Agent for hunting WMI event subscription persistence (T1546.003).
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, persistence, subscriptions`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Enumerate all WMI event subscriptions on the local system
2. Parse WMIC /format:list output into list of dicts
3. Parse Sysmon EVTX for WMI events (Event IDs 19, 20, 21)
4. Use PowerShell Get-WMIObject to enumerate WMI subscriptions

## Tools & resources

- WMI Classes Enumerated
- WMI Subscription Components
- Consumer Types and Risk
- Detection Events
- Known APT Usage

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

- `enumerate_wmi_subscriptions` — Enumerate all WMI event subscriptions on the local system.
- `parse_wmic_list` — Parse WMIC /format:list output into list of dicts.
- `scan_sysmon_wmi_events` — Parse Sysmon EVTX for WMI events (Event IDs 19, 20, 21).
- `query_powershell_wmi` — Use PowerShell Get-WMIObject to enumerate WMI subscriptions.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-persistence-via-wmi-subscriptions`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
