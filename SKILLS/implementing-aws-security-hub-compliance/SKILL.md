---
name: implementing-aws-security-hub-compliance
description: "AWS Security Hub compliance monitoring agent with automated remediation. Use when the user asks to implement aws security hub compliance."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-aws-security-hub-compliance
---

# Implementing AWS Security Hub Compliance

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS, Finding Filters, External References

## When to use

- The user wants to **implement** aws security hub compliance.
- Capability: AWS Security Hub compliance monitoring agent with automated remediation.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, compliance`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create Security Hub and S3 clients
2. Get failed compliance findings, optionally filtered by standard
3. Analyze findings to identify compliance gaps by control and account
4. Block public access on an S3 bucket
5. Auto-remediate safe-to-fix findings (S3 public access)
6. Create a custom Security Hub insight for compliance tracking
7. Generate full compliance report

## Tools & resources

- AWS
- Finding Filters
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

- `get_clients` — Create Security Hub and S3 clients.
- `get_compliance_findings` — Get failed compliance findings, optionally filtered by standard.
- `analyze_compliance_gaps` — Analyze findings to identify compliance gaps by control and account.
- `remediate_s3_public_access` — Block public access on an S3 bucket.
- `auto_remediate_findings` — Auto-remediate safe-to-fix findings (S3 public access).
- `create_compliance_insight` — Create a custom Security Hub insight for compliance tracking.
- `run_compliance_report` — Generate full compliance report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-aws-security-hub-compliance`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
