---
name: implementing-log-integrity-with-blockchain
description: "Log Integrity Chain Agent - Implements SHA-256 hash-chained append-only log for tamper detection. Use when the user asks to implement log integrity with blockchain."
version: 1.0.0
tags:
  - implementing
source: implementing-log-integrity-with-blockchain
---

# Implementing Log Integrity with Blockchain

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** hashlib, Chain Entry Structure, Chain Construction Algorithm, Verification Algorithm, Checkpoint Structure, Tamper Detection Properties

## When to use

- The user wants to **implement** log integrity with blockchain.
- Capability: Log Integrity Chain Agent - Implements SHA-256 hash-chained append-only log for tamper detection.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, integrity, blockchain`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute SHA-256 hash of a string
2. Create a single chain entry with hash linking
3. Load an existing hash chain from a JSON file
4. Save the hash chain to a JSON file
5. Read log entries from a file (one entry per line)
6. Read structured log entries from a JSON array file
7. Append new log entries to the hash chain
8. Verify the integrity of the entire hash chain

## Tools & resources

- hashlib
- Chain Entry Structure
- Chain Construction Algorithm
- Verification Algorithm
- Checkpoint Structure
- Tamper Detection Properties

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

- `compute_hash` — Compute SHA-256 hash of a string.
- `create_chain_entry` — Create a single chain entry with hash linking.
- `load_chain` — Load an existing hash chain from a JSON file.
- `save_chain` — Save the hash chain to a JSON file.
- `ingest_log_file` — Read log entries from a file (one entry per line).
- `ingest_json_log` — Read structured log entries from a JSON array file.
- `append_entries` — Append new log entries to the hash chain.
- `verify_chain` — Verify the integrity of the entire hash chain.
- `find_tampered_range` — Identify the range of entries affected by tampering.
- `create_checkpoint` — Create an integrity checkpoint with the current chain head hash.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-log-integrity-with-blockchain`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
