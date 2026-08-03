---
name: conducting-social-engineering-pretext-call
description: "Social engineering pretext call planning and tracking. Use when the user asks to conduct social engineering pretext call."
version: 1.0.0
tags:
  - conducting
  - threat-intel
  - incident-response
source: conducting-social-engineering-pretext-call
---

# Conducting Social Engineering Pretext Call

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Pretext Call Phases, Success Criteria Categories, Key Metrics, Legal Considerations, External References, NIST References

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** social engineering pretext call.
- Capability: Social engineering pretext call planning and tracking agent.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, social, engineering, pretext, call`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Generate pretext call templates for authorized engagements
2. Create tracking sheet for pretext calls
3. Analyze pretext call results for reporting
4. Execute pretext call planning and analysis

## Key concepts

- T1566.004** - Phishing: Voice (Vishing)
- T1598.003** - Phishing for Information: Spearphishing Voice
- T1589.002** - Gather Victim Identity Information: Email Addresses
- T1591.004** - Gather Victim Org Information: Identify Roles
- NIST SP 800-53 Rev. 5** - AT-2: Literacy Training and Awareness
- NIST SP 800-53 Rev. 5** - AT-3: Role-Based Training
- NIST SP 800-115** - Section 3.3: Social Engineering

## Tools & resources

- Pretext Call Phases
- Success Criteria Categories
- Key Metrics
- Legal Considerations
- External References
- NIST References
- Legal Frameworks
- Industry Standards

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

- `generate_pretext_templates` — Generate pretext call templates for authorized engagements.
- `create_call_tracking_sheet` — Create tracking sheet for pretext calls.
- `analyze_results` — Analyze pretext call results for reporting.
- `run_planning` — Execute pretext call planning and analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-social-engineering-pretext-call`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
