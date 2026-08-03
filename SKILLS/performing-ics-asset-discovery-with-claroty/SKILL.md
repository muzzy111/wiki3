---
name: performing-ics-asset-discovery-with-claroty
description: "Agent for performing ICS asset discovery with Claroty xDome/CTD API. Use when the user asks to perform ics asset discovery with claroty."
version: 1.0.0
tags:
  - performing
source: performing-ics-asset-discovery-with-claroty
---

# Performing Ics Asset Discovery with Claroty

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** ClarotyClient Class

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** ics asset discovery with claroty.
- Capability: Agent for performing ICS asset discovery with Claroty xDome/CTD API.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, asset, discovery, claroty`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run asset discovery and categorize results
2. Retrieve and prioritize OT vulnerabilities
3. Get security alert summary
4. Map OT network segments

## Tools & resources

- ClarotyClient Class

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

- `discover_assets` — Run asset discovery and categorize results.
- `assess_vulnerabilities` — Retrieve and prioritize OT vulnerabilities.
- `get_alerts_summary` — Get security alert summary.
- `network_topology` — Map OT network segments.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-ics-asset-discovery-with-claroty`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
