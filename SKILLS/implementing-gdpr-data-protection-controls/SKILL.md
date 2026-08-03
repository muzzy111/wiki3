---
name: implementing-gdpr-data-protection-controls
description: "Agent for assessing and managing GDPR data protection compliance. Use when the user asks to implement gdpr data protection controls."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-gdpr-data-protection-controls
---

# Implementing Gdpr Data Protection Controls

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Key GDPR Articles, Cross, Primary Legislation, Key Articles Reference, Supporting Standards and Guidance, Supervisory Authorities

## When to use

- The user wants to **implement** gdpr data protection controls.
- Capability: Agent for assessing and managing GDPR data protection compliance.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, gdpr, data, protection, controls`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Scan a file for GDPR-relevant personal data patterns
2. Classify data into GDPR special categories
3. Assess Records of Processing Activities (ROPA) completeness per Art 30
4. Assess Data Subject Request handling compliance
5. Assess breach notification compliance (Art 33/34)
6. Generate Article 32 security measures compliance checklist

## Key concepts

- Adopted: April 14, 2016
- Effective: May 25, 2018
- Scope: Applies to any organization processing personal data of EU/EEA residents
- Chapters: 11 chapters, 99 articles, 173 recitals
- Enforcement: Supervisory authorities in each EU member state
- Penalties: Up to EUR 20 million or 4% of annual global turnover (whichever is greater)
- Art. 5: Core processing principles (lawfulness, fairness, transparency, purpose limitation, data minimization, accurac
- Art. 6: Six lawful bases for processing

## Tools & resources

- Key GDPR Articles
- Cross
- Primary Legislation
- Key Articles Reference
- Supporting Standards and Guidance
- Supervisory Authorities

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

- `scan_for_pii` — Scan a file for GDPR-relevant personal data patterns.
- `classify_data_category` — Classify data into GDPR special categories.
- `assess_ropa_completeness` — Assess Records of Processing Activities (ROPA) completeness per Art 30.
- `assess_dsr_handling` — Assess Data Subject Request handling compliance.
- `assess_breach_notification_readiness` — Assess breach notification compliance (Art 33/34).
- `generate_art32_checklist` — Generate Article 32 security measures compliance checklist.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-gdpr-data-protection-controls`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
