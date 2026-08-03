---
name: auditing-azure-active-directory-configuration
description: "Agent for auditing Azure Active Directory (Entra ID) configuration. Use when the user asks to audit azure active directory configuration."
version: 1.0.0
tags:
  - auditing
  - cloud
  - threat-intel
  - active-directory
  - incident-response
source: auditing-azure-active-directory-configuration
---

# Auditing Azure Active Directory Configuration

**Role:** Security audit  
**Audience:** security auditors and cloud/IAM engineers  
**Primary tools:** Azure, Python Graph API Helper

## When to use

- The user wants to **audit** azure active directory configuration.
- Capability: Agent for auditing Azure Active Directory (Entra ID) configuration.
- Goal: measure configuration and access against policy and best practice.
- Trigger keywords: `auditing, azure, active, directory, configuration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Obtain a Microsoft Graph API access token
2. Make an authenticated GET request to Microsoft Graph API
3. Get tenant organization details
4. List all Global Administrator role assignments
5. List all Conditional Access policies with their state and grant controls
6. Find users who have not signed in for specified number of days
7. List all guest users in the tenant
8. Check users without MFA registered

## Tools & resources

- Azure
- Python Graph API Helper

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

- `get_graph_token` — Obtain a Microsoft Graph API access token.
- `graph_get` — Make an authenticated GET request to Microsoft Graph API.
- `get_tenant_info` — Get tenant organization details.
- `list_global_admins` — List all Global Administrator role assignments.
- `list_conditional_access_policies` — List all Conditional Access policies with their state and grant controls.
- `find_stale_users` — Find users who have not signed in for specified number of days.
- `list_guest_users` — List all guest users in the tenant.
- `check_mfa_registration` — Check users without MFA registered.
- `get_risky_signins` — Get risky sign-in events from the last N days.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `auditing-azure-active-directory-configuration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
