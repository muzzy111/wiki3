---
name: implementing-nerc-cip-compliance-controls
description: "NERC CIP Compliance Agent - audits critical infrastructure against NERC CIP standards. Use when the user asks to implement nerc cip compliance controls."
version: 1.0.0
tags:
  - implementing
source: implementing-nerc-cip-compliance-controls
---

# Implementing Nerc Cip Compliance Controls

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** CIP-005 ESP Requirements, CIP-007 Patching Timeline

## When to use

- The user wants to **implement** nerc cip compliance controls.
- Capability: NERC CIP Compliance Agent - audits critical infrastructure against NERC CIP standards.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, nerc, compliance, controls`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check Electronic Security Perimeter controls via network scan
2. Check CIP-007 system hardening controls
3. Audit compliance status against all NERC CIP controls

## Tools & resources

- CIP-005 ESP Requirements
- CIP-007 Patching Timeline

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

- `check_esp_controls` — Check Electronic Security Perimeter controls via network scan.
- `check_system_hardening` — Check CIP-007 system hardening controls.
- `audit_compliance_status` — Audit compliance status against all NERC CIP controls.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-nerc-cip-compliance-controls`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
