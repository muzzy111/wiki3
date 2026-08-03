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

# Workflows - Cloud Storage Forensic Acquisition

## Workflow 1: API-Based Remote Acquisition
```
Obtain legal authorization and credentials
    |
Authenticate via service API (OAuth2 / app credentials)
    |
Enumerate all files including shared and trashed items
    |
Download file contents preserving metadata
    |
Collect revision history and activity logs
    |
Hash all acquired files (SHA-256)
    |
Generate acquisition log with timestamps
```

## Workflow 2: Endpoint Artifact Collection
```
Identify cloud sync client installations
    |
Collect local sync databases (KAPE cloud targets)
    |
Parse sync engine databases (OneDrive, GDrive, Dropbox)
    |
Identify cloud-only files from metadata
    |
Recover cached and deleted files from local storage
    |
Correlate local artifacts with API-acquired data
```
