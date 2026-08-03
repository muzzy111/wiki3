---
name: implementing-secret-scanning-with-gitleaks
description: "Gitleaks secret scanning agent. Wraps the Gitleaks CLI to scan git repositories, directories, or specific commits for hardcoded secrets, API keys, tokens, and credentials. Parses JSON output into structured findings. Use when the user asks to implement secret scanning with gitleaks."
version: 1.0.0
tags:
  - implementing
source: implementing-secret-scanning-with-gitleaks
---

# Implementing Secret Scanning with Gitleaks

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** OWASP SAMM, PCI DSS v4.0

## When to use

- The user wants to **implement** secret scanning with gitleaks.
- Capability: Gitleaks secret scanning agent. Wraps the Gitleaks CLI to scan git repositories, directories, or specific commits for hardcoded secrets, API keys, tokens, and credentials. Parses JSON output into structured findings.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, secret, scanning, gitleaks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Locate the gitleaks binary on the system
2. Run gitleaks detect on a repository or directory
3. Run gitleaks protect for pre-commit scanning
4. Parse gitleaks JSON output into structured findings
5. Print human-readable summary of secrets found

## Key concepts

- Hardcoded credentials in source code enable unauthorized access
- Gitleaks detects API keys, passwords, tokens, and private keys before they reach repositories
- CWE-798: Use of Hard-coded Credentials is a direct mapping
- PW.1.1: Identify security requirements including credential management
- Secrets should never be stored in source code; use environment variables or secrets managers
- PS.1.1: Store code securely with access controls and secret scanning
- Implement pre-commit hooks to prevent secrets from entering version control
- Code signing and secret scanning ensure software releases do not contain embedded credentials

## Tools & resources

- OWASP SAMM
- PCI DSS v4.0

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

- `find_gitleaks_binary` — Locate the gitleaks binary on the system.
- `run_detect` — Run gitleaks detect on a repository or directory.
- `run_protect` — Run gitleaks protect for pre-commit scanning.
- `parse_findings` — Parse gitleaks JSON output into structured findings.
- `format_summary` — Print human-readable summary of secrets found.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-secret-scanning-with-gitleaks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
