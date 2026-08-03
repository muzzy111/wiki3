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

# Standards — Wireless Penetration Testing

## Standards
- IEEE 802.11: Wireless LAN standard
- WPA3 (WiFi Protected Access 3): Latest security protocol using SAE
- NIST SP 800-153: Guidelines for Securing Wireless Local Area Networks
- PCI DSS v4.0 Req 11.2: Wireless access point detection

## Wireless Encryption Comparison
| Protocol | Key Management | Crackable | Notes |
|----------|---------------|-----------|-------|
| WEP | Static IV | Trivially | Deprecated, never use |
| WPA-TKIP | PSK/Enterprise | Possible | Legacy, avoid |
| WPA2-PSK | PBKDF2/CCMP | Dictionary attacks | Requires strong passphrase |
| WPA2-Enterprise | 802.1X/RADIUS | Certificate attacks | Recommended with cert pinning |
| WPA3-SAE | Dragonfly handshake | Resistant | Best current option |

## Tools
| Tool | Purpose |
|------|---------|
| Aircrack-ng | Full wireless testing suite |
| Kismet | Wireless IDS and scanner |
| Bettercap | Network attack framework |
| Wifite | Automated WiFi attack tool |
| hcxdumptool | PMKID capture |
| Reaver | WPS PIN bruteforce |
