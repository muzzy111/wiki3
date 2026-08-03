---
name: performing-ot-network-security-assessment
description: "Agent for performing OT network security assessment based on Purdue model. Use when the user asks to perform ot network security assessment."
version: 1.0.0
tags:
  - performing
  - network
source: performing-ot-network-security-assessment
---

# Performing Ot Network Security Assessment

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** OT Protocol Ports

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** ot network security assessment.
- Capability: Agent for performing OT network security assessment based on Purdue model.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, network, security, assessment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Assess OT asset inventory against Purdue model zones
2. Check OT network segmentation and firewall rules
3. Scan for common OT protocols on a subnet using nmap
4. Generate comprehensive OT security assessment

## Key concepts

- Defines foundational concepts including zones, conduits, security levels, and the IACS reference architecture
- Establishes the vocabulary used across all parts of the standard
- Requirements for an IACS security management system (SMS)
- Covers risk assessment, security policies, organization, staff competence, and awareness
- Defines the process for partitioning an IACS into zones and conduits
- Establishes Security Level targets (SL-T) for each zone based on risk assessment
- Zone characteristics: assets, access points, communication channels, data flows
- Conduit characteristics: connected zones, protocols, security countermeasures

## Tools & resources

- OT Protocol Ports

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

- `assess_asset_inventory` — Assess OT asset inventory against Purdue model zones.
- `assess_network_segmentation` — Check OT network segmentation and firewall rules.
- `scan_ot_protocols` — Scan for common OT protocols on a subnet using nmap.
- `generate_assessment_report` — Generate comprehensive OT security assessment.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-ot-network-security-assessment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
