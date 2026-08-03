---
name: implementing-semgrep-for-custom-sast-rules
description: "Semgrep SAST scanning agent. Wraps the Semgrep CLI to perform static application security testing using built-in rulesets and custom rules. Parses JSON output to produce structured vulnerability findings with.... Use when the user asks to implement semgrep for custom sast rules."
version: 1.0.0
tags:
  - implementing
source: implementing-semgrep-for-custom-sast-rules
---

# Implementing Semgrep for Custom Sast Rules

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Semgrep Registry Rule Packs, CWE Coverage, Compliance

## When to use

- The user wants to **implement** semgrep for custom sast rules.
- Capability: Semgrep SAST scanning agent. Wraps the Semgrep CLI to perform static application security testing using built-in rulesets and custom rules. Parses JSON output to produce structured vulnerability findings with severity, CWE, and OWASP mappings.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, semgrep, custom, sast, rules`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Locate the semgrep binary on the system
2. Run semgrep scan and return JSON results
3. Parse semgrep JSON output into structured findings
4. Print human-readable scan summary

## Key concepts

- SA-11: Developer Security Testing
- SA-15: Development Process, Standards, and Tools
- PCI DSS v4.0 Req 6.3.2: Secure development with automated tools
- SOC 2 CC8.1: Change management with code scanning

## Tools & resources

- Semgrep Registry Rule Packs
- CWE Coverage
- Compliance

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

- `find_semgrep_binary` — Locate the semgrep binary on the system.
- `run_scan` — Run semgrep scan and return JSON results.
- `parse_findings` — Parse semgrep JSON output into structured findings.
- `format_summary` — Print human-readable scan summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-semgrep-for-custom-sast-rules`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
