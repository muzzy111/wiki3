---
name: performing-cloud-forensics-investigation
description: "Cloud Forensics Investigation Agent Collects and analyzes forensic evidence from AWS cloud environments including CloudTrail logs, EC2 snapshots, and IAM activity for incident response. Use when the user asks to perform cloud forensics investigation."
version: 1.0.0
tags:
  - performing
  - cloud
  - forensics
source: performing-cloud-forensics-investigation
---

# Performing Cloud Forensics Investigation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** AWS IAM API, Required IAM Permissions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** cloud forensics investigation.
- Capability: Cloud Forensics Investigation Agent Collects and analyzes forensic evidence from AWS cloud environments including CloudTrail logs, EC2 snapshots, and IAM activity for incident response.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cloud, forensics, investigation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Collect CloudTrail management events for the investigation window
2. Identify suspicious CloudTrail events indicating compromise
3. Create forensic snapshots of all EBS volumes attached to an instance
4. Collect IAM activity for a specific user
5. Generate cloud forensics investigation report

## Tools & resources

- AWS IAM API
- Required IAM Permissions

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

- `collect_cloudtrail_events` — Collect CloudTrail management events for the investigation window.
- `identify_suspicious_activity` — Identify suspicious CloudTrail events indicating compromise.
- `snapshot_ec2_instance` — Create forensic snapshots of all EBS volumes attached to an instance.
- `collect_iam_activity` — Collect IAM activity for a specific user.
- `generate_report` — Generate cloud forensics investigation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-cloud-forensics-investigation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
