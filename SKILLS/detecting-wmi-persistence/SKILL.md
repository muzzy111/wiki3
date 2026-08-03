---
name: detecting-wmi-persistence
description: "WMI Persistence Detection Agent - hunts for malicious WMI event subscriptions via Sysmon and WMI queries. Use when the user asks to detect wmi persistence."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-wmi-persistence
---

# Detecting WMI Persistence

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Sysmon Configuration, PowerShell WMI Enumeration, Suspicious Consumer Types, Elastic Detection Rule, Autoruns WMI Tab

## When to use

- The user wants to **detect** wmi persistence.
- Capability: WMI Persistence Detection Agent - hunts for malicious WMI event subscriptions via Sysmon and WMI queries.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, persistence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query Sysmon Event IDs 19, 20, 21 for WMI persistence
2. Enumerate active WMI event subscriptions via PowerShell
3. Identify suspicious WMI subscriptions
4. Analyze Sysmon WMI events for suspicious patterns
5. Generate comprehensive WMI persistence hunt report

## Tools & resources

- Sysmon Configuration
- PowerShell WMI Enumeration
- Suspicious Consumer Types
- Elastic Detection Rule
- Autoruns WMI Tab

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

- `query_sysmon_wmi_events` — Query Sysmon Event IDs 19, 20, 21 for WMI persistence.
- `enumerate_wmi_subscriptions` — Enumerate active WMI event subscriptions via PowerShell.
- `analyze_suspicious_subscriptions` — Identify suspicious WMI subscriptions.
- `analyze_sysmon_events` — Analyze Sysmon WMI events for suspicious patterns.
- `generate_report` — Generate comprehensive WMI persistence hunt report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-wmi-persistence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
