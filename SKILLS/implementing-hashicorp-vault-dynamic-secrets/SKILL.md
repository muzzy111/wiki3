---
name: implementing-hashicorp-vault-dynamic-secrets
description: "HashiCorp Vault dynamic secrets management agent using hvac client. Use when the user asks to implement hashicorp vault dynamic secrets."
version: 1.0.0
tags:
  - implementing
source: implementing-hashicorp-vault-dynamic-secrets
---

# Implementing Hashicorp Vault Dynamic Secrets

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS Secrets Engine, PKI Secrets Engine, Lease Management, System Operations, External References

## When to use

- The user wants to **implement** hashicorp vault dynamic secrets.
- Capability: HashiCorp Vault dynamic secrets management agent using hvac client.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, hashicorp, vault, dynamic, secrets`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Connect to Vault using token or AppRole authentication
2. Enable the database secrets engine
3. Configure a PostgreSQL database connection in Vault
4. Create a dynamic database role for credential generation
5. Generate dynamic database credentials for a role
6. Enable the AWS secrets engine for dynamic IAM credentials
7. Configure AWS root credentials for dynamic IAM generation
8. Create an AWS dynamic role for generating IAM credentials

## Tools & resources

- AWS Secrets Engine
- PKI Secrets Engine
- Lease Management
- System Operations
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

- `connect_vault` — Connect to Vault using token or AppRole authentication.
- `enable_database_secrets_engine` — Enable the database secrets engine.
- `configure_postgres_connection` — Configure a PostgreSQL database connection in Vault.
- `create_database_role` — Create a dynamic database role for credential generation.
- `generate_database_credentials` — Generate dynamic database credentials for a role.
- `enable_aws_secrets_engine` — Enable the AWS secrets engine for dynamic IAM credentials.
- `configure_aws_root` — Configure AWS root credentials for dynamic IAM generation.
- `create_aws_role` — Create an AWS dynamic role for generating IAM credentials.
- `generate_aws_credentials` — Generate dynamic AWS credentials for a role.
- `enable_pki_engine` — Enable PKI secrets engine for dynamic certificate generation.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-hashicorp-vault-dynamic-secrets`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
