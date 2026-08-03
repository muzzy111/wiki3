---
name: detecting-service-account-abuse
description: "Agent for detecting service account abuse in Active Directory and cloud environments. Use when the user asks to detect service account abuse."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-service-account-abuse
---

# Detecting Service Account Abuse

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Active Directory PowerShell Module, Microsoft Graph API, AWS IAM, Detection Data Sources

## When to use

- The user wants to **detect** service account abuse.
- Capability: Agent for detecting service account abuse in Active Directory and cloud environments.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, service, account, abuse`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Query Active Directory for service accounts via PowerShell
2. Find service accounts with interactive logon events (type 2/10)
3. Detect anomalous logon patterns for service accounts
4. Identify risky service account configurations

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- Active Directory PowerShell Module
- Microsoft Graph API
- AWS IAM
- Detection Data Sources

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

- `query_ad_service_accounts` — Query Active Directory for service accounts via PowerShell.
- `check_interactive_logons` — Find service accounts with interactive logon events (type 2/10).
- `analyze_logon_patterns` — Detect anomalous logon patterns for service accounts.
- `check_account_risks` — Identify risky service account configurations.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-service-account-abuse`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
