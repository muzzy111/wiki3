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

# Evasion Detection Hunt Template

## Hunt Information

| Field | Value |
|-------|-------|
| Hunt Name | |
| Target Technique | MITRE ATT&CK ID |
| Hypothesis | |
| Data Sources | Sysmon / Windows Security / EDR |
| Time Range | |
| Analyst | |

## Detection Queries

| SIEM | Query | Expected Results |
|------|-------|-----------------|
| Splunk | | |
| Elastic KQL | | |
| MDE Advanced Hunting | | |

## Findings

| Timestamp | Host | Technique | Severity | Evidence | True/False Positive |
|-----------|------|-----------|----------|----------|-------------------|
| | | | | | |

## Tuning Actions

| Finding | Action | New Exclusion | [[Status]] |
|---------|--------|---------------|--------|
| | Allow / Investigate / Block | | |

## Sign-Off

| Role | Name | Date |
|------|------|------|
| Threat Hunter | | |
| SOC Lead | | |
