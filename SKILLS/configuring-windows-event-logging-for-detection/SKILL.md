---
name: configuring-windows-event-logging-for-detection
description: "Windows event logging configuration audit. Use when the user asks to configure windows event logging for detection."
version: 1.0.0
tags:
  - configuring
  - windows
  - threat-intel
source: configuring-windows-event-logging-for-detection
---

# Configuring Windows Event Logging for Detection

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Key PowerShell Cmdlets, Recommended Log Sizes, External References

## When to use

- The user wants to **configure** windows event logging for detection.
- Capability: Windows event logging configuration audit agent.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, windows, event, logging, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Get current advanced audit policy configuration
2. Check if Sysmon is installed and running
3. Check event log maximum sizes
4. Check PowerShell script block logging and transcription
5. Execute Windows event logging audit

## Key concepts

- NIST SP 800-92: Guide to Computer Security Log Management
- CIS Benchmark Section 17: Advanced Audit Policy Configuration
- NSA/CISA Event Forwarding Guidance: Recommended events for Windows monitoring

## Tools & resources

- Key PowerShell Cmdlets
- Recommended Log Sizes
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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `get_audit_policy` — Get current advanced audit policy configuration.
- `check_sysmon_installed` — Check if Sysmon is installed and running.
- `check_log_sizes` — Check event log maximum sizes.
- `check_powershell_logging` — Check PowerShell script block logging and transcription.
- `run_audit` — Execute Windows event logging audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-windows-event-logging-for-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
