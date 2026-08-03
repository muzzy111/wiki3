---
name: conducting-social-engineering-penetration-test
description: "Social engineering penetration test management agent using GoPhish API. Use when the user asks to conduct social engineering penetration test."
version: 1.0.0
tags:
  - conducting
  - threat-intel
  - incident-response
source: conducting-social-engineering-penetration-test
---

# Conducting Social Engineering Penetration Test

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Campaign Metrics, Social Engineering Vectors, External References, Frameworks, Legal Considerations

## When to use

- The user wants to **conduct** social engineering penetration test.
- Capability: Social engineering penetration test management agent using GoPhish API.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, social, engineering, penetration, test`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Analyze phishing campaign results for metrics
2. Generate social engineering pretext scenarios for testing
3. Execute social engineering assessment analysis

## Key concepts

- NIST SP 800-50: Building an Information Technology Security Awareness and Training Program
- SANS Security Awareness Maturity Model
- Must have explicit written authorization
- Cannot target personal email or devices without consent
- GDPR compliance for EU employees
- Cannot use real malware or destructive payloads
- Results must be anonymized in reporting to protect individuals

## Tools & resources

- Campaign Metrics
- Social Engineering Vectors
- External References
- Frameworks
- Legal Considerations

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

- `analyze_campaign_results` — Analyze phishing campaign results for metrics.
- `generate_pretext_scenarios` — Generate social engineering pretext scenarios for testing.
- `run_assessment` — Execute social engineering assessment analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-social-engineering-penetration-test`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
