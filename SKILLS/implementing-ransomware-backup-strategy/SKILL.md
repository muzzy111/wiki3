---
name: implementing-ransomware-backup-strategy
description: "Ransomware backup strategy audit agent. Audits backup infrastructure for ransomware resilience by checking 3-2-1 backup rule compliance, air-gapped/immutable backup presence, backup encryption status, recovery point.... Use when the user asks to implement ransomware backup strategy."
version: 1.0.0
tags:
  - implementing
  - malware
  - ransomware
source: implementing-ransomware-backup-strategy
---

# Implementing Ransomware Backup Strategy

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS S3 Backup Audit, AWS Backup Service, 3-2-1 Backup Rule Audit, Industry Standards, Regulatory Requirements, Vendor Documentation

## When to use

- The user wants to **implement** ransomware backup strategy.
- Capability: Ransomware backup strategy audit agent. Audits backup infrastructure for ransomware resilience by checking 3-2-1 backup rule compliance, air-gapped/immutable backup presence, backup encryption status, recovery point objectives (RPO), and backup integrity verification schedules.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, ransomware, backup, strategy`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check Veeam backup status via REST API
2. Audit a Restic backup repository for integrity and freshness
3. Audit compliance with the 3-2-1 backup rule
4. Print audit summary

## Key concepts

- Defines security controls for storage systems including backup infrastructure
- Covers access control, encryption, integrity verification, and audit logging for storage
- Section 5.3: Backup and recovery security controls
- Identifies backup as a critical control in the Recover function
- Recommends maintaining offline, encrypted backups with regular testing
- Emphasizes credential separation for backup administration
- Prescribes 3-2-1 backup rule as baseline, recommends extending to 3-2-1-1-0
- Mandates backup credential isolation from production domains

## Tools & resources

- AWS S3 Backup Audit
- AWS Backup Service
- 3-2-1 Backup Rule Audit
- Industry Standards
- Regulatory Requirements
- Vendor Documentation

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

- `check_veeam_backups` — Check Veeam backup status via REST API.
- `check_restic_repository` — Audit a Restic backup repository for integrity and freshness.
- `audit_321_rule` — Audit compliance with the 3-2-1 backup rule.
- `format_summary` — Print audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-ransomware-backup-strategy`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
