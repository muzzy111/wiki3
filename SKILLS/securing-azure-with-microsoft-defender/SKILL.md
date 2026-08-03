---
name: securing-azure-with-microsoft-defender
description: "Agent for monitoring and managing Microsoft Defender for Cloud security posture. Use when the user asks to secure azure with microsoft defender."
version: 1.0.0
tags:
  - securing
  - cloud
source: securing-azure-with-microsoft-defender
---

# Securing Azure with Microsoft Defender

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** Azure, Defender Plan Names, JIT VM Access

## When to use

- The user wants to **secure** azure with microsoft defender.
- Capability: Agent for monitoring and managing Microsoft Defender for Cloud security posture.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, azure, microsoft, defender`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute an Azure CLI command and return parsed JSON output
2. List all Defender for Cloud pricing plans and their status
3. Retrieve the current Secure Score across subscriptions
4. List security assessments and their health status
5. Retrieve recent security alerts from Defender for Cloud
6. Verify security contact configuration for alert notifications
7. Check auto-provisioning settings for security agents
8. Generate a comprehensive security posture report

## Tools & resources

- Azure
- Defender Plan Names
- JIT VM Access

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

- `run_az_command` — Execute an Azure CLI command and return parsed JSON output.
- `get_defender_plans` — List all Defender for Cloud pricing plans and their status.
- `get_secure_score` — Retrieve the current Secure Score across subscriptions.
- `get_security_assessments` — List security assessments and their health status.
- `get_security_alerts` — Retrieve recent security alerts from Defender for Cloud.
- `check_security_contacts` — Verify security contact configuration for alert notifications.
- `check_auto_provisioning` — Check auto-provisioning settings for security agents.
- `generate_posture_report` — Generate a comprehensive security posture report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `securing-azure-with-microsoft-defender`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
