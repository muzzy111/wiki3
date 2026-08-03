---
name: performing-cloud-incident-containment-procedures
description: "AWS cloud incident containment agent. Automates incident containment procedures in AWS environments including EC2 instance isolation, IAM credential revocation, security group lockdown, S3 bucket access restriction,.... Use when the user asks to perform cloud incident containment procedures."
version: 1.0.0
tags:
  - performing
  - cloud
  - incident-response
source: performing-cloud-incident-containment-procedures
---

# Performing Cloud Incident Containment Procedures

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Containment Actions, AWS Well-Architected Framework, Microsoft Cloud Security Benchmark, GCP Security Best Practices

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** cloud incident containment procedures.
- Capability: AWS cloud incident containment agent. Automates incident containment procedures in AWS environments including EC2 instance isolation, IAM credential revocation, security group lockdown, S3 bucket access restriction, and forensic snapshot creation using boto3.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cloud, incident, containment, procedures`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Create a boto3 session
2. Isolate an EC2 instance by replacing security groups with a deny-all SG
3. Create EBS snapshots for forensic preservation
4. Revoke all IAM credentials for a compromised user
5. Restrict S3 bucket access during incident containment
6. Print containment summary

## Key concepts

- Containment strategies for cloud environments
- Evidence preservation in ephemeral infrastructure
- Cloud Security Alliance incident response procedures
- Shared responsibility model for incident handling
- Multi-cloud containment strategies
- Incident response automation with AWS services
- CloudTrail, GuardDuty, and Security Hub integration
- Azure Defender incident response procedures

## Tools & resources

- Containment Actions
- AWS Well-Architected Framework
- Microsoft Cloud Security Benchmark
- GCP Security Best Practices

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `get_session` — Create a boto3 session.
- `isolate_ec2_instance` — Isolate an EC2 instance by replacing security groups with a deny-all SG.
- `create_forensic_snapshot` — Create EBS snapshots for forensic preservation.
- `revoke_iam_credentials` — Revoke all IAM credentials for a compromised user.
- `restrict_s3_bucket` — Restrict S3 bucket access during incident containment.
- `format_summary` — Print containment summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-cloud-incident-containment-procedures`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
