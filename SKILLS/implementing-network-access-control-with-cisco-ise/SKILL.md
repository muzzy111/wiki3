---
name: implementing-network-access-control-with-cisco-ise
description: "Cisco ISE NAC Agent - audits ISE policies, endpoint posture, and 802.1X configuration. Use when the user asks to implement network access control with cisco ise."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-network-access-control-with-cisco-ise
---

# Implementing Network Access Control with Cisco Ise

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Cisco ISE ERS API, ISE Policy Components, RADIUS Attributes

## When to use

- The user wants to **implement** network access control with cisco ise.
- Capability: Cisco ISE NAC Agent - audits ISE policies, endpoint posture, and 802.1X configuration.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, network, access, control, cisco`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute Cisco ISE ERS API request
2. Get active RADIUS sessions via MnT API
3. Audit authorization profiles for security best practices
4. Analyze active session posture and authentication methods
5. Check 802.1X deployment across network devices

## Tools & resources

- Cisco ISE ERS API
- ISE Policy Components
- RADIUS Attributes

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

- `ise_request` — Execute Cisco ISE ERS API request.
- `get_network_devices`
- `get_endpoint_groups`
- `get_authorization_policies`
- `get_active_sessions` — Get active RADIUS sessions via MnT API.
- `audit_authorization_profiles` — Audit authorization profiles for security best practices.
- `analyze_session_data` — Analyze active session posture and authentication methods.
- `check_dot1x_compliance` — Check 802.1X deployment across network devices.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-network-access-control-with-cisco-ise`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
