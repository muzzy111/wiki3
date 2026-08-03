---
name: implementing-aws-security-hub
description: "AWS Security Hub CSPM agent using boto3 securityhub client. Use when the user asks to implement aws security hub."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-aws-security-hub
---

# Implementing AWS Security Hub

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS, Standard ARNs, External References

## When to use

- The user wants to **implement** aws security hub.
- Capability: AWS Security Hub CSPM agent using boto3 securityhub client.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create Security Hub client
2. Enable Security Hub with default standards
3. Enable specific compliance standards
4. List all enabled security standards and their status
5. Retrieve active findings grouped by severity
6. Get compliance scores for all enabled standards
7. Create a custom Security Hub insight
8. Update findings workflow status in batch

## Tools & resources

- AWS
- Standard ARNs
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

- `get_hub_client` — Create Security Hub client.
- `enable_security_hub` — Enable Security Hub with default standards.
- `enable_standards` — Enable specific compliance standards.
- `get_enabled_standards` — List all enabled security standards and their status.
- `get_findings_summary` — Retrieve active findings grouped by severity.
- `get_compliance_scores` — Get compliance scores for all enabled standards.
- `create_custom_insight` — Create a custom Security Hub insight.
- `batch_update_findings` — Update findings workflow status in batch.
- `run_security_hub_audit` — Run a full Security Hub audit and print report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-aws-security-hub`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
