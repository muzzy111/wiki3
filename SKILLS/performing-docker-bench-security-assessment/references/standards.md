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

# Standards - Docker Bench Security Assessment

## CIS Docker Benchmark v1.8.0 Sections
| Section | Area | Checks |
|---------|------|--------|
| 1 | Host Configuration | Partition, users, audit rules |
| 2 | Docker Daemon | ICC, TLS, logging, seccomp, privileges |
| 3 | Docker Daemon Config Files | File permissions and ownership |
| 4 | Container Images | Non-root user, scanning, trusted images |
| 5 | Container Runtime | Capabilities, rootfs, resources, privileges |
| 6 | Docker Security Operations | Monitoring, CVE scanning |

## Scoring
- PASS: Check meets CIS recommendation
- FAIL: Check does not meet recommendation (remediation required)
- WARN: Check requires manual verification
- INFO: Informational, no scoring impact
