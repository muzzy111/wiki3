---
name: deploying-tailscale-for-zero-trust-vpn
description: "Tailscale zero trust VPN deployment audit. Use when the user asks to deploy tailscale for zero trust vpn."
version: 1.0.0
tags:
  - deploying
  - identity
source: deploying-tailscale-for-zero-trust-vpn
---

# Deploying Tailscale for Zero Trust VPN

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** ACL Policy Structure, Device Fields, External References, Protocol Standards, Tailscale Security Model, Compliance Considerations

## When to use

- The user wants to **deploy** tailscale for zero trust vpn.
- Capability: Tailscale zero trust VPN deployment audit agent.
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, tailscale, zero, trust`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Audit device compliance: OS versions, key expiry, last seen
2. Check ACL policy for overly permissive rules
3. Execute Tailscale zero trust audit

## Key concepts

- Encryption: ChaCha20 for symmetric encryption
- Key Exchange: Curve25519 for Diffie-Hellman
- MAC: Poly1305 for message authentication
- Hashing: BLAKE2s for hashing
- Framework: Noise Protocol Framework for key negotiation
- Tailscale implements identity-aware proxying (Section 3.2.2)
- End-to-end encryption satisfies data-in-transit requirements
- ACL-based access control implements least privilege access

## Tools & resources

- ACL Policy Structure
- Device Fields
- External References
- Protocol Standards
- Tailscale Security Model
- Compliance Considerations

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

- `audit_devices` — Audit device compliance: OS versions, key expiry, last seen.
- `audit_acl` — Check ACL policy for overly permissive rules.
- `run_audit` — Execute Tailscale zero trust audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-tailscale-for-zero-trust-vpn`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
