---
name: detecting-suspicious-oauth-application-consent
description: "Agent for detecting suspicious OAuth application consent grants in Azure AD / Entra ID. Use when the user asks to detect suspicious oauth application consent."
version: 1.0.0
tags:
  - detecting
  - threat-intel
  - identity
source: detecting-suspicious-oauth-application-consent
---

# Detecting Suspicious Oauth Application Consent

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** High-Risk OAuth Scopes

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** suspicious oauth application consent.
- Capability: Agent for detecting suspicious OAuth application consent grants in Azure AD / Entra ID.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, suspicious, oauth, application, consent`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate via MSAL client credentials flow and return access token
2. Make authenticated GET request to Microsoft Graph API
3. List all delegated OAuth2 permission grants in the tenant
4. List service principals with their app roles and permissions
5. Query directory audit logs for consent grant events
6. Correlate grants with service principals to produce risk assessment
7. Run comprehensive OAuth consent audit

## Tools & resources

- High-Risk OAuth Scopes

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

- `get_access_token` — Authenticate via MSAL client credentials flow and return access token.
- `graph_get` — Make authenticated GET request to Microsoft Graph API.
- `enumerate_oauth_grants` — List all delegated OAuth2 permission grants in the tenant.
- `list_service_principals` — List service principals with their app roles and permissions.
- `query_consent_audit_logs` — Query directory audit logs for consent grant events.
- `analyze_risk` — Correlate grants with service principals to produce risk assessment.
- `full_audit` — Run comprehensive OAuth consent audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-suspicious-oauth-application-consent`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
