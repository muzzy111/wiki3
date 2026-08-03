---
name: conducting-post-incident-lessons-learned
description: "Post-incident lessons learned analysis. Use when the user asks to conduct post incident lessons learned."
version: 1.0.0
tags:
  - conducting
  - threat-intel
  - incident-response
source: conducting-post-incident-lessons-learned
---

# Conducting Post Incident Lessons Learned

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key Metrics, NIST SP 800-61 Phases, External References, SANS PICERL, ISO 27001, Google SRE Post-Mortem Culture

## When to use

- The user wants to **conduct** post incident lessons learned.
- Capability: Post-incident lessons learned analysis agent.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, post, incident, lessons, learned`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Analyze incident timeline for response gaps
2. Calculate key incident response metrics
3. Generate prioritized action items from analysis
4. Generate lessons learned report template
5. Execute post-incident lessons learned analysis

## Key concepts

- Recommends formal review within days of resolution
- Recover (RC) function: Learning from incidents
- RC.CO-03: Recovery activities and progress communicated
- Emphasis on continuous improvement of IR capabilities
- Phase 6: Final phase of incident handling
- Formal review with all stakeholders
- Document improvements and update procedures
- Map incident techniques to ATT&CK framework

## Tools & resources

- Key Metrics
- NIST SP 800-61 Phases
- External References
- SANS PICERL
- ISO 27001
- Google SRE Post-Mortem Culture

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

- `analyze_incident_timeline` — Analyze incident timeline for response gaps.
- `calculate_metrics` — Calculate key incident response metrics.
- `generate_action_items` — Generate prioritized action items from analysis.
- `generate_report_template` — Generate lessons learned report template.
- `run_analysis` — Execute post-incident lessons learned analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-post-incident-lessons-learned`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
