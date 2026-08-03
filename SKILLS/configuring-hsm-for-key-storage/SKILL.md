---
name: configuring-hsm-for-key-storage
description: "HSM key storage management agent using PKCS#11 and AWS CloudHSM. Use when the user asks to configure hsm for key storage."
version: 1.0.0
tags:
  - configuring
source: configuring-hsm-for-key-storage
---

# Configuring Hsm for Key Storage

**Role:** Secure configuration  
**Audience:** security engineers and platform admins  
**Primary tools:** Key boto3 CloudHSMv2 Methods, HSM Types, External References, Primary Standards, HSM Products

## When to use

- The user wants to **configure** hsm for key storage.
- Capability: HSM key storage management agent using PKCS#11 and AWS CloudHSM.
- Goal: harden and tune security tooling for production use.
- Trigger keywords: `configuring, storage`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. List AWS CloudHSM clusters
2. List HSM instances in a cluster
3. Audit KMS keys backed by CloudHSM custom key store
4. Check CloudHSM backup status
5. Execute HSM key storage audit

## Key concepts

- Description: Standard API for cryptographic token interface
- Description: Security requirements for cryptographic modules
- Description: Key management recommendations (HSM storage for high-value keys)
- Description: Software-only PKCS#11 implementation for testing
- FIPS: 140-2 Level 3
- FIPS: 140-2 Level 3 (Thales Luna)

## Tools & resources

- Key boto3 CloudHSMv2 Methods
- HSM Types
- External References
- Primary Standards
- HSM Products

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

- `list_cloudhsm_clusters` — List AWS CloudHSM clusters.
- `list_hsm_instances` — List HSM instances in a cluster.
- `audit_kms_keys` — Audit KMS keys backed by CloudHSM custom key store.
- `check_cloudhsm_backup` — Check CloudHSM backup status.
- `run_audit` — Execute HSM key storage audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `configuring-hsm-for-key-storage`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
