---
name: implementing-zero-trust-with-beyondcorp
description: "BeyondCorp Zero Trust Agent - audits IAP configuration, access levels, and policy bindings. Use when the user asks to implement zero trust with beyondcorp."
version: 1.0.0
tags:
  - implementing
  - identity
source: implementing-zero-trust-with-beyondcorp
---

# Implementing Zero Trust with Beyondcorp

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** IAP Roles, Python SDK

## When to use

- The user wants to **implement** zero trust with beyondcorp.
- Capability: BeyondCorp Zero Trust Agent - audits IAP configuration, access levels, and policy bindings.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, zero, trust, beyondcorp`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute gcloud command and return JSON output
2. List resources protected by Identity-Aware Proxy
3. Retrieve Access Context Manager access levels
4. Audit IAM bindings on IAP-protected resources
5. Audit access levels for security strength
6. Check Endpoint Verification deployment status

## Tools & resources

- IAP Roles
- Python SDK

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

- `gcloud_json` — Execute gcloud command and return JSON output.
- `list_iap_protected_resources` — List resources protected by Identity-Aware Proxy.
- `get_access_levels` — Retrieve Access Context Manager access levels.
- `audit_iap_iam_bindings` — Audit IAM bindings on IAP-protected resources.
- `audit_access_level_strength` — Audit access levels for security strength.
- `check_endpoint_verification` — Check Endpoint Verification deployment status.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-zero-trust-with-beyondcorp`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
