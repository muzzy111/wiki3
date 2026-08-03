---
name: implementing-hardware-security-key-authentication
description: "FIDO2/WebAuthn Hardware Security Key Authentication Server. Implements a complete WebAuthn relying party with registration ceremonies, authentication flows, YubiKey enrollment management, and passkey support using.... Use when the user asks to implement hardware security key authentication."
version: 1.0.0
tags:
  - implementing
source: implementing-hardware-security-key-authentication
---

# Implementing Hardware Security Key Authentication

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Arguments, Key Functions, Security Features

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** hardware security key authentication.
- Capability: FIDO2/WebAuthn Hardware Security Key Authentication Server. Implements a complete WebAuthn relying party with registration ceremonies, authentication flows, YubiKey enrollment management, and passkey support using the python-fido2 library. For authorized deployment and security testing only.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, hardware, security, authentication`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Initialize SQLite database for credential and user storage
2. Create a new user with a random user handle
3. Retrieve user by username
4. Retrieve user by user handle (for discoverable credential flows)
5. Store a new WebAuthn credential in the database
6. Get all active credentials for a user
7. Get all active credentials across all users (for discoverable flows)
8. Revoke a credential (soft delete)

## Tools & resources

- Arguments
- Key Functions
- Security Features

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

- `init_database` — Initialize SQLite database for credential and user storage.
- `create_user` — Create a new user with a random user handle.
- `get_user_by_username` — Retrieve user by username.
- `get_user_by_handle` — Retrieve user by user handle (for discoverable credential flows).
- `store_credential` — Store a new WebAuthn credential in the database.
- `get_user_credentials` — Get all active credentials for a user.
- `get_all_credentials` — Get all active credentials across all users (for discoverable flows).
- `revoke_credential` — Revoke a credential (soft delete).
- `update_sign_count` — Update the sign count and last-used timestamp after authentication.
- `generate_recovery_codes` — Generate one-time recovery codes for account recovery.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-hardware-security-key-authentication`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
