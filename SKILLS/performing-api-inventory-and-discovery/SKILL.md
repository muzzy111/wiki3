---
name: performing-api-inventory-and-discovery
description: "API inventory and discovery agent for attack surface mapping. Use when the user asks to perform api inventory and discovery."
version: 1.0.0
tags:
  - performing
source: performing-api-inventory-and-discovery
---

# Performing API Inventory and Discovery

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Common API Discovery Paths, OpenAPI Spec Parsing, API Risk Classification, OWASP API9, External References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** api inventory and discovery.
- Capability: API inventory and discovery agent for attack surface mapping.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, inventory, discovery`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Probe common API paths to discover active endpoints
2. Fetch and parse OpenAPI/Swagger spec to inventory endpoints
3. Fetch JavaScript file and extract API endpoint references
4. Use DNS enumeration to find API subdomains
5. Classify discovered APIs by risk level
6. Execute API inventory and discovery audit

## Tools & resources

- Common API Discovery Paths
- OpenAPI Spec Parsing
- API Risk Classification
- OWASP API9
- External References

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

- `discover_api_endpoints` — Probe common API paths to discover active endpoints.
- `parse_swagger_spec` — Fetch and parse OpenAPI/Swagger spec to inventory endpoints.
- `scan_javascript_for_apis` — Fetch JavaScript file and extract API endpoint references.
- `enumerate_subdomains_for_apis` — Use DNS enumeration to find API subdomains.
- `classify_api_risk` — Classify discovered APIs by risk level.
- `run_audit` — Execute API inventory and discovery audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-api-inventory-and-discovery`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
