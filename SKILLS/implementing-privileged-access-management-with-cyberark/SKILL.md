---
name: implementing-privileged-access-management-with-cyberark
description: "CyberArk PAM configuration audit agent. Audits CyberArk Privileged Access Management via the REST API to verify safe configurations, privileged account inventory, platform assignments, and password rotation compliance. Use when the user asks to implement privileged access management with cyberark."
version: 1.0.0
tags:
  - implementing
source: implementing-privileged-access-management-with-cyberark
---

# Implementing Privileged Access Management with Cyberark

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** CyberArk, Core Operations, NIST Standards, Industry Standards, Compliance Frameworks

## When to use

- The user wants to **implement** privileged access management with cyberark.
- Capability: CyberArk PAM configuration audit agent. Audits CyberArk Privileged Access Management via the REST API to verify safe configurations, privileged account inventory, platform assignments, and password rotation compliance.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, privileged, access, management, cyberark`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Return CyberArk PVWA URL
2. Authenticate and get session token
3. Make authenticated API call
4. Audit safe configurations
5. Audit privileged accounts
6. Audit platform configurations
7. End the CyberArk session
8. Print audit summary

## Key concepts

- NIST SP 800-53 Rev 5: Security and Privacy Controls
- AC-2: Account Management
- AC-5: Separation of Duties
- AC-6: Least Privilege
- AC-6(7): Review of User Privileges (Privileged Accounts)
- AU-14: Session Audit
- IA-5: Authenticator Management
- NIST SP 800-171: Protecting CUI - 3.1.5 Least Privilege, 3.1.7 Privileged Functions

## Tools & resources

- CyberArk
- Core Operations
- NIST Standards
- Industry Standards
- Compliance Frameworks

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

- `get_cyberark_config` — Return CyberArk PVWA URL.
- `authenticate` — Authenticate and get session token.
- `api_call` — Make authenticated API call.
- `audit_safes` — Audit safe configurations.
- `audit_accounts` — Audit privileged accounts.
- `audit_platforms` — Audit platform configurations.
- `logoff` — End the CyberArk session.
- `format_summary` — Print audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-privileged-access-management-with-cyberark`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
