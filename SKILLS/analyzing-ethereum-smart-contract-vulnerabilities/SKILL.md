---
name: analyzing-ethereum-smart-contract-vulnerabilities
description: "Smart Contract Security Agent - runs Slither and Mythril analysis on Solidity contracts. Use when the user asks to analyze ethereum smart contract vulnerabilities."
version: 1.0.0
tags:
  - analyzing
source: analyzing-ethereum-smart-contract-vulnerabilities
---

# Analyzing Ethereum Smart Contract Vulnerabilities

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** Slither CLI, Mythril CLI, Slither Detector Severity Levels, Slither JSON Output Structure

## When to use

- The user wants to **analyze** ethereum smart contract vulnerabilities.
- Capability: Smart Contract Security Agent - runs Slither and Mythril analysis on Solidity contracts.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, ethereum, smart, contract, vulnerabilities`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run Slither static analysis on Solidity contract
2. Run Mythril symbolic execution analysis
3. Parse and categorize Slither detector findings
4. Parse Mythril symbolic execution findings
5. Merge and deduplicate findings from both tools

## Tools & resources

- Slither CLI
- Mythril CLI
- Slither Detector Severity Levels
- Slither JSON Output Structure

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

- `run_slither` — Run Slither static analysis on Solidity contract.
- `run_mythril` — Run Mythril symbolic execution analysis.
- `analyze_slither_results` — Parse and categorize Slither detector findings.
- `analyze_mythril_results` — Parse Mythril symbolic execution findings.
- `deduplicate_findings` — Merge and deduplicate findings from both tools.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-ethereum-smart-contract-vulnerabilities`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
