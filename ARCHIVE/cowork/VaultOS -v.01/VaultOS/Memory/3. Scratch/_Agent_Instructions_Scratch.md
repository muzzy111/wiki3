---
serial: "PRM-MEM-SCRATCH-001"
description: "Rules for Agent interaction with the Working Scratchpad."
tags: [memory/scratch, system/rules]
---

# 🧠 MEMORY DIMENSION: 3. SCRATCH
**TYPE:** Working / Ephemeral Memory

## ▸ COGNITIVE PURPOSE
The Scratch folder is the cognitive whiteboard. It is a messy, unstructured, and highly volatile workspace where data is temporarily staged before being processed, summarized, or discarded. 

## ▸ AGENT RULES OF ENGAGEMENT
1. **EPHEMERALITY:** Assume any file in this folder could be deleted at midnight. Do not store permanent truths here.
2. **DUMP GROUNDS:** You may dump raw JSON, unfiltered API responses, massive error traces, or unformatted text blocks here without worrying about Markdown aesthetics.
3. **GRADUATION REQUIREMENT:** If an insight discovered in the Scratch folder proves valuable, you must "graduate" it by extracting the core truth and rewriting it into the **2. Wiki** folder.
4. **NO LINKING INWARD:** Wiki notes and Journal logs should never link to a Scratch file. Scratch files may link outward to the Wiki.

## ▸ AGENT ACTION HOOKS
- When executing a multi-step parsing operation, write the intermediate states here.
- When the context window is overwhelmed, offload the excess data into a temporary `.md` file here.
