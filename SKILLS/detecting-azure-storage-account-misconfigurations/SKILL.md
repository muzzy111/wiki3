---
name: detecting-azure-storage-account-misconfigurations
description: "Audit Azure Storage accounts for security misconfigurations using azure-mgmt-storage SDK. Use when the user asks to detect azure storage account misconfigurations."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-azure-storage-account-misconfigurations
---

# Detecting Azure Storage Account Misconfigurations

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Azure, SDK Installation, StorageManagementClient Initialization, Key Operations, Security Properties to Audit, Container Public Access Levels

## When to use

- The user wants to **detect** azure storage account misconfigurations.
- Capability: Audit Azure Storage accounts for security misconfigurations using azure-mgmt-storage SDK.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, azure, storage, account, misconfigurations`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Initialize StorageManagementClient with DefaultAzureCredential
2. Audit a single storage account for misconfigurations
3. Check blob containers for individual public access settings
4. Run the full storage account audit

## Tools & resources

- Azure
- SDK Installation
- StorageManagementClient Initialization
- Key Operations
- Security Properties to Audit
- Container Public Access Levels
- Environment Variables

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

- `get_storage_client` — Initialize StorageManagementClient with DefaultAzureCredential.
- `audit_storage_account` — Audit a single storage account for misconfigurations.
- `audit_blob_containers` — Check blob containers for individual public access settings.
- `run_audit` — Run the full storage account audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-azure-storage-account-misconfigurations`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
