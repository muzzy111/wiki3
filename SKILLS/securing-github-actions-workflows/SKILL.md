---
name: securing-github-actions-workflows
description: "Agent for securing GitHub Actions workflows. Audits GitHub Actions workflow files for security issues including unpinned actions, excessive permissions, script injection risks, dangerous triggers, and missing secret.... Use when the user asks to secure github actions workflows."
version: 1.0.0
tags:
  - securing
  - threat-intel
source: securing-github-actions-workflows
---

# Securing Github Actions Workflows

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** Security Checks, Dangerous Expression Contexts, Permission Scopes, SLSA Framework

## When to use

- The user wants to **secure** github actions workflows.
- Capability: Agent for securing GitHub Actions workflows. Audits GitHub Actions workflow files for security issues including unpinned actions, excessive permissions, script injection risks, dangerous triggers, and missing secret protections.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, github, actions, workflows`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Pin all actions to SHA digests
2. Set restrictive default permissions
3. Sanitize all user-controlled inputs
4. Never use pull_request_target with PR checkout
5. Enable environment protection for production
6. Configure CODEOWNERS for workflow files
7. Enable Dependabot for github-actions
8. Audit third-party actions quarterly
9. Use OIDC instead of long-lived cloud credentials
10. Add harden-runner for network monitoring

## Key concepts

- Workflows are code and must be reviewed and protected
- Pin action dependencies to SHA digests
- Minimize GITHUB_TOKEN permissions
- BD-1: Define security requirements for build processes
- BD-2: Automate security validation of build configurations
- BD-3: Pin all external dependencies to immutable references
- Level 2: Hosted build service (GitHub Actions qualifies)
- Level 3: Hardened build platform with isolation guarantees

## Tools & resources

- Security Checks
- Dangerous Expression Contexts
- Permission Scopes
- SLSA Framework

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `securing-github-actions-workflows`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
