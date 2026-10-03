---
serial: "PRM-MEM-JOURNAL-001"
description: "Rules for Agent interaction with the Temporal Journal."
tags: [memory/journal, system/rules]
---

# 🧠 MEMORY DIMENSION: 1. JOURNAL
**TYPE:** Temporal / Episodic Memory

## ▸ COGNITIVE PURPOSE
The Journal is the immutable timeline of the system. It records *what* happened, *when* it happened, and *how* the agent responded. This is a chronological append-only log.

## ▸ AGENT RULES OF ENGAGEMENT
1. **APPEND ONLY:** You may not alter history. Once a log is written, it remains. If a previous action was incorrect, log the correction as a new entry today.
2. **TIMESTAMP MANDATE:** Every entry must be prefixed with the exact ISO-8601 timestamp (`YYYY-MM-DD HH:mm:ss`).
3. **STATE YOUR INTENT:** Before executing a complex task, log the intent. Upon completion, log the outcome (Success/Failure/Error Trace).
4. **NO FRAGMENTATION:** Keep daily logs consolidated. Use one note per day (e.g., `2026-06-25.md`) and append to the bottom.

## ▸ AGENT ACTION HOOKS
- When asked "What did you do yesterday?", read this folder.
- When an execution crashes, dump the stack trace here immediately.
- When beginning a shift or session, append an initialization log.
