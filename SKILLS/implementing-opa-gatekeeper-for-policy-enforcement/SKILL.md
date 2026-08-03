---
name: implementing-opa-gatekeeper-for-policy-enforcement
description: "OPA Gatekeeper Policy Enforcement Agent - audits constraint templates and violation status. Use when the user asks to implement opa gatekeeper for policy enforcement."
version: 1.0.0
tags:
  - implementing
source: implementing-opa-gatekeeper-for-policy-enforcement
---

# Implementing Opa Gatekeeper for Policy Enforcement

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Gatekeeper CRDs, ConstraintTemplate Example, Industry Standards, Gatekeeper Policy Library, Compliance Mappings

## When to use

- The user wants to **implement** opa gatekeeper for policy enforcement.
- Capability: OPA Gatekeeper Policy Enforcement Agent - audits constraint templates and violation status.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, gatekeeper, policy, enforcement`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Capture requirements, risks, and success metrics
2. Design the control architecture for opa gatekeeper for policy enforcement
3. Implement configuration, policies, and integrations
4. Test effectiveness and failure modes
5. Hand off operational docs and monitoring

## Key concepts

- Section 4.1: Image vulnerabilities - Enforce image registry restrictions
- Section 4.2: Image configuration defects - Enforce security context requirements
- Section 5.2: Registry security - Restrict allowed image sources
- Section 2: Pod Security - Admission control enforcement
- Recommends admission controllers to enforce security baselines
- Req 2.2: Secure system components per configuration standards
- Req 6.3.2: Develop software securely with automated controls
- CC6.1: Logical access to system components is restricted

## Tools & resources

- Gatekeeper CRDs
- ConstraintTemplate Example
- Industry Standards
- Gatekeeper Policy Library
- Compliance Mappings

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

- `kubectl_json`
- `get_constraint_templates`
- `get_constraints`
- `audit_constraint_violations`
- `analyze_policy_coverage`
- `check_audit_status`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-opa-gatekeeper-for-policy-enforcement`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
