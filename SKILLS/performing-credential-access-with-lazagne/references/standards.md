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

# Standards and References - LaZagne Credential Access

## MITRE ATT&CK References

| Technique ID | Name | Tactic |
|-------------|------|--------|
| T1555 | Credentials from Password Stores | Credential Access |
| T1555.003 | Credentials from Web Browsers | Credential Access |
| T1555.004 | Windows Credential Manager | Credential Access |
| T1552.001 | Credentials In Files | Credential Access |
| T1552.002 | Credentials in Registry | Credential Access |
| T1003.004 | LSA Secrets | Credential Access |
| T1539 | Steal Web Session Cookie | Credential Access |

## MITRE ATT&CK Software Entry

- LaZagne: S0349 (https://attack.mitre.org/software/S0349/)

## Official Resources

- LaZagne GitHub: https://github.com/AlessandroZ/LaZagne
- Atomic Red Team T1555: https://atomicredteam.io/credential-access/T1555/
- MITRE T1555: https://attack.mitre.org/techniques/T1555/

## Detection References

- Windows [[[[Event]]]] 5379: Credential Manager credentials were read
- DPAPI CryptUnprotectData monitoring
- Chrome Login Data file access monitoring
