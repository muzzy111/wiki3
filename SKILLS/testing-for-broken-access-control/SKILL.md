---
name: testing-for-broken-access-control
description: "Agent for testing broken access control vulnerabilities during authorized assessments. Use when the user asks to test for broken access control."
version: 1.0.0
tags:
  - testing
source: testing-for-broken-access-control
---

# Testing for Broken Access Control

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** requests Library, Test Categories, OWASP References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** for broken access control.
- Capability: Agent for testing broken access control vulnerabilities during authorized assessments.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, broken, access, control`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test if a regular user can access admin endpoints
2. Test if a user can access another user's resources
3. Test HTTP method override headers for access control bypass
4. Test if protected endpoints are accessible without authentication
5. Test if role/privilege fields can be modified via profile update
6. Test cross-tenant data access
7. Generate access control assessment report

## Tools & resources

- requests Library
- Test Categories
- OWASP References

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

- `test_vertical_escalation` — Test if a regular user can access admin endpoints.
- `test_horizontal_escalation` — Test if a user can access another user's resources.
- `test_method_override` — Test HTTP method override headers for access control bypass.
- `test_unauthenticated_access` — Test if protected endpoints are accessible without authentication.
- `test_mass_assignment` — Test if role/privilege fields can be modified via profile update.
- `test_tenant_isolation` — Test cross-tenant data access.
- `generate_report` — Generate access control assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-for-broken-access-control`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
