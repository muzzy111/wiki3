---
name: implementing-identity-verification-for-zero-trust
description: "Agent for assessing identity verification controls in zero trust architecture. Use when the user asks to implement identity verification for zero trust."
version: 1.0.0
tags:
  - implementing
  - identity
source: implementing-identity-verification-for-zero-trust
---

# Implementing Identity Verification for Zero Trust

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** FIDO2/WebAuthn Registration, Conditional Access Signals, NIST SP 800-207, NIST SP 800-63B, FIDO Alliance Standards, Okta Identity Security

## When to use

- The user wants to **implement** identity verification for zero trust.
- Capability: Agent for assessing identity verification controls in zero trust architecture.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, identity, verification, zero, trust`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Assess authentication method strength against zero trust requirements
2. Assess conditional access policies for zero trust alignment
3. Assess identity pillar maturity against CISA Zero Trust Maturity Model
4. Analyze authentication events for zero trust insights

## Key concepts

- All resource authentication and authorization are dynamic and strictly enforced before access is allowed
- User identity and attributes from the IdP
- Device identity and posture from the endpoint management system
- Behavioral attributes from user and entity behavior analytics (UEBA)
- Environmental attributes (location, time, network)
- FIDO2/WebAuthn: Cryptographic authentication bound to origin domain
- PIV/CAC smart cards: Certificate-based authentication
- Not phishing-resistant: SMS OTP, voice calls, push notifications, TOTP

## Tools & resources

- FIDO2/WebAuthn Registration
- Conditional Access Signals
- NIST SP 800-207
- NIST SP 800-63B
- FIDO Alliance Standards
- Okta Identity Security

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

- `assess_authentication_methods` — Assess authentication method strength against zero trust requirements.
- `assess_conditional_access` — Assess conditional access policies for zero trust alignment.
- `assess_identity_maturity` — Assess identity pillar maturity against CISA Zero Trust Maturity Model.
- `analyze_auth_events` — Analyze authentication events for zero trust insights.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-identity-verification-for-zero-trust`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
