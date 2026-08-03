---
name: analyzing-sbom-for-supply-chain-vulnerabilities
description: "SBOM supply chain vulnerability analysis agent. Parses CycloneDX and SPDX JSON SBOMs, correlates components against the NVD 2.0 API for known CVEs, builds dependency graphs with networkx, calculates risk scores, and.... Use when the user asks to analyze sbom for supply chain vulnerabilities."
version: 1.0.0
tags:
  - analyzing
source: analyzing-sbom-for-supply-chain-vulnerabilities
---

# Analyzing Sbom for Supply Chain Vulnerabilities

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** NVD API 2.0, syft, grype, CLI Usage Examples

## When to use

- The user wants to **analyze** sbom for supply chain vulnerabilities.
- Capability: SBOM supply chain vulnerability analysis agent. Parses CycloneDX and SPDX JSON SBOMs, correlates components against the NVD 2.0 API for known CVEs, builds dependency graphs with networkx, calculates risk scores, and generates compliance reports.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, sbom, supply, chain, vulnerabilities`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Detect whether the SBOM is CycloneDX or SPDX format
2. Parse CycloneDX JSON SBOM and extract components and dependencies
3. Parse SPDX JSON SBOM and extract components and dependencies
4. Load and parse an SBOM file, auto-detecting the format
5. Query NVD 2.0 API for CVEs matching a CPE name
6. Query NVD 2.0 API for CVEs matching a keyword search
7. Extract structured CVE information from an NVD API response entry
8. Correlate all SBOM components against NVD for known vulnerabilities

## Tools & resources

- NVD API 2.0
- syft
- grype
- CLI Usage Examples

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

- `detect_sbom_format` — Detect whether the SBOM is CycloneDX or SPDX format.
- `parse_cyclonedx` — Parse CycloneDX JSON SBOM and extract components and dependencies.
- `parse_spdx` — Parse SPDX JSON SBOM and extract components and dependencies.
- `parse_sbom` — Load and parse an SBOM file, auto-detecting the format.
- `query_nvd_by_cpe` — Query NVD 2.0 API for CVEs matching a CPE name.
- `query_nvd_by_keyword` — Query NVD 2.0 API for CVEs matching a keyword search.
- `extract_cve_info` — Extract structured CVE information from an NVD API response entry.
- `correlate_cves` — Correlate all SBOM components against NVD for known vulnerabilities.
- `build_dependency_graph` — Build a directed dependency graph using networkx.
- `analyze_dependency_graph` — Analyze the dependency graph for risk metrics.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-sbom-for-supply-chain-vulnerabilities`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
