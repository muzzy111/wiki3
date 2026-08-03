---
name: implementing-cloud-security-posture-management
description: "Cloud Security Posture Management (CSPM) agent across AWS, Azure, and GCP. Use when the user asks to implement cloud security posture management."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-cloud-security-posture-management
---

# Implementing Cloud Security Posture Management

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS Posture Check APIs, Prowler Check Categories, External References

## When to use

- The user wants to **implement** cloud security posture management.
- Capability: Cloud Security Posture Management (CSPM) agent across AWS, Azure, and GCP.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, cloud, security, posture, management`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run Prowler CSPM scan against a cloud provider
2. Run basic AWS security posture checks using boto3
3. Generate a CSPM posture report from findings

## Tools & resources

- AWS Posture Check APIs
- Prowler Check Categories
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

- `run_prowler_scan` — Run Prowler CSPM scan against a cloud provider.
- `check_aws_security_posture` — Run basic AWS security posture checks using boto3.
- `generate_posture_report` — Generate a CSPM posture report from findings.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-cloud-security-posture-management`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
