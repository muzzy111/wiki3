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

# API Reference: Performing DNS Enumeration and Zone Transfer

## dnspython Library

| Function/Class | Description |
|----------------|-------------|
| `dns.resolver.resolve(domain, rdtype)` | Query DNS records by type |
| `dns.zone.from_xfr(xfr_response)` | Parse zone transfer response |
| `dns.query.xfr(nameserver, domain)` | Perform AXFR zone transfer |
| `dns.rdatatype.to_text(rdtype)` | Convert record type to string |
| `dns.resolver.Resolver()` | Custom resolver with timeout settings |

## DNS Record Types

| Type | Description |
|------|-------------|
| A | IPv4 address record |
| AAAA | IPv6 address record |
| MX | Mail exchange server |
| NS | Authoritative nameserver |
| TXT | Text record (SPF, DKIM, DMARC) |
| SOA | Start of Authority |
| CNAME | Canonical name alias |
| SRV | Service location record |
| CAA | Certificate Authority Authorization |
| AXFR | Full zone transfer request |

## Email Security Records

| Record | Location | Description |
|--------|----------|-------------|
| SPF | `domain TXT` | Authorized mail sender IPs |
| DMARC | `_dmarc.domain TXT` | Email [[authentication]] policy |
| DKIM | `selector._domainkey.domain TXT` | Email signing public key |

## Key [[Libraries]]

- **dnspython** (`pip install dnspython`): Full-featured DNS toolkit for Python
- **python-nmap** (optional): Network port scanning for DNS services
- **sublist3r** (optional): Subdomain enumeration using search engines

## Configuration

| Variable | Description |
|----------|-------------|
| Target domain | Authorized target domain for enumeration |
| Resolver timeout | DNS query timeout (default 3 seconds) |
| Wordlist | Subdomain brute-force dictionary |

## Common Subdomain Wordlists

| Source | Description |
|--------|-------------|
| SecLists DNS | `Discovery/DNS/subdomains-top1million-5000.txt` |
| Assetnote | Best-DNS-Wordlist from Assetnote |
| Custom | Industry-specific subdomain patterns |

## References

- [dnspython Documentation](https://dnspython.readthedocs.io/)
- [OWASP DNS Enumeration](https://owasp.org/www-community/attacks/DNS_Enumeration)
- [SecLists](https://github.com/danielmiessler/SecLists)
- [Amass OWASP](https://github.com/owasp-amass/amass)
