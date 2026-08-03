---
name: conducting-cloud-penetration-testing
description: "Cloud Penetration Testing Agent - Enumerates and tests AWS IAM misconfigurations. Use when the user asks to conduct cloud penetration testing."
version: 1.0.0
tags:
  - conducting
  - cloud
  - threat-intel
source: conducting-cloud-penetration-testing
---

# Conducting Cloud Penetration Testing

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Functions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** cloud penetration testing.
- Capability: Cloud Penetration Testing Agent - Enumerates and tests AWS IAM misconfigurations.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, cloud, penetration, testing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Enumerate all IAM users in the AWS account
2. Enumerate IAM roles and identify cross-account trust relationships
3. Check for EC2 instances running with IMDSv1 (vulnerable to SSRF)
4. Enumerate S3 buckets and check for public access
5. Check Lambda functions for secrets in environment variables
6. Test if iam:CreatePolicyVersion can be used for privilege escalation
7. Generate cloud penetration test findings report

## Tools & resources

- Key Functions

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

- `enumerate_iam_users` — Enumerate all IAM users in the AWS account.
- `enumerate_iam_roles` — Enumerate IAM roles and identify cross-account trust relationships.
- `check_imds_v1_instances` — Check for EC2 instances running with IMDSv1 (vulnerable to SSRF).
- `check_public_s3_buckets` — Enumerate S3 buckets and check for public access.
- `check_lambda_env_secrets` — Check Lambda functions for secrets in environment variables.
- `test_privesc_create_policy_version` — Test if iam:CreatePolicyVersion can be used for privilege escalation.
- `generate_report` — Generate cloud penetration test findings report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-cloud-penetration-testing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
