---
name: implementing-mobile-application-management
description: "Mobile Application Management Agent - audits MDM policies, app inventory, and compliance posture. Use when the user asks to implement mobile application management."
version: 1.0.0
tags:
  - implementing
  - mobile
source: implementing-mobile-application-management
---

# Implementing Mobile Application Management

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** MAM Policy Settings, Conditional Launch Settings, CIS Controls v8

## When to use

- The user wants to **implement** mobile application management.
- Capability: Mobile Application Management Agent - audits MDM policies, app inventory, and compliance posture.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, mobile, application, management`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute MDM API request via curl
2. Get all managed devices
3. Get managed application inventory
4. Get device compliance policies
5. Get MAM app protection policies
6. Audit device compliance status
7. Audit managed app security configuration
8. Audit MAM protection policy configuration

## Key concepts

- Section 4: Enterprise mobile security technologies (MDM, MAM, MTD)
- Section 5: App vetting and management requirements

## Tools & resources

- MAM Policy Settings
- Conditional Launch Settings
- CIS Controls v8

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

- `mdm_api_request` — Execute MDM API request via curl.
- `get_managed_devices` — Get all managed devices.
- `get_managed_apps` — Get managed application inventory.
- `get_compliance_policies` — Get device compliance policies.
- `get_app_protection_policies` — Get MAM app protection policies.
- `audit_device_compliance` — Audit device compliance status.
- `audit_app_security` — Audit managed app security configuration.
- `audit_protection_policies` — Audit MAM protection policy configuration.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-mobile-application-management`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
