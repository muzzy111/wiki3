---
name: hunting-for-suspicious-scheduled-tasks
description: "Agent for hunting suspicious scheduled tasks on Windows endpoints. Use when the user asks to hunt for suspicious scheduled tasks."
version: 1.0.0
tags:
  - hunting
source: hunting-for-suspicious-scheduled-tasks
---

# Hunting for Suspicious Scheduled Tasks

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** python-evtx, Splunk SPL, PowerShell Enumeration, Suspicious Task Indicators

## When to use

- The user wants to **hunt for** suspicious scheduled tasks.
- Capability: Agent for hunting suspicious scheduled tasks on Windows endpoints.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, suspicious, scheduled, tasks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse output of schtasks /query /fo CSV /v
2. Analyze scheduled tasks for suspicious properties
3. Hunt Event ID 4698 (scheduled task creation) in EVTX
4. Generate Sigma rule for suspicious scheduled task creation

## Tools & resources

- python-evtx
- Splunk SPL
- PowerShell Enumeration
- Suspicious Task Indicators

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

- `parse_schtasks_csv` — Parse output of schtasks /query /fo CSV /v.
- `analyze_tasks` — Analyze scheduled tasks for suspicious properties.
- `hunt_evtx_4698` — Hunt Event ID 4698 (scheduled task creation) in EVTX.
- `generate_sigma_rule` — Generate Sigma rule for suspicious scheduled task creation.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-suspicious-scheduled-tasks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
