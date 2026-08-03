---
name: detecting-azure-lateral-movement
description: "Azure Lateral Movement Detection Agent - hunts for lateral movement in Azure AD/Entra ID. Use when the user asks to detect azure lateral movement."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-azure-lateral-movement
---

# Detecting Azure Lateral Movement

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Azure, Sentinel KQL, Required Graph API Permissions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** azure lateral movement.
- Capability: Azure Lateral Movement Detection Agent - hunts for lateral movement in Azure AD/Entra ID.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, azure, lateral, movement`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate to Microsoft Graph API via OAuth2 client credentials
2. Query Azure AD audit logs for suspicious directory changes
3. Query Azure AD sign-in logs for anomalous authentication patterns
4. Detect suspicious OAuth application consent grants
5. Detect credential additions to service principals
6. Detect sign-ins from external/unknown tenants
7. Detect potential token replay by finding same user from multiple IPs in short windows

## Tools & resources

- Azure
- Sentinel KQL
- Required Graph API Permissions

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

- `get_graph_token` — Authenticate to Microsoft Graph API via OAuth2 client credentials.
- `query_audit_logs` — Query Azure AD audit logs for suspicious directory changes.
- `query_signin_logs` — Query Azure AD sign-in logs for anomalous authentication patterns.
- `detect_oauth_consent_abuse` — Detect suspicious OAuth application consent grants.
- `detect_service_principal_changes` — Detect credential additions to service principals.
- `detect_cross_tenant_signins` — Detect sign-ins from external/unknown tenants.
- `detect_token_replay` — Detect potential token replay by finding same user from multiple IPs in short windows.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-azure-lateral-movement`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
