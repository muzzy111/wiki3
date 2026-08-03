---
name: performing-access-recertification-with-saviynt
description: "Agent for managing Saviynt access recertification campaigns via REST API. Use when the user asks to perform access recertification with saviynt."
version: 1.0.0
tags:
  - performing
source: performing-access-recertification-with-saviynt
---

# Performing Access Recertification with Saviynt

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Saviynt Campaign Configuration Standards

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** access recertification with saviynt.
- Capability: Agent for managing Saviynt access recertification campaigns via REST API.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, access, recertification, saviynt`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Authenticate to Saviynt EIC and get OAuth token
2. List certification campaigns
3. Get detailed campaign status including item counts
4. Get items pending review in a certification campaign
5. Certify or revoke items in a campaign
6. Find campaigns past their due date
7. Generate recertification status report

## Key concepts

- Quarterly access reviews for financially significant applications
- Evidence of review decisions with justification
- Remediation of revoked access within defined SLA
- Separation of duties validation during certification
- CC6.1: Logical access controls
- CC6.2: User registration and authorization
- CC6.3: Access modification and removal
- Semi-annual certification campaigns required for trust service criteria

## Tools & resources

- Saviynt Campaign Configuration Standards

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

- `authenticate` — Authenticate to Saviynt EIC and get OAuth token.
- `list_campaigns` — List certification campaigns.
- `get_campaign_details` — Get detailed campaign status including item counts.
- `get_pending_items` — Get items pending review in a certification campaign.
- `certify_items` — Certify or revoke items in a campaign.
- `check_overdue_campaigns` — Find campaigns past their due date.
- `generate_report` — Generate recertification status report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-access-recertification-with-saviynt`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
