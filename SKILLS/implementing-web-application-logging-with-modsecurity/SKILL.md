---
name: implementing-web-application-logging-with-modsecurity
description: "ModSecurity WAF audit log analysis and rule tuning. Use when the user asks to implement web application logging with modsecurity."
version: 1.0.0
tags:
  - implementing
  - appsec
source: implementing-web-application-logging-with-modsecurity
---

# Implementing Web Application Logging with Modsecurity

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Key ModSecurity Directives, Audit Log Sections, CRS Paranoia Levels, Configuration Example, External References

## When to use

- The user wants to **implement** web application logging with modsecurity.
- Capability: ModSecurity WAF audit log analysis and rule tuning agent.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, application, logging, modsecurity`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse ModSecurity serial audit log format
2. Analyze which rules fire most frequently for tuning
3. Identify rules that may be false positives based on frequency and pattern
4. Generate ModSecurity rule exclusion configuration
5. Summarize detected attacks by category and severity
6. Execute ModSecurity audit log analysis

## Tools & resources

- Key ModSecurity Directives
- Audit Log Sections
- CRS Paranoia Levels
- Configuration Example
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

- `parse_audit_log` — Parse ModSecurity serial audit log format.
- `analyze_rule_frequency` — Analyze which rules fire most frequently for tuning.
- `identify_false_positive_candidates` — Identify rules that may be false positives based on frequency and pattern.
- `generate_exclusion_rules` — Generate ModSecurity rule exclusion configuration.
- `analyze_attack_summary` — Summarize detected attacks by category and severity.
- `run_audit` — Execute ModSecurity audit log analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-web-application-logging-with-modsecurity`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
