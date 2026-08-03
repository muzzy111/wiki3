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

# Workflows - BAS Continuous Security Validation

## Workflow 1: BAS Validation Cycle
```
         
 Select Attack> Execute Safe > Collect      > Map to       
 Scenarios        Simulation       Results          Controls     
         
                                                                  
       
       v
      
 Identify     > Create       > Re-Validate  
 Control Gaps     Remediation      After Fix    
      
```

## Workflow 2: Post-Change Regression Test
```
Security Control Change (firewall rule, EDR policy, SIEM rule)
    
    v
Trigger BAS regression test for affected technique categories
    
    v
Compare results: before vs after change
    
     Improvement: Document and close
     Regression: Alert security team, rollback if needed
```
