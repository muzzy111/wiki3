---
name: analyzing-ransomware-encryption-mechanisms
description: "Ransomware encryption mechanism analysis agent. Analyzes encryption algorithms, key management, file encryption routines, and assesses decryption feasibility for ransomware samples and encrypted files. Use when the user asks to analyze ransomware encryption mechanisms."
version: 1.0.0
tags:
  - analyzing
  - malware
  - ransomware
source: analyzing-ransomware-encryption-mechanisms
---

# Analyzing Ransomware Encryption Mechanisms

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** PyCryptodome, pefile, Volatility 3, Entropy Analysis Thresholds, Known Ransomware Encryption Schemes, NoMoreRansom / ID Ransomware

## When to use

- The user wants to **analyze** ransomware encryption mechanisms.
- Capability: Ransomware encryption mechanism analysis agent. Analyzes encryption algorithms, key management, file encryption routines, and assesses decryption feasibility for ransomware samples and encrypted files.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, ransomware, encryption, mechanisms`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute SHA-256 hash of a file
2. Calculate Shannon entropy of byte data
3. Identify ransomware family from file extension
4. Scan binary for known cryptographic constants
5. Scan binary for Windows Crypto API string references
6. Analyze an encrypted file for ransomware characteristics
7. Attempt XOR key recovery from known plaintext-ciphertext pair
8. Check if encrypted file retains known file header (partial encryption indicator)

## Tools & resources

- PyCryptodome
- pefile
- Volatility 3
- Entropy Analysis Thresholds
- Known Ransomware Encryption Schemes
- NoMoreRansom / ID Ransomware
- Ghidra

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

- `compute_hash` — Compute SHA-256 hash of a file.
- `shannon_entropy` — Calculate Shannon entropy of byte data.
- `identify_ransomware_extension` — Identify ransomware family from file extension.
- `scan_crypto_constants` — Scan binary for known cryptographic constants.
- `scan_crypto_apis` — Scan binary for Windows Crypto API string references.
- `analyze_encrypted_file` — Analyze an encrypted file for ransomware characteristics.
- `xor_key_recovery` — Attempt XOR key recovery from known plaintext-ciphertext pair.
- `check_file_header_known_plaintext` — Check if encrypted file retains known file header (partial encryption indicator).
- `assess_decryption_feasibility` — Assess decryption feasibility based on analysis results.
- `generate_report` — Generate full ransomware encryption analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-ransomware-encryption-mechanisms`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
