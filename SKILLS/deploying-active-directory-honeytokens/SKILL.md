---
name: deploying-active-directory-honeytokens
description: "Active Directory Honeytoken Deployment and Monitoring Agent. Deploys deception-based honeytokens in Active Directory: fake privileged accounts with AdminCount=1, fake SPNs for Kerberoasting detection (honeyroasting),.... Use when the user asks to deploy active directory honeytokens."
version: 1.0.0
tags:
  - deploying
  - threat-intel
  - active-directory
  - incident-response
source: deploying-active-directory-honeytokens
---

# Deploying Active Directory Honeytokens

**Role:** Deployment  
**Audience:** security platform engineers  
**Primary tools:** PowerShellGenerator, SIEMRuleGenerator, ADHoneytokenMonitor, HoneytokenDeployer, PowerShell Module

## When to use

- The user wants to **deploy** active directory honeytokens.
- Capability: Active Directory Honeytoken Deployment and Monitoring Agent. Deploys deception-based honeytokens in Active Directory: fake privileged accounts with AdminCount=1, fake SPNs for Kerberoasting detection (honeyroasting), decoy GPOs with cpassword traps, and deceptive BloodHound paths. Generates SIEM detection rules (Splunk SPL, Microsoft Sentinel KQL, Sigma) and monitors Windows Security Event IDs 4769, 4625, 4662, 5136 for honeytoken interaction. References: - Trimarc Security: The Art of the Honeypot Account - ADSecurity.org: Detecting Kerberoasting Activity Part 2 - Microsoft Defender for Identity Honeytokens - SpecterOps: Kerberoasting and AES-256 - APT29a Blog: Deploying Honeytokens in AD
- Goal: roll out a security platform or agent capability safely.
- Trigger keywords: `deploying, active, directory, honeytokens`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Plan rollout, dependencies, and rollback
2. Deploy components for active directory honeytokens
3. Smoke-test health and integrations
4. Monitor early telemetry and fix issues
5. Document operational ownership

## Tools & resources

- PowerShellGenerator
- SIEMRuleGenerator
- ADHoneytokenMonitor
- HoneytokenDeployer
- PowerShell Module

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `deploying-active-directory-honeytokens`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
