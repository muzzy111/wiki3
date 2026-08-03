---
name: scanning-kubernetes-manifests-with-kubesec
description: "Agent for scanning Kubernetes manifests with Kubesec. Runs Kubesec security risk analysis on K8s manifests, evaluates security scores, identifies critical misconfigurations, and enforces security baselines in CI/CD.... Use when the user asks to scan kubernetes manifests with kubesec."
version: 1.0.0
tags:
  - scanning
  - cloud
source: scanning-kubernetes-manifests-with-kubesec
---

# Scanning Kubernetes Manifests with Kubesec

**Role:** Security scanning  
**Audience:** security engineers and vulnerability management teams  
**Primary tools:** Kubernetes, Kubesec HTTP API, Industry Standards, Tool Ecosystem

## When to use

- The user wants to **scan** kubernetes manifests with kubesec.
- Capability: Agent for scanning Kubernetes manifests with Kubesec. Runs Kubesec security risk analysis on K8s manifests, evaluates security scores, identifies critical misconfigurations, and enforces security baselines in CI/CD pipelines.
- Goal: discover exposures, misconfigurations, and vulnerable assets.
- Trigger keywords: `scanning, kubernetes, manifests, kubesec`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Developer writes Kubernetes manifest locally
2. Pre-commit hook runs `kubesec scan` on changed YAML files
3. If score < 0 (critical issues), commit is blocked with remediation guidance
4. Developer fixes issues and retries commit
5. Pull request created with manifest changes
6. CI job runs kubesec scan on all manifests in PR
7. Results posted as PR comment with score breakdown
8. Gate: PR blocked if any manifest scores below threshold
9. Merge allowed only after all manifests pass minimum score
10. Developer applies manifest via kubectl or GitOps

## Key concepts

- Section 5.2: Pod Security Standards -- Kubesec validates privileged mode, host namespaces
- Section 5.7: General Policies -- Service account configuration, resource limits
- Maps directly to kubesec scoring checks for container security contexts
- Section 3.1: Image vulnerabilities and configuration defects
- Section 3.4: Orchestrator security -- manifest validation before deployment
- Section 4.1: Countermeasures for image vulnerabilities
- Privileged: No restrictions (kubesec score = lowest)
- Baseline: Prevents known privilege escalation (kubesec validates hostPID, hostNetwork, privileged)

## Tools & resources

- Kubernetes
- Kubesec HTTP API
- Industry Standards
- Tool Ecosystem

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

*High-level skill guide for `scanning-kubernetes-manifests-with-kubesec`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
