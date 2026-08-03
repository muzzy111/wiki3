---
title: N8N — Automation Integration
tags: [workflows, n8n, automation]
created: 2026-07-01
type: workflow
status: draft
---

# N8N — Automation Integration

> Integration layer for n8n (a workflow automation tool). Workflows live in n8n itself; this folder holds the integration metadata, vault-side configuration, and history.

## Purpose

n8n is a self-hosted workflow automation tool. When the team uses n8n for cross-system automation (e.g., "when a new task card appears in `TASKS/STATUS/`, push a notification to Slack"), the integration metadata lives here.

## Status

**Draft.** No n8n integration configured yet.

## What Lives Here

- **Integration map.** Which n8n workflows exist, what they trigger on, what they do.
- **Webhook configuration.** Endpoints, secrets, payloads.
- **Credential references.** Names of env vars n8n uses. Never values.
- **Run logs.** History of n8n workflow executions that affected the vault.

## Boundaries

- n8n workflows are defined in n8n, not here.
- This folder holds the **vault-side** view of n8n — what the team needs to know to debug, audit, and evolve the integration.
- AGY owns the operational integration. Mavis reviews changes.

## See Also

- Workflows index: [[../Index]]
- AGY's environment maintenance: [[../../4.0AGY/SKILLS/Environment Maintenance]]
- MCP server catalog: [[../../MCP/README]] (n8n may be exposed via MCP)