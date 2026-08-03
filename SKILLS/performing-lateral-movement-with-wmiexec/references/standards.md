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

# Standards and References - WMIExec Lateral Movement

## MITRE ATT&CK References

| Technique ID | Name | Tactic |
|-------------|------|--------|
| T1047 | Windows Management Instrumentation | Execution |
| T1021.003 | Remote Services: DCOM | Lateral Movement |
| T1550.002 | Use Alternate [[Authentication]] Material: Pass the Hash | Lateral Movement |
| T1059.001 | PowerShell | Execution |
| T1570 | Lateral Tool Transfer | Lateral Movement |

## Tools

- Impacket wmiexec.py: https://github.com/fortra/impacket
- CrackMapExec: https://github.com/byt3bl33d3r/CrackMapExec
- SharpWMI: https://github.com/GhostPack/SharpWMI

## Detection Resources

- Windows WMI Activity Log: Microsoft-Windows-WMI-Activity/Operational
- [[[[Event]]]] 5857: WMI provider loaded
- [[[[Event]]]] 5860/5861: WMI registration events
- Sysmon [[[[Event]]]] 19/20/21: WMI filter/consumer/binding creation
