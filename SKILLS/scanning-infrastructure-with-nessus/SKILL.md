---
name: scanning-infrastructure-with-nessus
description: "Agent for scanning infrastructure with Tenable Nessus. Interacts with the Nessus REST API to create scan policies, launch scans, monitor progress, retrieve results, and generate vulnerability reports with.... Use when the user asks to scan infrastructure with nessus."
version: 1.0.0
tags:
  - scanning
source: scanning-infrastructure-with-nessus
---

# Scanning Infrastructure with Nessus

**Role:** Security scanning  
**Audience:** security engineers and vulnerability management teams  
**Primary tools:** Nessus, Scan Types, Severity Levels, Industry Standards, Tenable Documentation, Compliance Audit Files

## When to use

- The user wants to **scan** infrastructure with nessus.
- Capability: Agent for scanning infrastructure with Tenable Nessus. Interacts with the Nessus REST API to create scan policies, launch scans, monitor progress, retrieve results, and generate vulnerability reports with severity-based prioritization.
- Goal: discover exposures, misconfigurations, and vulnerable assets.
- Trigger keywords: `scanning, infrastructure, nessus`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. **Weekly**: Scan DMZ and internet-facing assets
2. **Bi-weekly**: Scan internal production servers
3. **Monthly**: Full infrastructure scan including workstations
4. **Quarterly**: Comprehensive scan with compliance audits
5. **Ad-hoc**: Post-patch verification scans
6. **Central Management**: Use Tenable.sc to manage multiple scanners
7. **Zone Assignment**: Assign scanners to specific network zones
8. **Scan Windowing**: Stagger scans to prevent network saturation
9. **Result Aggregation**: Consolidate results in central repository
10. **Deduplication**: Merge findings from overlapping scan ranges

## Key concepts

- NIST SP 800-115: Technical Guide to Information Security Testing and Assessment
- NIST SP 800-53 RA-5: Vulnerability Monitoring and Scanning control family
- PCI DSS v4.0 Requirement 11.3: Internal and external vulnerability scanning
- CIS Controls v8 Control 7: Continuous Vulnerability Management
- ISO 27001: 2022 A.8.8**: Management of technical vulnerabilities

## Tools & resources

- Nessus
- Scan Types
- Severity Levels
- Industry Standards
- Tenable Documentation
- Compliance Audit Files
- Scan Configuration Standards

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `scanning-infrastructure-with-nessus`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
