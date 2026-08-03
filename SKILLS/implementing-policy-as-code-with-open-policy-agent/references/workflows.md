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

# Workflow Reference: Policy as Code with OPA

## Policy Lifecycle

```
Author Rego Policy
       
       

 Unit Test with   
 OPA test         

       
       

 Integration Test 
 with conftest    

       
       

 Deploy to Cluster
 (warn mode)      

       
       

 Monitor + Triage 
 Violations       

       
       

 Switch to deny   
 mode             

```

## OPA/Gatekeeper Architecture

```
API Request → Kubernetes API Server → Gatekeeper Webhook
                                           
                                    
                                     OPA Engine  
                                     (Rego eval) 
                                    
                                           
                                    
                                     Constraint  
                                     Templates   
                                    
                                           
                                      Allow / Deny
```
