---
name: securing-aws-lambda-execution-roles
description: "Agent for auditing and securing AWS Lambda execution roles. Use when the user asks to secure aws lambda execution roles."
version: 1.0.0
tags:
  - securing
  - cloud
source: securing-aws-lambda-execution-roles
---

# Securing AWS Lambda Execution Roles

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** AWS, boto3 Lambda Client, boto3 Access Analyzer Client

## When to use

- The user wants to **secure** aws lambda execution roles.
- Capability: Agent for auditing and securing AWS Lambda execution roles.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, lambda, execution, roles`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. List all Lambda functions and their execution roles
2. Analyze attached and inline policies for a Lambda execution role
3. Check if a Lambda execution role has a permission boundary
4. Validate the trust policy for confused deputy prevention
5. Validate a policy document using IAM Access Analyzer
6. Run a complete audit of all Lambda execution roles

## Tools & resources

- AWS
- boto3 Lambda Client
- boto3 Access Analyzer Client

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

- `list_lambda_roles` — List all Lambda functions and their execution roles.
- `audit_role_permissions` — Analyze attached and inline policies for a Lambda execution role.
- `check_permission_boundary` — Check if a Lambda execution role has a permission boundary.
- `check_trust_policy` — Validate the trust policy for confused deputy prevention.
- `validate_with_access_analyzer` — Validate a policy document using IAM Access Analyzer.
- `full_audit` — Run a complete audit of all Lambda execution roles.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `securing-aws-lambda-execution-roles`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
