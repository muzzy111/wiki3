---
name: performing-s7comm-protocol-security-analysis
description: "S7comm Protocol Security Analysis agent — analyzes Siemens S7 protocol traffic from PCAP files using pyshark to detect unauthorized PLC access, password brute-force, and dangerous write operations. Use when the user asks to perform s7comm protocol security analysis."
version: 1.0.0
tags:
  - performing
source: performing-s7comm-protocol-security-analysis
---

# Performing S7comm Protocol Security Analysis

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** pyshark Library, S7comm Function Codes, S7comm Protocol Overview

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** s7comm protocol security analysis.
- Capability: S7comm Protocol Security Analysis agent — analyzes Siemens S7 protocol traffic from PCAP files using pyshark to detect unauthorized PLC access, password brute-force, and dangerous write operations.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, s7comm, protocol, security, analysis`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load S7comm packets from PCAP file
2. Detect potential unauthorized access to PLCs
3. Flag write, run, and stop operations on PLCs
4. Detect authentication brute-force via repeated setup_communication with errors
5. Compute traffic statistics
6. Run all analyses and produce consolidated JSON report

## Tools & resources

- pyshark Library
- S7comm Function Codes
- S7comm Protocol Overview

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

- `load_pcap` — Load S7comm packets from PCAP file.
- `detect_unauthorized_access` — Detect potential unauthorized access to PLCs.
- `detect_dangerous_operations` — Flag write, run, and stop operations on PLCs.
- `detect_brute_force` — Detect authentication brute-force via repeated setup_communication with errors.
- `analyze_traffic_patterns` — Compute traffic statistics.
- `generate_report` — Run all analyses and produce consolidated JSON report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-s7comm-protocol-security-analysis`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
