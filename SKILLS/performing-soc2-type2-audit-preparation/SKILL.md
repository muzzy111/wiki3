---
name: performing-soc2-type2-audit-preparation
description: "Agent for SOC 2 Type II audit preparation, evidence collection, and compliance monitoring. Use when the user asks to perform soc2 type2 audit preparation."
version: 1.0.0
tags:
  - performing
  - incident-response
source: performing-soc2-type2-audit-preparation
---

# Performing Soc2 Type2 Audit Preparation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** AWS Evidence Collection APIs, GitHub Evidence Collection APIs, Compliance Automation Platforms, Evidence Collection Frequency, Primary Standards, Trust Services Criteria Detail

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** soc2 type2 audit preparation.
- Capability: Agent for SOC 2 Type II audit preparation, evidence collection, and compliance monitoring.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, soc2, type2, audit, preparation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Perform a gap assessment against all Trust Services Criteria CC1-CC9
2. Collect AWS IAM evidence for CC6 (Access Controls)
3. Collect AWS CloudTrail evidence for CC7 (System Operations)
4. Collect AWS S3 public access evidence for CC6 (Access Controls)
5. Collect GitHub PR evidence for CC8 (Change Management)
6. Collect GitHub branch protection evidence for CC8
7. Run a suite of continuous compliance checks and return findings
8. Generate a prioritized remediation plan from gap assessment results

## Key concepts

- Governing Body: American Institute of Certified Public Accountants (AICPA)
- Basis: Built on COSO 2013 Internal Control Framework
- Revision: Points of Focus updated in 2022 to address cloud, supply chain, and evolving technology risks
- Description Criteria: Updated July 2025
- Standard: AT-C Section 105, 205, and 320
- Purpose: Governs the attestation engagement performed by the CPA firm
- Effective: May 1, 2017 (replaced SSAE 16)
- CC1.1: COSO Principle 1 - Demonstrates commitment to integrity and ethical values

## Tools & resources

- AWS Evidence Collection APIs
- GitHub Evidence Collection APIs
- Compliance Automation Platforms
- Evidence Collection Frequency
- Primary Standards
- Trust Services Criteria Detail
- Related Standards

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

- `perform_gap_assessment` — Perform a gap assessment against all Trust Services Criteria CC1-CC9.
- `collect_aws_iam_evidence` — Collect AWS IAM evidence for CC6 (Access Controls).
- `collect_aws_cloudtrail_evidence` — Collect AWS CloudTrail evidence for CC7 (System Operations).
- `collect_aws_s3_public_access_evidence` — Collect AWS S3 public access evidence for CC6 (Access Controls).
- `collect_github_change_management_evidence` — Collect GitHub PR evidence for CC8 (Change Management).
- `collect_branch_protection_evidence` — Collect GitHub branch protection evidence for CC8.
- `run_continuous_compliance_checks` — Run a suite of continuous compliance checks and return findings.
- `generate_remediation_plan` — Generate a prioritized remediation plan from gap assessment results.
- `generate_evidence_manifest` — Generate a manifest of required evidence packages organized by criteria.
- `generate_readiness_report` — Generate a comprehensive audit readiness report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-soc2-type2-audit-preparation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
