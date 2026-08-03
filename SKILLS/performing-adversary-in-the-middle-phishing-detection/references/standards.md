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

# Standards & References: AiTM Phishing Detection

## MITRE ATT&CK References
- **T1557**: Adversary-in-the-Middle
- **T1539**: Steal Web Session Cookie
- **T1550.004**: Use Alternate [[Authentication]] Material: Web Session Cookie
- **T1566.002**: Phishing: Spearphishing Link
- **T1114.003**: Email Collection: Email Forwarding Rule
- **T1098.005**: Account Manipulation: Device Registration

## AiTM PhaaS Landscape (2025)
- Over 1 million PhaaS attacks detected in Jan-Feb 2025 (Barracuda)
- Tycoon 2FA most prevalent followed by EvilProxy and Evilginx
- Transition from QR codes to HTML attachments and SVG files
- Average time from compromise to inbox rule creation: under 30 minutes

## Detection Rule Categories
| Rule | Data Source | Confidence |
|---|---|---|
| Session IP mismatch | Azure AD sign-in logs | High |
| Impossible travel | Azure AD + session logs | High |
| Inbox rule post-auth | Exchange audit logs | High |
| New MFA method post-risky-sign-in | Azure AD audit | Medium |
| OAuth consent post-auth | Azure AD audit | Medium |
| Proxy CDN pattern | Web proxy logs | Medium |
| New domain phishing page | DNS + CT logs | Low |

## Phishing-Resistant MFA Standards
- **FIDO2 WebAuthn**: Origin-bound [[authentication]] prevents AiTM
- **Certificate-Based Auth**: Client certificate bound to device
- **Windows Hello for Business**: Hardware-bound credential
- **NIST SP 800-63B AAL3**: Phishing-resistant authenticator requirement
