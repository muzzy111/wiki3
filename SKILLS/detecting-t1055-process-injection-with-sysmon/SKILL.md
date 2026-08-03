---
name: detecting-t1055-process-injection-with-sysmon
description: "Agent for detecting T1055 process injection via Sysmon event analysis. Use when the user asks to detect t1055 process injection with sysmon."
version: 1.0.0
tags:
  - detecting
  - windows
  - threat-intel
source: detecting-t1055-process-injection-with-sysmon
---

# Detecting T1055 Process Injection with Sysmon

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Sysmon, Process Access Masks, Sigma Rule Example, ProcessAccess Granted Access Masks, Common Injection Targets

## When to use

- The user wants to **detect** t1055 process injection with sysmon.
- Capability: Agent for detecting T1055 process injection via Sysmon event analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, t1055, process, injection, sysmon`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Query Sysmon operational log for specific event ID
2. Analyze Sysmon Event ID 10 for injection-related process access
3. Analyze Sysmon Event ID 8 for CreateRemoteThread injection
4. Analyze Sysmon Event ID 7 for suspicious DLL loads in unusual processes

## Tools & resources

- Sysmon
- Process Access Masks
- Sigma Rule Example
- ProcessAccess Granted Access Masks
- Common Injection Targets

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

- `query_sysmon_events` — Query Sysmon operational log for specific event ID.
- `analyze_process_access` — Analyze Sysmon Event ID 10 for injection-related process access.
- `analyze_create_remote_thread` — Analyze Sysmon Event ID 8 for CreateRemoteThread injection.
- `analyze_image_loads` — Analyze Sysmon Event ID 7 for suspicious DLL loads in unusual processes.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-t1055-process-injection-with-sysmon`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
