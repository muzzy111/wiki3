---
name: implementing-api-security-testing-with-42crunch
description: "Agent for API security testing using 42Crunch audit methodology. Use when the user asks to implement api security testing with 42crunch."
version: 1.0.0
tags:
  - implementing
source: implementing-api-security-testing-with-42crunch
---

# Implementing API Security Testing with 42crunch

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** 42Crunch API Security Audit, Security Score Deductions

## When to use

- The user wants to **implement** api security testing with 42crunch.
- Capability: Agent for API security testing using 42Crunch audit methodology.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, testing, 42crunch`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load OpenAPI spec
2. Perform static security audit of OpenAPI specification
3. Calculate security score (0-100) based on findings

## Tools & resources

- 42Crunch API Security Audit
- Security Score Deductions

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

- `load_spec` — Load OpenAPI spec.
- `audit_spec_security` — Perform static security audit of OpenAPI specification.
- `calculate_security_score` — Calculate security score (0-100) based on findings.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-api-security-testing-with-42crunch`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
