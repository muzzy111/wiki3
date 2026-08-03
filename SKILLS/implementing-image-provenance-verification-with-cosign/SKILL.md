---
name: implementing-image-provenance-verification-with-cosign
description: "Agent for verifying container image provenance using Sigstore Cosign. Use when the user asks to implement image provenance verification with cosign."
version: 1.0.0
tags:
  - implementing
source: implementing-image-provenance-verification-with-cosign
---

# Implementing Image Provenance Verification with Cosign

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Sigstore Components, Attestation Types, NIST SP 800-190, Compliance Mappings

## When to use

- The user wants to **implement** image provenance verification with cosign.
- Capability: Agent for verifying container image provenance using Sigstore Cosign.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, image, provenance, verification, cosign`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Run a cosign CLI command and return output
2. Verify a container image signature with Cosign
3. Verify an in-toto attestation attached to an image
4. Sign a container image with Cosign
5. Get the signature and attestation image references
6. Audit multiple container images for valid signatures
7. Generate Kyverno ClusterPolicy for image verification
8. Generate GitHub Actions workflow for Cosign signing

## Key concepts

- Level 1: Documentation of build process
- Level 2: Source version controlled + signed provenance
- Level 3: Hardened build platform, non-falsifiable provenance
- Level 4: Two-party review, hermetic reproducible builds
- Section 4.1: Image vulnerabilities - Verify image integrity before deployment
- Section 5.1: Image security - Cryptographic signing and verification
- Section 4(e): SBOM requirements for software supply chain
- Section 4(g): Software supply chain security guidelines

## Tools & resources

- Sigstore Components
- Attestation Types
- NIST SP 800-190
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

## Automation entry points

- `run_cosign` — Run a cosign CLI command and return output.
- `verify_image` — Verify a container image signature with Cosign.
- `verify_attestation` — Verify an in-toto attestation attached to an image.
- `sign_image` — Sign a container image with Cosign.
- `triangulate_image` — Get the signature and attestation image references.
- `audit_registry_images` — Audit multiple container images for valid signatures.
- `generate_kyverno_policy` — Generate Kyverno ClusterPolicy for image verification.
- `generate_cosign_ci_workflow` — Generate GitHub Actions workflow for Cosign signing.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-image-provenance-verification-with-cosign`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
