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

# Workflows - WMIExec Lateral Movement

## Lateral Movement Chain

```
1. Initial Compromise → Credential Harvesting → WMIExec to target
2. On each new host:
    Enumerate local users and groups
    Harvest credentials (LaZagne, Mimikatz, SAM dump)
    Check for domain admin sessions
    Pivot to next target using recovered credentials
```

## Multi-Method Fallback

```
Primary:   wmiexec.py (semi-interactive, output capture)
Fallback1: dcomexec.py (different DCOM object, avoids WMI-specific detection)
Fallback2: Native PowerShell CIM (blends with admin activity)
Fallback3: smbexec.py (uses SMB service, noisier but reliable)
```
