---
title: "Write a self-modifying script"
difficulty: very-hard
max_rounds: 10
agents: [claude, opencode, openwork]
---

# Write a self-modifying script

Write a Python script that, when run, modifies its own source code on disk:
- Adds a new function to itself
- Updates its own __doc__ string
- Logs the mutation to a separate file

Constraints:
- The script must still work after it modifies itself
- The mutation must be idempotent (running it twice should not duplicate)
- The script must not crash on the first mutation

Output: C:/loop-services/dojo-sandbox/self-mod.py
