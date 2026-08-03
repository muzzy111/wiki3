---
name: detecting-aws-credential-exposure-with-trufflehog
description: "AWS credential exposure detection agent using TruffleHog and AWS APIs. Use when the user asks to detect aws credential exposure with trufflehog."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-aws-credential-exposure-with-trufflehog
---

# Detecting AWS Credential Exposure with Trufflehog

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** AWS, TruffleHog CLI, git-secrets CLI, GuardDuty Credential Findings

## When to use

- The user wants to **detect** aws credential exposure with trufflehog.
- Capability: AWS credential exposure detection agent using TruffleHog and AWS APIs.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, credential, exposure, trufflehog`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run TruffleHog against a local git repository
2. Scan an entire GitHub organization with TruffleHog
3. Scan a single file for AWS access key patterns
4. Scan all files in a directory for AWS credentials
5. Check if an AWS access key is active using AWS CLI
6. Deactivate an exposed AWS access key
7. Install git-secrets hooks for the current repository
8. Generate a credential exposure scan report

## Tools & resources

- AWS
- TruffleHog CLI
- git-secrets CLI
- GuardDuty Credential Findings

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

- `scan_repo_trufflehog` — Run TruffleHog against a local git repository.
- `scan_github_org` — Scan an entire GitHub organization with TruffleHog.
- `scan_file_for_aws_keys` — Scan a single file for AWS access key patterns.
- `scan_directory_recursive` — Scan all files in a directory for AWS credentials.
- `check_aws_key_status` — Check if an AWS access key is active using AWS CLI.
- `deactivate_exposed_key` — Deactivate an exposed AWS access key.
- `setup_git_secrets` — Install git-secrets hooks for the current repository.
- `generate_report` — Generate a credential exposure scan report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-aws-credential-exposure-with-trufflehog`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
