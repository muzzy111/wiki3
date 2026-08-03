---
name: building-adversary-infrastructure-tracking-system
description: "Adversary Infrastructure Tracking Agent - Tracks threat actor infrastructure using passive DNS and certificate transparency. Use when the user asks to build adversary infrastructure tracking system."
version: 1.0.0
tags:
  - building
source: building-adversary-infrastructure-tracking-system
---

# Building Adversary Infrastructure Tracking System

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** URLhaus API, ThreatFox API, Pivoting Techniques, Infrastructure Relationships

## When to use

- The user wants to **build** adversary infrastructure tracking system.
- Capability: Adversary Infrastructure Tracking Agent - Tracks threat actor infrastructure using passive DNS and certificate transparency.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, adversary, infrastructure, tracking, system`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query crt.sh certificate transparency for domain certificates
2. Query URLhaus for malicious URL hosting information
3. Query ThreatFox for IOC intelligence
4. Pivot on certificate data to find related infrastructure
5. Build infrastructure map from seed IOCs
6. Generate infrastructure tracking report

## Tools & resources

- URLhaus API
- ThreatFox API
- Pivoting Techniques
- Infrastructure Relationships

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

- `query_crtsh` — Query crt.sh certificate transparency for domain certificates.
- `query_urlhaus` — Query URLhaus for malicious URL hosting information.
- `query_threatfox` — Query ThreatFox for IOC intelligence.
- `pivot_on_certificate` — Pivot on certificate data to find related infrastructure.
- `build_infrastructure_map` — Build infrastructure map from seed IOCs.
- `generate_report` — Generate infrastructure tracking report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-adversary-infrastructure-tracking-system`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
