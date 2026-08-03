---
name: implementing-jwt-signing-and-verification
description: "Agent for JWT signing, verification, and security auditing. Use when the user asks to implement jwt signing and verification."
version: 1.0.0
tags:
  - implementing
source: implementing-jwt-signing-and-verification
---

# Implementing JWT Signing and Verification

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** PyJWT Library, JWT Algorithms, Common JWT Attacks, Primary Standards, OWASP References

## When to use

- The user wants to **implement** jwt signing and verification.
- Capability: Agent for JWT signing, verification, and security auditing.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, signing, verification`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Base64url encode without padding
2. Base64url decode with padding restoration
3. Create a JWT signed with HMAC-SHA256
4. Verify an HS256 JWT and return claims
5. Decode a JWT without verification (for inspection only)
6. Audit a JWT for common security vulnerabilities
7. Generate RSA key pair for RS256 JWT signing

## Key concepts

- Description: JWT format and claims specification
- Description: Signature mechanism for JWTs
- Description: Key format for JWT signing keys
- Description: Cryptographic algorithms for JWS/JWE
- Description: Security best practices for JWT implementations

## Tools & resources

- PyJWT Library
- JWT Algorithms
- Common JWT Attacks
- Primary Standards
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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `b64url_encode` — Base64url encode without padding.
- `b64url_decode` — Base64url decode with padding restoration.
- `create_jwt_hs256` — Create a JWT signed with HMAC-SHA256.
- `verify_jwt_hs256` — Verify an HS256 JWT and return claims.
- `decode_jwt_unsafe` — Decode a JWT without verification (for inspection only).
- `audit_jwt_security` — Audit a JWT for common security vulnerabilities.
- `generate_rsa_keypair` — Generate RSA key pair for RS256 JWT signing.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-jwt-signing-and-verification`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
