---
name: performing-aws-privilege-escalation-assessment
description: "AWS Privilege Escalation Assessment Agent — AUTHORIZED TESTING ONLY Assesses AWS IAM configurations for privilege escalation paths using boto3 and enumerates dangerous policy combinations. WARNING: Only use with.... Use when the user asks to perform aws privilege escalation assessment."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-aws-privilege-escalation-assessment
---

# Performing AWS Privilege Escalation Assessment

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** AWS, Dangerous IAM Actions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** aws privilege escalation assessment.
- Capability: AWS Privilege Escalation Assessment Agent — AUTHORIZED TESTING ONLY Assesses AWS IAM configurations for privilege escalation paths using boto3 and enumerates dangerous policy combinations. WARNING: Only use with explicit written authorization on approved AWS accounts.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, privilege, escalation, assessment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Get current AWS identity information
2. Enumerate all IAM users and their attached policies
3. Enumerate IAM roles and their trust policies
4. Identify users with dangerous permission combinations for privilege escalation
5. Identify role chaining opportunities for privilege escalation
6. Generate privilege escalation assessment report

## Tools & resources

- AWS
- Dangerous IAM Actions

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

- `get_caller_identity` — Get current AWS identity information.
- `enumerate_iam_users` — Enumerate all IAM users and their attached policies.
- `enumerate_iam_roles` — Enumerate IAM roles and their trust policies.
- `check_dangerous_permissions` — Identify users with dangerous permission combinations for privilege escalation.
- `check_role_chaining` — Identify role chaining opportunities for privilege escalation.
- `generate_report` — Generate privilege escalation assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-aws-privilege-escalation-assessment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
