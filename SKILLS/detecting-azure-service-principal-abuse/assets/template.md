---
name: autocontext-skill-lesson-injector
description: Inject global skill lessons when a skill is loaded
hooks:
  - event: PreToolUse
    type: prompt
    matcher: "Skill"
tags:
  - lessons
  - check
  - skill
  - enabled
---

# Azure Service Principal Abuse Detection Template

## Investigation Checklist

| Check | [[Status]] | Notes |
|-------|--------|-------|
| Recent credential additions (7 days) | [ ] | |
| Privileged role assignments to SPs | [ ] | |
| Application ownership [[review]] | [ ] | |
| Sign-in anomalies for SPs | [ ] | |
| Admin consent grants [[review]] | [ ] | |
| OAuth permission escalation | [ ] | |

## Affected Service Principals

| Display Name | App ID | Object ID | Finding Type | Severity |
|-------------|--------|-----------|--------------|----------|
| | | | | |

## Remediation Actions

| Action | [[Status]] | Completed By | Date |
|--------|--------|-------------|------|
| Rotate compromised credentials | [ ] | | |
| Remove unauthorized role assignments | [ ] | | |
| Disable compromised service principal | [ ] | | |
| [[Review]] and restrict app ownership | [ ] | | |
| Enable Conditional Access for workload identities | [ ] | | |
