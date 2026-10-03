---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

#  LM Studio — Clippings Index

> *All documentation clippings from [lmstudio.ai](https://lmstudio.ai/docs) organized by topic. Every note in this index links back here.*

---

##  Basics & Getting Started

- [[Get started with LM Studio]]
- [[LM Studio, llmster, and lms]]
- [[User or Developer]]
- [[Manage chats]]

---

##  Models

- [[Download an LLM]]
- [[Import Models]]
- [[Introduction to model.yaml]]
- [[Publish a model.yaml]]
- [[Offline Operation]]

---

##  Configuration & Advanced

- [[Config Presets]]
- [[Per-model Defaults]]
- [[Prompt Template]]
- [[Importing and Sharing]]
- [[Publish Your Presets]]
- [[Pull Updates]]
- [[Push New Revisions]]

---

##  Performance & Inference

- [[Parallel Requests]]
- [[Speculative Decoding]]

---

##  [[Integration]]

- [[Use MCP Servers]]
- [[Add to LM Studio Button]]
- [[Chat with Documents]]

---

##  Vault Connections

| Topic | Related Hub |
|---|---|
| MCP protocol | [[MCP]] |
| AI [[agents]] using LMStudio | [[Agents]] |
| Local model [[skills]] | [[Skills]] |
| OpenCode + LMStudio | [[OpenCode]] |
| Hermes + LMStudio | [[Hermes]] |
| Full LMSTUDIO docs | [[10.06 LMSTUDIO]] |

---

##  All Clippings (Dataview)

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  description AS "Description",
  dateformat(file.ctime, "YYYY-MM-dd") AS "Clipped"
FROM "Clippings"
WHERE type = "clipping"
SORT file.name ASC
```
