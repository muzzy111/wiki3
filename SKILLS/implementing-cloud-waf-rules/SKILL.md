---
name: implementing-cloud-waf-rules
description: "Cloud WAF rules management agent using AWS WAFv2 boto3 client. Use when the user asks to implement cloud waf rules."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-cloud-waf-rules
---

# Implementing Cloud WAF Rules

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS Managed Rule Groups, Rule Statement Types, Rule Actions, External References

## When to use

- The user wants to **implement** cloud waf rules.
- Capability: Cloud WAF rules management agent using AWS WAFv2 boto3 client.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, cloud, rules`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create WAFv2 client
2. Create a new Web ACL with default block action
3. Add a managed rule group to an existing Web ACL
4. Create a rate-limiting rule for DDoS/brute-force protection
5. Create a geo-blocking rule for specified country codes
6. List all Web ACLs
7. Get sampled requests for WAF rule analysis
8. Run WAF configuration audit

## Tools & resources

- AWS Managed Rule Groups
- Rule Statement Types
- Rule Actions
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

- `get_waf_client` — Create WAFv2 client.
- `create_web_acl` — Create a new Web ACL with default block action.
- `add_managed_rule_group` — Add a managed rule group to an existing Web ACL.
- `create_rate_limit_rule` — Create a rate-limiting rule for DDoS/brute-force protection.
- `create_geo_block_rule` — Create a geo-blocking rule for specified country codes.
- `list_web_acls` — List all Web ACLs.
- `get_sampled_requests` — Get sampled requests for WAF rule analysis.
- `run_waf_audit` — Run WAF configuration audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-cloud-waf-rules`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
