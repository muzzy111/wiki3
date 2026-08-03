---
name: analyzing-campaign-attribution-evidence
description: "Campaign attribution analysis agent using Diamond Model and ACH methodology. Evaluates attribution evidence including infrastructure overlaps, TTP consistency, malware code similarity, timing patterns, and language.... Use when the user asks to analyze campaign attribution evidence."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
source: analyzing-campaign-attribution-evidence
---

# Analyzing Campaign Attribution Evidence

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Infrastructure Overlap Tools, Confidence Assessment Framework, STIX Attribution Objects, Applicable Standards, Industry Frameworks

## When to use

- The user wants to **analyze** campaign attribution evidence.
- Capability: Campaign attribution analysis agent using Diamond Model and ACH methodology. Evaluates attribution evidence including infrastructure overlaps, TTP consistency, malware code similarity, timing patterns, and language artifacts.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, campaign, attribution, evidence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Structure evidence using the Diamond Model of Intrusion Analysis
2. Score infrastructure overlap between campaign and known actor
3. Score TTP consistency using MITRE ATT&CK technique overlap
4. Score malware code similarity based on feature comparison
5. Analyze operational timing to infer timezone/working hours
6. Detect language artifacts in malware strings or documents
7. Analysis of Competing Hypotheses (ACH) for attribution
8. Compute weighted attribution confidence score

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

- Infrastructure Overlap Tools
- Confidence Assessment Framework
- STIX Attribution Objects
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

- `diamond_model_analysis` — Structure evidence using the Diamond Model of Intrusion Analysis.
- `evaluate_infrastructure_overlap` — Score infrastructure overlap between campaign and known actor.
- `evaluate_ttp_consistency` — Score TTP consistency using MITRE ATT&CK technique overlap.
- `evaluate_malware_similarity` — Score malware code similarity based on feature comparison.
- `evaluate_timing_pattern` — Analyze operational timing to infer timezone/working hours.
- `evaluate_language_artifacts` — Detect language artifacts in malware strings or documents.
- `ach_analysis` — Analysis of Competing Hypotheses (ACH) for attribution.
- `compute_attribution_score` — Compute weighted attribution confidence score.
- `generate_attribution_report` — Generate structured attribution assessment report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-campaign-attribution-evidence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
