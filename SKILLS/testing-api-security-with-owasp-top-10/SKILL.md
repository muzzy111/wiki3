---
name: testing-api-security-with-owasp-top-10
description: "Agent for automated API security testing against OWASP API Security Top 10. Use when the user asks to test api security with owasp top 10."
version: 1.0.0
tags:
  - testing
source: testing-api-security-with-owasp-top-10
---

# Testing API Security with Owasp Top 10

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** requests Library, Security Header Checks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** api security with owasp top 10.
- Capability: Agent for automated API security testing against OWASP API Security Top 10.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, security, owasp`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test for Broken Object Level Authorization (API1)
2. Test for Broken Authentication (API2) - rate limiting on login
3. Test for Broken Object Property Level Authorization (API3)
4. Test for mass assignment vulnerabilities
5. Test for Security Misconfiguration (API8)
6. Test CORS configuration on API endpoints
7. Test for Improper Inventory Management (API9)
8. Generate OWASP API Security assessment report

## Tools & resources

- requests Library
- Security Header Checks

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

- `test_bola` — Test for Broken Object Level Authorization (API1).
- `test_broken_auth` — Test for Broken Authentication (API2) - rate limiting on login.
- `test_data_exposure` — Test for Broken Object Property Level Authorization (API3).
- `test_mass_assignment` — Test for mass assignment vulnerabilities.
- `test_security_headers` — Test for Security Misconfiguration (API8).
- `test_cors` — Test CORS configuration on API endpoints.
- `test_api_versions` — Test for Improper Inventory Management (API9).
- `generate_report` — Generate OWASP API Security assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-api-security-with-owasp-top-10`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
