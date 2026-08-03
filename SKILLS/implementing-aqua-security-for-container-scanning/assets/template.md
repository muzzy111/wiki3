---
name: verification-reminder
description: Prompt to verify facts before including them in journalism content
event: PostToolUse
tools: [Write, Edit]
tags:
  - verification
  - content
  - claims
  - reminder
---

# Container Scanning Implementation Template

## Image Registry Scanning Configuration

| Registry | URL | Auth Method | Auto-scan | Schedule |
|----------|-----|-------------|-----------|----------|
| | | | [ ] Yes | |

## Severity Threshold Policy

| Environment | Block Critical | Block High | Block Medium | Block Unfixable |
|-------------|---------------|------------|--------------|-----------------|
| Development | [ ] | [ ] | [ ] | [ ] |
| Staging | [x] | [ ] | [ ] | [ ] |
| Production | [x] | [x] | [ ] | [ ] |

## Accepted Risk Register (.trivyignore)

| CVE ID | Package | Reason | Accepted By | Expiry Date |
|--------|---------|--------|-------------|-------------|
| | | | | |

## SBOM Tracking

| Image | SBOM Format | Storage Location | Last Generated |
|-------|-------------|------------------|----------------|
| | [ ] CycloneDX [ ] SPDX | | |
