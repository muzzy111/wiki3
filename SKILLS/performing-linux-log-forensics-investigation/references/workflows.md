---
name: Document design
description: This skill should be used when the user asks to "create a proposal", "design a report", "make a one-pager", "build a PDF", "create a newsletter", "design slides", "make event materials", "design a flyer", or needs help with print-ready HTML documents. Provides brand configuration, CSS patterns for print layout, and document design best practices.
version: 1.0.0
tags:
  - brand
  - content
  - footer
  - config
---

# Workflows - Linux Log Forensics
## Workflow 1: [[Authentication]] Investigation
```
Collect /var/log/auth.log and rotated copies
    |
Parse for successful and failed SSH logins
    |
Identify brute force sources (>10 failures per IP)
    |
Trace sudo command execution by user
    |
Detect account creation/modification events
    |
Correlate with wtmp/btmp login records
```
## Workflow 2: Full System Timeline
```
Collect all logs from /var/log/
    |
Export systemd journal (journalctl --output=json)
    |
Parse audit.log for security events
    |
Merge into unified timeline
    |
Identify unauthorized access and persistence
```
