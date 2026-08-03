---
name: configuring-aws-verified-access-for-ztna
description: "AWS Verified Access ZTNA configuration agent using boto3. Use when the user asks to configure aws verified access for ztna."
version: 1.0.0
tags:
  - configuring
  - cloud
source: configuring-aws-verified-access-for-ztna
---

# Configuring AWS Verified Access for Ztna

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** AWS, Key boto3 EC2 Methods, Cedar Policy Language, Trust Provider Types, External References, Zero Trust Standards

## When to use

- The user wants to **configure** aws verified access for ztna.
- Capability: AWS Verified Access ZTNA configuration agent using boto3.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, verified, access, ztna`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. List all Verified Access instances
2. List Verified Access groups and their policies
3. List Verified Access endpoints
4. Audit Verified Access trust providers
5. Execute AWS Verified Access audit

## Key concepts

- Developed by AWS for fine-grained access control
- Supports permit and forbid policies with conditions
- Evaluates context attributes (identity, device posture, request metadata)
- Open-source specification at cedarpolicy.com
- SEC03-BP01: Define access requirements
- SEC03-BP02: Grant least privilege access
- SEC03-BP05: Define permission guardrails for organization
- SEC05-BP03: Automate network protection

## Tools & resources

- AWS
- Key boto3 EC2 Methods
- Cedar Policy Language
- Trust Provider Types
- External References
- Zero Trust Standards
- Compliance Mappings

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

- `list_verified_access_instances` — List all Verified Access instances.
- `list_verified_access_groups` — List Verified Access groups and their policies.
- `list_verified_access_endpoints` — List Verified Access endpoints.
- `audit_trust_providers` — Audit Verified Access trust providers.
- `run_audit` — Execute AWS Verified Access audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-aws-verified-access-for-ztna`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
