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

# Workflows - Docker Bench Security Assessment

## Assessment Workflow
```
[Run Docker Bench] --> [Parse Results] --> [Prioritize FAIL findings]
        |                    |                      |
        v                    v                      v
  Initial baseline    Export JSON           Group by section
  assessment          for tracking          and severity
        |                    |                      |
        +--------------------+----------------------+
                             |
                             v
                [Create Remediation Plan]
                             |
                             v
                [Apply Fixes] --> [Re-run Assessment] --> [Compare Scores]
```
