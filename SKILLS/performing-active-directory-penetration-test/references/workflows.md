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

# Workflows — Active Directory Penetration Testing

## AD Attack Flow

```
Domain User Credentials
    
     Enumeration
        BloodHound (attack paths)
        LDAP queries (users, groups, GPOs)
        Service account discovery (SPNs)
    
     Kerberos Attacks
        Kerberoasting → Hash cracking
        AS-REP Roasting → Hash cracking
        Delegation abuse (unconstrained/constrained/RBCD)
    
     ADCS Attacks
        ESC1-ESC8 template exploitation
        Certificate-based auth to DA
    
     Credential Harvesting
        LSASS dump (Mimikatz)
        SAM/SYSTEM extraction
        DPAPI credential decryption
    
     Domain Escalation
        DCSync (krbtgt + all hashes)
        Golden Ticket
        AdminSDHolder persistence
    
     Impact Demonstration
         Full domain hash extraction
         Access to sensitive resources
         Cross-forest trust abuse
```
