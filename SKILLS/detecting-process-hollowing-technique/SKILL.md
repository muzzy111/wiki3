---
name: detecting-process-hollowing-technique
description: "Process hollowing (T1055.012) detection agent. Detects hollowed processes by analyzing Sysmon events for suspended process creation, memory allocation in remote processes, and thread hijacking. Use when the user asks to detect process hollowing technique."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-process-hollowing-technique
---

# Detecting Process Hollowing Technique

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Process Hollowing API Sequence, Commonly Hollowed Processes, Sysmon Detection Events, Splunk SPL, Detection Data Sources

## When to use

- The user wants to **detect** process hollowing technique.
- Capability: Process hollowing (T1055.012) detection agent. Detects hollowed processes by analyzing Sysmon events for suspended process creation, memory allocation in remote processes, and thread hijacking.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, process, hollowing, technique`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. `CreateProcessW` / `CreateProcessA` with `CREATE_SUSPENDED` (0x00000004)
2. `NtUnmapViewOfSection` / `ZwUnmapViewOfSection`
3. `VirtualAllocEx` with `PAGE_EXECUTE_READWRITE`
4. `WriteProcessMemory`
5. `SetThreadContext` / `NtSetContextThread`
6. `ResumeThread` / `NtResumeThread`

## Key concepts

- Tactic: Defense Evasion (TA0005), Privilege Escalation (TA0004)
- Data Sources: Process modification, OS API execution, Process access

## Tools & resources

- Process Hollowing API Sequence
- Commonly Hollowed Processes
- Sysmon Detection Events
- Splunk SPL
- Detection Data Sources

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

- `detect_hollowing_sysmon`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-process-hollowing-technique`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
