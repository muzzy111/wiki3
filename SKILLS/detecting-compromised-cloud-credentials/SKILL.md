---
name: detecting-compromised-cloud-credentials
description: "Compromised cloud credential detection agent using AWS CloudTrail and GuardDuty. Use when the user asks to detect compromised cloud credentials."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-compromised-cloud-credentials
---

# Detecting Compromised Cloud Credentials

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** GuardDuty Credential Findings, CloudTrail, IAM Credential Remediation, Azure

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** compromised cloud credentials.
- Capability: Compromised cloud credential detection agent using AWS CloudTrail and GuardDuty.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, compromised, cloud, credentials`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute AWS CLI command and return JSON output
2. Get GuardDuty findings related to credential compromise
3. Query CloudTrail for all API calls made with a specific access key
4. Detect anomalous API patterns from a potentially compromised key
5. Revoke all active sessions for an IAM user by adding inline deny policy
6. Deactivate a compromised access key
7. Generate a credential compromise detection report

## Tools & resources

- GuardDuty Credential Findings
- CloudTrail
- IAM Credential Remediation
- Azure

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

- `aws_cli` — Execute AWS CLI command and return JSON output.
- `get_guardduty_credential_findings` — Get GuardDuty findings related to credential compromise.
- `query_cloudtrail_for_key` — Query CloudTrail for all API calls made with a specific access key.
- `detect_anomalous_api_calls` — Detect anomalous API patterns from a potentially compromised key.
- `revoke_iam_sessions` — Revoke all active sessions for an IAM user by adding inline deny policy.
- `deactivate_access_key` — Deactivate a compromised access key.
- `generate_report` — Generate a credential compromise detection report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-compromised-cloud-credentials`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
