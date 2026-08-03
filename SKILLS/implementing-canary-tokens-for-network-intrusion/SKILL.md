---
name: implementing-canary-tokens-for-network-intrusion
description: "Agent for deploying and managing canary tokens for network intrusion detection. Supports DNS, HTTP, and AWS API key canary tokens via Canarytokens.org API and Thinkst Canary enterprise console. Provides webhook alert.... Use when the user asks to implement canary tokens for network intrusion."
version: 1.0.0
tags:
  - implementing
  - network
source: implementing-canary-tokens-for-network-intrusion
---

# Implementing Canary Tokens for Network Intrusion

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Canarytokens.org Public API, Thinkst Canary Enterprise API

## When to use

- The user wants to **implement** canary tokens for network intrusion.
- Capability: Agent for deploying and managing canary tokens for network intrusion detection. Supports DNS, HTTP, and AWS API key canary tokens via Canarytokens.org API and Thinkst Canary enterprise console. Provides webhook alert integration with Slack, Microsoft Teams, email, and generic HTTP endpoints.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, canary, tokens, network, intrusion`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate a unique canary token tracking identifier
2. Create a canary token via Canarytokens.org public API. Args: token_type: One of the SUPPORTED_TOKEN_TYPES keys email: Notification email address memo: Human-readable description for alert context webhook_url: Optional webhook URL for real-time alerts Returns: dict with token details from the API
3. Create a DNS canary token that alerts on any DNS resolution
4. Create an HTTP canary token that alerts on HTTP requests
5. Create an AWS API key canary token that alerts on any AWS API usage
6. Create a web image beacon canary token
7. Create a canary token via Thinkst Canary enterprise console API. Args: console_domain: Your Thinkst Canary console domain (e.g., 'yourcompany') auth_token: API authentication token kind: Token kind (dns, http, aws-id, doc-msword, etc.) memo: Description for the token flock_id: Optional flock identifier for grouping Returns: dict with token details from the Thinkst API
8. List all canary tokens from the Thinkst Canary console

## Tools & resources

- Canarytokens.org Public API
- Thinkst Canary Enterprise API

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

- `generate_token_id` — Generate a unique canary token tracking identifier.
- `create_canarytoken` — Create a canary token via Canarytokens.org public API. Args: token_type: One of the SUPPORTED_TOKEN_TYPES keys email: Notification email address memo: Human-readable description for alert context webhook_url: Optional webhook URL for real-time alerts Returns: dict with token details from the API
- `create_dns_token` — Create a DNS canary token that alerts on any DNS resolution.
- `create_http_token` — Create an HTTP canary token that alerts on HTTP requests.
- `create_aws_key_token` — Create an AWS API key canary token that alerts on any AWS API usage.
- `create_web_image_token` — Create a web image beacon canary token.
- `thinkst_create_token` — Create a canary token via Thinkst Canary enterprise console API. Args: console_domain: Your Thinkst Canary console domain (e.g., 'yourcompany') auth_token: API authentication token kind: Token kind (dns, http, aws-id, doc-msword, etc.) memo: Description for the token flock_id: Optional flock identifier for grouping Returns: dict with token details from the Thinkst API
- `thinkst_list_tokens` — List all canary tokens from the Thinkst Canary console.
- `thinkst_get_alerts` — Retrieve triggered canary token alerts from Thinkst Canary console.
- `deploy_aws_credentials_file` — Deploy a fake AWS credentials file as a canary token. Places realistic-looking AWS credentials in the target path. When an attacker finds and uses these credentials, the canary token triggers an alert.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-canary-tokens-for-network-intrusion`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
