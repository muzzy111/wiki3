---
name: performing-cloud-native-threat-hunting-with-aws-detective
description: "AWS Detective Threat Hunting Script Lists behavior graphs, retrieves investigations, and analyzes entity indicators for cloud-native threat hunting. Use when the user asks to perform cloud native threat hunting with aws detective."
version: 1.0.0
tags:
  - performing
  - cloud
  - threat-intel
source: performing-cloud-native-threat-hunting-with-aws-detective
---

# Performing Cloud Native Threat Hunting with AWS Detective

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** AWS

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** cloud native threat hunting with aws detective.
- Capability: AWS Detective Threat Hunting Script Lists behavior graphs, retrieves investigations, and analyzes entity indicators for cloud-native threat hunting.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, cloud, native, threat, hunting, detective`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Review GuardDuty HIGH/CRITICAL findings
2. Open Detective console → Finding Groups
3. Identify clustered findings pointing to same entity
4. Select entity (IAM user/role, EC2, IP)
5. Review 24h behavior timeline
6. Identify unusual API calls, new geolocations, impossible travel
7. Check for privilege escalation patterns (CreateAccessKey, AttachPolicy)
8. Trace lateral movement via AssumeRole chains
9. Check S3 data access patterns
10. Review VPC Flow Logs for unusual outbound connections

## Key concepts

- TA0001** Initial Access: T1078 (Valid Accounts), T1190 (Exploit Public-Facing Application)
- TA0003** Persistence: T1098 (Account Manipulation), T1136 (Create Account)
- TA0004** Privilege Escalation: T1078, T1484 (Domain Policy Modification)
- TA0005** Defense Evasion: T1562 (Impair Defenses), T1070 (Indicator Removal)
- TA0006** Credential Access: T1528 (Steal Application Access Token)
- TA0007** Discovery: T1580 (Cloud Infrastructure Discovery), T1526 (Cloud Service Discovery)
- TA0009** Collection: T1530 (Data from Cloud Storage)
- TA0010** Exfiltration: T1537 (Transfer Data to Cloud Account)

## Tools & resources

- AWS

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-cloud-native-threat-hunting-with-aws-detective`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
