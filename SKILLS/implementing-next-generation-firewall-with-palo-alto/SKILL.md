---
name: implementing-next-generation-firewall-with-palo-alto
description: "Palo Alto NGFW Agent - audits security policies, threat prevention, and App-ID usage via XML API. Use when the user asks to implement next generation firewall with palo alto."
version: 1.0.0
tags:
  - implementing
  - incident-response
source: implementing-next-generation-firewall-with-palo-alto
---

# Implementing Next Generation Firewall with Palo Alto

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** PAN-OS XML API, Configuration XPaths, pan-python Library, Industry Standards, Palo Alto Specific Standards

## When to use

- The user wants to **implement** next generation firewall with palo alto.
- Capability: Palo Alto NGFW Agent - audits security policies, threat prevention, and App-ID usage via XML API.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, next, generation, firewall, palo, alto`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Capture requirements, risks, and success metrics
2. Design the control architecture for next generation firewall with palo alto
3. Implement configuration, policies, and integrations
4. Test effectiveness and failure modes
5. Hand off operational docs and monitoring

## Key concepts

- ISO 27001: 2022** - A.13.1 (Network Security Management)

## Tools & resources

- PAN-OS XML API
- Configuration XPaths
- pan-python Library
- Industry Standards
- Palo Alto Specific Standards

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

- `pan_api_request`
- `get_security_rules`
- `audit_security_rules`
- `calculate_appid_coverage`
- `check_system_health`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-next-generation-firewall-with-palo-alto`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
