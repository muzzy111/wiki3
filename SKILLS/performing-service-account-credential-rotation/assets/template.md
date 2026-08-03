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

# Service Account Credential Rotation Template

## Rotation Campaign

| Field | Value |
|-------|-------|
| Campaign Date | |
| Rotation Window | |
| Operator | |
| Change Ticket | |

## Service Account Inventory

| Account Name | Platform | Type | Last Rotated | Dependent Services | [[Status]] |
|-------------|----------|------|-------------|-------------------|--------|
| | AD/AWS/GCP/Azure/DB | Password/Key/Cert | | | Pending/Done/Failed |

## Rotation Results

| Account | New Credential Stored | Source Updated | Consumers Updated | Health Check | Result |
|---------|----------------------|---------------|-------------------|-------------|--------|
| | Yes/No | Yes/No | Yes/No | Pass/Fail | Success/Failed |

## Post-Rotation Verification

- [ ] All new credentials stored in secrets vault
- [ ] All source systems updated with new credentials
- [ ] All consumer applications restarted/reconfigured
- [ ] Health checks passing for all dependent services
- [ ] Old credentials deactivated/deleted
- [ ] Audit log exported and archived
- [ ] Operations team notified of completion
