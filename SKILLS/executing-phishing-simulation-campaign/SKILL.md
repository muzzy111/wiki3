---
name: executing-phishing-simulation-campaign
description: "Phishing simulation campaign agent using requests to interact with GoPhish API. Use when the user asks to executing phishing simulation campaign."
version: 1.0.0
tags:
  - executing
  - email
source: executing-phishing-simulation-campaign
---

# Executing Phishing Simulation Campaign

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** GoPhishClient Class

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **execut** phishing simulation campaign.
- Capability: Phishing simulation campaign agent using requests to interact with GoPhish API.
- Goal: complete the task.
- Trigger keywords: `executing, phishing, simulation, campaign`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Clarify the objective for phishing simulation campaign
2. Gather inputs and required access
3. Execute the core workflow using skill scripts and references
4. Validate results and document findings
5. Recommend next actions

## Tools & resources

- GoPhishClient Class

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

- `compute_metrics` — Compute phishing simulation success metrics from campaign results.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `executing-phishing-simulation-campaign`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
