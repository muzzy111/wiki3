---
aliases: [Public Records, Dark Web OSINT]
tags:
  - osint
  - records
  - darkweb
---
# Public Records and Dark Web OSINT

This area of OSINT deals with official documentation, financial footprints, and compromised data.

## Public Records (Person & Corporate Tracing)
Public records are legally accessible documents maintained by governments or businesses.
- **Corporate Registries**: Identifying company ownership, directors, and financial [[status]]. (e.g., OpenCorporates, UK Companies House).
- **Court Records**: Lawsuits, bankruptcies, and criminal records (e.g., PACER in the US).
- **Property Records**: Tax assessments and property deeds to determine asset ownership.
- **Voter Registration / Census**: In some jurisdictions, these are public and can confirm addresses and family members.

## Breach Data and Dark Web
Compromised data from data breaches is a massive source of OSINT. While the data was obtained illegally, its public availability makes it a facet of OSINT (sometimes called "Gray OSINT").
- **Credential Stuffing/Reuse**: Using exposed passwords from one breach to access accounts on other services.
- **HaveIBeenPwned**: Checking if an email or phone number was part of a known breach.
- **DeHashed / Intelligence X**: Search engines for querying leaked databases (requires careful legal and ethical consideration).
- **Dark Web Monitoring**: Tracking threat actor forums, ransomware leak sites, and illicit marketplaces using Tor (.onion services) to identify leaked data or emerging threats relevant to a target.

## The Archival Web
Data on the internet is often deleted or modified. Archival services are crucial for historical OSINT.
- **The Wayback Machine (archive.org)**: Viewing historical snapshots of websites.
- **Archive.today**: Useful for saving pages on demand and bypassing certain paywalls or dynamic content that the Wayback Machine struggles with.
- **Google Cache**: Viewing the most recently indexed version of a page, even if the live page is down.
