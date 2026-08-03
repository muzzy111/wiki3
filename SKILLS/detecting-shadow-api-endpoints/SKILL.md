---
name: detecting-shadow-api-endpoints
description: "Agent for discovering undocumented (shadow) API endpoints via traffic analysis. Use when the user asks to detect shadow api endpoints."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-shadow-api-endpoints
---

# Detecting Shadow API Endpoints

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** OpenAPI 3.0 Specification Structure, Akamai API Discovery, AWS API Gateway, Burp Suite Enterprise

## When to use

- The user wants to **detect** shadow api endpoints.
- Capability: Agent for discovering undocumented (shadow) API endpoints via traffic analysis.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, shadow, endpoints`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse web server access logs to extract API endpoint calls
2. Load documented endpoints from OpenAPI/Swagger spec
3. Identify endpoints in traffic that are not in the API spec
4. Classify shadow endpoints by risk category

## Tools & resources

- OpenAPI 3.0 Specification Structure
- Akamai API Discovery
- AWS API Gateway
- Burp Suite Enterprise

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

- `parse_access_log` — Parse web server access logs to extract API endpoint calls.
- `load_openapi_spec` — Load documented endpoints from OpenAPI/Swagger spec.
- `find_shadow_endpoints` — Identify endpoints in traffic that are not in the API spec.
- `classify_risk` — Classify shadow endpoints by risk category.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-shadow-api-endpoints`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
