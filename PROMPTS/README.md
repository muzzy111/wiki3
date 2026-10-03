---
name: "PROMPTS README"
description: "How this prompt library is organized and how to add new prompts."
type: dashboard
tags: [prompts, readme]
status: active
---

# PROMPTS

This folder is a **curated prompt library**, not a web-clip dump.

## Layout

- `*-agent` / domain-prefixed roles (e.g. `engineering-code-reviewer.md`) — agent personas  
- `*-system-prompt.md` / product names — captured system prompts  
- `specialty-*.md` — task templates with clear inputs  
- `technique-*.md` — consolidated playbooks (merged from many overlapping sources)  
- `10.01 PROMPTS.md` — full index  

## Frontmatter schema

```yaml
---
name: "Human Name"
description: "One-line what it does"
type: agent-prompt | system-prompt | model-prompt | specialty-prompt | technique-prompt
tags:
  - ...
status: active
---
```

## What was cleaned

- Exact duplicates and bot-wall stubs removed  
- Overlapping multi-agent / optimization / loop / context articles consolidated into `technique-*` files  
- Role agents: single YAML frontmatter, wiki-link pollution stripped  
- Specialty `You are...` PDF dumps rewritten as clear templates  

See [[10.01 PROMPTS]] for the full catalog.