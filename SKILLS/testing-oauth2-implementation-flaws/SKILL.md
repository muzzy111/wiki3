---
name: testing-oauth2-implementation-flaws
description: "Agent for testing OAuth 2.0 implementation flaws. Tests OAuth authorization code flow, redirect URI validation, state/PKCE enforcement, token leakage, scope escalation, and OIDC ID token validation weaknesses. Use when the user asks to test oauth2 implementation flaws."
version: 1.0.0
tags:
  - testing
  - cloud
  - identity
source: testing-oauth2-implementation-flaws
---

# Testing Oauth2 Implementation Flaws

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** AWS, OAuth 2.0 Grant Types, Redirect URI Bypass Techniques

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** oauth2 implementation flaws.
- Capability: Agent for testing OAuth 2.0 implementation flaws. Tests OAuth authorization code flow, redirect URI validation, state/PKCE enforcement, token leakage, scope escalation, and OIDC ID token validation weaknesses.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, oauth2, implementation, flaws`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Define test objectives, success criteria, and out-of-scope items
2. Prepare harnesses and targets for oauth2 implementation flaws
3. Execute tests and capture raw results
4. Analyze failures, edge cases, and coverage
5. Report issues with severity and fix recommendations

## Tools & resources

- AWS
- OAuth 2.0 Grant Types
- Redirect URI Bypass Techniques

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-oauth2-implementation-flaws`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
