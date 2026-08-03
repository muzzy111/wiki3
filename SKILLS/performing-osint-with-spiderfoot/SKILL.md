---
name: performing-osint-with-spiderfoot
description: "OSINT automation agent using SpiderFoot REST API for target profiling and reconnaissance. Use when the user asks to perform osint with spiderfoot."
version: 1.0.0
tags:
  - performing
source: performing-osint-with-spiderfoot
---

# Performing Osint with Spiderfoot

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Scan Use Cases, Data Element Types, Agent CLI Usage

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** osint with spiderfoot.
- Capability: OSINT automation agent using SpiderFoot REST API for target profiling and reconnaissance.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, osint, spiderfoot`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Create a requests session for SpiderFoot API
2. List available SpiderFoot modules
3. List available scan types (use cases)
4. Start a new SpiderFoot scan via REST API
5. Check scan status
6. Poll scan status until completion or timeout
7. Retrieve all results from a completed scan
8. Categorize scan results by data element type

## Tools & resources

- Scan Use Cases
- Data Element Types
- Agent CLI Usage

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

- `get_sf_session` — Create a requests session for SpiderFoot API.
- `list_modules` — List available SpiderFoot modules.
- `list_scan_types` — List available scan types (use cases).
- `start_scan` — Start a new SpiderFoot scan via REST API.
- `get_scan_status` — Check scan status.
- `wait_for_scan` — Poll scan status until completion or timeout.
- `get_scan_results` — Retrieve all results from a completed scan.
- `categorize_results` — Categorize scan results by data element type.
- `generate_target_profile` — Generate structured OSINT profile from categorized results.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-osint-with-spiderfoot`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
