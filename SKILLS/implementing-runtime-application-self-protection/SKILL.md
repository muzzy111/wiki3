---
name: implementing-runtime-application-self-protection
description: "RASP Agent - audits runtime application protection config, attack logs, and coverage. Use when the user asks to implement runtime application self protection."
version: 1.0.0
tags:
  - implementing
  - linux
  - threat-intel
source: implementing-runtime-application-self-protection
---

# Implementing Runtime Application Self Protection

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** OpenRASP Deployment, Detection Hooks, RASP vs WAF Comparison

## When to use

- The user wants to **implement** runtime application self protection.
- Capability: RASP Agent - audits runtime application protection config, attack logs, and coverage.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, runtime, application, self, protection`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse OpenRASP or RASP agent configuration
2. Audit RASP detection policies against OWASP Top 10 coverage
3. Analyze RASP attack detection logs
4. Verify RASP agent deployment health
5. Calculate OWASP Top 10 coverage percentage

## Tools & resources

- OpenRASP Deployment
- Detection Hooks
- RASP vs WAF Comparison

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

- `parse_rasp_config` — Parse OpenRASP or RASP agent configuration.
- `audit_rasp_policy` — Audit RASP detection policies against OWASP Top 10 coverage.
- `analyze_attack_logs` — Analyze RASP attack detection logs.
- `check_agent_health` — Verify RASP agent deployment health.
- `calculate_coverage` — Calculate OWASP Top 10 coverage percentage.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-runtime-application-self-protection`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
