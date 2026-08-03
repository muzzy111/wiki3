---
name: autocontext-skill-lesson-injector
description: Inject global skill lessons when a skill is loaded
hooks:
  - event: PreToolUse
    type: prompt
    matcher: "Skill"
tags:
  - lessons
  - check
  - skill
  - enabled
---

# Threat Intelligence Platform [[Status]] [[[[Report]]]]

## Platform Health
| Component | [[Status]] | Version | URL |
|-----------|--------|---------|-----|
| MISP | Healthy/Unhealthy | | |
| OpenCTI | Healthy/Unhealthy | | |
| TheHive | Healthy/Unhealthy | | |
| Cortex | Healthy/Unhealthy | | |
| Elasticsearch | Healthy/Unhealthy | | |

## Feed Ingestion [[Status]]
| Feed Name | Source | [[Status]] | Last Fetch | Events Generated |
|-----------|--------|--------|-----------|-----------------|
| | | Active/Error | | |

## Platform Metrics
| Metric | MISP | OpenCTI | Combined |
|--------|------|---------|----------|
| Total Events/Reports | | | |
| Total Indicators | | | |
| Active Feeds | | | |
| Enrichment Jobs (24h) | | | |

## Connector [[Status]]
| Connector | Type | Active | Last Run |
|-----------|------|--------|---------|
| | Import/Enrichment/Stream | Yes/No | |

## Recommendations
1. [Platform maintenance recommendations]
2. [Feed configuration improvements]
3. [[[Integration]] enhancements]
