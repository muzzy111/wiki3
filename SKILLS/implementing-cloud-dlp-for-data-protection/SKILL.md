---
name: implementing-cloud-dlp-for-data-protection
description: "Cloud DLP agent for sensitive data discovery using Google Cloud DLP and AWS Macie. Use when the user asks to implement cloud dlp for data protection."
version: 1.0.0
tags:
  - implementing
  - cloud
  - threat-intel
source: implementing-cloud-dlp-for-data-protection
---

# Implementing Cloud Dlp for Data Protection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** GCP DLP Info Types, De-identification Methods, Macie Finding Types, External References

## When to use

- The user wants to **implement** cloud dlp for data protection.
- Capability: Cloud DLP agent for sensitive data discovery using Google Cloud DLP and AWS Macie.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, cloud, data, protection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan text content for sensitive data using Google Cloud DLP
2. De-identify sensitive data in text using masking
3. Enable Amazon Macie for S3 sensitive data discovery
4. Create a Macie classification job to scan S3 buckets
5. Retrieve Macie findings for sensitive data discoveries
6. Generate a DLP discovery report

## Tools & resources

- GCP DLP Info Types
- De-identification Methods
- Macie Finding Types
- External References

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

- `scan_text_with_gcp_dlp` — Scan text content for sensitive data using Google Cloud DLP.
- `deidentify_text_with_gcp` — De-identify sensitive data in text using masking.
- `enable_macie` — Enable Amazon Macie for S3 sensitive data discovery.
- `create_macie_classification_job` — Create a Macie classification job to scan S3 buckets.
- `get_macie_findings` — Retrieve Macie findings for sensitive data discoveries.
- `run_dlp_report` — Generate a DLP discovery report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-cloud-dlp-for-data-protection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
