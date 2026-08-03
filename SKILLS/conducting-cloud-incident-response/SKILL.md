---
name: conducting-cloud-incident-response
description: "Cloud Incident Response Agent - Automates AWS/Azure cloud IR containment and evidence collection. Use when the user asks to conduct cloud incident response."
version: 1.0.0
tags:
  - conducting
  - cloud
  - threat-intel
  - incident-response
source: conducting-cloud-incident-response
---

# Conducting Cloud Incident Response

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Arguments, Key Functions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** cloud incident response.
- Capability: Cloud Incident Response Agent - Automates AWS/Azure cloud IR containment and evidence collection.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, cloud, incident, response`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Disable a compromised IAM access key via AWS CLI
2. Attach AWSDenyAll policy to a compromised IAM user
3. Isolate an EC2 instance by changing its security group to forensic isolation SG
4. Create EBS snapshots of all volumes attached to an EC2 instance
5. Query CloudTrail for API calls made by a specific IAM user
6. Identify resources created by the attacker from CloudTrail events
7. Check all AWS regions for unauthorized EC2 instances
8. Generate a cloud incident response report

## Tools & resources

- Arguments
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

- `aws_disable_access_key` — Disable a compromised IAM access key via AWS CLI.
- `aws_attach_deny_all` — Attach AWSDenyAll policy to a compromised IAM user.
- `aws_isolate_ec2` — Isolate an EC2 instance by changing its security group to forensic isolation SG.
- `aws_snapshot_ebs` — Create EBS snapshots of all volumes attached to an EC2 instance.
- `aws_query_cloudtrail` — Query CloudTrail for API calls made by a specific IAM user.
- `aws_list_attacker_resources` — Identify resources created by the attacker from CloudTrail events.
- `aws_check_all_regions_instances` — Check all AWS regions for unauthorized EC2 instances.
- `generate_ir_report` — Generate a cloud incident response report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-cloud-incident-response`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
