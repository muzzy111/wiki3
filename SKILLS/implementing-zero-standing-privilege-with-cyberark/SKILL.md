---
name: implementing-zero-standing-privilege-with-cyberark
description: "Agent for auditing CyberArk Zero Standing Privilege (ZSP) configuration via REST API. Use when the user asks to implement zero standing privilege with cyberark."
version: 1.0.0
tags:
  - implementing
source: implementing-zero-standing-privilege-with-cyberark
---

# Implementing Zero Standing Privilege with Cyberark

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** CyberArk, TEA Framework, Zero Trust Frameworks, Compliance Requirements

## When to use

- The user wants to **implement** zero standing privilege with cyberark.
- Capability: Agent for auditing CyberArk Zero Standing Privilege (ZSP) configuration via REST API.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, zero, standing, privilege, cyberark`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Authenticate to CyberArk PVWA and obtain session token
2. List all safes to audit access policies
3. Audit members and permissions of a specific safe
4. List platforms to verify JIT/ZSP configuration
5. Check recent privileged sessions for JIT compliance
6. Find privileged accounts with standing (non-JIT) access enabled
7. Generate ZSP compliance audit report

## Key concepts

- Never trust, always verify
- Least privilege access to resources
- Microsegmentation and policy enforcement points
- Dynamic, risk-based access policies
- Identity pillar: JIT/JEA access for all identities
- Advanced maturity: Automated privilege provisioning/deprovisioning
- Optimal maturity: Continuous verification with ephemeral access
- Session duration: minimum required for task completion

## Tools & resources

- CyberArk
- TEA Framework
- Zero Trust Frameworks
- Compliance Requirements

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

- `authenticate` — Authenticate to CyberArk PVWA and obtain session token.
- `list_safes` — List all safes to audit access policies.
- `audit_safe_members` — Audit members and permissions of a specific safe.
- `list_platforms` — List platforms to verify JIT/ZSP configuration.
- `check_jit_sessions` — Check recent privileged sessions for JIT compliance.
- `audit_accounts_standing_access` — Find privileged accounts with standing (non-JIT) access enabled.
- `generate_report` — Generate ZSP compliance audit report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-zero-standing-privilege-with-cyberark`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
