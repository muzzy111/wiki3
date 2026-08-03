---
name: securing-api-gateway-with-aws-waf
description: "Agent for managing AWS WAF Web ACLs protecting API Gateway endpoints. Use when the user asks to secure api gateway with aws waf."
version: 1.0.0
tags:
  - securing
  - cloud
  - appsec
source: securing-api-gateway-with-aws-waf
---

# Securing API Gateway with AWS WAF

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** AWS, boto3 WAFv2 Client

## When to use

- The user wants to **secure** api gateway with aws waf.
- Capability: Agent for managing AWS WAF Web ACLs protecting API Gateway endpoints.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, gateway`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create WAFv2 client for regional resources
2. List all Web ACLs in the account
3. Get detailed Web ACL configuration including all rules
4. Check which resources are associated with a Web ACL
5. Get sampled requests for a specific rule to analyze blocks
6. Get IPs currently rate-limited by a rate-based rule
7. Get WAF CloudWatch metrics for blocked and allowed requests
8. Run a security audit on a Web ACL configuration

## Tools & resources

- AWS
- boto3 WAFv2 Client

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

- `get_waf_client` — Create WAFv2 client for regional resources.
- `list_web_acls` — List all Web ACLs in the account.
- `get_web_acl_details` — Get detailed Web ACL configuration including all rules.
- `check_waf_association` — Check which resources are associated with a Web ACL.
- `get_sampled_requests` — Get sampled requests for a specific rule to analyze blocks.
- `get_rate_based_keys` — Get IPs currently rate-limited by a rate-based rule.
- `get_waf_metrics` — Get WAF CloudWatch metrics for blocked and allowed requests.
- `audit_web_acl` — Run a security audit on a Web ACL configuration.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `securing-api-gateway-with-aws-waf`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
