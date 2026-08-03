---
name: implementing-aes-encryption-for-data-at-rest
description: "Agent for implementing AES-256-GCM encryption for data at rest. Use when the user asks to implement aes encryption for data at rest."
version: 1.0.0
tags:
  - implementing
source: implementing-aes-encryption-for-data-at-rest
---

# Implementing Aes Encryption for Data At Rest

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** cryptography Library - AESGCM, Key Derivation - PBKDF2, AES Modes Comparison, Primary Standards, RFC Standards, Compliance Frameworks

## When to use

- The user wants to **implement** aes encryption for data at rest.
- Capability: Agent for implementing AES-256-GCM encryption for data at rest.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, encryption, data, rest`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Derive AES-256 key from password using PBKDF2-HMAC-SHA256
2. Encrypt a file using AES-256-GCM with PBKDF2 key derivation
3. Decrypt an AES-256-GCM encrypted file
4. Encrypt all files in a directory tree
5. Generate a random AES-256 key
6. Verify encryption by decrypting and comparing

## Key concepts

- Description: Defines the AES algorithm (Rijndael) with key sizes of 128, 192, and 256 bits
- Block size: 128 bits (16 bytes)
- Key sizes: 128, 192, or 256 bits
- Rounds: 10 (128-bit), 12 (192-bit), 14 (256-bit)
- Description: Specifies Galois/Counter Mode (GCM) for authenticated encryption
- IV length: 96 bits recommended for GCM
- Tag length: 128 bits recommended (minimum 96 bits)
- Max plaintext: 2^39 - 256 bits per invocation

## Tools & resources

- cryptography Library - AESGCM
- Key Derivation - PBKDF2
- AES Modes Comparison
- Primary Standards
- RFC Standards
- Compliance Frameworks
- Python Library References

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

- `derive_key` — Derive AES-256 key from password using PBKDF2-HMAC-SHA256.
- `encrypt_file` — Encrypt a file using AES-256-GCM with PBKDF2 key derivation.
- `decrypt_file` — Decrypt an AES-256-GCM encrypted file.
- `encrypt_directory` — Encrypt all files in a directory tree.
- `generate_random_key` — Generate a random AES-256 key.
- `verify_encryption` — Verify encryption by decrypting and comparing.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-aes-encryption-for-data-at-rest`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
