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

# Memory Forensics Workflows

## Workflow 1: Malware Triage
```
[Memory Dump] --> [pslist/psscan] --> [malfind] --> [dlllist] --> [netscan]
                                          |
                                          v
                                  [Dump Injected Code] --> [YARA Scan]
```

## Workflow 2: Rootkit Detection
```
[Memory Dump] --> [pslist vs psscan] --> [Hidden Processes]
                                               |
                                               v
                                      [SSDT Hook Detection]
                                               |
                                               v
                                      [Inline Hook Analysis]
```
