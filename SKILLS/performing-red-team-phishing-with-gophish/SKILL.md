---
name: performing-red-team-phishing-with-gophish
description: "GoPhish Campaign Agent - Automates phishing simulation setup, launch, and analysis. Use when the user asks to perform red team phishing with gophish."
version: 1.0.0
tags:
  - performing
  - email
source: performing-red-team-phishing-with-gophish
---

# Performing Red Team Phishing with Gophish

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Python gophish Library, Campaign Model, Result Statuses

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** red team phishing with gophish.
- Capability: GoPhish Campaign Agent - Automates phishing simulation setup, launch, and analysis.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, team, phishing, gophish`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Connect to GoPhish server via API
2. Create an email template in GoPhish
3. Create a landing page for credential capture
4. Create an SMTP sending profile
5. Import target users from a CSV file into a GoPhish group
6. Launch a phishing simulation campaign
7. Retrieve detailed results for a campaign
8. Calculate campaign performance metrics

## Tools & resources

- Python gophish Library
- Campaign Model
- Result Statuses

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

- `connect_gophish` — Connect to GoPhish server via API.
- `create_email_template` — Create an email template in GoPhish.
- `create_landing_page` — Create a landing page for credential capture.
- `create_smtp_profile` — Create an SMTP sending profile.
- `import_targets_from_csv` — Import target users from a CSV file into a GoPhish group.
- `launch_campaign` — Launch a phishing simulation campaign.
- `get_campaign_results` — Retrieve detailed results for a campaign.
- `analyze_campaign_metrics` — Calculate campaign performance metrics.
- `list_campaigns` — List all campaigns and their statuses.
- `generate_report` — Generate phishing simulation report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-red-team-phishing-with-gophish`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
