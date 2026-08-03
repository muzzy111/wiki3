---
name: implementing-just-in-time-access-provisioning
description: "Agent for implementing and auditing Just-In-Time access provisioning. Use when the user asks to implement just in time access provisioning."
version: 1.0.0
tags:
  - implementing
source: implementing-just-in-time-access-provisioning
---

# Implementing Just in Time Access Provisioning

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Microsoft Entra PIM, CyberArk JIT, SailPoint, HashiCorp Boundary, StrongDM

## When to use

- The user wants to **implement** just in time access provisioning.
- Capability: Agent for implementing and auditing Just-In-Time access provisioning.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, just, time, access, provisioning`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Audit JIT access requests for compliance and anomalies
2. Identify standing privileges that should be converted to JIT
3. Calculate JIT program operational metrics
4. Generate JIT access provisioning policy

## Key concepts

- NIST SP 800-207: Zero Trust Architecture - Section 3 (Logical Components)
- AC-2(2): Automated Temporary and Emergency Account Management
- AC-2(3): Disable Accounts
- AC-6: Least Privilege
- AC-6(5): Privileged Accounts
- NIST SP 1800-35: Implementing a Zero Trust Architecture
- CISA Zero Trust Maturity Model: Identity pillar - dynamic access provisioning
- DoD Zero Trust Reference Architecture: JIT/JEA requirements

## Tools & resources

- Microsoft Entra PIM
- CyberArk JIT
- SailPoint
- HashiCorp Boundary
- StrongDM

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

- `audit_jit_requests` — Audit JIT access requests for compliance and anomalies.
- `audit_standing_privileges` — Identify standing privileges that should be converted to JIT.
- `calculate_jit_metrics` — Calculate JIT program operational metrics.
- `generate_jit_policy` — Generate JIT access provisioning policy.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-just-in-time-access-provisioning`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
