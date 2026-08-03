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

# Service Account Audit Workflows

## Workflow 1: Discovery Phase
1. Export AD service accounts using PowerShell/LDAP queries
2. Export cloud IAM service accounts (AWS credential [[[[report]]]], Azure SP list, GCP SA list)
3. Query databases for application-specific service accounts
4. Consolidate into single inventory spreadsheet
5. Cross-reference with CMDB for ownership data

## Workflow 2: Assessment Phase
1. Check each account against privilege policy
2. Verify password/key rotation compliance (90-day max)
3. Check last logon/activity date
4. Validate owner assignment against HR data
5. Flag accounts meeting orphaned/stale/over-privileged criteria

## Workflow 3: Remediation Phase
1. Contact owners of over-privileged accounts for justification
2. Plan gMSA migration for eligible Windows service accounts
3. Disable orphaned accounts (staged: disable first, delete after 30 days)
4. Rotate stale credentials immediately
5. [[Update]] documentation, close findings, [[[[report]]]] to compliance
