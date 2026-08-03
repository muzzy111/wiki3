---
name: implementing-aws-config-rules-for-compliance
description: "AWS Config compliance monitoring agent using boto3. Use when the user asks to implement aws config rules for compliance."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-aws-config-rules-for-compliance
---

# Implementing AWS Config Rules for Compliance

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS, Managed Rule Source Identifiers, SSM Remediation Documents, Conformance Packs, External References

## When to use

- The user wants to **implement** aws config rules for compliance.
- Capability: AWS Config compliance monitoring agent using boto3.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, config, rules, compliance`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create AWS Config client
2. Verify AWS Config recorder is running
3. Deploy AWS-managed Config rules for CIS compliance
4. Get compliance summary across all Config rules
5. List non-compliant resources for a specific rule
6. Set up auto-remediation for a Config rule
7. Run a full compliance audit and generate report

## Tools & resources

- AWS
- Managed Rule Source Identifiers
- SSM Remediation Documents
- Conformance Packs
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

- `get_config_client` — Create AWS Config client.
- `check_recorder_status` — Verify AWS Config recorder is running.
- `deploy_managed_rules` — Deploy AWS-managed Config rules for CIS compliance.
- `get_compliance_summary` — Get compliance summary across all Config rules.
- `get_non_compliant_resources` — List non-compliant resources for a specific rule.
- `configure_remediation` — Set up auto-remediation for a Config rule.
- `run_compliance_audit` — Run a full compliance audit and generate report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-aws-config-rules-for-compliance`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
