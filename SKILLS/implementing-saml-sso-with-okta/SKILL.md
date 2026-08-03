---
name: implementing-saml-sso-with-okta
description: "Agent for implementing and auditing SAML SSO with Okta. Validates SAML configuration, checks certificate expiry, tests assertion encryption, audits attribute mappings, and verifies signature algorithms for enterprise.... Use when the user asks to implement saml sso with okta."
version: 1.0.0
tags:
  - implementing
  - identity
source: implementing-saml-sso-with-okta
---

# Implementing SAML SSO with Okta

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** SAML, Okta, NIST Standards, Security Best Practices, XML Security Standards, Compliance Frameworks

## When to use

- The user wants to **implement** saml sso with okta.
- Capability: Agent for implementing and auditing SAML SSO with Okta. Validates SAML configuration, checks certificate expiry, tests assertion encryption, audits attribute mappings, and verifies signature algorithms for enterprise SSO deployments.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, saml, okta`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. User accesses protected resource on Service Provider
2. SP checks for existing session - none found
3. SP generates SAML AuthnRequest with:
4. SP redirects user to Okta SSO URL with base64-encoded AuthnRequest
5. Okta authenticates user (credentials, MFA if configured)
6. Okta generates SAML Response containing:
7. Okta POSTs SAML Response to SP ACS URL
8. SP validates SAML Response:
9. SP extracts user identity and attributes
10. SP creates local session and grants access

## Key concepts

- OASIS SAML 2.0 Core: Defines assertions, protocols, bindings, and profiles
- http: //docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf
- http: //docs.oasis-open.org/security/saml/v2.0/saml-bindings-2.0-os.pdf
- SAML 2.0 Profiles: Web Browser SSO Profile, Single Logout Profile
- http: //docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf
- NIST SP 800-63B: Digital Identity Guidelines - Authentication and Lifecycle Management
- https: //pages.nist.gov/800-63-3/sp800-63b.html
- NIST SP 800-53 Rev 5: Security and Privacy Controls

## Tools & resources

- SAML
- Okta
- NIST Standards
- Security Best Practices
- XML Security Standards
- Compliance Frameworks

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-saml-sso-with-okta`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
