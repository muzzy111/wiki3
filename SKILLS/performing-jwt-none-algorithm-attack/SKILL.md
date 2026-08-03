---
name: performing-jwt-none-algorithm-attack
description: "Agent for performing JWT 'none' algorithm attack testing. Use when the user asks to perform jwt none algorithm attack."
version: 1.0.0
tags:
  - performing
source: performing-jwt-none-algorithm-attack
---

# Performing JWT None Algorithm Attack

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** JWT None Variants Tested, Severity Classification

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** jwt none algorithm attack.
- Capability: Agent for performing JWT 'none' algorithm attack testing.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, none, algorithm, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Base64url encode bytes
2. Base64url decode string
3. Decode and display JWT components without verification
4. Forge a JWT with 'none' algorithm (removes signature)
5. Test algorithm confusion (RS256 -> HS256 using public key as HMAC secret)
6. Test forged JWTs against a target endpoint

## Tools & resources

- JWT None Variants Tested
- Severity Classification

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

- `b64url_encode` — Base64url encode bytes.
- `b64url_decode` — Base64url decode string.
- `decode_jwt` — Decode and display JWT components without verification.
- `forge_none_token` — Forge a JWT with 'none' algorithm (removes signature).
- `test_alg_confusion` — Test algorithm confusion (RS256 -> HS256 using public key as HMAC secret).
- `test_jwt_endpoint` — Test forged JWTs against a target endpoint.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-jwt-none-algorithm-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
