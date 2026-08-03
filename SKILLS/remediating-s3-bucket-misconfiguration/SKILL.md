---
name: remediating-s3-bucket-misconfiguration
description: "S3 bucket misconfiguration remediation agent using boto3. Use when the user asks to remediating s3 bucket misconfiguration."
version: 1.0.0
tags:
  - remediating
  - cloud
source: remediating-s3-bucket-misconfiguration
---

# Remediating S3 Bucket Misconfiguration

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Audit Functions, Remediation Functions, AWS API Calls, Environment Variables

## When to use

- The user wants to **remediat** s3 bucket misconfiguration.
- Capability: S3 bucket misconfiguration remediation agent using boto3.
- Goal: complete the task.
- Trigger keywords: `remediating, bucket, misconfiguration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. List all S3 buckets in the account
2. Check if S3 Block Public Access is enabled
3. Check bucket policy for public access grants
4. Check bucket ACL for public grants
5. Check if default encryption is enabled
6. Check if versioning is enabled
7. Check if access logging is enabled
8. Enable S3 Block Public Access on a bucket

## Tools & resources

- Audit Functions
- Remediation Functions
- AWS API Calls
- Environment Variables

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

- `get_s3_client`
- `list_all_buckets` — List all S3 buckets in the account.
- `check_public_access_block` — Check if S3 Block Public Access is enabled.
- `check_bucket_policy` — Check bucket policy for public access grants.
- `check_bucket_acl` — Check bucket ACL for public grants.
- `check_encryption` — Check if default encryption is enabled.
- `check_versioning` — Check if versioning is enabled.
- `check_logging` — Check if access logging is enabled.
- `enable_public_access_block` — Enable S3 Block Public Access on a bucket.
- `enable_encryption` — Enable default encryption on a bucket.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `remediating-s3-bucket-misconfiguration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
