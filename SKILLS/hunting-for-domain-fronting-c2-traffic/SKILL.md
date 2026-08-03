---
name: hunting-for-domain-fronting-c2-traffic
description: "Detect domain fronting C2 traffic via SNI/Host header mismatch and TLS certificate analysis. Use when the user asks to hunt for domain fronting c2 traffic."
version: 1.0.0
tags:
  - hunting
source: hunting-for-domain-fronting-c2-traffic
---

# Hunting for Domain Fronting C2 Traffic

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Domain Fronting Mechanism, CDN Provider Identification, Proxy Log Detection, pyOpenSSL Certificate Inspection

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** domain fronting c2 traffic.
- Capability: Detect domain fronting C2 traffic via SNI/Host header mismatch and TLS certificate analysis.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, domain, fronting, traffic`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load proxy logs CSV with columns: timestamp, src_ip, sni, host_header, dst_ip, dst_port, method, url, status
2. Extract root domain from FQDN (e.g., sub.example.com -> example.com)
3. Check if a domain belongs to a known CDN provider
4. Detect connections where SNI and Host header point to different domains
5. Retrieve TLS certificate details for a given hostname using pyOpenSSL
6. Aggregate and rank domain fronting pairs by frequency

## Tools & resources

- Domain Fronting Mechanism
- CDN Provider Identification
- Proxy Log Detection
- pyOpenSSL Certificate Inspection

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

- `load_proxy_logs` — Load proxy logs CSV with columns: timestamp, src_ip, sni, host_header, dst_ip, dst_port, method, url, status.
- `extract_domain_root` — Extract root domain from FQDN (e.g., sub.example.com -> example.com).
- `identify_cdn_provider` — Check if a domain belongs to a known CDN provider.
- `detect_sni_host_mismatch` — Detect connections where SNI and Host header point to different domains.
- `get_tls_certificate_info` — Retrieve TLS certificate details for a given hostname using pyOpenSSL.
- `analyze_fronting_pairs` — Aggregate and rank domain fronting pairs by frequency.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-domain-fronting-c2-traffic`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
