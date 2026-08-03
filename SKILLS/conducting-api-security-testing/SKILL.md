---
name: conducting-api-security-testing
description: "API Security Testing Agent - Tests REST/GraphQL APIs for OWASP API Top 10 vulnerabilities. Use when the user asks to conduct api security testing."
version: 1.0.0
tags:
  - conducting
  - threat-intel
source: conducting-api-security-testing
---

# Conducting API Security Testing

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Arguments, Key Functions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** api security testing.
- Capability: API Security Testing Agent - Tests REST/GraphQL APIs for OWASP API Top 10 vulnerabilities.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, security, testing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test for Broken Object Level Authorization (BOLA/IDOR)
2. Test for Broken Function Level Authorization (BFLA)
3. Test for mass assignment vulnerability
4. Test rate limiting on sensitive endpoints
5. Test for JWT 'none' algorithm bypass
6. Test if GraphQL introspection is enabled
7. Test for excessive data exposure in API responses
8. Generate API security testing report

## Tools & resources

- Arguments
- Key Functions

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

- `test_bola` — Test for Broken Object Level Authorization (BOLA/IDOR).
- `test_bfla` — Test for Broken Function Level Authorization (BFLA).
- `test_mass_assignment` — Test for mass assignment vulnerability.
- `test_rate_limiting` — Test rate limiting on sensitive endpoints.
- `test_jwt_none_algorithm` — Test for JWT 'none' algorithm bypass.
- `test_graphql_introspection` — Test if GraphQL introspection is enabled.
- `test_excessive_data_exposure` — Test for excessive data exposure in API responses.
- `generate_report` — Generate API security testing report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-api-security-testing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
