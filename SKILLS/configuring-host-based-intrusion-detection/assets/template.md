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

# HIDS Deployment Template

## Deployment Information

| Field | Value |
|-------|-------|
| HIDS Platform | Wazuh / OSSEC / AIDE |
| Manager Address | |
| Agent Version | |
| Target Endpoints | |
| Deployment Date | |

## FIM Configuration

| Directory | Real-time | Check All | Exclusions |
|-----------|----------|-----------|------------|
| /etc | Yes | Yes | mtab, resolv.conf |
| /usr/bin | Yes | Yes | |
| /usr/sbin | Yes | Yes | |
| C:\Windows\System32 | Yes | Yes | *.log |

## Monitoring Modules

| Module | [[Status]] | Frequency |
|--------|--------|-----------|
| Syscheck (FIM) | Enabled | 12 hours |
| Rootcheck | Enabled | 12 hours |
| Log Analysis | Enabled | Real-time |
| Active Response | Enabled | Real-time |
| Vulnerability Detection | Enabled | 12 hours |

## Custom Rules

| Rule ID | Description | Level | Trigger |
|---------|-------------|-------|---------|
| | | | |

## Sign-Off

| Role | Name | Date |
|------|------|------|
| Security Engineer | | |
| SOC Analyst | | |
