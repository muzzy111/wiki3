---
name: implementing-security-chaos-engineering
description: "Agent for security chaos engineering experiments. Use when the user asks to implement security chaos engineering."
version: 1.0.0
tags:
  - implementing
source: implementing-security-chaos-engineering
---

# Implementing Security Chaos Engineering

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Experiment Catalog

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **implement** security chaos engineering.
- Capability: Agent for security chaos engineering experiments.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, chaos, engineering`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Experiment: Open a security group and verify detection
2. Experiment: Create IAM admin user and verify detection
3. Experiment: Stop CloudTrail and verify detection
4. List available experiments without executing them

## Tools & resources

- Experiment Catalog

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

- `experiment_open_security_group` — Experiment: Open a security group and verify detection.
- `experiment_create_admin_user` — Experiment: Create IAM admin user and verify detection.
- `experiment_stop_cloudtrail` — Experiment: Stop CloudTrail and verify detection.
- `dry_run_experiments` — List available experiments without executing them.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-security-chaos-engineering`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
