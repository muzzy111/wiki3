---
name: auditing-cloud-with-cis-benchmarks
description: "Agent for auditing cloud infrastructure against CIS Benchmarks using boto3. Use when the user asks to audit cloud with cis benchmarks."
version: 1.0.0
tags:
  - auditing
  - cloud
source: auditing-cloud-with-cis-benchmarks
---

# Auditing Cloud with CIS Benchmarks

**Role:** Security audit  
**Audience:** security auditors and cloud/IAM engineers  
**Primary tools:** boto3, CIS Controls Quick Reference, Prowler CLI

## When to use

- The user wants to **audit** cloud with cis benchmarks.
- Capability: Agent for auditing cloud infrastructure against CIS Benchmarks using boto3.
- Goal: measure configuration and access against policy and best practice.
- Trigger keywords: `auditing, cloud, benchmarks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. CIS 1.4 - Ensure no root account access key exists
2. CIS 1.5 - Ensure MFA is enabled for the root account
3. CIS 1.8-1.11 - Ensure IAM password policy is strong
4. CIS 3.1 - Ensure CloudTrail is enabled in all regions
5. CIS 3.2 - Ensure CloudTrail log file validation is enabled
6. CIS 2.1.1 - Ensure S3 default encryption is enabled
7. CIS 5.1 - Ensure VPC flow logging is enabled
8. CIS 5.4 - Ensure default security group restricts all traffic

## Tools & resources

- boto3
- CIS Controls Quick Reference
- Prowler CLI

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

- `check_root_access_keys` — CIS 1.4 - Ensure no root account access key exists.
- `check_root_mfa` — CIS 1.5 - Ensure MFA is enabled for the root account.
- `check_password_policy` — CIS 1.8-1.11 - Ensure IAM password policy is strong.
- `check_cloudtrail_multiregion` — CIS 3.1 - Ensure CloudTrail is enabled in all regions.
- `check_cloudtrail_log_validation` — CIS 3.2 - Ensure CloudTrail log file validation is enabled.
- `check_s3_encryption` — CIS 2.1.1 - Ensure S3 default encryption is enabled.
- `check_vpc_flow_logs` — CIS 5.1 - Ensure VPC flow logging is enabled.
- `check_default_sg_restrictions` — CIS 5.4 - Ensure default security group restricts all traffic.
- `run_full_audit` — Execute all CIS benchmark checks.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `auditing-cloud-with-cis-benchmarks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
