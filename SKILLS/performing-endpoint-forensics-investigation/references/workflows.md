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

# Workflows

## Workflow 1: Endpoint Forensic Investigation

```
[Incident Detected / Investigation Authorized]
    
    
[Preserve Evidence (Order of Volatility)]
    
     1. Capture memory (WinPMEM/FTK Imager)
     2. Capture volatile data (processes, network, users)
     3. Create forensic disk image (E01/dd)
     4. Hash all evidence, document chain of custody
    
    
[Analysis Phase]
    
     Memory analysis (Volatility 3)
     Artifact parsing (KAPE + EZ tools)
     Timeline reconstruction (plaso)
     Malware analysis (if samples found)
    
    
[Correlate Findings]
    
     Initial access vector identified
     Persistence mechanisms documented
     Scope of compromise determined
    
    
[Generate IOCs and Report]
    
    
[Handoff to Remediation Team]
```

## Workflow 2: Memory Analysis

```
[Memory dump acquired]
    
    
[Identify OS profile: vol windows.info]
    
    
[Process analysis: pslist → pstree → psscan]
    
     Hidden processes found  [Analyze with malfind, dlllist]
    
    
[Network analysis: netscan]
    
     Suspicious connections  [Extract IOCs (IPs, domains)]
    
    
[Injection detection: malfind]
    
     Injected code found  [Dump and analyze with YARA]
    
    
[Credential analysis: hashdump, lsadump]
    
    
[Document all findings with screenshots and hashes]
```
