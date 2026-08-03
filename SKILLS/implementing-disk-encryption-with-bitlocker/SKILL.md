---
name: implementing-disk-encryption-with-bitlocker
description: "Agent for auditing and managing BitLocker disk encryption across endpoints. Use when the user asks to implement disk encryption with bitlocker."
version: 1.0.0
tags:
  - implementing
source: implementing-disk-encryption-with-bitlocker
---

# Implementing Disk Encryption with Bitlocker

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** manage-bde CLI, PowerShell BitLocker Cmdlets, Compliance Checks, Primary Standards, Compliance Mappings, Microsoft References

## When to use

- The user wants to **implement** disk encryption with bitlocker.
- Capability: Agent for auditing and managing BitLocker disk encryption across endpoints.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, disk, encryption, bitlocker`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Get BitLocker status on local machine via manage-bde
2. Parse BitLocker compliance report (CSV or JSON)
3. Audit BitLocker compliance across fleet
4. Generate Group Policy recommendations for BitLocker
5. Calculate fleet encryption compliance metrics

## Key concepts

- Scope: Guidance on planning, implementing, and maintaining storage encryption solutions
- Relevance: BitLocker uses FIPS 140-2 validated cryptographic modules when configured in FIPS-compliant mode

## Tools & resources

- manage-bde CLI
- PowerShell BitLocker Cmdlets
- Compliance Checks
- Primary Standards
- Compliance Mappings
- Microsoft References

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

- `get_bitlocker_status` — Get BitLocker status on local machine via manage-bde.
- `parse_bitlocker_report` — Parse BitLocker compliance report (CSV or JSON).
- `audit_bitlocker_compliance` — Audit BitLocker compliance across fleet.
- `generate_gpo_recommendations` — Generate Group Policy recommendations for BitLocker.
- `calculate_compliance_metrics` — Calculate fleet encryption compliance metrics.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-disk-encryption-with-bitlocker`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
