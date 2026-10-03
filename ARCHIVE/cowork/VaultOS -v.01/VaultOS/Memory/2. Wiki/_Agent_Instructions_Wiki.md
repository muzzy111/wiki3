---
serial: "PRM-MEM-WIKI-001"
description: "Rules for Agent interaction with the Semantic Wiki."
tags: [memory/wiki, system/rules]
---

# 🧠 MEMORY DIMENSION: 2. WIKI
**TYPE:** Semantic / Long-Term Knowledge

## ▸ COGNITIVE PURPOSE
The Wiki is the enduring truth of the system. It contains facts, definitions, entity relationships, configurations, and compiled intelligence. It functions similarly to a Zettelkasten—densely linked, atomic, and constantly refined.

## ▸ AGENT RULES OF ENGAGEMENT
1. **ATOMICITY:** One concept per note. If a note explains two distinct concepts, you must split them and link them together.
2. **REFACTOR AGGRESSIVELY:** Unlike the Journal, the Wiki is highly mutable. When new truth invalidates old truth, overwrite the old truth. Do not leave obsolete data here.
3. **MANDATORY LINKING:** No note is an island. Every time you create a new concept node, you must link it to at least one existing node using `[[wikilinks]]`.
4. **FRONTMATTER TYPING:** Every node must be strongly typed in YAML (`type: entity`, `type: concept`, `type: framework`).

## ▸ AGENT ACTION HOOKS
- When encountering a new variable, entity, or constraint that must be remembered permanently, create a node here.
- When asked "What is X?" or "How does Y work?", query this folder first.
