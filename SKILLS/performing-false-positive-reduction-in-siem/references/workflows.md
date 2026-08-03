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

# Workflows - False Positive Reduction

## Tuning Cycle
```
Identify Noisy Rules --> Analyze FP Root Causes --> Tune Rules -->
Validate with Testing --> Measure Improvement --> Report --> Repeat
```

## FP Analysis Categorization
| Category | Action | Example |
|---|---|---|
| Known benign | Add to allowlist | Vulnerability scanner IPs |
| Threshold too low | Raise threshold | Login failure count from 5 to 20 |
| Missing context | Add correlation | PowerShell + network = suspicious |
| Missing enrichment | Add lookup | Asset criticality context |
| Rule outdated | Rewrite or retire | Legacy detection no longer relevant |
