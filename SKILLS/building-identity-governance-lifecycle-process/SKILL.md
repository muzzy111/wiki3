---
name: building-identity-governance-lifecycle-process
description: "Agent for identity governance and lifecycle management operations. Use when the user asks to build identity governance lifecycle process."
version: 1.0.0
tags:
  - building
  - identity
source: building-identity-governance-lifecycle-process
---

# Building Identity Governance Lifecycle Process

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Microsoft Graph API, SailPoint IdentityNow API

## When to use

- The user wants to **build** identity governance lifecycle process.
- Capability: Agent for identity governance and lifecycle management operations.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, identity, governance, lifecycle, process`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate to Microsoft Graph API via client credentials
2. List users from Microsoft Entra ID with optional filter
3. Find accounts with no sign-in activity for N days
4. Find guest accounts with no recent activity
5. List active access reviews from Entra ID Governance
6. Identify users without registered MFA methods
7. Generate comprehensive identity governance report

## Tools & resources

- Microsoft Graph API
- SailPoint IdentityNow API

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

- `get_graph_token` — Authenticate to Microsoft Graph API via client credentials.
- `list_users` — List users from Microsoft Entra ID with optional filter.
- `detect_orphaned_accounts` — Find accounts with no sign-in activity for N days.
- `detect_stale_guests` — Find guest accounts with no recent activity.
- `get_access_reviews` — List active access reviews from Entra ID Governance.
- `check_users_without_mfa` — Identify users without registered MFA methods.
- `generate_lifecycle_report` — Generate comprehensive identity governance report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-identity-governance-lifecycle-process`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
