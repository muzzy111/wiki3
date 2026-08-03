---
name: analyzing-linux-audit-logs-for-intrusion
description: "Linux audit log analysis agent for intrusion detection. Parses /var/log/audit/audit.log entries to detect privilege escalation, unauthorized file access, suspicious syscalls, and process execution anomalies. Use when the user asks to analyze linux audit logs for intrusion."
version: 1.0.0
tags:
  - analyzing
  - linux
source: analyzing-linux-audit-logs-for-intrusion
---

# Analyzing Linux Audit Logs for Intrusion

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Audit Log Location, ausearch CLI, aureport CLI, Audit Log Fields, Suspicious Syscalls

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** linux audit logs for intrusion.
- Capability: Linux audit log analysis agent for intrusion detection. Parses /var/log/audit/audit.log entries to detect privilege escalation, unauthorized file access, suspicious syscalls, and process execution anomalies.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, linux, audit, logs, intrusion`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse raw audit.log file into structured events
2. Detect privilege escalation indicators in audit events
3. Detect access to sensitive files
4. Detect execution of suspicious commands
5. Run ausearch command and return results
6. Generate audit log analysis summary

## Tools & resources

- Audit Log Location
- ausearch CLI
- aureport CLI
- Audit Log Fields
- Suspicious Syscalls

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

- `parse_audit_log` — Parse raw audit.log file into structured events.
- `detect_privilege_escalation` — Detect privilege escalation indicators in audit events.
- `detect_file_access` — Detect access to sensitive files.
- `detect_suspicious_commands` — Detect execution of suspicious commands.
- `run_ausearch` — Run ausearch command and return results.
- `generate_summary` — Generate audit log analysis summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-linux-audit-logs-for-intrusion`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
