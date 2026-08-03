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

# API Reference: Access [[Review]] and Certification

## CSV Input Format
```csv
username,entitlement,application,manager,status,last_used,risk_score
jsmith,Admin,SAP,mjones,active,2025-01-15T00:00:00Z,8
```

## SoD Rules JSON Format
```json
[{"name": "Finance SoD", "role_a": "AP_Approver", "role_b": "AP_Creator"}]
```

## Key [[Review]] Checks
| Check | Description | Severity |
|-------|-------------|----------|
| Orphaned accounts | No manager or terminated [[status]] | HIGH |
| SoD violations | Conflicting entitlements held | CRITICAL |
| Excessive access | Entitlement count above threshold | MEDIUM |
| Stale entitlements | Unused beyond retention period | MEDIUM |

## Compliance Frameworks
| Framework | Requirement |
|-----------|-------------|
| SOX Section 404 | Periodic access reviews for financial systems |
| SOC 2 CC6.1 | Logical access controls and reviews |
| HIPAA 164.312(a) | Access authorization and [[review]] |
| PCI DSS 7.2 | Restrict access based on need-to-know |

## [[Review]] Campaign Design
| Parameter | Best Practice |
|-----------|---------------|
| Frequency | Quarterly for privileged, semi-annual for standard |
| Reviewer | Direct manager + application owner |
| Escalation | Auto-revoke if no response within 14 days |
| Evidence | Export decisions with timestamps and reviewer ID |

## References
- NIST SP 800-53 AC-6: https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final
- ISACA Access [[Review]]: https://www.isaca.org/
