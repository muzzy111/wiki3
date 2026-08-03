---
name: performing-windows-artifact-analysis-with-eric-zimmerman-tools
description: "Agent for Windows artifact analysis with Eric Zimmerman tools. Runs EZ tools (MFTECmd, PECmd, LECmd, JLECmd, ShellBags Explorer CLI) via subprocess, parses CSV output, and builds a forensic timeline from Windows.... Use when the user asks to perform windows artifact analysis with eric zimmerman tools."
version: 1.0.0
tags:
  - performing
  - windows
source: performing-windows-artifact-analysis-with-eric-zimmerman-tools
---

# Performing Windows Artifact Analysis with Eric Zimmerman Tools

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** EZ Tools Suite, Common CLI Flags, Key Artifacts and Locations, Industry Standards, Tool References, Official Resources

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** windows artifact analysis with eric zimmerman tools.
- Capability: Agent for Windows artifact analysis with Eric Zimmerman tools. Runs EZ tools (MFTECmd, PECmd, LECmd, JLECmd, ShellBags Explorer CLI) via subprocess, parses CSV output, and builds a forensic timeline from Windows filesystem and registry artifacts.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, windows, artifact, analysis, eric, zimmerman`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Confirm scope, authorization, and safety constraints
2. Prepare tooling and environment for windows artifact analysis with eric zimmerman tools
3. Execute the technique methodically and record evidence
4. Validate outcomes and eliminate false paths
5. Report results with clear remediation guidance

## Key concepts

- Framework for collecting, examining, and analyzing digital evidence
- Defines procedures for forensic acquisition and chain of custody
- EZ Tools align with NIST evidence handling and analysis guidelines
- International standard for identification, collection, acquisition, and preservation
- KAPE collection follows ISO 27037 acquisition methodology
- Timeline Explorer output supports ISO-compliant reporting
- Scientific Working Group on Digital Evidence guidelines
- Defines validation requirements for forensic tools

## Tools & resources

- EZ Tools Suite
- Common CLI Flags
- Key Artifacts and Locations
- Industry Standards
- Tool References
- Official Resources

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-windows-artifact-analysis-with-eric-zimmerman-tools`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
