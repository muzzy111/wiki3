---
name: hunting-for-supply-chain-compromise
description: "Agent for hunting supply chain compromise indicators in software dependencies and builds. Use when the user asks to hunt for supply chain compromise."
version: 1.0.0
tags:
  - hunting
source: hunting-for-supply-chain-compromise
---

# Hunting for Supply Chain Compromise

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** NPM Lock File Analysis, pip-audit, Hash Verification, Dependency Confusion Checks, Splunk SPL, Supply Chain Indicators

## When to use

- The user wants to **hunt for** supply chain compromise.
- Capability: Agent for hunting supply chain compromise indicators in software dependencies and builds.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, supply, chain, compromise`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Scan package-lock.json for suspicious dependencies
2. Scan pip requirements.txt for suspicious packages
3. Verify binary hashes against a known-good manifest
4. Scan CI/CD build logs for supply chain indicators
5. Check if internal package names exist on public registries

## Key concepts

- Red Canary Threat Detection Report
- SANS Threat Hunting Summit Resources

## Tools & resources

- NPM Lock File Analysis
- pip-audit
- Hash Verification
- Dependency Confusion Checks
- Splunk SPL
- Supply Chain Indicators
- Detection Data Sources

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

- `scan_npm_lockfile` — Scan package-lock.json for suspicious dependencies.
- `scan_pip_requirements` — Scan pip requirements.txt for suspicious packages.
- `verify_binary_hashes` — Verify binary hashes against a known-good manifest.
- `scan_build_logs` — Scan CI/CD build logs for supply chain indicators.
- `check_dependency_confusion` — Check if internal package names exist on public registries.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-supply-chain-compromise`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
