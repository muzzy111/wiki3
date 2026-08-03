---
name: analyzing-ransomware-payment-wallets
description: "Ransomware payment wallet blockchain analysis agent. Traces cryptocurrency payment flows from ransomware wallets using public blockchain APIs. Identifies transaction patterns, cluster relationships, and fund movement.... Use when the user asks to analyze ransomware payment wallets."
version: 1.0.0
tags:
  - analyzing
  - malware
  - ransomware
source: analyzing-ransomware-payment-wallets
---

# Analyzing Ransomware Payment Wallets

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** blockchain.com API, Blockstream.info API, WalletExplorer API, Common Ransomware Wallet Indicators, OFAC SDN Sanctions Check

## When to use

- The user wants to **analyze** ransomware payment wallets.
- Capability: Ransomware payment wallet blockchain analysis agent. Traces cryptocurrency payment flows from ransomware wallets using public blockchain APIs. Identifies transaction patterns, cluster relationships, and fund movement to exchanges or mixers.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, ransomware, payment, wallets`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Validate Bitcoin address format
2. Query blockchain.info for address details
3. Query Blockstream API for address stats (fallback)
4. Extract downstream addresses from transaction outputs
5. Check if address matches known ransomware wallets
6. Detect peel chain pattern in outgoing transactions
7. Full analysis of a ransomware payment wallet

## Tools & resources

- blockchain.com API
- Blockstream.info API
- WalletExplorer API
- Common Ransomware Wallet Indicators
- OFAC SDN Sanctions Check

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

- `validate_btc_address` — Validate Bitcoin address format.
- `query_address_info` — Query blockchain.info for address details.
- `query_blockstream_address` — Query Blockstream API for address stats (fallback).
- `extract_output_addresses` — Extract downstream addresses from transaction outputs.
- `check_known_wallets` — Check if address matches known ransomware wallets.
- `detect_peel_chain` — Detect peel chain pattern in outgoing transactions.
- `analyze_wallet` — Full analysis of a ransomware payment wallet.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-ransomware-payment-wallets`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
