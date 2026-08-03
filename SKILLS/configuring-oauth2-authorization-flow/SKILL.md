---
name: configuring-oauth2-authorization-flow
description: "OAuth 2.0 authorization flow security audit. Use when the user asks to configure oauth2 authorization flow."
version: 1.0.0
tags:
  - configuring
  - identity
source: configuring-oauth2-authorization-flow
---

# Configuring Oauth2 Authorization Flow

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** OIDC Discovery Endpoint, OAuth 2.0 Grant Types, Security Best Practices, External References, Core OAuth Standards, Token Standards

## When to use

- The user wants to **configure** oauth2 authorization flow.
- Capability: OAuth 2.0 authorization flow security audit agent.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, oauth2, authorization, flow`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Discover OAuth 2.0 / OIDC endpoints from well-known configuration
2. Audit OAuth configuration for security issues
3. Test token endpoint with client credentials
4. Execute OAuth 2.0 security audit

## Key concepts

- RFC 6749: The OAuth 2.0 Authorization Framework
- https: //datatracker.ietf.org/doc/html/rfc6749
- RFC 6750: The OAuth 2.0 Authorization Framework: Bearer Token Usage
- https: //datatracker.ietf.org/doc/html/rfc6750
- RFC 7636: Proof Key for Code Exchange (PKCE)
- https: //datatracker.ietf.org/doc/html/rfc7636
- RFC 9700: OAuth 2.0 Security Best Current Practice
- https: //datatracker.ietf.org/doc/html/rfc9700

## Tools & resources

- OIDC Discovery Endpoint
- OAuth 2.0 Grant Types
- Security Best Practices
- External References
- Core OAuth Standards
- Token Standards
- OpenID Connect
- Additional Grant Types

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

- `discover_oauth_endpoints` — Discover OAuth 2.0 / OIDC endpoints from well-known configuration.
- `audit_oauth_security` — Audit OAuth configuration for security issues.
- `test_token_endpoint` — Test token endpoint with client credentials.
- `run_audit` — Execute OAuth 2.0 security audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-oauth2-authorization-flow`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
