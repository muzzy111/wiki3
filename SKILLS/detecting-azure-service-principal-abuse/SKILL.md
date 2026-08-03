---
name: detecting-azure-service-principal-abuse
description: "Azure Service Principal abuse detection. Use when the user asks to detect azure service principal abuse."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-azure-service-principal-abuse
---

# Detecting Azure Service Principal Abuse

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Azure, OAuth2 Token Endpoint, High-Privilege Directory Roles, Service Principal Abuse Indicators, External References, Microsoft Secure Score Recommendations

## When to use

- The user wants to **detect** azure service principal abuse.
- Capability: Azure Service Principal abuse detection agent.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, azure, service, principal, abuse`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check for expired or soon-to-expire service principal credentials
2. Find service principals with high-privilege directory roles
3. Execute Azure service principal abuse detection audit

## Key concepts

- T1098.001: Account Manipulation - Additional Cloud Credentials
- T1078.004: Valid Accounts - Cloud Accounts
- T1087.004: Account Discovery - Cloud Account
- T1528: Steal Application Access Token
- T1550.001: Use Alternate Authentication Material - Application Access Token
- Require admin approval for unmanaged applications
- Remove unused application permissions
- Limit service principal credential lifetime

## Tools & resources

- Azure
- OAuth2 Token Endpoint
- High-Privilege Directory Roles
- Service Principal Abuse Indicators
- External References
- Microsoft Secure Score Recommendations

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `audit_credential_expiry` — Check for expired or soon-to-expire service principal credentials.
- `audit_privileged_sp_roles` — Find service principals with high-privilege directory roles.
- `run_audit` — Execute Azure service principal abuse detection audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-azure-service-principal-abuse`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
