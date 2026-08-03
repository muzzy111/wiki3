---
name: performing-sca-dependency-scanning-with-snyk
description: "SCA Dependency Scanning with Snyk agent — runs Snyk CLI to test project dependencies for known vulnerabilities, generates SARIF output, and enforces quality gates. Use when the user asks to perform sca dependency scanning with snyk."
version: 1.0.0
tags:
  - performing
source: performing-sca-dependency-scanning-with-snyk
---

# Performing Sca Dependency Scanning with Snyk

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** JSON Output Structure, OWASP SAMM, PCI DSS v4.0, License Compliance Framework

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** sca dependency scanning with snyk.
- Capability: SCA Dependency Scanning with Snyk agent — runs Snyk CLI to test project dependencies for known vulnerabilities, generates SARIF output, and enforces quality gates.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, dependency, scanning, snyk`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run snyk test and return parsed JSON results
2. Run snyk monitor to create a snapshot for continuous monitoring
3. Extract and normalize vulnerability findings
4. Apply quality gate based on severity counts
5. Convert findings to SARIF 2.1.0 format for GitHub integration
6. Run full scan and build consolidated report

## Key concepts

- Applications using components with known vulnerabilities may be exploitable
- SCA tools like Snyk identify vulnerable versions and provide upgrade paths
- Includes both direct and transitive dependency scanning
- PW.4.1: Verify that acquired software meets security requirements
- PW.4.2: Review, analyze, and test software to identify vulnerabilities
- SCA scanning of all third-party components before integration
- Track the origin and version of all third-party software components
- Snyk monitor provides continuous tracking of dependency versions

## Tools & resources

- JSON Output Structure
- OWASP SAMM
- PCI DSS v4.0
- License Compliance Framework

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

- `run_snyk_test` — Run snyk test and return parsed JSON results.
- `run_snyk_monitor` — Run snyk monitor to create a snapshot for continuous monitoring.
- `parse_vulnerabilities` — Extract and normalize vulnerability findings.
- `apply_quality_gate` — Apply quality gate based on severity counts.
- `generate_sarif` — Convert findings to SARIF 2.1.0 format for GitHub integration.
- `generate_report` — Run full scan and build consolidated report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-sca-dependency-scanning-with-snyk`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
