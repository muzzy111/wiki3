---
name: detecting-privilege-escalation-in-kubernetes-pods
description: "Kubernetes pod privilege escalation detection agent. Audits pod security contexts, capabilities, and service account permissions to detect misconfigurations enabling container privilege escalation. Use when the user asks to detect privilege escalation in kubernetes pods."
version: 1.0.0
tags:
  - detecting
  - cloud
  - threat-intel
source: detecting-privilege-escalation-in-kubernetes-pods
---

# Detecting Privilege Escalation in Kubernetes Pods

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Kubernetes, Security Context Checks, Dangerous Capabilities, Falco Rules, NIST SP 800-190, Pod Security Standards

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **detect** privilege escalation in kubernetes pods.
- Capability: Kubernetes pod privilege escalation detection agent. Audits pod security contexts, capabilities, and service account permissions to detect misconfigurations enabling container privilege escalation.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, privilege, escalation, kubernetes, pods`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Apply Pod Security Admission labels to namespaces
2. Deploy OPA Gatekeeper constraints
3. Test with non-compliant pods (should be rejected)
4. Install Falco with privilege escalation rules
5. Enable Kubernetes audit logging
6. Configure alerts to SIEM
7. Identify compromised pod
8. Check container security context
9. Review process list and capabilities
10. Isolate with network policy

## Key concepts

- Section 4.3: Container runtime vulnerabilities
- Section 5.4: Runtime monitoring for privilege escalation

## Tools & resources

- Kubernetes
- Security Context Checks
- Dangerous Capabilities
- Falco Rules
- NIST SP 800-190
- Pod Security Standards

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `get_pods`
- `audit_pod`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-privilege-escalation-in-kubernetes-pods`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
