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

# Standards Reference - Kubernetes Penetration Testing

## MITRE ATT&CK for Containers

### Relevant Techniques
| ID | Technique | Phase |
|----|-----------|-------|
| T1609 | Container Administration Command | Execution |
| T1610 | Deploy Container | Execution |
| T1611 | Escape to Host | Privilege Escalation |
| T1613 | Container and Resource Discovery | Discovery |
| T1612 | Build Image on Host | Defense Evasion |
| T1552.007 | Container API | Credential Access |

## CIS Kubernetes Benchmark v1.8

### Master Node Checks
- 1.1: Control Plane Configuration Files
- 1.2: API Server (anonymous auth, RBAC, audit logging)
- 1.3: Controller Manager
- 1.4: Scheduler

### Worker Node Checks
- 4.1: Worker Node Configuration Files
- 4.2: Kubelet (anonymous auth, authorization mode)

### Policies
- 5.1: RBAC and Service Accounts
- 5.2: Pod Security Standards
- 5.3: Network Policies
- 5.4: Secrets Management

## NSA/CISA Kubernetes Hardening Guide

### Key Areas
- Scan containers and pods for vulnerabilities
- Run containers as non-root users
- Use network policies to restrict traffic
- Encrypt secrets at rest
- Audit logging for all API calls
- Scan for misconfigurations regularly

## OWASP Kubernetes Top 10

1. K01: Insecure Workload Configurations
2. K02: Supply Chain Vulnerabilities
3. K03: Overly Permissive RBAC
4. K04: Lack of Centralized Policy Enforcement
5. K05: Inadequate Logging and Monitoring
6. K06: Broken [[Authentication]]
7. K07: Missing Network Segmentation
8. K08: Secrets Management Failures
9. K09: Misconfigured Cluster Components
10. K10: Outdated and Vulnerable Kubernetes Components
