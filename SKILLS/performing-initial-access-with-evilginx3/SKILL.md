---
name: performing-initial-access-with-evilginx3
description: "Agent for performing initial access simulation with Evilginx3 phishlet analysis — educational/authorized pentest use. Use when the user asks to perform initial access with evilginx3."
version: 1.0.0
tags:
  - performing
source: performing-initial-access-with-evilginx3
---

# Performing Initial Access with Evilginx3

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Phishlet Structure, Industry Standards, Official Resources, Research Papers

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** initial access with evilginx3.
- Capability: Agent for performing initial access simulation with Evilginx3 phishlet analysis — educational/authorized pentest use.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, initial, access, evilginx3`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Parse an Evilginx3 YAML phishlet file and extract configuration
2. Analyze Evilginx session capture logs
3. Check if Evilginx3 is installed and get version
4. List available phishlets in a directory
5. Generate detection signatures for a phishlet's attack patterns

## Key concepts

- NIST SP 800-63B** - Digital Identity Guidelines: Authentication
- Microsoft Storm-1167 AiTM Phishing Campaign Analysis (2023)
- Deepwatch: Catching the Phish - Detecting Evilginx & AiTM
- BDO Security: MFA-Phishing as Initial Access in Red Teaming

## Tools & resources

- Phishlet Structure
- Industry Standards
- Official Resources
- Research Papers

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

- `parse_phishlet` — Parse an Evilginx3 YAML phishlet file and extract configuration.
- `analyze_session_log` — Analyze Evilginx session capture logs.
- `check_evilginx_installation` — Check if Evilginx3 is installed and get version.
- `list_phishlets` — List available phishlets in a directory.
- `generate_detection_rules` — Generate detection signatures for a phishlet's attack patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-initial-access-with-evilginx3`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
