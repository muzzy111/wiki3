---
name: testing-for-business-logic-vulnerabilities
description: "Agent for testing business logic vulnerabilities during authorized assessments. Use when the user asks to test for business logic vulnerabilities."
version: 1.0.0
tags:
  - testing
source: testing-for-business-logic-vulnerabilities
---

# Testing for Business Logic Vulnerabilities

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** requests Library, Business Logic Test Categories, OWASP Category

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** for business logic vulnerabilities.
- Capability: Agent for testing business logic vulnerabilities during authorized assessments.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, business, logic, vulnerabilities`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Test price and quantity manipulation in purchase flows
2. Test if the checkout total can be overridden in the request
3. Test if a coupon can be applied multiple times
4. Test if workflow steps can be skipped
5. Test for race conditions by sending concurrent requests
6. Test if self-referral is possible
7. Generate business logic vulnerability report

## Tools & resources

- requests Library
- Business Logic Test Categories
- OWASP Category

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

- `test_price_manipulation` — Test price and quantity manipulation in purchase flows.
- `test_checkout_total_override` — Test if the checkout total can be overridden in the request.
- `test_coupon_reuse` — Test if a coupon can be applied multiple times.
- `test_workflow_bypass` — Test if workflow steps can be skipped.
- `test_race_condition` — Test for race conditions by sending concurrent requests.
- `test_self_referral` — Test if self-referral is possible.
- `generate_report` — Generate business logic vulnerability report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-for-business-logic-vulnerabilities`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
