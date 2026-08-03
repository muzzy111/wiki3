---
name: implementing-iec-62443-security-zones
description: "Agent for designing and auditing IEC 62443 security zones and conduits. Use when the user asks to implement iec 62443 security zones."
version: 1.0.0
tags:
  - implementing
source: implementing-iec-62443-security-zones
---

# Implementing Iec 62443 Security Zones

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Purdue Reference Model Levels, IEC 62443 Security Levels, Zone Audit Checks, Conduit Security Controls

## When to use

- The user wants to **implement** iec 62443 security zones.
- Capability: Agent for designing and auditing IEC 62443 security zones and conduits.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, 62443, security, zones`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Audit IEC 62443 zone architecture for compliance
2. Generate IEC 62443 zone template based on Purdue model
3. Map risk assessment results to IEC 62443 Security Level targets

## Tools & resources

- Purdue Reference Model Levels
- IEC 62443 Security Levels
- Zone Audit Checks
- Conduit Security Controls

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

- `audit_zone_architecture` — Audit IEC 62443 zone architecture for compliance.
- `generate_zone_template` — Generate IEC 62443 zone template based on Purdue model.
- `assess_sl_requirements` — Map risk assessment results to IEC 62443 Security Level targets.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-iec-62443-security-zones`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
