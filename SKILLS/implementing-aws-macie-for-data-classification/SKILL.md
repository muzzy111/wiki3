---
name: implementing-aws-macie-for-data-classification
description: "AWS Macie data classification agent using boto3 for S3 sensitive data discovery. Use when the user asks to implement aws macie for data classification."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-aws-macie-for-data-classification
---

# Implementing AWS Macie for Data Classification

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS, boto3 Macie2 Methods Used, Compliance Frameworks Supported, NIST 800-53 Controls

## When to use

- The user wants to **implement** aws macie for data classification.
- Capability: AWS Macie data classification agent using boto3 for S3 sensitive data discovery.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, macie, data, classification`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Create Macie2 client
2. Enable Macie in the account if not already enabled
3. Get Macie's summary of S3 bucket inventory
4. Create a one-time sensitive data discovery job for specified buckets
5. Get statistics on Macie findings by severity and type
6. List recent Macie findings filtered by severity
7. Generate Macie data classification report

## Key concepts

- GDPR Article 30: Records of processing activities
- CCPA: California Consumer Privacy Act data discovery
- HIPAA: Protected health information identification
- PCI DSS 4.0: Cardholder data discovery (Requirement 3)
- SOC 2: Data classification and protection controls
- SEC 8: Protect data at rest
- SEC 10: Prepare for security events
- RA-5: Vulnerability Monitoring and Scanning

## Tools & resources

- AWS
- boto3 Macie2 Methods Used
- Compliance Frameworks Supported
- NIST 800-53 Controls

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

- `get_macie_client` — Create Macie2 client.
- `enable_macie` — Enable Macie in the account if not already enabled.
- `list_s3_buckets_summary` — Get Macie's summary of S3 bucket inventory.
- `create_classification_job` — Create a one-time sensitive data discovery job for specified buckets.
- `get_finding_statistics` — Get statistics on Macie findings by severity and type.
- `list_findings` — List recent Macie findings filtered by severity.
- `generate_report` — Generate Macie data classification report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-aws-macie-for-data-classification`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
