---
aliases: [Technical OSINT, Infrastructure Recon]
tags:
  - osint
  - infrastructure
  - network
---
# Network and Infrastructure OSINT

Technical OSINT involves gathering intelligence on a target's digital infrastructure, including domains, IP addresses, and network services.

## Domain Intelligence
- **WHOIS**: Determines who registered a domain, when it was registered, and when it expires. (Historical WHOIS is often more valuable due to modern privacy protections).
- **DNS Records**:
    - `A` / `AAAA`: IP address mappings.
    - `MX`: Mail servers (often reveals the email provider, e.g., Google Workspace, Office 365).
    - `TXT`: Often contains verification records (e.g., SPF, DMARC, site verification tokens) which can link domains together.
- **Subdomain Enumeration**: Finding subdomains (e.g., `dev.example.com`, `vpn.example.com`) to map the attack surface. Tools include `Sublist3r`, `Amass`, and `crt.sh` (Certificate Transparency logs).

## IP and ASN Intelligence
- **BGP/ASN Routing**: Identifying the Autonomous System Number (ASN) to determine the hosting provider or ISP (e.g., AWS, Cloudflare, local telecom).
- **Reverse IP Lookup**: Finding all domains hosted on a single IP address to identify shared infrastructure.

## Scanning and Indexing
Passive scanning relies on third-party services that constantly index the internet, rather than scanning the target directly (which would be active reconnaissance).
- **Shodan**: The search engine for Internet-connected devices. Useful for finding open ports, vulnerable services, and IoT devices.
- **Censys**: Similar to Shodan, excellent for certificate analysis and identifying infrastructure based on TLS configurations.
- **URLScan.io**: A sandbox for scanning URLs that provides screenshots, DOM analysis, and network requests made by the page.

## Certificate Transparency (CT)
CT logs are publicly available records of all issued TLS/SSL certificates. Searching CT logs (e.g., via `crt.sh`) is one of the most effective ways to discover internal or newly spun-up subdomains before they are publicly announced.
