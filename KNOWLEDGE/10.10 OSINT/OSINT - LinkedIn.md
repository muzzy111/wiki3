---
aliases: [LinkedIn OSINT]
tags:
  - osint
  - socmint
  - corporate
---
# OSINT - LinkedIn

LinkedIn is the premier source for corporate intelligence, professional network mapping, and social engineering preparation. Users voluntarily provide highly structured, detailed data about their careers and technical environments.

## Corporate and Technical Intelligence
- **Infrastructure Mapping**: IT professionals often list the specific technologies they manage (e.g., "Migrated 500 servers from AWS to Azure", "Managed Cisco ASA firewalls and CrowdStrike EDR"). This allows attackers or analysts to map a company's internal tech stack without ever touching their network.
- **Organizational Charts**: By searching for a specific company and filtering by current employees, analysts can reconstruct the company's hierarchy, identifying decision-makers, HR personnel, and entry-level staff.
- **Turnover Rates**: High turnover in security or IT departments can indicate organizational instability or vulnerable transition periods.

## Individual Profiling
- **Resume Verification**: LinkedIn profiles can be cross-referenced with public records or university alumni databases to verify claims.
- **Email Formats**: Discovering one employee's email (e.g., `john.doe@company.com`) reveals the corporate email format, allowing analysts to predict the email addresses of all other employees found on LinkedIn.
- **Endorsements and Recommendations**: These reveal strong professional ties. Recommenders are high-value targets for social engineering, as they have established trust with the primary target.

## OPSEC and Visibility
- **Profile Views**: By default, LinkedIn notifies users when someone views their profile. Analysts MUST change their privacy settings to "Private mode" (anonymous) before conducting reconnaissance.
- **Commercial Tools**: Tools like `CrossLinked` can scrape LinkedIn to generate massive lists of employee names for password spraying or phishing campaigns without triggering LinkedIn's anti-scraping defenses directly from a browser.
