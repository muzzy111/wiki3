---
name: detecting-supply-chain-attacks-in-ci-cd
description: "Agent for detecting supply chain attacks in CI/CD pipelines. Use when the user asks to detect supply chain attacks in ci cd."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-supply-chain-attacks-in-ci-cd
---

# Detecting Supply Chain Attacks in Ci Cd

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** GitHub Actions Workflow Parsing, Dependency Confusion Check, Pinning Actions to SHA

## When to use

- The user wants to **detect** supply chain attacks in ci cd.
- Capability: Agent for detecting supply chain attacks in CI/CD pipelines.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, supply, chain, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan a single GitHub Actions workflow file for supply chain risks
2. Check if a GitHub Action is pinned to a commit SHA
3. Check for script injection via GitHub context expressions
4. Scan all workflow files in a directory
5. Check if a private package name exists on public registries
6. Scan Dockerfile for supply chain risks

## Tools & resources

- GitHub Actions Workflow Parsing
- Dependency Confusion Check
- Pinning Actions to SHA

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

- `scan_workflow_file` — Scan a single GitHub Actions workflow file for supply chain risks.
- `check_action_pinning` — Check if a GitHub Action is pinned to a commit SHA.
- `check_script_injection` — Check for script injection via GitHub context expressions.
- `scan_directory` — Scan all workflow files in a directory.
- `check_dependency_confusion` — Check if a private package name exists on public registries.
- `scan_dockerfile` — Scan Dockerfile for supply chain risks.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-supply-chain-attacks-in-ci-cd`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
