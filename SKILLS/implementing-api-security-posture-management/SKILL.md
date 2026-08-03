---
name: implementing-api-security-posture-management
description: "Agent for API Security Posture Management - discovery, classification, and risk scoring. Use when the user asks to implement api security posture management."
version: 1.0.0
tags:
  - implementing
source: implementing-api-security-posture-management
---

# Implementing API Security Posture Management

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** API Discovery from Traffic, API Sensitivity Classification, 42Crunch API Audit, Salt Security API

## When to use

- The user wants to **implement** api security posture management.
- Capability: Agent for API Security Posture Management - discovery, classification, and risk scoring.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, posture, management`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Discover APIs from network traffic logs
2. Classify APIs by data sensitivity level
3. Calculate risk score for each API endpoint
4. Check security controls for discovered APIs

## Tools & resources

- API Discovery from Traffic
- API Sensitivity Classification
- 42Crunch API Audit
- Salt Security API

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

- `discover_apis_from_traffic` — Discover APIs from network traffic logs.
- `classify_api_sensitivity` — Classify APIs by data sensitivity level.
- `score_api_risk` — Calculate risk score for each API endpoint.
- `check_api_security_controls` — Check security controls for discovered APIs.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-api-security-posture-management`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
