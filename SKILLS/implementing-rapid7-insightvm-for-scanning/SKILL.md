---
name: implementing-rapid7-insightvm-for-scanning
description: "Rapid7 InsightVM vulnerability scanning agent. Interfaces with the InsightVM (Nexpose) REST API to manage scan configurations, launch scans, retrieve vulnerability results, and generate remediation reports. Supports.... Use when the user asks to implement rapid7 insightvm for scanning."
version: 1.0.0
tags:
  - implementing
source: implementing-rapid7-insightvm-for-scanning
---

# Implementing Rapid7 Insightvm for Scanning

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Core Operations, Pagination, Official Documentation, Scan Configuration References, Industry Standards, Compliance Scan Templates

## When to use

- The user wants to **implement** rapid7 insightvm for scanning.
- Capability: Rapid7 InsightVM vulnerability scanning agent. Interfaces with the InsightVM (Nexpose) REST API to manage scan configurations, launch scans, retrieve vulnerability results, and generate remediation reports. Supports site management, asset discovery, and vulnerability prioritization.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, rapid7, insightvm, scanning`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Return InsightVM API connection config
2. Make authenticated API call to InsightVM
3. List all scan sites
4. Get vulnerabilities for a specific site
5. Launch a scan on a site
6. Poll scan status until completion
7. Get scan results summary
8. Print summary

## Key concepts

- NIST SP 800-115: Technical Guide to Information Security Testing and Assessment
- NIST SP 800-40 Rev 4: Guide to Enterprise Patch Management Planning
- PCI DSS v4.0 Req 11.3: External and internal vulnerability scanning
- CIS Controls v8.1 Control 7: Continuous Vulnerability Management
- ISO 27001: 2022 A.8.8**: Management of technical vulnerabilities

## Tools & resources

- Core Operations
- Pagination
- Official Documentation
- Scan Configuration References
- Industry Standards
- Compliance Scan Templates

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

- `get_insightvm_config` — Return InsightVM API connection config.
- `api_call` — Make authenticated API call to InsightVM.
- `list_sites` — List all scan sites.
- `get_site_vulnerabilities` — Get vulnerabilities for a specific site.
- `launch_scan` — Launch a scan on a site.
- `poll_scan_status` — Poll scan status until completion.
- `get_scan_report` — Get scan results summary.
- `format_summary` — Print summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-rapid7-insightvm-for-scanning`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
