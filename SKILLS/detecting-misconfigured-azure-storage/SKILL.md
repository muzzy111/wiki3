---
name: detecting-misconfigured-azure-storage
description: "Azure Storage misconfiguration detection agent using Azure CLI. Use when the user asks to detect misconfigured azure storage."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-misconfigured-azure-storage
---

# Detecting Misconfigured Azure Storage

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Azure, Container Access Level Checks, Network Rules, Security Settings, Defender for Storage Alerts

## When to use

- The user wants to **detect** misconfigured azure storage.
- Capability: Azure Storage misconfiguration detection agent using Azure CLI.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, misconfigured, azure, storage`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Execute Azure CLI command and return parsed JSON
2. List all storage accounts with security-relevant properties
3. Check for publicly accessible blob containers in a storage account
4. Verify encryption configuration for a storage account
5. Check network access rules for a storage account
6. Check if storage analytics logging is enabled
7. Check if soft delete is enabled for blobs and containers
8. Run full security audit on a single storage account

## Tools & resources

- Azure
- Container Access Level Checks
- Network Rules
- Security Settings
- Defender for Storage Alerts

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

- `az_cli` — Execute Azure CLI command and return parsed JSON.
- `list_storage_accounts` — List all storage accounts with security-relevant properties.
- `check_public_containers` — Check for publicly accessible blob containers in a storage account.
- `check_encryption_settings` — Verify encryption configuration for a storage account.
- `check_network_rules` — Check network access rules for a storage account.
- `check_logging_enabled` — Check if storage analytics logging is enabled.
- `check_soft_delete` — Check if soft delete is enabled for blobs and containers.
- `audit_storage_account` — Run full security audit on a single storage account.
- `audit_all_accounts` — Audit all storage accounts across the subscription.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-misconfigured-azure-storage`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
