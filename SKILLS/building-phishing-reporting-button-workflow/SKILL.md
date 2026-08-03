---
name: building-phishing-reporting-button-workflow
description: "Phishing Reporting Button Workflow Agent - Processes user-reported phishing emails via button integration. Use when the user asks to build phishing reporting button workflow."
version: 1.0.0
tags:
  - building
  - email
source: building-phishing-reporting-button-workflow
---

# Building Phishing Reporting Button Workflow

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Phishing Indicators, VirusTotal URL Scan, Dangerous File Extensions, Verdict Classification, Industry Standards, Reporting Platform Comparison

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **build** phishing reporting button workflow.
- Capability: Phishing Reporting Button Workflow Agent - Processes user-reported phishing emails via button integration.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, phishing, reporting, button, workflow`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse a reported phishing email from .eml file
2. Analyze reported email for phishing indicators
3. Check extracted URLs against VirusTotal
4. Create incident ticket from analysis results
5. Generate phishing report workflow report

## Key concepts

- T1566.001: Phishing: Spearphishing Attachment
- T1566.002: Phishing: Spearphishing Link
- T1204: User Execution
- D3-RERE: User Reporting (MITRE D3FEND)
- NIST SP 800-61 Rev.2: Computer Security Incident Handling Guide
- CIS Controls v8 Control 14: Security Awareness and Skills Training
- ISO 27001 A.6.3: Information Security Awareness, Education and Training
- Report Rate: Percentage of phishing simulations reported (target: >70%)

## Tools & resources

- Phishing Indicators
- VirusTotal URL Scan
- Dangerous File Extensions
- Verdict Classification
- Industry Standards
- Reporting Platform Comparison
- Key Metrics

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

- `parse_reported_email` — Parse a reported phishing email from .eml file.
- `analyze_email` — Analyze reported email for phishing indicators.
- `check_urls_virustotal` — Check extracted URLs against VirusTotal.
- `create_ticket` — Create incident ticket from analysis results.
- `generate_report` — Generate phishing report workflow report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-phishing-reporting-button-workflow`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
