---
title: "Extract structure from 300-page research PDF"
difficulty: hard
max_rounds: 10
agents: [claude, opencode, mavis]
---

# Extract structure from 300-page PDF

Given a 300-page research PDF (provide a fixture in C:/loop-services/dojo-sandbox/fixture.pdf):
1. Extract the table of contents
2. Extract every section heading (level 1-3)
3. Extract every figure/table caption
4. Extract the bibliography
5. Build a structured outline (yaml)
6. Build a markdown summary (one paragraph per section)

Output: structure.yaml + summary.md + figures_index.md
