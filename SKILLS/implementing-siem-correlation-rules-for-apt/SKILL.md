---
name: implementing-siem-correlation-rules-for-apt
description: "SIEM Correlation Rules Agent - Builds and deploys multi-event APT detection rules via Splunk and Sigma. Use when the user asks to implement siem correlation rules for apt."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-siem-correlation-rules-for-apt
---

# Implementing SIEM Correlation Rules for APT

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Splunk REST API

## When to use

- The user wants to **implement** siem correlation rules for apt.
- Capability: SIEM Correlation Rules Agent - Builds and deploys multi-event APT detection rules via Splunk and Sigma.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, siem, correlation, rules`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Authenticate to Splunk and return session headers
2. Deploy a correlation search to Splunk ES
3. Generate a Sigma-format YAML rule from a correlation definition
4. Audit existing Splunk saved searches for coverage gaps
5. Execute a correlation search and return matching events
6. Generate correlation rules deployment report

## Tools & resources

- Splunk REST API

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

- `authenticate_splunk` — Authenticate to Splunk and return session headers.
- `deploy_correlation_search` — Deploy a correlation search to Splunk ES.
- `generate_sigma_rule` — Generate a Sigma-format YAML rule from a correlation definition.
- `audit_existing_searches` — Audit existing Splunk saved searches for coverage gaps.
- `run_test_search` — Execute a correlation search and return matching events.
- `generate_report` — Generate correlation rules deployment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-siem-correlation-rules-for-apt`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
