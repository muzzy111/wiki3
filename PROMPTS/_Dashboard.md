---
type: dashboard
cssclasses: [cards]
tags:
  - prompts
  - sector
  - abstract
  - overview
name: "PROMPTS Dashboard"
description: "Structural index for the PROMPTS sector."
status: active
---

# PROMPTS Dashboard

> [!abstract] Overview
> Curated prompt library: role agents, system prompts, specialty templates, and consolidated technique playbooks.

## Entry points

- [[10.01 PROMPTS]] — full catalog
- [[technique-multi-agent-orchestration]] — multi-agent design
- [[technique-agent-loop-guardrails]] — stop infinite loops
- [[technique-prompt-optimization]] — eval-driven prompt improvement
- [[technique-context-engineer]] — long-context system prompt
- [[technique-agentic-prompt-patterns]] — agent prompt anatomy
- [[absolute-mode]] — zero-filler response style

## Dataview (if available)

```dataview
TABLE type AS Type, length(file.outlinks) AS Out, file.mtime AS Modified
FROM "PROMPTS" OR ""
WHERE file.name != this.file.name
SORT file.mtime DESC
LIMIT 50
```