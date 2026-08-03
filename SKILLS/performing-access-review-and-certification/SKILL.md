---
name: performing-access-review-and-certification
description: "Agent for conducting access review and certification using identity governance APIs. Use when the user asks to perform access review and certification."
version: 1.0.0
tags:
  - performing
source: performing-access-review-and-certification
---

# Performing Access Review and Certification

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Compliance Frameworks, NIST Standards, Compliance Requirements, Industry Frameworks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** access review and certification.
- Capability: Agent for conducting access review and certification using identity governance APIs.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, access, review, certification`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load access entitlement data from CSV export
2. Find accounts with no manager or terminated status
3. Check for separation of duties violations
4. Find users with entitlement counts above threshold
5. Find entitlements not used within the stale period
6. Generate access review report

## Key concepts

- AC-2: Account Management (periodic review requirement)
- AC-2(3): Disable accounts after inactivity period
- AC-5: Separation of Duties
- AC-6: Least Privilege
- AC-6(7): Review of User Privileges
- AU-6: Audit Record Review, Analysis, and Reporting
- NIST SP 800-171: 3.1.1 Authorized Access Control, 3.1.2 Transaction Control
- SOX Section 404: Quarterly access reviews for financial systems

## Tools & resources

- Compliance Frameworks
- NIST Standards
- Compliance Requirements
- Industry Frameworks

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

- `load_access_data` — Load access entitlement data from CSV export.
- `identify_orphaned_accounts` — Find accounts with no manager or terminated status.
- `check_sod_violations` — Check for separation of duties violations.
- `identify_excessive_access` — Find users with entitlement counts above threshold.
- `check_last_used` — Find entitlements not used within the stale period.
- `generate_report` — Generate access review report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-access-review-and-certification`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
