---
name: analyzing-certificate-transparency-for-phishing
description: "Certificate Transparency monitoring agent for phishing detection. Queries crt.sh for certificates matching target domains, detects lookalike certificates, and identifies potential phishing infrastructure. Use when the user asks to analyze certificate transparency for phishing."
version: 1.0.0
tags:
  - analyzing
  - email
source: analyzing-certificate-transparency-for-phishing
---

# Analyzing Certificate Transparency for Phishing

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** crt.sh API, Certstream, CT Log Servers, Phishing Detection Techniques, Certificate Details Lookup

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **analyze** certificate transparency for phishing.
- Capability: Certificate Transparency monitoring agent for phishing detection. Queries crt.sh for certificates matching target domains, detects lookalike certificates, and identifies potential phishing infrastructure.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, certificate, transparency, phishing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Query crt.sh for certificates matching a domain
2. Identify certificates for domains that look similar to the target
3. Calculate string similarity using Levenshtein-like ratio
4. Detect domains using homoglyph/IDN attacks against target
5. Analyze certificate issuer patterns for anomalies
6. Detect suspicious wildcard certificate patterns
7. Generate comprehensive CT monitoring report

## Tools & resources

- crt.sh API
- Certstream
- CT Log Servers
- Phishing Detection Techniques
- Certificate Details Lookup

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

- `query_crtsh` — Query crt.sh for certificates matching a domain.
- `find_lookalike_domains` — Identify certificates for domains that look similar to the target.
- `calculate_similarity` — Calculate string similarity using Levenshtein-like ratio.
- `detect_homoglyph_domains` — Detect domains using homoglyph/IDN attacks against target.
- `analyze_issuer_patterns` — Analyze certificate issuer patterns for anomalies.
- `detect_wildcard_abuse` — Detect suspicious wildcard certificate patterns.
- `generate_report` — Generate comprehensive CT monitoring report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-certificate-transparency-for-phishing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
