---
name: implementing-envelope-encryption-with-aws-kms
description: "Agent for implementing envelope encryption using AWS KMS. Use when the user asks to implement envelope encryption with aws kms."
version: 1.0.0
tags:
  - implementing
  - cloud
source: implementing-envelope-encryption-with-aws-kms
---

# Implementing Envelope Encryption with AWS Kms

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AWS, boto3 KMS API Calls, Cryptographic Standards, Compliance Frameworks

## When to use

- The user wants to **implement** envelope encryption with aws kms.
- Capability: Agent for implementing envelope encryption using AWS KMS.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, envelope, encryption`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Generate a data encryption key using AWS KMS
2. Encrypt data using envelope encryption with AWS KMS
3. Decrypt envelope-encrypted data using AWS KMS
4. Encrypt a file using envelope encryption
5. Decrypt an envelope-encrypted file
6. List available KMS keys
7. Audit a KMS key's policy for overly permissive access

## Key concepts

- Relevance: Key hierarchy and key wrapping concepts
- Description: AES Key Wrap specification used by KMS internally
- Description: KMS HSMs are validated at FIPS 140-2 Level 2 (Level 3 for CloudHSM)
- Key management with separation of DEK and KEK
- KMS satisfies key management requirements
- AWS KMS is SOC 2 compliant
- Encryption controls map to CC6.1 (logical access controls)
- KMS encryption satisfies encryption requirements for ePHI

## Tools & resources

- AWS
- boto3 KMS API Calls
- Cryptographic Standards
- Compliance Frameworks

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

- `generate_data_key` — Generate a data encryption key using AWS KMS.
- `encrypt_data` — Encrypt data using envelope encryption with AWS KMS.
- `decrypt_data` — Decrypt envelope-encrypted data using AWS KMS.
- `encrypt_file` — Encrypt a file using envelope encryption.
- `decrypt_file` — Decrypt an envelope-encrypted file.
- `list_kms_keys` — List available KMS keys.
- `audit_key_policy` — Audit a KMS key's policy for overly permissive access.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-envelope-encryption-with-aws-kms`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
