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

# YARA Rule Development Workflows

## Workflow 1: Sample-Driven Rule Creation
```
[Malware Sample] --> [Static Analysis] --> [Extract Unique Strings] --> [Draft Rule]
                                                                            |
                                                                            v
                                                                 [Test Against Samples]
                                                                            |
                                                                            v
                                                                 [Test Against Clean Files]
                                                                            |
                                                                            v
                                                                 [Deploy to Production]
```

## Workflow 2: Family-Wide Detection
```
[Multiple Samples] --> [Cross-Sample Analysis] --> [Find Common Patterns]
                                                          |
                                                          v
                                                  [Build Generic Rule]
                                                          |
                                                          v
                                                  [Validate Coverage]
```

## Workflow 3: Threat Hunt [[Integration]]
```
[Intelligence Report] --> [Extract IOCs] --> [Convert to YARA] --> [Retrohunt]
                                                                       |
                                                                       v
                                                              [Triage New Matches]
```
