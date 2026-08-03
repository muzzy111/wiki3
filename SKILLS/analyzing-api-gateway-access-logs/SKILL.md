---
name: analyzing-api-gateway-access-logs
description: "Agent for analyzing API Gateway access logs for security threats. Use when the user asks to analyze api gateway access logs."
version: 1.0.0
tags:
  - analyzing
  - appsec
source: analyzing-api-gateway-access-logs
---

# Analyzing API Gateway Access Logs

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Pandas Log Analysis

## When to use

- The user wants to **analyze** api gateway access logs.
- Capability: Agent for analyzing API Gateway access logs for security threats.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, gateway, access, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load API gateway logs from JSON lines or CSV
2. Detect Broken Object Level Authorization (BOLA/IDOR) attacks
3. Detect credential scanning via 401/403 response surges
4. Detect SQL/NoSQL injection attempts in request parameters
5. Detect rate limit bypass attempts
6. Detect unusual HTTP methods on typically read-only endpoints

## Tools & resources

- Pandas Log Analysis

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

- `load_api_logs` — Load API gateway logs from JSON lines or CSV.
- `detect_bola_attacks` — Detect Broken Object Level Authorization (BOLA/IDOR) attacks.
- `detect_auth_scanning` — Detect credential scanning via 401/403 response surges.
- `detect_injection_attempts` — Detect SQL/NoSQL injection attempts in request parameters.
- `detect_rate_limit_bypass` — Detect rate limit bypass attempts.
- `detect_unusual_methods` — Detect unusual HTTP methods on typically read-only endpoints.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-api-gateway-access-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
