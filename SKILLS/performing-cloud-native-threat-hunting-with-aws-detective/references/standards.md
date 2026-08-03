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

# Standards & References

## MITRE ATT&CK Cloud Matrix
- **TA0001** Initial Access: T1078 (Valid Accounts), T1190 (Exploit Public-Facing Application)
- **TA0003** Persistence: T1098 (Account Manipulation), T1136 (Create Account)
- **TA0004** Privilege Escalation: T1078, T1484 (Domain Policy Modification)
- **TA0005** Defense Evasion: T1562 (Impair Defenses), T1070 (Indicator Removal)
- **TA0006** Credential Access: T1528 (Steal Application Access Token)
- **TA0007** Discovery: T1580 (Cloud Infrastructure Discovery), T1526 (Cloud Service Discovery)
- **TA0009** Collection: T1530 (Data from Cloud Storage)
- **TA0010** Exfiltration: T1537 (Transfer Data to Cloud Account)

## AWS Documentation
- [AWS Detective User Guide](https://docs.aws.amazon.com/detective/latest/userguide/)
- [AWS Detective API Reference](https://docs.aws.amazon.com/detective/latest/APIReference/)
- [GuardDuty Finding Types](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html)

## CIS AWS Foundations Benchmark
- Section 4: Monitoring (relevant to Detective [[integration]])
