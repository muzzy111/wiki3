---
name: detecting-typosquatting-packages-in-npm-pypi
description: "Typosquatting Detection Agent - Detects typosquatting packages in npm and PyPI registries using Levenshtein distance analysis, publish date heuristics, and download count anomalies. Use when the user asks to detect typosquatting packages in npm pypi."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-typosquatting-packages-in-npm-pypi
---

# Detecting Typosquatting Packages in Npm Pypi

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Arguments, Key Functions, Scoring Weights

## When to use

- The user wants to **detect** typosquatting packages in npm pypi.
- Capability: Typosquatting Detection Agent - Detects typosquatting packages in npm and PyPI registries using Levenshtein distance analysis, publish date heuristics, and download count anomalies.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, typosquatting, packages, pypi`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Normalize a PyPI package name per PEP 503
2. Generate potential typosquat variants of a package name. Produces candidates via character omission, transposition, insertion, substitution (keyboard-adjacent), and separator manipulation
3. Query the PyPI JSON API for package metadata. Returns parsed metadata or None if the package does not exist
4. Query the npm registry API for package metadata. Returns parsed metadata or None if the package does not exist
5. Get recent download stats for a PyPI package from pypistats.org
6. Get last-week download count for an npm package
7. Compute a weighted suspicion score for a candidate typosquat package. Signals: - Levenshtein distance (1 = 40pts, 2 = 25pts, 3 = 10pts) - Publish recency: created within 90 days = 15pts - Download ratio: candidate/target < 0.001 = 15pts - Different author/maintainer = 10pts - Low version count (<=2) = 5pts - No repository URL = 5pts
8. Classify risk level based on composite score

## Tools & resources

- Arguments
- Key Functions
- Scoring Weights

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

- `normalize_pypi_name` — Normalize a PyPI package name per PEP 503.
- `generate_typosquat_candidates` — Generate potential typosquat variants of a package name. Produces candidates via character omission, transposition, insertion, substitution (keyboard-adjacent), and separator manipulation.
- `query_pypi_package` — Query the PyPI JSON API for package metadata. Returns parsed metadata or None if the package does not exist.
- `query_npm_package` — Query the npm registry API for package metadata. Returns parsed metadata or None if the package does not exist.
- `get_pypi_downloads` — Get recent download stats for a PyPI package from pypistats.org.
- `get_npm_downloads` — Get last-week download count for an npm package.
- `compute_suspicion_score` — Compute a weighted suspicion score for a candidate typosquat package. Signals: - Levenshtein distance (1 = 40pts, 2 = 25pts, 3 = 10pts) - Publish recency: created within 90 days = 15pts - Download ratio: candidate/target < 0.001 = 15pts - Different author/maintainer = 10pts - Low version count (<=2) = 5pts - No repository URL = 5pts
- `classify_risk` — Classify risk level based on composite score.
- `scan_package` — Scan for typosquat candidates of a target package. Generates candidates, checks which exist in the registry, scores them, and returns ranked results.
- `scan_dependency_file` — Scan all dependencies in a requirements file or package.json.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-typosquatting-packages-in-npm-pypi`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
