---
name: performing-phishing-simulation-with-gophish
description: "Agent for performing phishing simulation campaigns with GoPhish API. Use when the user asks to perform phishing simulation with gophish."
version: 1.0.0
tags:
  - performing
  - email
source: performing-phishing-simulation-with-gophish
---

# Performing Phishing Simulation with Gophish

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Industry Standards, GoPhish Technical Reference, Phishing Simulation Best Practices

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** phishing simulation with gophish.
- Capability: Agent for performing phishing simulation campaigns with GoPhish API.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, phishing, simulation, gophish`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. List all phishing simulation campaigns
2. Get detailed metrics for a phishing campaign
3. Launch a new phishing simulation campaign
4. List available templates, groups, and sending profiles
5. Generate phishing simulation report with recommendations

## Key concepts

- Computer Fraud and Abuse Act (CFAA): Ensure written authorization before conducting simulations
- GDPR (EU): Data protection requirements for handling employee email addresses and click data
- CCPA (California): Employee data privacy considerations
- Company Acceptable Use Policy: Must align simulation with organizational policies
- NIST SP 800-50: Building an Information Technology Security Awareness and Training Program
- NIST SP 800-16: Information Technology Security Training Requirements
- SANS Security Awareness Maturity Model: Five levels from non-existent to metrics framework
- ISO 27001: 2022**: A.6.3 - Information security awareness, education and training

## Tools & resources

- Industry Standards
- GoPhish Technical Reference
- Phishing Simulation Best Practices

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

- `list_campaigns` — List all phishing simulation campaigns.
- `get_campaign_metrics` — Get detailed metrics for a phishing campaign.
- `launch_campaign` — Launch a new phishing simulation campaign.
- `list_resources` — List available templates, groups, and sending profiles.
- `generate_report` — Generate phishing simulation report with recommendations.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-phishing-simulation-with-gophish`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
