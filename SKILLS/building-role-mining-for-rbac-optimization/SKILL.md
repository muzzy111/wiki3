---
name: building-role-mining-for-rbac-optimization
description: "Role Mining for RBAC Optimization Agent - Analyzes access patterns to optimize role-based access control. Use when the user asks to build role mining for rbac optimization."
version: 1.0.0
tags:
  - building
  - identity
source: building-role-mining-for-rbac-optimization
---

# Building Role Mining for RBAC Optimization

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Role Mining Algorithms, Optimization Metrics, CyberArk Identity Role Optimization, NIST RBAC Model Levels, RBAC Standards, Identity Governance Standards

## When to use

- The user wants to **build** role mining for rbac optimization.
- Capability: Role Mining for RBAC Optimization Agent - Analyzes access patterns to optimize role-based access control.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, role, mining, rbac, optimization`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load user-entitlement assignments from CSV (user,entitlement,system)
2. Build user-to-permission-set mapping
3. Bottom-up role mining: find common permission sets shared by multiple users
4. Top-down role mining: cluster users by permission similarity (Jaccard)
5. Detect users with unique permissions not covered by any candidate role
6. Calculate RBAC optimization metrics
7. Generate role mining report

## Key concepts

- Defines User, Role, Permission, Session abstractions
- Role assignment: users are assigned to roles
- Permission assignment: permissions are assigned to roles
- Role hierarchy: senior roles inherit junior role permissions
- Separation of Duty constraints (static and dynamic)
- Core RBAC: Basic user-role and role-permission mappings
- Hierarchical RBAC: Role inheritance relationships
- Constrained RBAC: Static and dynamic separation of duties

## Tools & resources

- Role Mining Algorithms
- Optimization Metrics
- CyberArk Identity Role Optimization
- NIST RBAC Model Levels
- RBAC Standards
- Identity Governance Standards
- Role Mining Research

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

- `load_entitlements` — Load user-entitlement assignments from CSV (user,entitlement,system).
- `build_user_permission_matrix` — Build user-to-permission-set mapping.
- `mine_roles_bottom_up` — Bottom-up role mining: find common permission sets shared by multiple users.
- `mine_roles_top_down` — Top-down role mining: cluster users by permission similarity (Jaccard).
- `detect_outliers` — Detect users with unique permissions not covered by any candidate role.
- `calculate_optimization_metrics` — Calculate RBAC optimization metrics.
- `generate_report` — Generate role mining report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-role-mining-for-rbac-optimization`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
