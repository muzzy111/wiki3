---
name: implementing-patch-management-workflow
description: "Patch management workflow agent. Audits system patch compliance by checking installed package versions against known vulnerabilities, tracking patch SLA adherence, and generating remediation reports. Supports Linux.... Use when the user asks to implement patch management workflow."
version: 1.0.0
tags:
  - implementing
source: implementing-patch-management-workflow
---

# Implementing Patch Management Workflow

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Tenable.io API, Qualys API, Patch Prioritization, Industry Standards, Patch Management Tools, Vendor Patch Schedules

## When to use

- The user wants to **implement** patch management workflow.
- Capability: Patch management workflow agent. Audits system patch compliance by checking installed package versions against known vulnerabilities, tracking patch SLA adherence, and generating remediation reports. Supports Linux (apt/yum) and basic CVE cross-referencing via the CISA KEV catalog.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, patch, management, workflow`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check for available security updates on Debian/Ubuntu systems
2. Check for available security updates on RHEL/CentOS systems
3. Check for pending Windows updates via PowerShell
4. Cross-reference package CVEs against CISA KEV catalog
5. Assess patch compliance against SLA targets
6. Print patch management summary

## Key concepts

- NIST SP 800-40 Rev 4: Guide to Enterprise Patch Management Planning
- NIST SP 800-53 SI-2: Flaw Remediation control
- CIS Controls v8 Control 7.3: Perform automated patch management
- PCI DSS v4.0 Req 6.3: Identify and address security vulnerabilities
- ISO 27001: 2022 A.8.8**: Management of technical vulnerabilities

## Tools & resources

- Tenable.io API
- Qualys API
- Patch Prioritization
- Industry Standards
- Patch Management Tools
- Vendor Patch Schedules

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

- `check_apt_updates` — Check for available security updates on Debian/Ubuntu systems.
- `check_yum_updates` — Check for available security updates on RHEL/CentOS systems.
- `check_windows_updates` — Check for pending Windows updates via PowerShell.
- `check_kev_exposure` — Cross-reference package CVEs against CISA KEV catalog.
- `assess_patch_sla` — Assess patch compliance against SLA targets.
- `format_summary` — Print patch management summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-patch-management-workflow`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
