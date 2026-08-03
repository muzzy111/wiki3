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

# AWS Detective Investigation Checklist

## Pre-Investigation
- [ ] Confirm Detective is enabled and receiving data
- [ ] Identify trigger (GuardDuty finding, alert, manual hunt)
- [ ] Define scope time window
- [ ] Document initial IOCs

## Entity Investigation
- [ ] IAM User/Role profile reviewed
- [ ] API call timeline analyzed
- [ ] Geographic anomalies checked (impossible travel)
- [ ] New API calls identified (never seen before)
- [ ] Privilege escalation attempts documented
- [ ] AssumeRole chain traced

## Network Analysis
- [ ] VPC Flow Logs reviewed for entity
- [ ] Outbound connections to suspicious IPs identified
- [ ] Data transfer volumes assessed
- [ ] DNS query patterns checked

## Finding Correlation
- [ ] All related GuardDuty findings grouped
- [ ] MITRE ATT&CK techniques mapped
- [ ] Attack timeline constructed
- [ ] Initial access vector identified

## Response Actions
- [ ] Evidence preserved (or capture rationale if immediate containment required)
- [ ] Compromised credentials disabled
- [ ] Active sessions revoked
- [ ] Affected resources isolated
- [ ] Stakeholders notified
