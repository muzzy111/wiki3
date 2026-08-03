---
name: verification-reminder
description: Prompt to verify facts before including them in journalism content
event: PostToolUse
tools: [Write, Edit]
tags:
  - verification
  - content
  - claims
  - reminder
---

# Workflows
## DLP Deployment
```
[Identify sensitive data types] → [Create SITs and policies]
  → [Deploy in audit mode] → [Review Activity Explorer for 2-4 weeks]
  → [Tune rules and exclusions] → [Enable enforcement]
  → [Monitor alerts and override rates] → [Quarterly policy review]
```
