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

# Standards Reference: Certificate Pinning Bypass

## OWASP Mobile Top 10 2024
| ID | Risk | Relevance |
|----|------|-----------|
| M5 | Insecure Communication | Pinning assessment as part of network security |
| M7 | Insufficient Binary Protections | Pinning as binary-level protection |

## OWASP MASVS v2.0
| Control | Description |
|---------|-------------|
| MASVS-NETWORK-1 | App uses TLS for all network communication |
| MASVS-NETWORK-2 | App performs certificate pinning for critical connections |
| MASVS-RESILIENCE-1 | App detects and responds to running in instrumented environment |

## CWE Mappings
| CWE | Title |
|-----|-------|
| CWE-295 | Improper Certificate Validation |
| CWE-297 | Improper Validation of Certificate with Host Mismatch |
