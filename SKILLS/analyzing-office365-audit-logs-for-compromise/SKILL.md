---
name: analyzing-office365-audit-logs-for-compromise
description: "Agent for analyzing Office 365 audit logs for compromise indicators via Microsoft Graph. Use when the user asks to analyze office365 audit logs for compromise."
version: 1.0.0
tags:
  - analyzing
source: analyzing-office365-audit-logs-for-compromise
---

# Analyzing Office365 Audit Logs for Compromise

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Suspicious Operations Monitored

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** office365 audit logs for compromise.
- Capability: Agent for analyzing Office 365 audit logs for compromise indicators via Microsoft Graph.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, office365, audit, logs, compromise`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate via MSAL client credentials flow
2. Paginated GET against Microsoft Graph API
3. Query Unified Audit Log for suspicious mail operations
4. List inbox rules for a specific mailbox and flag forwarding rules
5. Check mailbox-level SMTP forwarding configuration
6. Check for suspicious OAuth application consent grants
7. Run comprehensive O365 compromise audit

## Tools & resources

- Suspicious Operations Monitored

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

- `get_access_token` — Authenticate via MSAL client credentials flow.
- `graph_get` — Paginated GET against Microsoft Graph API.
- `query_audit_logs` — Query Unified Audit Log for suspicious mail operations.
- `check_inbox_rules` — List inbox rules for a specific mailbox and flag forwarding rules.
- `check_mailbox_forwarding` — Check mailbox-level SMTP forwarding configuration.
- `check_oauth_grants` — Check for suspicious OAuth application consent grants.
- `full_audit` — Run comprehensive O365 compromise audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-office365-audit-logs-for-compromise`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
