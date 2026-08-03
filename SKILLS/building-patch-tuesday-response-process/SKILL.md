---
name: building-patch-tuesday-response-process
description: "Patch Tuesday Response Agent - Tracks Microsoft patches, assesses risk, and prioritizes deployment. Use when the user asks to build patch tuesday response process."
version: 1.0.0
tags:
  - building
  - incident-response
source: building-patch-tuesday-response-process
---

# Building Patch Tuesday Response Process

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** CVRF Vulnerability Fields, Patch Priority Matrix, NVD API v2, Deployment Phase Timeline, Microsoft Resources, Industry Standards

## When to use

- The user wants to **build** patch tuesday response process.
- Capability: Patch Tuesday Response Agent - Tracks Microsoft patches, assesses risk, and prioritizes deployment.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, patch, tuesday, response, process`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Fetch Microsoft Security Update Guide data via MSRC API
2. Parse CVRF data to extract vulnerability details
3. Check CVEs against CISA Known Exploited Vulnerabilities catalog
4. Prioritize patches based on CVSS, exploitation status, and CISA KEV
5. Generate phased deployment plan
6. Generate Patch Tuesday response report

## Key concepts

- NIST SP 800-40 Rev 4: Guide to Enterprise Patch Management Planning
- CIS Controls v8.1 Control 7.4: Perform Automated Patch Management
- PCI DSS v4.0 Req 6.3.3: Install security patches within one month of release
- ISO 27001: 2022 A.8.8**: Management of technical vulnerabilities

## Tools & resources

- CVRF Vulnerability Fields
- Patch Priority Matrix
- NVD API v2
- Deployment Phase Timeline
- Microsoft Resources
- Industry Standards
- Vendor Analysis Resources

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

- `fetch_patch_tuesday_updates` — Fetch Microsoft Security Update Guide data via MSRC API.
- `parse_vulnerabilities` — Parse CVRF data to extract vulnerability details.
- `check_cisa_kev` — Check CVEs against CISA Known Exploited Vulnerabilities catalog.
- `prioritize_patches` — Prioritize patches based on CVSS, exploitation status, and CISA KEV.
- `generate_deployment_plan` — Generate phased deployment plan.
- `generate_report` — Generate Patch Tuesday response report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-patch-tuesday-response-process`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
