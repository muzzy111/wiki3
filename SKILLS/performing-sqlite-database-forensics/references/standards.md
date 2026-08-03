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

# Standards and References - SQLite Database Forensics

## Standards
- NIST SP 800-86: Guide to Integrating Forensic Techniques
- SQLite File Format Specification: https://www.sqlite.org/fileformat2.html
- SWGDE Best Practices for Mobile Device Forensics

## Tools
- DB Browser for SQLite: Open-source GUI editor
- sqlcipher: Encrypted SQLite database handling
- Belkasoft Evidence Center: Commercial SQLite forensic analysis
- Exponent SQLite Explorer: Forensic SQLite viewer with timestamp auto-detection
- FORC (Forensic Operations for Recognizing SQLite Content): Automated Android extraction

## Key Database Locations
- Chrome History: %LOCALAPPDATA%\Google\Chrome\User Data\Default\History
- Firefox places.sqlite: %APPDATA%\Mozilla\Firefox\Profiles\*.default\places.sqlite
- Android SMS: /data/data/com.android.providers.telephony/databases/mmssms.db
- iOS SMS: /private/var/mobile/Library/SMS/sms.db
- WhatsApp: /data/data/com.whatsapp/databases/msgstore.db
