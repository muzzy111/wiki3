---
name: securing-helm-chart-deployments
description: "Agent for securing Helm chart deployments. Validates chart provenance, renders and scans templates for security misconfigurations, checks security contexts, and enforces Helm deployment security baselines. Use when the user asks to secure helm chart deployments."
version: 1.0.0
tags:
  - securing
source: securing-helm-chart-deployments
---

# Securing Helm Chart Deployments

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** Security Context Fields, Security Checks, NIST SP 800-190, CIS Kubernetes Benchmark v1.8, Helm Security Resources, Compliance Mappings

## When to use

- The user wants to **secure** helm chart deployments.
- Capability: Agent for securing Helm chart deployments. Validates chart provenance, renders and scans templates for security misconfigurations, checks security contexts, and enforces Helm deployment security baselines.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, helm, chart, deployments`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Set secure defaults in values.yaml (non-root, read-only fs, resource limits)
2. Add network policy templates
3. Use external secrets references
4. Lint with `helm lint --strict`
5. Render templates: `helm template test ./chart -f values.yaml > rendered.yaml`
6. Lint: `helm lint ./chart --strict`
7. Scan: `kube-linter lint rendered.yaml`
8. Scan: `checkov -f rendered.yaml --framework kubernetes`
9. Sign chart: `helm package ./chart --sign`
10. Verify chart signature: `helm verify chart.tgz`

## Key concepts

- Section 4.1: Image vulnerabilities and configuration defects
- Section 5.2: Registry security and chart provenance
- Section 5.4: Secure deployment configuration
- Level 1: Documented build process (Helm chart CI)
- Level 2: Source version controlled, signed provenance
- Level 3: Hardened build platform, signed artifacts
- Level 4: Two-party review, hermetic builds
- Req 6.3.1: Security vulnerabilities identified and managed

## Tools & resources

- Security Context Fields
- Security Checks
- NIST SP 800-190
- CIS Kubernetes Benchmark v1.8
- Helm Security Resources
- Compliance Mappings

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

*High-level skill guide for `securing-helm-chart-deployments`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
