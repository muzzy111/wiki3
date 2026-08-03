---
title: "Reverse-engineer an obfuscated binary"
difficulty: very-hard
max_rounds: 10
agents: [claude, opencode, mavis]
---

# Reverse-engineer an obfuscated binary

Take a small obfuscated binary (provide a fixture in C:/loop-services/dojo-sandbox/fixture.bin).
Reverse-engineer it:
1. Identify the entry point
2. Recover the original control flow
3. Recover the high-level algorithm
4. Document in a structured report

The report must include: control flow graph (ASCII), recovered pseudocode, identified strings, and a one-paragraph executive summary.
