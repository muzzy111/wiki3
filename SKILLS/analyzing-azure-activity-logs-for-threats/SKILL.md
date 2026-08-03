---
name: analyzing-azure-activity-logs-for-threats
description: "Agent for analyzing Azure activity logs for threat detection. Use when the user asks to analyze azure activity logs for threats."
version: 1.0.0
tags:
  - analyzing
  - cloud
  - threat-intel
source: analyzing-azure-activity-logs-for-threats
---

# Analyzing Azure Activity Logs for Threats

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Azure

## When to use

- The user wants to **analyze** azure activity logs for threats.
- Capability: Agent for analyzing Azure activity logs for threat detection.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, azure, activity, logs, threats`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Get Azure credential
2. Execute KQL query against Log Analytics workspace
3. Detect role assignment changes indicating privilege escalation
4. Detect Network Security Group rule modifications
5. Detect Key Vault secret access from unusual sources
6. Detect sign-ins from geographically distant locations in short time
7. Detect mass resource deletion events
8. Detect modifications to Conditional Access policies

## Tools & resources

- Azure

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

- `get_credential` — Get Azure credential.
- `run_kql` — Execute KQL query against Log Analytics workspace.
- `detect_privilege_escalation` — Detect role assignment changes indicating privilege escalation.
- `detect_nsg_changes` — Detect Network Security Group rule modifications.
- `detect_keyvault_access` — Detect Key Vault secret access from unusual sources.
- `detect_impossible_travel` — Detect sign-ins from geographically distant locations in short time.
- `detect_resource_deletion` — Detect mass resource deletion events.
- `detect_conditional_access_changes` — Detect modifications to Conditional Access policies.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-azure-activity-logs-for-threats`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
