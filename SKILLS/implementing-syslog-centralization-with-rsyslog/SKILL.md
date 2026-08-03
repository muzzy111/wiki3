---
name: implementing-syslog-centralization-with-rsyslog
description: "Rsyslog Centralization Agent - Generates and deploys TLS-secured rsyslog configurations. Use when the user asks to implement syslog centralization with rsyslog."
version: 1.0.0
tags:
  - implementing
source: implementing-syslog-centralization-with-rsyslog
---

# Implementing Syslog Centralization with Rsyslog

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Rsyslog Server Configuration Directives, Rsyslog Client Forwarding, Paramiko SSH Deployment, OpenSSL Certificate Generation

## When to use

- The user wants to **implement** syslog centralization with rsyslog.
- Capability: Rsyslog Centralization Agent - Generates and deploys TLS-secured rsyslog configurations.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, syslog, centralization, rsyslog`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate rsyslog server configuration with TLS
2. Generate rsyslog client configuration with TLS forwarding
3. Generate CA, server, and client TLS certificates using OpenSSL
4. Deploy rsyslog configuration to a remote host via SSH
5. Validate TLS connectivity to the rsyslog server
6. Generate syslog centralization deployment report

## Tools & resources

- Rsyslog Server Configuration Directives
- Rsyslog Client Forwarding
- Paramiko SSH Deployment
- OpenSSL Certificate Generation

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

- `generate_server_config` — Generate rsyslog server configuration with TLS.
- `generate_client_config` — Generate rsyslog client configuration with TLS forwarding.
- `generate_tls_certificates` — Generate CA, server, and client TLS certificates using OpenSSL.
- `deploy_config_ssh` — Deploy rsyslog configuration to a remote host via SSH.
- `validate_tls_connection` — Validate TLS connectivity to the rsyslog server.
- `generate_report` — Generate syslog centralization deployment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-syslog-centralization-with-rsyslog`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
