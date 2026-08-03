---
name: implementing-code-signing-for-artifacts
description: "Code signing verification agent using cryptography library for Ed25519/RSA signature operations. Use when the user asks to implement code signing for artifacts."
version: 1.0.0
tags:
  - implementing
source: implementing-code-signing-for-artifacts
---

# Implementing Code Signing for Artifacts

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** cryptography API Used, SLSA Framework, Executive Order 14028

## When to use

- The user wants to **implement** code signing for artifacts.
- Capability: Code signing verification agent using cryptography library for Ed25519/RSA signature operations.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, code, signing, artifacts`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Compute hash digest of a file
2. Generate Ed25519 signing keypair
3. Sign a file artifact using Ed25519
4. Verify an Ed25519 signature against a file
5. Verify container image signature using cosign CLI
6. Verify signatures for multiple artifacts
7. Generate code signing verification report

## Key concepts

- Document the build process (source, builder, dependencies)
- Provenance metadata available for all artifacts
- Build provenance is signed by the build platform
- Signatures tied to authenticated builder identity
- Build process runs on a hardened, isolated platform
- Provenance is non-falsifiable by the build service
- PS.2.1: Make integrity verification information available to consumers
- Code signing provides cryptographic proof of artifact integrity

## Tools & resources

- cryptography API Used
- SLSA Framework
- Executive Order 14028

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

- `compute_file_hash` — Compute hash digest of a file.
- `generate_ed25519_keypair` — Generate Ed25519 signing keypair.
- `sign_artifact` — Sign a file artifact using Ed25519.
- `verify_signature` — Verify an Ed25519 signature against a file.
- `verify_cosign_signature` — Verify container image signature using cosign CLI.
- `batch_verify` — Verify signatures for multiple artifacts.
- `generate_report` — Generate code signing verification report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-code-signing-for-artifacts`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
