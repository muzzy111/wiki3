---
name: implementing-attack-path-analysis-with-xm-cyber
description: "Attack path analysis agent using XM Cyber REST API for exposure management. Use when the user asks to implement attack path analysis with xm cyber."
version: 1.0.0
tags:
  - implementing
source: implementing-attack-path-analysis-with-xm-cyber
---

# Implementing Attack Path Analysis with Xm Cyber

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** XM Cyber Resources, Industry Frameworks, Related Technologies

## When to use

- The user wants to **implement** attack path analysis with xm cyber.
- Capability: Attack path analysis agent using XM Cyber REST API for exposure management.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, attack, path, analysis, cyber`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Analyze choke points to identify highest-impact remediation targets
2. Compute risk score based on attack path complexity and critical asset exposure
3. Generate comprehensive attack path analysis report

## Key concepts

- Gartner CTEM: Continuous Threat Exposure Management framework (2022)
- MITRE ATT&CK: Lateral movement and privilege escalation techniques
- NIST CSF 2.0: Identify, Protect, Detect functions
- CIS Controls v8.1 Control 7: Continuous Vulnerability Management
- BloodHound/SharpHound: Active Directory attack path analysis
- PurpleKnight: AD security assessment
- CrowdStrike Falcon Exposure Management
- Tenable Identity Exposure

## Tools & resources

- XM Cyber Resources
- Industry Frameworks
- Related Technologies

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

- `analyze_choke_points` — Analyze choke points to identify highest-impact remediation targets.
- `compute_risk_score` — Compute risk score based on attack path complexity and critical asset exposure.
- `generate_report` — Generate comprehensive attack path analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-attack-path-analysis-with-xm-cyber`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
