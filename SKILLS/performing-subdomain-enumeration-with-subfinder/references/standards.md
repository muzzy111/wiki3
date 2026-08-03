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

# Standards & References — Subdomain Enumeration with Subfinder

## Industry Standards
- **OWASP Testing Guide v4.2** — OTG-INFO-004: Enumerate applications on web server through subdomain discovery
- **PTES (Penetration Testing Execution Standard)** — Intelligence Gathering phase requiring comprehensive asset enumeration
- **NIST SP 800-115** — Technical Guide to Information Security Testing and Assessment, passive reconnaissance methods
- **MITRE ATT&CK T1596** — Search Open Technical Databases for target infrastructure information

## Tool References
- Subfinder GitHub: https://github.com/projectdiscovery/subfinder
- ProjectDiscovery Documentation: https://docs.projectdiscovery.io/tools/subfinder/overview
- Certificate Transparency RFC 6962: https://www.rfc-editor.org/rfc/rfc6962
- crt.sh Certificate Search: https://crt.sh/

## API Provider Documentation
- Shodan API: https://developer.shodan.io/api
- Censys Search API: https://search.censys.io/api
- VirusTotal API v3: https://docs.virustotal.com/reference/overview
- SecurityTrails API: https://docs.securitytrails.com/reference
- Chaos ProjectDiscovery: https://chaos.projectdiscovery.io/

## Regulatory Considerations
- Passive subdomain enumeration does not involve active scanning and is generally legal
- Always verify scope and authorization before proceeding to active enumeration
- Bug bounty programs define specific scope for subdomain testing
- GDPR may apply when collecting data that reveals organizational structure
