---
name: implementing-github-advanced-security-for-code-scanning
description: "Agent for managing GitHub Advanced Security code scanning with CodeQL. Use when the user asks to implement github advanced security for code scanning."
version: 1.0.0
tags:
  - implementing
source: implementing-github-advanced-security-for-code-scanning
---

# Implementing Github Advanced Security for Code Scanning

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** GitHub Code Scanning API, Secret Scanning API, Supported Languages, NIST SP 800

## When to use

- The user wants to **implement** github advanced security for code scanning.
- Capability: Agent for managing GitHub Advanced Security code scanning with CodeQL.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, github, advanced, security, code, scanning`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Call GitHub API via gh CLI
2. Get code scanning alerts for a repository
3. Get secret scanning alerts for a repository
4. Get Dependabot alerts for a repository
5. Analyze code scanning alerts and produce summary
6. Analyze secret scanning alerts
7. Analyze Dependabot vulnerability alerts
8. Generate a CodeQL analysis GitHub Actions workflow

## Key concepts

- PO.3: Define security requirements --- CodeQL enforces security policies through query suites
- PW.4: Reuse existing, well-secured software --- Dependabot ensures dependencies are patched
- PW.7: Review and test code for vulnerabilities --- Automated code scanning on every PR
- PW.8: Test executable code --- SARIF integration enables combining SAST with DAST results
- RV.1: Identify and confirm vulnerabilities --- Security overview tracks alerts across the organization
- SCS-1: Source code management security --- Branch protection rules, required reviewers
- SCS-2: Build pipelines --- CodeQL runs in GitHub Actions with pinned action versions
- SCS-5: Artifact management --- Dependency review prevents vulnerable packages from merging

## Tools & resources

- GitHub Code Scanning API
- Secret Scanning API
- Supported Languages
- NIST SP 800

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

- `gh_api` — Call GitHub API via gh CLI.
- `get_code_scanning_alerts` — Get code scanning alerts for a repository.
- `get_secret_scanning_alerts` — Get secret scanning alerts for a repository.
- `get_dependabot_alerts` — Get Dependabot alerts for a repository.
- `analyze_code_scanning_alerts` — Analyze code scanning alerts and produce summary.
- `analyze_secret_alerts` — Analyze secret scanning alerts.
- `analyze_dependabot_alerts` — Analyze Dependabot vulnerability alerts.
- `generate_codeql_workflow` — Generate a CodeQL analysis GitHub Actions workflow.
- `full_security_audit` — Run full GHAS security audit for a repository.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-github-advanced-security-for-code-scanning`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
