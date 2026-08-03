---
name: performing-aws-account-enumeration-with-scout-suite
description: "ScoutSuite AWS account enumeration and security audit agent. Wraps the ScoutSuite CLI to perform comprehensive AWS security audits, parses the generated JSON results, and produces a structured findings report.... Use when the user asks to perform aws account enumeration with scout suite."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-aws-account-enumeration-with-scout-suite
---

# Performing AWS Account Enumeration with Scout Suite

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** AWS, Common Findings Categories, Industry Standards, ScoutSuite Rule Mappings, Compliance Framework Coverage

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** aws account enumeration with scout suite.
- Capability: ScoutSuite AWS account enumeration and security audit agent. Wraps the ScoutSuite CLI to perform comprehensive AWS security audits, parses the generated JSON results, and produces a structured findings report covering IAM, S3, EC2, RDS, Lambda, and other AWS services.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, account, enumeration, scout, suite`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Locate the scout CLI binary
2. Execute ScoutSuite AWS scan
3. Find the most recent ScoutSuite results JSON file
4. Parse ScoutSuite results JavaScript file into Python dict
5. Extract security findings from ScoutSuite results
6. Extract AWS account metadata from results
7. Print a human-readable summary

## Key concepts

- Section 1: Identity and Access Management
- SEC 1: Securely operate your workload
- SEC 2: Manage identities for people and machines
- SEC 3: Manage permissions for people and machines
- SEC 6: Protect compute resources
- SEC 8: Protect data at rest
- SEC 9: Protect data in transit
- AC-2: Account Management

## Tools & resources

- AWS
- Common Findings Categories
- Industry Standards
- ScoutSuite Rule Mappings
- Compliance Framework Coverage

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

- `find_scoutsuite_binary` — Locate the scout CLI binary.
- `run_scoutsuite` — Execute ScoutSuite AWS scan.
- `find_latest_results` — Find the most recent ScoutSuite results JSON file.
- `parse_results` — Parse ScoutSuite results JavaScript file into Python dict.
- `extract_findings` — Extract security findings from ScoutSuite results.
- `extract_account_info` — Extract AWS account metadata from results.
- `format_summary` — Print a human-readable summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-aws-account-enumeration-with-scout-suite`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
