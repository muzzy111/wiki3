---
name: performing-privileged-account-access-review
description: "Privileged Account Access Review agent — audits privileged accounts for compliance with least-privilege and periodic recertification requirements. Use when the user asks to perform privileged account access review."
version: 1.0.0
tags:
  - performing
source: performing-privileged-account-access-review
---

# Performing Privileged Account Access Review

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Checks Performed, Compliance Frameworks, Regulatory Requirements, Industry Frameworks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** privileged account access review.
- Capability: Privileged Account Access Review agent — audits privileged accounts for compliance with least-privilege and periodic recertification requirements.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, privileged, account, access, review`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load privileged account inventory from CSV
2. Flag accounts not used within max_days
3. Detect shared/generic privileged accounts
4. Flag accounts with overly broad privilege sets
5. Flag accounts overdue for recertification
6. Run all checks and produce a consolidated JSON report

## Key concepts

- CC6.1: Logical and physical access controls restrict access to information assets
- CC6.2: Prior to issuing system credentials, the entity registers and authorizes new users
- CC6.3: The entity authorizes, modifies, or removes access in a timely manner
- Quarterly privileged access reviews required for audit evidence
- Access control standard requiring unique user identification
- Emergency access procedure (break-glass accounts)
- Automatic logoff and encryption/decryption
- Periodic review and modification of access rights

## Tools & resources

- Checks Performed
- Compliance Frameworks
- Regulatory Requirements
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

- `load_accounts` — Load privileged account inventory from CSV.
- `check_stale_accounts` — Flag accounts not used within max_days.
- `check_shared_accounts` — Detect shared/generic privileged accounts.
- `check_excessive_privileges` — Flag accounts with overly broad privilege sets.
- `check_recertification` — Flag accounts overdue for recertification.
- `generate_report` — Run all checks and produce a consolidated JSON report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-privileged-account-access-review`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
