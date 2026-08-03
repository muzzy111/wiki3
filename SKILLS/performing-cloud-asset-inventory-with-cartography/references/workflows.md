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

# Workflows - Cloud Asset Inventory with Cartography

## Asset Discovery Workflow
```
1. Deploy Neo4j → Setup graph database
2. Configure Credentials → AWS/GCP/Azure access
3. Initial Sync → Run Cartography to populate graph
4. Query Analysis → Execute security-focused Cypher queries
5. Attack Path Review → Identify and document attack paths
6. Schedule Syncs → Automate regular inventory updates
7. Alert Integration → Notify on new risky relationships
```

## Security Assessment Workflow
```
1. Populate Graph → Run full Cartography sync
2. Public Exposure → Query for internet-facing resources
3. IAM Analysis → Identify overprivileged identities
4. Cross-Account → Map trust relationships
5. Network Paths → Analyze network reachability
6. Report → Generate findings for remediation
```
