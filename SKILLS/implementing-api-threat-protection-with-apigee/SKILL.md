---
name: implementing-api-threat-protection-with-apigee
description: "Agent for implementing API threat protection policies with Google Apigee. Use when the user asks to implement api threat protection with apigee."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-api-threat-protection-with-apigee
---

# Implementing API Threat Protection with Apigee

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** JSONThreatProtection Policy, SpikeArrest Policy, RegularExpressionProtection, Apigee Management API, Recommended Policy Limits

## When to use

- The user wants to **implement** api threat protection with apigee.
- Capability: Agent for implementing API threat protection policies with Google Apigee.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, threat, protection, apigee`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate Apigee JSONThreatProtection policy XML
2. Generate Apigee SpikeArrest policy XML
3. Generate RegularExpressionProtection policy for SQL/XSS
4. Analyze an Apigee proxy bundle for security policy gaps
5. Audit a threat protection policy for weak configurations

## Tools & resources

- JSONThreatProtection Policy
- SpikeArrest Policy
- RegularExpressionProtection
- Apigee Management API
- Recommended Policy Limits

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

- `generate_json_threat_policy` — Generate Apigee JSONThreatProtection policy XML.
- `generate_spike_arrest_policy` — Generate Apigee SpikeArrest policy XML.
- `generate_regex_protection_policy` — Generate RegularExpressionProtection policy for SQL/XSS.
- `analyze_apigee_proxy_bundle` — Analyze an Apigee proxy bundle for security policy gaps.
- `audit_threat_protection_config` — Audit a threat protection policy for weak configurations.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-api-threat-protection-with-apigee`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
