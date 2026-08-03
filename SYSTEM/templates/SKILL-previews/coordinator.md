---
title: "Coordinator Role Skill Set — Preview"
role: coordinator
status: preview
---

# Coordinator Skill Set

> Preview of the skills the Coordinator role owns. Each `migrates_from:` notes the legacy folder the skill originally lived in.

## Starter Skills

- **Chat Director**
  - Purpose: Triage incoming commands from the user channel. Decide whether to answer directly, dispatch, or escalate.
  - migrates_from: 1.0HERMES/SKILLS/MCP Authoring.md (triage portion)

- **MCP Authoring**
  - Purpose: Author MCP server specs (Purpose, Tools, Transport, Configuration, Verified Facts). Hand off to Tools for wiring.
  - migrates_from: 1.0HERMES/SKILLS/MCP Authoring.md

- **Routing Matrix Owner**
  - Purpose: Maintain `1.0COORDINATOR/RULES/Routing Rules.md` and the `routing_defaults:` block in `SYSTEM/agents.yaml`.
  - migrates_from: 1.0HERMES/RULES/Routing Rules.md

- **Inter-Agent Protocol**
  - Purpose: Maintain `1.0COORDINATOR/CHAT/Inter-Agent Protocol.md`. Define the message-edge contract between roles.
  - migrates_from: 1.0HERMES/CHAT/Inter-Agent Protocol.md

- **User Channel Protocol**
  - Purpose: How the Coordinator interacts with the user. Direct answers vs. dispatch-and-reply.
  - migrates_from: 1.0HERMES/CHAT/Chat Protocol.md
