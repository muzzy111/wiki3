---
name: implementing-passwordless-auth-with-microsoft-entra
description: "Microsoft Entra ID passwordless authentication audit agent using MS Graph API. Use when the user asks to implement passwordless auth with microsoft entra."
version: 1.0.0
tags:
  - implementing
source: implementing-passwordless-auth-with-microsoft-entra
---

# Implementing Passwordless Auth with Microsoft Entra

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Conditional Access API, Sign-In Logs API, Required Graph Permissions, External References

## When to use

- The user wants to **implement** passwordless auth with microsoft entra.
- Capability: Microsoft Entra ID passwordless authentication audit agent using MS Graph API.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, passwordless, auth, microsoft, entra`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate to Microsoft Graph using client credentials
2. Make authenticated GET request to Microsoft Graph
3. Get authentication methods policy to check passwordless configuration
4. Get FIDO2 security key configuration
5. Get Microsoft Authenticator configuration
6. Get Windows Hello for Business configuration
7. List authentication methods registered by a specific user
8. Identify users who have not registered any passwordless method

## Tools & resources

- Conditional Access API
- Sign-In Logs API
- Required Graph Permissions
- External References

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

- `get_access_token` — Authenticate to Microsoft Graph using client credentials.
- `graph_get` — Make authenticated GET request to Microsoft Graph.
- `get_auth_methods_policy` — Get authentication methods policy to check passwordless configuration.
- `get_fido2_policy` — Get FIDO2 security key configuration.
- `get_microsoft_authenticator_policy` — Get Microsoft Authenticator configuration.
- `get_windows_hello_policy` — Get Windows Hello for Business configuration.
- `list_user_auth_methods` — List authentication methods registered by a specific user.
- `get_users_without_passwordless` — Identify users who have not registered any passwordless method.
- `get_sign_in_logs` — Get recent sign-in logs to analyze authentication methods used.
- `get_conditional_access_policies` — List conditional access policies related to authentication strength.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-passwordless-auth-with-microsoft-entra`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
