---
name: testing-jwt-token-security
description: "Agent for testing JWT token security during authorized assessments. Use when the user asks to test jwt token security."
version: 1.0.0
tags:
  - testing
source: testing-jwt-token-security
---

# Testing JWT Token Security

**Role:** Security testing  
**Audience:** QA security, pentesters, and AppSec engineers  
**Primary tools:** PyJWT Library, JWT Attack Types, JWT Structure, Standard Claims

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **test** jwt token security.
- Capability: Agent for testing JWT token security during authorized assessments.
- Goal: validate defenses, applications, or controls under controlled conditions.
- Trigger keywords: `testing, token, security`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Decode and display JWT header and payload without verification
2. Test algorithm none attack - forge token without signature
3. Brute force HMAC secret using a wordlist
4. Create a forged JWT with custom claims
5. Test if expired tokens are still accepted
6. Test if token is still valid after logout
7. Check for JWKS and OpenID configuration endpoints
8. Generate JWT security assessment report

## Tools & resources

- PyJWT Library
- JWT Attack Types
- JWT Structure
- Standard Claims

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

- `decode_jwt` — Decode and display JWT header and payload without verification.
- `test_alg_none` — Test algorithm none attack - forge token without signature.
- `test_hmac_brute_force` — Brute force HMAC secret using a wordlist.
- `forge_token` — Create a forged JWT with custom claims.
- `test_expired_token` — Test if expired tokens are still accepted.
- `test_token_after_logout` — Test if token is still valid after logout.
- `check_jwks_endpoint` — Check for JWKS and OpenID configuration endpoints.
- `generate_report` — Generate JWT security assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `testing-jwt-token-security`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
