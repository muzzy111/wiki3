---
name: performing-indicator-lifecycle-management
description: "Agent for performing indicator of compromise (IOC) lifecycle management. Use when the user asks to perform indicator lifecycle management."
version: 1.0.0
tags:
  - performing
source: performing-indicator-lifecycle-management
---

# Performing Indicator Lifecycle Management

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Applicable Standards, Industry Frameworks

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** indicator lifecycle management.
- Capability: Agent for performing indicator of compromise (IOC) lifecycle management.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, indicator, lifecycle, management`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Extract IOCs from a text file or report
2. Ingest IOC feed from CSV and normalize
3. Check IOC database for expired indicators based on TTL
4. Deduplicate IOCs and merge metadata from multiple sources
5. Generate full IOC lifecycle status report

## Key concepts

- STIX 2.1: Structured Threat Information eXpression for CTI data representation
- TAXII 2.1: Transport protocol for sharing CTI over HTTPS
- MITRE ATT&CK: Adversary tactics, techniques, and procedures taxonomy
- Diamond Model: Intrusion analysis framework (Adversary, Capability, Infrastructure, Victim)
- Traffic Light Protocol (TLP): Information sharing classification (CLEAR, GREEN, AMBER, RED)
- Technique mapping for threat actor behavior classification
- Data sources for detection capability assessment
- Mitigation strategies linked to specific techniques

## Tools & resources

- Applicable Standards
- Industry Frameworks

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

- `extract_iocs` — Extract IOCs from a text file or report.
- `ingest_ioc_feed` — Ingest IOC feed from CSV and normalize.
- `check_expiration` — Check IOC database for expired indicators based on TTL.
- `deduplicate_iocs` — Deduplicate IOCs and merge metadata from multiple sources.
- `generate_lifecycle_report` — Generate full IOC lifecycle status report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-indicator-lifecycle-management`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
