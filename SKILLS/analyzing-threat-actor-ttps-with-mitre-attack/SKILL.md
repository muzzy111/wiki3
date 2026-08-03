---
name: analyzing-threat-actor-ttps-with-mitre-attack
description: "Threat actor TTP analysis agent using MITRE ATT&CK framework. Maps threat actor behaviors to ATT&CK techniques, performs coverage analysis, and generates detection gap reports. Use when the user asks to analyze threat actor ttps with mitre attack."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
source: analyzing-threat-actor-ttps-with-mitre-attack
---

# Analyzing Threat Actor TTPS with MITRE ATT&CK

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** MITRE ATT&CK, mitreattack-python, TAXII Server Access, STIX 2.1 Representation

## When to use

- The user wants to **analyze** threat actor ttps with mitre attack.
- Capability: Threat actor TTP analysis agent using MITRE ATT&CK framework. Maps threat actor behaviors to ATT&CK techniques, performs coverage analysis, and generates detection gap reports.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, threat, actor, ttps, mitre, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. **Report Ingestion**: Obtain threat intelligence report (vendor, OSINT, internal)
2. **Behavior Extraction**: Identify adversary actions described in the report
3. **Technique Mapping**: Map each behavior to ATT&CK technique IDs using the ATT&CK knowledge base
4. **Sub-technique Precision**: Drill down to sub-techniques where procedure details allow
5. **Layer Creation**: Generate ATT&CK Navigator layer with mapped techniques
6. **Priority Assessment**: Rank techniques by detection feasibility and impact
7. **Detection Inventory**: Catalog existing detection rules mapped to ATT&CK techniques
8. **Detection Layer**: Create Navigator layer showing detected techniques (green)
9. **Threat Layer**: Create layer showing adversary techniques (red)
10. **Overlay Analysis**: Combine layers to identify uncovered threat techniques

## Key concepts

- Enterprise ATT&CK: Windows, macOS, Linux, Cloud (AWS, Azure, GCP, SaaS, Office 365), Network, Containers
- Mobile ATT&CK: Android, iOS
- ICS ATT&CK: Industrial Control Systems
- Technique: T[NNNN] (e.g., T1059 - Command and Scripting Interpreter)
- Sub-technique: T[NNNN].[NNN] (e.g., T1059.001 - PowerShell)
- Group: G[NNNN] (e.g., G0016 - APT29)
- Software: S[NNNN] (e.g., S0154 - Cobalt Strike)
- Mitigation: M[NNNN] (e.g., M1049 - Antivirus/Antimalware)

## Tools & resources

- MITRE ATT&CK
- mitreattack-python
- TAXII Server Access
- STIX 2.1 Representation

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

- `load_attack_bundle`
- `get_techniques`
- `get_groups`
- `map_group_techniques`
- `tactic_coverage`
- `detection_gaps`
- `find_group`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-threat-actor-ttps-with-mitre-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
