---
name: implementing-zero-trust-in-cloud
description: "Zero trust cloud architecture assessment agent using AWS, Azure, and GCP SDKs. Use when the user asks to implement zero trust in cloud."
version: 1.0.0
tags:
  - implementing
  - cloud
  - identity
source: implementing-zero-trust-in-cloud
---

# Implementing Zero Trust in Cloud

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS Zero Trust Services, Azure Zero Trust Services, GCP Zero Trust Services, Maturity Levels, External References

## When to use

- The user wants to **implement** zero trust in cloud.
- Capability: Zero trust cloud architecture assessment agent using AWS, Azure, and GCP SDKs.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, zero, trust, cloud`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Assess AWS zero trust posture
2. Generate a zero trust maturity scorecard from findings
3. Run comprehensive zero trust assessment

## Tools & resources

- AWS Zero Trust Services
- Azure Zero Trust Services
- GCP Zero Trust Services
- Maturity Levels
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

- `assess_aws_zero_trust` — Assess AWS zero trust posture.
- `generate_zero_trust_scorecard` — Generate a zero trust maturity scorecard from findings.
- `run_zero_trust_assessment` — Run comprehensive zero trust assessment.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-zero-trust-in-cloud`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
