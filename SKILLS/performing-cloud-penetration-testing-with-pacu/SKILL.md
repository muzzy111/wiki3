---
name: performing-cloud-penetration-testing-with-pacu
description: "AWS Penetration Testing with Pacu Agent — AUTHORIZED TESTING ONLY Automates Pacu module execution for AWS security assessment including IAM enumeration, privilege escalation scanning, and credential testing. WARNING:.... Use when the user asks to perform cloud penetration testing with pacu."
version: 1.0.0
tags:
  - performing
  - cloud
source: performing-cloud-penetration-testing-with-pacu
---

# Performing Cloud Penetration Testing with Pacu

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Pacu IAM Modules, Pacu Enumeration Modules, boto3 Fallback Methods, Pacu Session Data

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** cloud penetration testing with pacu.
- Capability: AWS Penetration Testing with Pacu Agent — AUTHORIZED TESTING ONLY Automates Pacu module execution for AWS security assessment including IAM enumeration, privilege escalation scanning, and credential testing. WARNING: Only use with explicit written authorization on approved AWS accounts.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cloud, penetration, testing, pacu`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute a Pacu module via subprocess
2. Fallback IAM enumeration using boto3 when Pacu is unavailable
3. Identify privilege escalation paths from IAM enumeration data
4. Test what services the current credentials can access
5. Generate Pacu penetration testing report

## Tools & resources

- Pacu IAM Modules
- Pacu Enumeration Modules
- boto3 Fallback Methods
- Pacu Session Data

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

- `run_pacu_module` — Execute a Pacu module via subprocess.
- `enumerate_iam_with_boto` — Fallback IAM enumeration using boto3 when Pacu is unavailable.
- `scan_privilege_escalation` — Identify privilege escalation paths from IAM enumeration data.
- `test_credential_access` — Test what services the current credentials can access.
- `generate_report` — Generate Pacu penetration testing report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-cloud-penetration-testing-with-pacu`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
