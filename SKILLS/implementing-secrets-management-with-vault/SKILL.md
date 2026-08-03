---
name: implementing-secrets-management-with-vault
description: "HashiCorp Vault secrets management agent. Manages secrets lifecycle using the HashiCorp Vault KV v2 secrets engine via the hvac Python library. Supports reading, writing, listing, deleting secrets, and auditing.... Use when the user asks to implement secrets management with vault."
version: 1.0.0
tags:
  - implementing
source: implementing-secrets-management-with-vault
---

# Implementing Secrets Management with Vault

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core API, System Backend, Transit Secrets Engine, Error Handling

## When to use

- The user wants to **implement** secrets management with vault.
- Capability: HashiCorp Vault secrets management agent. Manages secrets lifecycle using the HashiCorp Vault KV v2 secrets engine via the hvac Python library. Supports reading, writing, listing, deleting secrets, and auditing secret access patterns.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, secrets, management, vault`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create and authenticate a Vault client
2. Write or update a secret in KV v2
3. Read a secret from KV v2
4. List secret paths under a given prefix
5. Delete or destroy a secret
6. Read secret metadata including version history
7. Audit all secrets under a path, reporting metadata and age

## Tools & resources

- Core API
- System Backend
- Transit Secrets Engine
- Error Handling

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

- `get_vault_client` — Create and authenticate a Vault client.
- `write_secret` — Write or update a secret in KV v2.
- `read_secret` — Read a secret from KV v2.
- `list_secrets` — List secret paths under a given prefix.
- `delete_secret` — Delete or destroy a secret.
- `read_metadata` — Read secret metadata including version history.
- `audit_secrets` — Audit all secrets under a path, reporting metadata and age.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-secrets-management-with-vault`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
