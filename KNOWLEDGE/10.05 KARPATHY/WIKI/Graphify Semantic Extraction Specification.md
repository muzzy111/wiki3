---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Graphify Semantic Extraction Specification

The Graphify semantic extraction subagent protocol defines how knowledge graph fragments are extracted from document, paper, image, and code chunks.

## Core Rules of Semantic Extraction

- **Extracted Edges:** Used when a relationship is explicit in the source (such as imports, function calls, or literature citations).
- **Inferred Edges:** Used for reasonable semantic inferences (like shared data structures or implied dependencies).
- **Ambiguous Edges:** Used to flag uncertain relationships for manual [[review]] rather than omitting them.

## File Type Classifications

Concept nodes must belong to one of exactly six file types:
1. `code`
2. `document`
3. `paper`
4. `image`
5. `rationale` (used for ideas, principles, mechanisms, and design patterns)
6. `concept`

## Node ID Normalization

Node IDs must be fully deterministic and formatted as:
`{stem}_{entity}`

- **stem:** The lowercase directory name joined with the filename without extension (with non-alphanumeric characters replaced by underscores).
- **entity:** The lowercase symbol or concept name normalized similarly.
- **Constraints:** Never append chunk numbers, sequence numbers, or suffixes (e.g., no `_c1` or `_chunk2`). IDs must remain identical across different chunks.

## Edge Properties and Confidence Scores

Confidence scores are required on all edges:
- **Extracted Edges:** Always have a confidence score of 1.0.
- **Inferred Edges:** Must select exactly one value from the discrete set:
  - `0.95` (direct structural evidence like shared data structures or named cross-file references)
  - `0.85` (strong inference showing clear functional alignment but no direct symbol link)
  - `0.75` (reasonable inference in a shared problem domain with similar shape)
  - `0.65` (weak inference where concepts are only thematically related)
  - `0.55` (speculative co-occurrence only)
- **Ambiguous Edges:** Handled with a score in the range of 0.1 to 0.3.

## Hyperedges

If three or more nodes participate in a shared flow, protocol, or pattern that pairwise edges cannot capture, they are grouped in a hyperedge.
- **Limit:** Maximum of 3 hyperedges per chunk.
- **Examples:** Grouping all classes implementing a common interface, or all functions in an [[authentication]] flow.

## Cross-Language Call Restrictions

Call edges must stay within the boundaries of a single programming language. For example, a Python function cannot call a JavaScript/TypeScript symbol. Cross-language call edges are rejected.
