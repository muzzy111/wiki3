---
name: implementing-gcp-vpc-firewall-rules
description: "GCP VPC firewall rules audit and management. Use when the user asks to implement gcp vpc firewall rules."
version: 1.0.0
tags:
  - implementing
  - cloud
  - incident-response
source: implementing-gcp-vpc-firewall-rules
---

# Implementing GCP VPC Firewall Rules

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** GCP, gcloud CLI Equivalents, Hierarchical Firewall Policies, External References

## When to use

- The user wants to **implement** gcp vpc firewall rules.
- Capability: GCP VPC firewall rules audit and management agent.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, firewall, rules`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create GCP Compute Engine firewall client
2. List all VPC firewall rules in a project
3. Identify firewall rules that are overly permissive (0.0.0.0/0)
4. Audit default network firewall rules for security issues
5. Create a new VPC firewall rule
6. Delete a firewall rule by name
7. Check which firewall rules have logging enabled
8. Run a comprehensive firewall audit

## Tools & resources

- GCP
- gcloud CLI Equivalents
- Hierarchical Firewall Policies
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

- `get_firewall_client` — Create GCP Compute Engine firewall client.
- `list_firewall_rules` — List all VPC firewall rules in a project.
- `find_overly_permissive_rules` — Identify firewall rules that are overly permissive (0.0.0.0/0).
- `audit_default_rules` — Audit default network firewall rules for security issues.
- `create_firewall_rule` — Create a new VPC firewall rule.
- `delete_firewall_rule` — Delete a firewall rule by name.
- `check_logging_status` — Check which firewall rules have logging enabled.
- `run_firewall_audit` — Run a comprehensive firewall audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-gcp-vpc-firewall-rules`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
