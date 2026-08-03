---
name: detecting-malicious-scheduled-tasks-with-sysmon
description: "Sysmon scheduled task detection agent for hunting malicious persistence. Use when the user asks to detect malicious scheduled tasks with sysmon."
version: 1.0.0
tags:
  - detecting
  - windows
  - threat-intel
source: detecting-malicious-scheduled-tasks-with-sysmon
---

# Detecting Malicious Scheduled Tasks with Sysmon

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Sysmon, schtasks.exe Suspicious Flags, External References

## When to use

- The user wants to **detect** malicious scheduled tasks with sysmon.
- Capability: Sysmon scheduled task detection agent for hunting malicious persistence.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, malicious, scheduled, tasks, sysmon`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse exported Windows Event Log XML for Sysmon and Security events
2. Detect suspicious schtasks.exe process creation (Sysmon Event 1)
3. Detect task XML file creation in System32\Tasks (Sysmon Event 11)
4. Detect Security Event 4698 — scheduled task registered
5. Execute scheduled task detection audit

## Tools & resources

- Sysmon
- schtasks.exe Suspicious Flags
- External References

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

- `parse_evtx_xml` — Parse exported Windows Event Log XML for Sysmon and Security events.
- `detect_schtasks_creation` — Detect suspicious schtasks.exe process creation (Sysmon Event 1).
- `detect_task_file_creation` — Detect task XML file creation in System32\Tasks (Sysmon Event 11).
- `detect_event_4698` — Detect Security Event 4698 — scheduled task registered.
- `run_audit` — Execute scheduled task detection audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-malicious-scheduled-tasks-with-sysmon`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
