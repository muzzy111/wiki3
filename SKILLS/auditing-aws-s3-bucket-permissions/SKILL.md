---
name: auditing-aws-s3-bucket-permissions
description: "Agent for auditing AWS S3 bucket permissions using boto3. Use when the user asks to audit aws s3 bucket permissions."
version: 1.0.0
tags:
  - auditing
  - cloud
source: auditing-aws-s3-bucket-permissions
---

# Auditing AWS S3 Bucket Permissions

**Role:** Security audit  
**Audience:** security auditors and cloud/IAM engineers  
**Primary tools:** AWS, boto3 S3 Client

## When to use

- The user wants to **audit** aws s3 bucket permissions.
- Capability: Agent for auditing AWS S3 bucket permissions using boto3.
- Goal: measure configuration and access against policy and best practice.
- Trigger keywords: `auditing, bucket, permissions`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create a boto3 session
2. List all S3 buckets in the account
3. Check bucket-level public access block settings
4. Check bucket ACL for public grants
5. Check bucket policy for wildcard principals
6. Check if default encryption is enabled
7. Check if versioning is enabled
8. Check if server access logging is enabled

## Tools & resources

- AWS
- boto3 S3 Client

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

- `get_session` — Create a boto3 session.
- `list_all_buckets` — List all S3 buckets in the account.
- `check_public_access_block` — Check bucket-level public access block settings.
- `check_bucket_acl` — Check bucket ACL for public grants.
- `check_bucket_policy` — Check bucket policy for wildcard principals.
- `check_encryption` — Check if default encryption is enabled.
- `check_versioning` — Check if versioning is enabled.
- `check_logging` — Check if server access logging is enabled.
- `audit_bucket` — Run full security audit on a single bucket.
- `classify_risk` — Classify risk level for a bucket based on audit findings.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `auditing-aws-s3-bucket-permissions`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
