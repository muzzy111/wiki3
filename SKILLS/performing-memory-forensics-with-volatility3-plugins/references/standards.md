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

# Volatility3 Memory Forensics Standards

## Key Plugins for Malware Analysis
| Plugin | Purpose |
|--------|---------|
| windows.malfind | Detect injected code (RWX regions) |
| windows.psscan | Find hidden/unlinked processes |
| windows.pslist | List active processes from EPROCESS |
| windows.netscan | Network connections and listeners |
| windows.dlllist | Loaded DLLs per process |
| windows.handles | Open handles (files, registry, mutexes) |
| windows.cmdline | Command line arguments |
| windows.svcscan | Windows services |
| windows.yarascan | YARA rule scanning in memory |
| windows.registry.hivelist | Registry hives in memory |
| windows.hashdump | Extract password hashes |

## Memory Acquisition Formats
| Format | Tool | Extension |
|--------|------|-----------|
| Raw | WinPmem, FTK Imager | .raw, .bin |
| Crash dump | Windows | .dmp |
| VMware | VMware | .vmem |
| LiME | LiME | .lime |
| Hibernation | Windows | hiberfil.sys |

## References
- [Volatility3 Documentation](https://volatility3.readthedocs.io/)
- [Volatility Plugin Development](https://volatility3.readthedocs.io/en/latest/development.html)
