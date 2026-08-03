---
name: extracting-windows-event-logs-artifacts
description: "Windows Event Log artifact extraction agent using evtx library for EVTX parsing. Use when the user asks to extracting windows event logs artifacts."
version: 1.0.0
tags:
  - extracting
  - windows
  - threat-intel
source: extracting-windows-event-logs-artifacts
---

# Extracting Windows Event Logs Artifacts

**Role:** Security workflow  
**Audience:** security practitioners  

## When to use

- The user wants to **extract** windows event logs artifacts.
- Capability: Windows Event Log artifact extraction agent using evtx library for EVTX parsing.
- Goal: complete the task.
- Trigger keywords: `extracting, windows, event, logs, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse an EVTX file and return list of event records
2. Filter records for critical security event IDs
3. Detect lateral movement indicators from logon events
4. Detect privilege escalation from group membership and special privilege events
5. Detect suspicious process creation events
6. Detect audit log clearing events
7. Detect persistence mechanisms from service and scheduled task events
8. Generate analysis summary statistics

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

- `parse_evtx_file` — Parse an EVTX file and return list of event records.
- `filter_critical_events` — Filter records for critical security event IDs.
- `detect_lateral_movement` — Detect lateral movement indicators from logon events.
- `detect_privilege_escalation` — Detect privilege escalation from group membership and special privilege events.
- `detect_suspicious_processes` — Detect suspicious process creation events.
- `detect_log_clearing` — Detect audit log clearing events.
- `detect_persistence` — Detect persistence mechanisms from service and scheduled task events.
- `generate_summary` — Generate analysis summary statistics.
- `export_timeline_csv` — Export critical events as a CSV timeline.
- `analyze_evtx` — Run full EVTX analysis across multiple log files.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `extracting-windows-event-logs-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
