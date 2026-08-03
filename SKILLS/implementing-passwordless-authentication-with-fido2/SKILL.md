---
name: implementing-passwordless-authentication-with-fido2
description: "FIDO2 Passwordless Auth Agent - audits FIDO2 deployment readiness and credential status. Use when the user asks to implement passwordless authentication with fido2."
version: 1.0.0
tags:
  - implementing
source: implementing-passwordless-authentication-with-fido2
---

# Implementing Passwordless Authentication with Fido2

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** WebAuthn Registration Flow, python-fido2 Server Library, FIDO2 Authenticator Types, COSE Algorithm Identifiers, Azure AD FIDO2 Configuration, FIDO Standards

## When to use

- The user wants to **implement** passwordless authentication with fido2.
- Capability: FIDO2 Passwordless Auth Agent - audits FIDO2 deployment readiness and credential status.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, passwordless, authentication, fido2`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. User receives FIDO2 security key (YubiKey, Titan Key)
2. User navigates to enrollment portal
3. System generates WebAuthn registration challenge
4. Browser prompts user to insert/tap security key
5. User verifies with PIN or biometric on key
6. Key generates unique public/private key pair
7. Public key registered with relying party
8. User tests authentication with enrolled key
9. User visits login page, enters username
10. Server sends WebAuthn authentication challenge

## Key concepts

- WebAuthn Level 2: W3C Web Authentication API
- CTAP2: Client to Authenticator Protocol 2.0
- NIST SP 800-63B: AAL3 - Hardware-based phishing-resistant authenticator
- NIST SP 800-53 Rev 5: IA-2(6), IA-2(8) Replay-resistant authentication
- NIST SP 800-157: PIV Derived Credentials
- Phishing-Resistant MFA: Required for federal agencies under EO 14028
- OMB M-22-09: Federal zero trust strategy requiring phishing-resistant MFA
- Google Passkeys: Android and Chrome WebAuthn support

## Tools & resources

- WebAuthn Registration Flow
- python-fido2 Server Library
- FIDO2 Authenticator Types
- COSE Algorithm Identifiers
- Azure AD FIDO2 Configuration
- FIDO Standards
- NIST Standards
- CISA Guidance

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

- `graph_api`
- `get_fido2_policy`
- `get_registrations`
- `audit_fido2_policy`
- `analyze_adoption`
- `check_rp_config`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-passwordless-authentication-with-fido2`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
