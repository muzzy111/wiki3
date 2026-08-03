---
name: configuring-active-directory-tiered-model
description: "Active Directory tiered administration model audit agent using ldap3. Use when the user asks to configure active directory tiered model."
version: 1.0.0
tags:
  - configuring
  - threat-intel
  - active-directory
  - incident-response
source: configuring-active-directory-tiered-model
---

# Configuring Active Directory Tiered Model

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Key ldap3 Methods, UserAccountControl Flags, External References

## When to use

- The user wants to **configure** active directory tiered model.
- Capability: Active Directory tiered administration model audit agent using ldap3.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, active, directory, tiered, model`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Audit Tier 0 privileged accounts
2. Check for cross-tier privilege violations
3. Check for Privileged Access Workstation (PAW) deployment indicators
4. Execute AD tiered model audit

## Tools & resources

- Key ldap3 Methods
- UserAccountControl Flags
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

## Automation entry points

- `audit_tier0_accounts` — Audit Tier 0 privileged accounts.
- `check_tier_violations` — Check for cross-tier privilege violations.
- `check_paw_compliance` — Check for Privileged Access Workstation (PAW) deployment indicators.
- `run_audit` — Execute AD tiered model audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-active-directory-tiered-model`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
