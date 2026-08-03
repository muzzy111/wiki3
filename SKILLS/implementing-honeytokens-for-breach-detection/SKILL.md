---
name: implementing-honeytokens-for-breach-detection
description: "Agent for deploying and managing honeytokens for breach detection. Use when the user asks to implement honeytokens for breach detection."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-honeytokens-for-breach-detection
---

# Implementing Honeytokens for Breach Detection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Canarytokens.org API, Token Deployment Locations, Webhook Alert Payload

## When to use

- The user wants to **implement** honeytokens for breach detection.
- Capability: Agent for deploying and managing honeytokens for breach detection.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, honeytokens, breach, detection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create a DNS canary token via Canarytokens.org API
2. Create a web bug (image beacon) canary token
3. Create an AWS credential canary token
4. Generate a unique honeytoken identifier
5. Deploy fake AWS credentials file as a honeytoken
6. Generate SQL to insert honeytoken records into a database
7. Embed a DNS canary token in a configuration file
8. Create a honeytoken deployment plan for an environment

## Tools & resources

- Canarytokens.org API
- Token Deployment Locations
- Webhook Alert Payload

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

- `create_dns_canarytoken` — Create a DNS canary token via Canarytokens.org API.
- `create_web_bug_token` — Create a web bug (image beacon) canary token.
- `create_aws_key_token` — Create an AWS credential canary token.
- `generate_honeytoken_id` — Generate a unique honeytoken identifier.
- `deploy_aws_credential_token` — Deploy fake AWS credentials file as a honeytoken.
- `deploy_database_honeytoken` — Generate SQL to insert honeytoken records into a database.
- `deploy_dns_token_in_config` — Embed a DNS canary token in a configuration file.
- `create_deployment_plan` — Create a honeytoken deployment plan for an environment.
- `check_token_alerts` — Parse webhook logs to check for honeytoken trigger alerts.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-honeytokens-for-breach-detection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
