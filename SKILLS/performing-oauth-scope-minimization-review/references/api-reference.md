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

# API Reference: OAuth Scope Minimization [[Review]]

## Microsoft Graph API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1.0/servicePrincipals` | GET | List enterprise applications |
| `/v1.0/oauth2PermissionGrants` | GET | List delegated permission grants |
| `/v1.0/oauth2PermissionGrants/{id}` | PATCH | [[Update]] (reduce) grant scopes |
| `/v1.0/oauth2PermissionGrants/{id}` | DELETE | Revoke entire grant |
| `/v1.0/servicePrincipals/{id}/appRoleAssignments` | GET | Application permission assignments |
| `/v1.0/auditLogs/signIns` | GET | Sign-in activity for usage analysis |

## [[Authentication]]

```
POST https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
grant_type=client_credentials
client_id=<app_id>
client_secret=<secret>
scope=https://graph.microsoft.com/.default
```

## Required Permissions

| Permission | Type | Purpose |
|------------|------|---------|
| `Application.Read.All` | Application | Read service principals |
| `OAuth2PermissionGrant.ReadWrite.All` | Application | Read/modify grants |
| `AuditLog.Read.All` | Application | Read sign-in usage data |

## Scope Risk Classification

| Risk Level | [[Review]] Frequency | Examples |
|------------|-----------------|----------|
| Critical | Monthly | Directory.ReadWrite.All, Mail.ReadWrite |
| High | Quarterly | Mail.Read, Files.Read.All, User.Read.All |
| Medium | Semi-annually | Calendars.Read, Files.ReadWrite |
| Low | Annually | User.Read, openid, profile, email |

## Python [[Libraries]]

| Library | Version | Purpose |
|---------|---------|---------|
| `requests` | >=2.28 | Microsoft Graph API HTTP requests |

## References

- Microsoft Graph permissions: https://learn.microsoft.com/en-us/graph/permissions-reference
- OAuth2PermissionGrant resource: https://learn.microsoft.com/en-us/graph/api/resources/oauth2permissiongrant
- Entra admin consent: https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/configure-admin-consent-workflow
