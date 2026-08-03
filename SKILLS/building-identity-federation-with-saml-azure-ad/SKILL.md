---
name: building-identity-federation-with-saml-azure-ad
description: "SAML Azure AD Federation Agent - Configures and validates SAML SSO with Azure AD. Use when the user asks to build identity federation with saml azure ad."
version: 1.0.0
tags:
  - building
  - cloud
  - identity
source: building-identity-federation-with-saml-azure-ad
---

# Building Identity Federation with SAML Azure AD

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Azure, SAML, Federation Metadata URL, SP Metadata Required Fields, Validation Checks, Federation Protocols

## When to use

- The user wants to **build** identity federation with saml azure ad.
- Capability: SAML Azure AD Federation Agent - Configures and validates SAML SSO with Azure AD.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, identity, federation, saml, azure`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Fetch Azure AD SAML federation metadata
2. Parse SAML federation metadata XML
3. Generate Service Provider SAML metadata
4. Validate SAML federation configuration
5. Generate SAML federation report

## Key concepts

- Security Assertion Markup Language version 2.0
- XML-based framework for exchanging authentication/authorization data
- Profiles: Web Browser SSO, Enhanced Client or Proxy, Single Logout
- Web Services Federation Language
- Used by AD FS for passive federation (browser-based)
- Token types: SAML 1.1, SAML 2.0
- Used by Azure AD as primary protocol for modern applications
- JWT tokens instead of SAML assertions

## Tools & resources

- Azure
- SAML
- Federation Metadata URL
- SP Metadata Required Fields
- Validation Checks
- Federation Protocols

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

- `fetch_federation_metadata` — Fetch Azure AD SAML federation metadata.
- `parse_metadata` — Parse SAML federation metadata XML.
- `generate_sp_metadata` — Generate Service Provider SAML metadata.
- `validate_configuration` — Validate SAML federation configuration.
- `generate_report` — Generate SAML federation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-identity-federation-with-saml-azure-ad`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
