---
name: implementing-aqua-security-for-container-scanning
description: "Container image vulnerability scanning agent using Trivy CLI via subprocess. Use when the user asks to implement aqua security for container scanning."
version: 1.0.0
tags:
  - implementing
source: implementing-aqua-security-for-container-scanning
---

# Implementing Aqua Security for Container Scanning

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** NIST SP 800-190

## When to use

- The user wants to **implement** aqua security for container scanning.
- Capability: Container image vulnerability scanning agent using Trivy CLI via subprocess.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, aqua, security, container, scanning`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Check if Trivy CLI is available
2. Scan a container image for vulnerabilities using Trivy
3. Scan a container image for misconfigurations
4. Scan a container image for embedded secrets
5. Generate SBOM in CycloneDX format for an image
6. Parse Trivy JSON output into structured vulnerability list
7. Compute severity summary from vulnerability list
8. Scan multiple container images and aggregate results

## Tools & resources

- NIST SP 800-190

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

- `check_trivy_installed` — Check if Trivy CLI is available.
- `scan_image` — Scan a container image for vulnerabilities using Trivy.
- `scan_image_misconfig` — Scan a container image for misconfigurations.
- `scan_image_secrets` — Scan a container image for embedded secrets.
- `generate_sbom` — Generate SBOM in CycloneDX format for an image.
- `parse_vuln_results` — Parse Trivy JSON output into structured vulnerability list.
- `compute_summary` — Compute severity summary from vulnerability list.
- `scan_multiple_images` — Scan multiple container images and aggregate results.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-aqua-security-for-container-scanning`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
