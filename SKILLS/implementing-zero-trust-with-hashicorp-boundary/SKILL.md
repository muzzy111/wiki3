---
name: implementing-zero-trust-with-hashicorp-boundary
description: "Agent for auditing HashiCorp Boundary zero trust access configuration. Use when the user asks to implement zero trust with hashicorp boundary."
version: 1.0.0
tags:
  - implementing
  - identity
source: implementing-zero-trust-with-hashicorp-boundary
---

# Implementing Zero Trust with Hashicorp Boundary

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core Standards, Boundary Security Model

## When to use

- The user wants to **implement** zero trust with hashicorp boundary.
- Capability: Agent for auditing HashiCorp Boundary zero trust access configuration.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, zero, trust, hashicorp, boundary`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute a boundary CLI command and return parsed JSON
2. List organization and project scopes
3. List targets (resources users can connect to) in a scope
4. List host catalogs (static or dynamic)
5. List credential stores (Vault integration check)
6. List active sessions for audit
7. Audit configured authentication methods
8. Generate Boundary audit report

## Key concepts

- Boundary implements identity-aware proxy architecture (Section 3.2.2)
- Default-deny access model aligns with ZTA core principle
- Dynamic credential brokering eliminates standing privileges
- Session-level authorization satisfies continuous verification
- AC-2: Account Management (identity lifecycle via OIDC)
- AC-3: Access Enforcement (role-based grants)
- AC-6: Least Privilege (fine-grained permissions)
- AU-2: Audit Events (session recording and logging)

## Tools & resources

- Core Standards
- Boundary Security Model

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

- `run_boundary_cmd` — Execute a boundary CLI command and return parsed JSON.
- `list_scopes` — List organization and project scopes.
- `list_targets` — List targets (resources users can connect to) in a scope.
- `list_host_catalogs` — List host catalogs (static or dynamic).
- `list_credential_stores` — List credential stores (Vault integration check).
- `list_sessions` — List active sessions for audit.
- `check_auth_methods` — Audit configured authentication methods.
- `generate_report` — Generate Boundary audit report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-zero-trust-with-hashicorp-boundary`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
