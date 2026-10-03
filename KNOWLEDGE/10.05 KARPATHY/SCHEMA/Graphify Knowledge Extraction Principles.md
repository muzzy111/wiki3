---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Graphify Knowledge Extraction Principles

This schema details the abstract patterns, operational constraints, and analytical limitations identified during knowledge graph extraction and AST parser sweeps with the Graphify tool.

## Extraction Scope and Modalities

Knowledge graph construction requires combining two distinct parsing methodologies:
- **AST Parsing (Code Structure):** Extracts rigid imports, function calls, and definitions. This is reliable but blind to dynamic or cross-boundary references.
- **Semantic Extraction (Concept Mapping):** Driven by LLM subagents, this maps documents, whiteboards, images, and rationales. It focuses on inferred semantic similarity and hyperedge grouping.

## Analytical Gotchas and False Positives

Parser limitations can introduce false positives that distort graph metrics (like low cohesion and isolated nodes):
- **Cross-Language/Extension Blindness:** AST extractors can fail to trace import edges crossing from TypeScript to JavaScript or ESM to CJS, falsely marking referenced TS symbols as isolated.
- **Type-Only Reference Drops:** DTOs and type declarations referenced solely as TypeScript types may have their edges omitted, leading to false-positive isolation flags.
- **Pathing Discrepancies:** Variations in slash styles (backslashes on Windows vs forward slashes on Unix) can prevent subagents from matching file paths, creating disconnected stub nodes.

## Optimization Guidelines

- Deterministic ID naming (e.g. `{stem}_{entity}`) is mandatory to prevent duplicate nodes.
- Cohesion scores below `0.10` should be treated as extraction artifacts rather than architectural indicators unless the code language parser is fully verified.
