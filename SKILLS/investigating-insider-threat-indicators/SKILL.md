---
name: investigating-insider-threat-indicators
description: "Insider Threat Investigation Agent Automates insider threat indicator collection by correlating SIEM data, DLP alerts, access logs, and HR events to build investigation timelines. Use when the user asks to investigating insider threat indicators."
version: 1.0.0
tags:
  - investigating
  - threat-intel
source: investigating-insider-threat-indicators
---

# Investigating Insider Threat Indicators

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Evidence Handling

## When to use

- The user wants to **investigat** insider threat indicators.
- Capability: Insider Threat Investigation Agent Automates insider threat indicator collection by correlating SIEM data, DLP alerts, access logs, and HR events to build investigation timelines.
- Goal: complete the task.
- Trigger keywords: `investigating, insider, threat, indicators`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load DLP alert data from exported CSV
2. Load authentication and access logs from exported JSON
3. Analyze data exfiltration indicators for the subject
4. Detect anomalous access patterns for the subject
5. Identify pre-departure behavioral indicators
6. Create chain-of-custody evidence log with file hashes
7. Generate insider threat investigation report

## Tools & resources

- Evidence Handling

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

- `load_dlp_alerts` — Load DLP alert data from exported CSV.
- `load_access_logs` — Load authentication and access logs from exported JSON.
- `analyze_data_movement` — Analyze data exfiltration indicators for the subject.
- `analyze_access_patterns` — Detect anomalous access patterns for the subject.
- `detect_pre_departure_indicators` — Identify pre-departure behavioral indicators.
- `create_evidence_log` — Create chain-of-custody evidence log with file hashes.
- `generate_report` — Generate insider threat investigation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `investigating-insider-threat-indicators`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
