---
name: conducting-full-scope-red-team-engagement
description: "Full-scope red team engagement management. Use when the user asks to conduct full scope red team engagement."
version: 1.0.0
tags:
  - conducting
  - threat-intel
source: conducting-full-scope-red-team-engagement
---

# Conducting Full Scope Red Team Engagement

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Key attackcti Methods, C2 Frameworks, External References, NIST References, Industry Frameworks, Compliance Alignments

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** full scope red team engagement.
- Capability: Full-scope red team engagement management agent.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, full, scope, team, engagement`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Retrieve MITRE ATT&CK techniques for engagement planning
2. Generate red team engagement plan with phases
3. Generate C2 infrastructure preparation checklist
4. Execute red team engagement planning

## Key concepts

- T1583.003** - Acquire Infrastructure: Virtual Private Server
- T1587.003** - Develop Capabilities: Digital Certificates
- T1608.001** - Stage Capabilities: Upload Malware
- T1566.001** - Phishing: Spearphishing Attachment
- T1566.002** - Phishing: Spearphishing Link
- T1195.002** - Supply Chain Compromise: Compromise Software Supply Chain
- T1059.003** - Command and Scripting Interpreter: Windows Command Shell
- T1204.001** - User Execution: Malicious Link

## Tools & resources

- Key attackcti Methods
- C2 Frameworks
- External References
- NIST References
- Industry Frameworks
- Compliance Alignments

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

- `get_attack_techniques` — Retrieve MITRE ATT&CK techniques for engagement planning.
- `generate_engagement_plan` — Generate red team engagement plan with phases.
- `generate_c2_checklist` — Generate C2 infrastructure preparation checklist.
- `run_planning` — Execute red team engagement planning.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-full-scope-red-team-engagement`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
