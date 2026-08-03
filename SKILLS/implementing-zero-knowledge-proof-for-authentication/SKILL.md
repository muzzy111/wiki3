---
name: implementing-zero-knowledge-proof-for-authentication
description: "Agent for implementing zero-knowledge proof authentication using Schnorr protocol. Use when the user asks to implement zero knowledge proof for authentication."
version: 1.0.0
tags:
  - implementing
source: implementing-zero-knowledge-proof-for-authentication
---

# Implementing Zero Knowledge Proof for Authentication

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Schnorr Protocol Steps, Fiat, ZKP Properties, Academic References

## When to use

- The user wants to **implement** zero knowledge proof for authentication.
- Capability: Agent for implementing zero-knowledge proof authentication using Schnorr protocol.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, zero, knowledge, proof, authentication`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate a ZKP key pair (private key x, public key y = g^x mod p)
2. Generate a Schnorr ZKP proof (commitment, challenge, response)
3. Verify a Schnorr ZKP proof without learning the private key
4. Register a password using ZKP (server stores only public key)
5. Authenticate using ZKP (prove password knowledge without revealing it)
6. Demonstrate ZKP authentication protocol with multiple rounds
7. Demonstrate ZKP password authentication

## Key concepts

- Paper: "Efficient Signature Generation by Smart Cards" (Claus-Peter Schnorr, 1989)
- Standard: ISO/IEC 9798-5 (Entity authentication using zero-knowledge techniques)
- Paper: "How To Prove Yourself" (Fiat, Shamir, 1986)
- Description: Converts interactive ZKP to non-interactive using hash function
- Description: Standardized Schnorr NIZKP
- Description: Zero-knowledge password authentication protocol
- Description: Elliptic curve operations for ZKPs
- Description: Hash functions, modular arithmetic support

## Tools & resources

- Schnorr Protocol Steps
- Fiat
- ZKP Properties
- Academic References

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

- `generate_keypair` — Generate a ZKP key pair (private key x, public key y = g^x mod p).
- `schnorr_prove` — Generate a Schnorr ZKP proof (commitment, challenge, response).
- `schnorr_verify` — Verify a Schnorr ZKP proof without learning the private key.
- `zkp_password_register` — Register a password using ZKP (server stores only public key).
- `zkp_password_authenticate` — Authenticate using ZKP (prove password knowledge without revealing it).
- `run_protocol_demo` — Demonstrate ZKP authentication protocol with multiple rounds.
- `run_password_demo` — Demonstrate ZKP password authentication.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-zero-knowledge-proof-for-authentication`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
