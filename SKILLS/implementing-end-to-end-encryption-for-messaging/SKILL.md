---
name: implementing-end-to-end-encryption-for-messaging
description: "Agent for implementing end-to-end encryption (E2EE) for messaging using X25519 + AES-GCM. Use when the user asks to implement end to end encryption for messaging."
version: 1.0.0
tags:
  - implementing
source: implementing-end-to-end-encryption-for-messaging
---

# Implementing End to End Encryption for Messaging

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Cryptography API Calls, Signal Protocol Specifications, Cryptographic Standards

## When to use

- The user wants to **implement** end to end encryption for messaging.
- Capability: Agent for implementing end-to-end encryption (E2EE) for messaging using X25519 + AES-GCM.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, encryption, messaging`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Generate X25519 key pair for Diffie-Hellman key exchange
2. Derive shared secret using X25519 ECDH + HKDF-SHA256
3. Encrypt a message using AES-256-GCM with a shared key
4. Decrypt a message using AES-256-GCM
5. Simulate a complete key exchange between two parties
6. Demonstrate complete E2EE message flow

## Key concepts

- Description: Core key management algorithm for E2EE messaging
- Description: Initial key exchange using Extended Triple Diffie-Hellman
- Description: Multi-device session management
- Description: X25519 Diffie-Hellman key exchange
- Description: Key derivation for chain key updates
- Description: Identity key signatures
- Description: Authenticated encryption for messages
- X25519: `cryptography.hazmat.primitives.asymmetric.x25519`

## Tools & resources

- Cryptography API Calls
- Signal Protocol Specifications
- Cryptographic Standards

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

- `generate_keypair` — Generate X25519 key pair for Diffie-Hellman key exchange.
- `derive_shared_secret` — Derive shared secret using X25519 ECDH + HKDF-SHA256.
- `encrypt_message` — Encrypt a message using AES-256-GCM with a shared key.
- `decrypt_message` — Decrypt a message using AES-256-GCM.
- `simulate_key_exchange` — Simulate a complete key exchange between two parties.
- `demo_full_flow` — Demonstrate complete E2EE message flow.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-end-to-end-encryption-for-messaging`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
