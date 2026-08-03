---
name: analyzing-windows-event-logs-in-splunk
description: "Agent for analyzing Windows event logs in Splunk for SOC operations. Use when the user asks to analyze windows event logs in splunk."
version: 1.0.0
tags:
  - analyzing
  - windows
source: analyzing-windows-event-logs-in-splunk
---

# Analyzing Windows Event Logs in Splunk

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Splunk, Logon Types

## When to use

- The user wants to **analyze** windows event logs in splunk.
- Capability: Agent for analyzing Windows event logs in Splunk for SOC operations.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, windows, event, logs, splunk`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run a blocking Splunk search and return results
2. Detect brute force via EventCode 4625 with logon type classification
3. Detect password spray attacks targeting many accounts from one source
4. Detect new accounts added to the Administrators group (T1136.001)
5. Detect LSASS credential dumping via Sysmon Event 10 (T1003.001)
6. Detect SMB lateral movement via Type 3 logons to many hosts (T1021.002)
7. Detect PsExec execution via Sysmon process creation (T1021.002)
8. Build a comprehensive forensic timeline for a host

## Tools & resources

- Splunk
- Logon Types

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

- `search` — Run a blocking Splunk search and return results.
- `detect_brute_force` — Detect brute force via EventCode 4625 with logon type classification.
- `detect_password_spray` — Detect password spray attacks targeting many accounts from one source.
- `detect_new_admin_accounts` — Detect new accounts added to the Administrators group (T1136.001).
- `detect_lsass_access` — Detect LSASS credential dumping via Sysmon Event 10 (T1003.001).
- `detect_lateral_movement_smb` — Detect SMB lateral movement via Type 3 logons to many hosts (T1021.002).
- `detect_psexec` — Detect PsExec execution via Sysmon process creation (T1021.002).
- `build_forensic_timeline` — Build a comprehensive forensic timeline for a host.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-windows-event-logs-in-splunk`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
