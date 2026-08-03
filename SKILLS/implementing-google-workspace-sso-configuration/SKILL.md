---
name: implementing-google-workspace-sso-configuration
description: "Agent for auditing and configuring Google Workspace SAML SSO. Use when the user asks to implement google workspace sso configuration."
version: 1.0.0
tags:
  - implementing
source: implementing-google-workspace-sso-configuration
---

# Implementing Google Workspace SSO Configuration

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Admin Console Path, SAML Configuration Fields, Common IdP Providers, SAML 2.0 Standard

## When to use

- The user wants to **implement** google workspace sso configuration.
- Capability: Agent for auditing and configuring Google Workspace SAML SSO.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, google, workspace, configuration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse and validate an IdP SAML signing certificate
2. Audit Google Workspace SSO configuration
3. Generate Google Workspace SAML SSO configuration
4. Audit SSO login activity for anomalies

## Key concepts

- Assertions: Authentication statements, attribute statements
- Protocols: AuthnRequest, Response, LogoutRequest
- Profiles: Web Browser SSO, Single Logout
- SAML 2.0 compliant IdP
- HTTP POST binding for Assertion Consumer Service
- Signed SAML assertions (RSA-SHA256 recommended)
- NameID format: emailAddress (user's primary email)
- X.509 PEM certificate for signature verification

## Tools & resources

- Admin Console Path
- SAML Configuration Fields
- Common IdP Providers
- SAML 2.0 Standard

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

- `parse_saml_certificate` — Parse and validate an IdP SAML signing certificate.
- `audit_sso_config` — Audit Google Workspace SSO configuration.
- `generate_saml_config` — Generate Google Workspace SAML SSO configuration.
- `audit_sso_login_activity` — Audit SSO login activity for anomalies.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-google-workspace-sso-configuration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
