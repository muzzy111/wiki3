---
name: configuring-windows-defender-advanced-settings
description: "Windows Defender advanced configuration audit. Use when the user asks to configure windows defender advanced settings."
version: 1.0.0
tags:
  - configuring
  - windows
source: configuring-windows-defender-advanced-settings
---

# Configuring Windows Defender Advanced Settings

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** PowerShell Cmdlets, Critical ASR Rule GUIDs, ASR Rule Actions, External References, Primary Standards, Compliance Mappings

## When to use

- The user wants to **configure** windows defender advanced settings.
- Capability: Windows Defender advanced configuration audit agent.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, windows, defender, advanced, settings`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Get Windows Defender status via PowerShell
2. Get Windows Defender preference settings
3. Audit Attack Surface Reduction rules configuration
4. Check tamper protection status
5. Execute Windows Defender audit

## Key concepts

- Scope: Complete reference for MDE deployment, configuration, and management
- Key sections: ASR rules, exploit protection, network protection, controlled folder access
- Relevance: Each ASR rule maps to specific ATT&CK techniques it mitigates
- Block Office child processes → T1566.001 (Spearphishing Attachment)
- Block credential stealing from LSASS → T1003.001 (OS Credential Dumping: LSASS)
- Block PSExec/WMI → T1047 (WMI), T1570 (Lateral Tool Transfer)
- Block WMI persistence → T1546.003 (WMI Event Subscription)
- Relevance: CIS benchmark sections covering Windows Defender configuration settings

## Tools & resources

- PowerShell Cmdlets
- Critical ASR Rule GUIDs
- ASR Rule Actions
- External References
- Primary Standards
- Compliance Mappings
- ASR Rule Reference
- Supporting References

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

- `get_defender_status` — Get Windows Defender status via PowerShell.
- `get_defender_preferences` — Get Windows Defender preference settings.
- `audit_asr_rules` — Audit Attack Surface Reduction rules configuration.
- `check_tamper_protection` — Check tamper protection status.
- `run_audit` — Execute Windows Defender audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-windows-defender-advanced-settings`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
