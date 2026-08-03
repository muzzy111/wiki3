---
name: analyzing-cloud-storage-access-patterns
description: "Cloud Storage Access Pattern Analyzer - Detects abnormal S3/GCS/Azure Blob access via CloudTrail. Use when the user asks to analyze cloud storage access patterns."
version: 1.0.0
tags:
  - analyzing
  - cloud
source: analyzing-cloud-storage-access-patterns
---

# Analyzing Cloud Storage Access Patterns

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** AWS CLI, Detection Thresholds

## When to use

- The user wants to **analyze** cloud storage access patterns.
- Capability: Cloud Storage Access Pattern Analyzer - Detects abnormal S3/GCS/Azure Blob access via CloudTrail.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, cloud, storage, access, patterns`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query CloudTrail for S3 data events on a specific bucket
2. Detect bulk GetObject operations from a single principal
3. Detect access outside business hours
4. Detect access from IP addresses not in the known baseline
5. Detect ListBucket/ListObjects enumeration patterns
6. Build statistical baseline of normal access patterns
7. Generate cloud storage access analysis report

## Tools & resources

- AWS CLI
- Detection Thresholds

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

- `query_cloudtrail_s3_events` — Query CloudTrail for S3 data events on a specific bucket.
- `detect_bulk_downloads` — Detect bulk GetObject operations from a single principal.
- `detect_after_hours_access` — Detect access outside business hours.
- `detect_new_source_ips` — Detect access from IP addresses not in the known baseline.
- `detect_enumeration` — Detect ListBucket/ListObjects enumeration patterns.
- `build_access_baseline` — Build statistical baseline of normal access patterns.
- `generate_report` — Generate cloud storage access analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-cloud-storage-access-patterns`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
