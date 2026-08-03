---
name: securing-aws-iam-permissions
description: "Agent for auditing and hardening AWS IAM permissions using least-privilege principles. Use when the user asks to secure aws iam permissions."
version: 1.0.0
tags:
  - securing
  - cloud
source: securing-aws-iam-permissions
---

# Securing AWS IAM Permissions

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** AWS, boto3 IAM Client, boto3 Access Analyzer Client

## When to use

- The user wants to **secure** aws iam permissions.
- Capability: Agent for auditing and hardening AWS IAM permissions using least-privilege principles.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, permissions`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate and parse the IAM credential report
2. Find access keys older than the specified threshold
3. Identify roles with AdministratorAccess or wildcard policies
4. Check which IAM users have MFA enabled
5. Check IAM Access Analyzer findings for external access
6. Generate a consolidated IAM audit report

## Tools & resources

- AWS
- boto3 IAM Client
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

- `get_credential_report` — Generate and parse the IAM credential report.
- `find_stale_access_keys` — Find access keys older than the specified threshold.
- `find_overprivileged_roles` — Identify roles with AdministratorAccess or wildcard policies.
- `check_mfa_status` — Check which IAM users have MFA enabled.
- `check_access_analyzer` — Check IAM Access Analyzer findings for external access.
- `generate_audit_report` — Generate a consolidated IAM audit report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `securing-aws-iam-permissions`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
