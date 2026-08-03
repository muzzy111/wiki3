---
name: performing-gcp-penetration-testing-with-gcpbucketbrute
description: "GCP penetration testing agent: bucket enumeration, IAM audit, privilege escalation analysis. # For authorized testing only. Use when the user asks to perform gcp penetration testing with gcpbucketbrute."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-gcp-penetration-testing-with-gcpbucketbrute
---

# Performing GCP Penetration Testing with Gcpbucketbrute

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** GCP, gcloud IAM Enumeration, gsutil Bucket Permission Testing, Privilege Escalation Permissions

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** gcp penetration testing with gcpbucketbrute.
- Capability: GCP penetration testing agent: bucket enumeration, IAM audit, privilege escalation analysis. # For authorized testing only
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, penetration, testing, gcpbucketbrute`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate bucket name permutations from a keyword
2. Check if a GCS bucket exists and test access permissions
3. Test IAM permissions on a discovered bucket using gsutil
4. Enumerate project-level IAM bindings for overly permissive roles
5. Check for user-managed service account keys
6. Check testable IAM permissions for privilege escalation vectors
7. Generate GCP penetration test findings report

## Tools & resources

- GCP
- gcloud IAM Enumeration
- gsutil Bucket Permission Testing
- Privilege Escalation Permissions

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

- `generate_bucket_names` — Generate bucket name permutations from a keyword.
- `check_bucket_exists` — Check if a GCS bucket exists and test access permissions.
- `test_bucket_permissions` — Test IAM permissions on a discovered bucket using gsutil.
- `enumerate_iam_bindings` — Enumerate project-level IAM bindings for overly permissive roles.
- `check_service_account_keys` — Check for user-managed service account keys.
- `check_priv_esc_paths` — Check testable IAM permissions for privilege escalation vectors.
- `generate_report` — Generate GCP penetration test findings report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-gcp-penetration-testing-with-gcpbucketbrute`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
