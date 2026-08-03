---
name: securing-container-registry-images
description: "Agent for auditing container registry image security: scanning, signing, and SBOM. Use when the user asks to secure container registry images."
version: 1.0.0
tags:
  - securing
  - windows
source: securing-container-registry-images
---

# Securing Container Registry Images

**Role:** Hardening  
**Audience:** security engineers and system owners  
**Primary tools:** Trivy CLI, Cosign CLI, boto3 ECR Client

## When to use

- The user wants to **secure** container registry images.
- Capability: Agent for auditing container registry image security: scanning, signing, and SBOM.
- Goal: reduce attack surface and enforce strong security posture.
- Trigger keywords: `securing, container, registry, images`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan a container image with Trivy for vulnerabilities
2. Generate SBOM using Syft for a container image
3. Verify image signature using Cosign
4. Audit an ECR repository for security configuration
5. Get vulnerability scan findings for an ECR image
6. Run complete container image security audit

## Tools & resources

- Trivy CLI
- Cosign CLI
- boto3 ECR Client

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

- `scan_image_trivy` — Scan a container image with Trivy for vulnerabilities.
- `generate_sbom` — Generate SBOM using Syft for a container image.
- `verify_image_signature` — Verify image signature using Cosign.
- `audit_ecr_repository` — Audit an ECR repository for security configuration.
- `get_ecr_scan_findings` — Get vulnerability scan findings for an ECR image.
- `full_audit` — Run complete container image security audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `securing-container-registry-images`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
