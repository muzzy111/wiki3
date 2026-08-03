---
name: implementing-policy-as-code-with-open-policy-agent
description: "Open Policy Agent (OPA) policy-as-code agent. Evaluates security policies against infrastructure configurations using the OPA REST API or CLI. Supports evaluating Rego policies for Kubernetes admission control,.... Use when the user asks to implement policy as code with open policy agent."
version: 1.0.0
tags:
  - implementing
source: implementing-policy-as-code-with-open-policy-agent
---

# Implementing Policy As Code with Open Policy Agent

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core Operations, OPA CLI Reference, NIST SP 800-53

## When to use

- The user wants to **implement** policy as code with open policy agent.
- Capability: Open Policy Agent (OPA) policy-as-code agent. Evaluates security policies against infrastructure configurations using the OPA REST API or CLI. Supports evaluating Rego policies for Kubernetes admission control, Terraform plans, IAM policies, and custom security rules.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, policy, code, open, policy, agent`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Locate the OPA binary on the system
2. Evaluate a Rego policy using OPA CLI
3. Evaluate a policy via OPA REST API
4. Run OPA test suite against policy directory
5. Check Rego policy syntax
6. Extract policy violations from OPA evaluation result
7. Print evaluation summary

## Key concepts

- Enforce Pod Security Standards via admission control
- Restrict container capabilities using OPA policies
- Enforce network policies and resource quotas
- Validate image provenance and signatures

## Tools & resources

- Core Operations
- OPA CLI Reference
- NIST SP 800-53

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `find_opa_binary` — Locate the OPA binary on the system.
- `eval_policy_cli` — Evaluate a Rego policy using OPA CLI.
- `eval_policy_api` — Evaluate a policy via OPA REST API.
- `test_policies` — Run OPA test suite against policy directory.
- `check_policy_syntax` — Check Rego policy syntax.
- `extract_violations` — Extract policy violations from OPA evaluation result.
- `format_summary` — Print evaluation summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-policy-as-code-with-open-policy-agent`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
