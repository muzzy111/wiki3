---
name: implementing-api-key-security-controls
description: "Agent for implementing and auditing API key security controls. Use when the user asks to implement api key security controls."
version: 1.0.0
tags:
  - implementing
source: implementing-api-key-security-controls
---

# Implementing API Key Security Controls

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Secure Key Generation, Key Rotation Policy, TruffleHog Scanning, GitHub Secret Scanning API

## When to use

- The user wants to **implement** api key security controls.
- Capability: Agent for implementing and auditing API key security controls.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, security, controls`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate a secure API key with prefix and checksum
2. Hash an API key for secure storage using SHA-256
3. Scan files for leaked API key patterns
4. Audit API key age and rotation compliance
5. Analyze API key usage patterns for anomalies

## Tools & resources

- Secure Key Generation
- Key Rotation Policy
- TruffleHog Scanning
- GitHub Secret Scanning API

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

- `generate_api_key` — Generate a secure API key with prefix and checksum.
- `hash_api_key` — Hash an API key for secure storage using SHA-256.
- `scan_for_leaked_keys` — Scan files for leaked API key patterns.
- `audit_key_rotation` — Audit API key age and rotation compliance.
- `analyze_key_usage` — Analyze API key usage patterns for anomalies.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-api-key-security-controls`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
