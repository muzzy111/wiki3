---
name: performing-scada-hmi-security-assessment
description: "SCADA HMI Security Assessment agent — analyzes SCADA HMI configurations for security weaknesses including default credentials, unencrypted protocols, and missing access controls. Use when the user asks to perform scada hmi security assessment."
version: 1.0.0
tags:
  - performing
source: performing-scada-hmi-security-assessment
---

# Performing Scada Hmi Security Assessment

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** SCADA Protocol Ports, pyshark for Protocol Analysis, HMI Configuration Checks, Common Default Credentials

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** scada hmi security assessment.
- Capability: SCADA HMI Security Assessment agent — analyzes SCADA HMI configurations for security weaknesses including default credentials, unencrypted protocols, and missing access controls.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, scada, security, assessment`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check for open SCADA-specific ports on target
2. Check for default credentials on HMI web interface
3. Analyze PCAP for insecure SCADA protocols
4. Analyze HMI configuration file for security weaknesses
5. Run all assessments and build consolidated report

## Tools & resources

- SCADA Protocol Ports
- pyshark for Protocol Analysis
- HMI Configuration Checks
- Common Default Credentials

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

## Automation entry points

- `scan_open_ports` — Check for open SCADA-specific ports on target.
- `check_default_credentials_http` — Check for default credentials on HMI web interface.
- `analyze_pcap_protocols` — Analyze PCAP for insecure SCADA protocols.
- `check_hmi_configuration` — Analyze HMI configuration file for security weaknesses.
- `generate_report` — Run all assessments and build consolidated report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-scada-hmi-security-assessment`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
