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

# Workflows — Social Engineering Penetration Testing

## Campaign Lifecycle
```
Authorization & Scoping
    
     OSINT & Target Profiling
        Email harvesting
        LinkedIn/social media reconnaissance
        Target group selection
    
     Infrastructure Setup
        Domain registration (lookalike)
        GoPhish/Evilginx deployment
        SMTP configuration (SPF/DKIM)
        Landing page creation
    
     Campaign Execution
        Phishing emails (batched sends)
        Vishing calls
        Physical pretexting
        USB drops
    
     Monitoring & Data Collection
        Email opens/clicks tracking
        Credential captures
        Call recordings/notes
        Physical access logs
    
     Reporting & Training
         Metrics compilation
         Risk scoring
         Executive report
         Targeted training recommendations
```
