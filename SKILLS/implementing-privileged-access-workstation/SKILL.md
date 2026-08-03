---
name: implementing-privileged-access-workstation
description: "Agent for implementing and auditing Privileged Access Workstation (PAW) configurations. Use when the user asks to implement privileged access workstation."
version: 1.0.0
tags:
  - implementing
source: implementing-privileged-access-workstation
---

# Implementing Privileged Access Workstation

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** PAW Hardening Checks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** privileged access workstation.
- Capability: Agent for implementing and auditing Privileged Access Workstation (PAW) configurations.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, privileged, access, workstation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Audit local device hardening controls for PAW compliance
2. Enumerate local Administrators group membership for JIT audit
3. Audit installed software against PAW allowlist
4. Verify PAW network isolation and restrictions
5. Run comprehensive PAW compliance audit

## Tools & resources

- PAW Hardening Checks

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

- `check_device_hardening` — Audit local device hardening controls for PAW compliance.
- `check_local_admin_group` — Enumerate local Administrators group membership for JIT audit.
- `check_installed_software` — Audit installed software against PAW allowlist.
- `check_network_restrictions` — Verify PAW network isolation and restrictions.
- `full_paw_audit` — Run comprehensive PAW compliance audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-privileged-access-workstation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
