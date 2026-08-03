---
name: implementing-azure-defender-for-cloud
description: "Azure Defender for Cloud security posture agent using azure-mgmt-security. Use when the user asks to implement azure defender for cloud."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-azure-defender-for-cloud
---

# Implementing Azure Defender for Cloud

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Azure, SecurityCenter Client Methods, Defender Plan Names, Severity Levels, External References

## When to use

- The user wants to **implement** azure defender for cloud.
- Capability: Azure Defender for Cloud security posture agent using azure-mgmt-security.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, azure, defender, cloud`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create Azure Security Center client
2. List available Azure subscriptions
3. Retrieve the current secure score
4. List all unhealthy security assessments (recommendations)
5. Check which Defender plans are enabled
6. Retrieve active security alerts
7. Check regulatory compliance standard status
8. List Just-In-Time VM access policies

## Tools & resources

- Azure
- SecurityCenter Client Methods
- Defender Plan Names
- Severity Levels
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

- `get_security_client` — Create Azure Security Center client.
- `list_subscriptions` — List available Azure subscriptions.
- `get_secure_score` — Retrieve the current secure score.
- `get_security_assessments` — List all unhealthy security assessments (recommendations).
- `get_pricing_tiers` — Check which Defender plans are enabled.
- `get_security_alerts` — Retrieve active security alerts.
- `get_regulatory_compliance` — Check regulatory compliance standard status.
- `get_jit_policies` — List Just-In-Time VM access policies.
- `run_defender_audit` — Run a full Defender for Cloud audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-azure-defender-for-cloud`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
