---
name: detecting-s3-data-exfiltration-attempts
description: "S3 data exfiltration detection agent using CloudTrail and GuardDuty. Use when the user asks to detect s3 data exfiltration attempts."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-s3-data-exfiltration-attempts
---

# Detecting S3 Data Exfiltration Attempts

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** GuardDuty S3 Finding Types, CloudTrail S3 Data Events, S3 Access Monitoring, Bucket Policy

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** s3 data exfiltration attempts.
- Capability: S3 data exfiltration detection agent using CloudTrail and GuardDuty.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, data, exfiltration, attempts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute AWS CLI command and return parsed JSON
2. Get GuardDuty findings for S3 exfiltration activity
3. Query CloudTrail for GetObject events on a specific bucket
4. Detect anomalous bulk download patterns from S3
5. Check S3 bucket policy for overly permissive access
6. Verify S3 server access logging is enabled
7. Restrict S3 bucket to VPC endpoint access only
8. Generate S3 exfiltration detection report

## Tools & resources

- GuardDuty S3 Finding Types
- CloudTrail S3 Data Events
- S3 Access Monitoring
- Bucket Policy

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

- `aws_cli` — Execute AWS CLI command and return parsed JSON.
- `get_guardduty_s3_findings` — Get GuardDuty findings for S3 exfiltration activity.
- `query_cloudtrail_s3_gets` — Query CloudTrail for GetObject events on a specific bucket.
- `detect_bulk_download_patterns` — Detect anomalous bulk download patterns from S3.
- `check_bucket_policy` — Check S3 bucket policy for overly permissive access.
- `check_s3_access_logging` — Verify S3 server access logging is enabled.
- `block_external_access` — Restrict S3 bucket to VPC endpoint access only.
- `generate_report` — Generate S3 exfiltration detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-s3-data-exfiltration-attempts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
