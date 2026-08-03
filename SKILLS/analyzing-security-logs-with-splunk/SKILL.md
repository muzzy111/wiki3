---
name: analyzing-security-logs-with-splunk
description: "Agent for analyzing security logs with Splunk using splunk-sdk. Use when the user asks to analyze security logs with splunk."
version: 1.0.0
tags:
  - analyzing
source: analyzing-security-logs-with-splunk
---

# Analyzing Security Logs with Splunk

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Splunk

## When to use

- The user wants to **analyze** security logs with splunk.
- Capability: Agent for analyzing security logs with Splunk using splunk-sdk.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, security, logs, splunk`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Establish connection to Splunk instance
2. Execute a Splunk search and return parsed results
3. Detect brute force attacks via failed logon events (EventCode 4625)
4. Detect lateral movement via Type 3 network logons to multiple hosts
5. Detect encoded or download-cradle PowerShell execution via Sysmon
6. Detect credential dumping via LSASS process access (Sysmon Event 10)
7. Build a unified incident timeline across multiple log sources
8. Format investigation findings into a structured report

## Tools & resources

- Splunk

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

- `connect_splunk` — Establish connection to Splunk instance.
- `run_search` — Execute a Splunk search and return parsed results.
- `detect_brute_force` — Detect brute force attacks via failed logon events (EventCode 4625).
- `detect_lateral_movement` — Detect lateral movement via Type 3 network logons to multiple hosts.
- `detect_suspicious_powershell` — Detect encoded or download-cradle PowerShell execution via Sysmon.
- `detect_lsass_access` — Detect credential dumping via LSASS process access (Sysmon Event 10).
- `build_incident_timeline` — Build a unified incident timeline across multiple log sources.
- `generate_report` — Format investigation findings into a structured report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-security-logs-with-splunk`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
