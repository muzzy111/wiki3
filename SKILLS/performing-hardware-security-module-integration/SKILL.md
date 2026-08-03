---
name: performing-hardware-security-module-integration
description: "Agent for Hardware Security Module integration via PKCS#11 interface. Use when the user asks to perform hardware security module integration."
version: 1.0.0
tags:
  - performing
source: performing-hardware-security-module-integration
---

# Performing Hardware Security Module Integration

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** FIPS 140-2 Required Mechanisms

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** hardware security module integration.
- Capability: Agent for Hardware Security Module integration via PKCS#11 interface.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, hardware, security, module, integration`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load PKCS#11 shared library
2. List all available PKCS#11 slots and token info
3. List all cryptographic objects stored on the HSM token
4. Generate an RSA key pair on the HSM
5. Generate an EC P-256 key pair on the HSM
6. Sign data with an RSA private key and verify with the public key
7. List all supported mechanisms for the token's slot
8. Run comprehensive HSM compliance audit

## Tools & resources

- FIPS 140-2 Required Mechanisms

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

- `load_library` — Load PKCS#11 shared library.
- `enumerate_slots` — List all available PKCS#11 slots and token info.
- `list_objects` — List all cryptographic objects stored on the HSM token.
- `generate_rsa_keypair` — Generate an RSA key pair on the HSM.
- `generate_ec_keypair` — Generate an EC P-256 key pair on the HSM.
- `sign_and_verify` — Sign data with an RSA private key and verify with the public key.
- `query_mechanisms` — List all supported mechanisms for the token's slot.
- `full_audit` — Run comprehensive HSM compliance audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-hardware-security-module-integration`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
