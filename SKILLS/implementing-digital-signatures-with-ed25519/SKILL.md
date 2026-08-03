---
name: implementing-digital-signatures-with-ed25519
description: "Ed25519 digital signature agent using the cryptography library. Use when the user asks to implement digital signatures with ed25519."
version: 1.0.0
tags:
  - implementing
source: implementing-digital-signatures-with-ed25519
---

# Implementing Digital Signatures with Ed25519

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** cryptography API, Primary Standards, Related

## When to use

- The user wants to **implement** digital signatures with ed25519.
- Capability: Ed25519 digital signature agent using the cryptography library.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, digital, signatures, ed25519`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Generate Ed25519 keypair and save to PEM files
2. Load Ed25519 private key from PEM file
3. Load Ed25519 public key from PEM file
4. Sign a message with Ed25519 private key
5. Sign a file with Ed25519 and write signature to .sig file
6. Verify an Ed25519 signature on a message
7. Verify a file's Ed25519 signature
8. Verify signatures for multiple files

## Key concepts

- Description: Defines Ed25519 and Ed448 signature algorithms
- Description: SSH key format for Ed25519
- Description: Includes EdDSA as approved signature algorithm
- Description: Defines Curve25519 and Curve448
- Ed25519: `cryptography.hazmat.primitives.asymmetric.ed25519`
- Ed25519: `nacl.signing`
- Description: Original Ed25519 paper and reference implementation

## Tools & resources

- cryptography API
- Primary Standards
- Related

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

- `generate_keypair` — Generate Ed25519 keypair and save to PEM files.
- `load_private_key` — Load Ed25519 private key from PEM file.
- `load_public_key` — Load Ed25519 public key from PEM file.
- `sign_message` — Sign a message with Ed25519 private key.
- `sign_file` — Sign a file with Ed25519 and write signature to .sig file.
- `verify_message` — Verify an Ed25519 signature on a message.
- `verify_file` — Verify a file's Ed25519 signature.
- `batch_verify` — Verify signatures for multiple files.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-digital-signatures-with-ed25519`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
