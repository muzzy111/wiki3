---
name: performing-supply-chain-attack-simulation
description: "Simulate and detect software supply chain attacks: typosquatting, dependency confusion, hash verification. Use when the user asks to perform supply chain attack simulation."
version: 1.0.0
tags:
  - performing
source: performing-supply-chain-attack-simulation
---

# Performing Supply Chain Attack Simulation

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Tool Installation, PyPI JSON API, pip-audit CLI, pip Hash Verification, pypi-scan Typosquatting Detection, Levenshtein Distance Examples

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** supply chain attack simulation.
- Capability: Simulate and detect software supply chain attacks: typosquatting, dependency confusion, hash verification.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, supply, chain, attack, simulation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute Levenshtein edit distance between two strings
2. Check if package name is suspiciously similar to popular packages
3. Fetch package metadata from PyPI JSON API
4. Check if private package names exist on public PyPI
5. Download package and verify SHA-256 hash against PyPI published digests
6. Run pip-audit to scan installed packages for known vulnerabilities
7. Detect suspicious metadata patterns in a PyPI package

## Tools & resources

- Tool Installation
- PyPI JSON API
- pip-audit CLI
- pip Hash Verification
- pypi-scan Typosquatting Detection
- Levenshtein Distance Examples
- Dependency Confusion Test Structure
- Metadata Anomaly Indicators

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

- `get_levenshtein_distance` — Compute Levenshtein edit distance between two strings.
- `check_typosquatting` — Check if package name is suspiciously similar to popular packages.
- `query_pypi_metadata` — Fetch package metadata from PyPI JSON API.
- `check_dependency_confusion` — Check if private package names exist on public PyPI.
- `verify_package_hash` — Download package and verify SHA-256 hash against PyPI published digests.
- `run_pip_audit` — Run pip-audit to scan installed packages for known vulnerabilities.
- `analyze_metadata_anomalies` — Detect suspicious metadata patterns in a PyPI package.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-supply-chain-attack-simulation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
