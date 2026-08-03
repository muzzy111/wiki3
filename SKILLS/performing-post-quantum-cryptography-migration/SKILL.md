---
name: performing-post-quantum-cryptography-migration
description: "Agent for performing post-quantum cryptography migration assessment. Scans TLS endpoints for quantum-vulnerable algorithms, assesses crypto-agility readiness, tests hybrid TLS (X25519MLKEM768) support, validates.... Use when the user asks to perform post quantum cryptography migration."
version: 1.0.0
tags:
  - performing
source: performing-post-quantum-cryptography-migration
---

# Performing Post Quantum Cryptography Migration

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Hybrid TLS Configuration, oqs-provider for OpenSSL 3.0+, Cryptographic Inventory Scanning, Quantum-Vulnerable Algorithm Reference

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** post quantum cryptography migration.
- Capability: Agent for performing post-quantum cryptography migration assessment. Scans TLS endpoints for quantum-vulnerable algorithms, assesses crypto-agility readiness, tests hybrid TLS (X25519MLKEM768) support, validates ML-KEM and ML-DSA algorithm functionality, and generates prioritized migration roadmaps per NIST FIPS 203/204/205 standards.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, post, quantum, cryptography, migration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan a TLS endpoint to extract cryptographic algorithm details. Connects to the target, performs TLS handshake, and extracts: - Protocol version - Cipher suite (key exchange, encryption, MAC) - Certificate details (algorithm, key size, validity) - Supported groups / curves Args: host: Target hostname or IP port: Target port (default 443) timeout: Connection timeout in seconds Returns: Dict with comprehensive TLS cryptographic inventory
2. Scan multiple TLS endpoints from a targets file. Args: targets_file: Path to file with one host[:port] per line port: Default port if not specified per target Returns: List of scan results for all targets
3. Assess organizational crypto-agility based on TLS scan results. Evaluates the ability to migrate from quantum-vulnerable algorithms to post-quantum alternatives without major infrastructure changes. Args: scan_results: List of TLS scan result dicts Returns: Crypto-agility assessment report
4. Test whether a server supports hybrid post-quantum TLS key exchange. Attempts connection using X25519MLKEM768 and other hybrid groups. Requires OpenSSL 3.5+ or oqs-provider. Args: host: Target hostname port: Target port Returns: Dict with hybrid TLS support test results
5. Test ML-KEM (CRYSTALS-Kyber / FIPS 203) key encapsulation support. Tests keygen, encapsulation, and decapsulation at all three security levels using either the mlkem Python library or OpenSSL with oqs-provider. Returns: Dict with ML-KEM validation results for each security level
6. Test ML-DSA (CRYSTALS-Dilithium / FIPS 204) digital signature support. Tests key generation, signing, and verification at all three security levels using OpenSSL with native support or oqs-provider. Returns: Dict with ML-DSA validation results
7. Generate a prioritized PQC migration roadmap. Prioritizes systems based on data sensitivity, exposure, crypto-agility, compliance requirements, and dependency chains. Args: scan_results: List of TLS scan results agility_assessment: Optional crypto-agility assessment Returns: Migration roadmap with phased recommendations
8. Check the local OpenSSL installation for PQC algorithm support. Returns: Dict with OpenSSL version, provider status, and PQC algorithm availability

## Tools & resources

- Hybrid TLS Configuration
- oqs-provider for OpenSSL 3.0+
- Cryptographic Inventory Scanning
- Quantum-Vulnerable Algorithm Reference

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

- `scan_tls_endpoint` — Scan a TLS endpoint to extract cryptographic algorithm details. Connects to the target, performs TLS handshake, and extracts: - Protocol version - Cipher suite (key exchange, encryption, MAC) - Certificate details (algorithm, key size, validity) - Supported groups / curves Args: host: Target hostname or IP port: Target port (default 443) timeout: Connection timeout in seconds Returns: Dict with comprehensive TLS cryptographic inventory
- `scan_multiple_endpoints` — Scan multiple TLS endpoints from a targets file. Args: targets_file: Path to file with one host[:port] per line port: Default port if not specified per target Returns: List of scan results for all targets
- `assess_crypto_agility` — Assess organizational crypto-agility based on TLS scan results. Evaluates the ability to migrate from quantum-vulnerable algorithms to post-quantum alternatives without major infrastructure changes. Args: scan_results: List of TLS scan result dicts Returns: Crypto-agility assessment report
- `test_hybrid_tls_support` — Test whether a server supports hybrid post-quantum TLS key exchange. Attempts connection using X25519MLKEM768 and other hybrid groups. Requires OpenSSL 3.5+ or oqs-provider. Args: host: Target hostname port: Target port Returns: Dict with hybrid TLS support test results
- `test_mlkem_support` — Test ML-KEM (CRYSTALS-Kyber / FIPS 203) key encapsulation support. Tests keygen, encapsulation, and decapsulation at all three security levels using either the mlkem Python library or OpenSSL with oqs-provider. Returns: Dict with ML-KEM validation results for each security level
- `test_mldsa_support` — Test ML-DSA (CRYSTALS-Dilithium / FIPS 204) digital signature support. Tests key generation, signing, and verification at all three security levels using OpenSSL with native support or oqs-provider. Returns: Dict with ML-DSA validation results
- `generate_migration_roadmap` — Generate a prioritized PQC migration roadmap. Prioritizes systems based on data sensitivity, exposure, crypto-agility, compliance requirements, and dependency chains. Args: scan_results: List of TLS scan results agility_assessment: Optional crypto-agility assessment Returns: Migration roadmap with phased recommendations
- `check_openssl_pqc_support` — Check the local OpenSSL installation for PQC algorithm support. Returns: Dict with OpenSSL version, provider status, and PQC algorithm availability
- `generate_oqs_provider_config` — Generate an OpenSSL configuration file for oqs-provider. Returns the configuration text for enabling PQC algorithms via the Open Quantum Safe provider in OpenSSL 3.x.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-post-quantum-cryptography-migration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
