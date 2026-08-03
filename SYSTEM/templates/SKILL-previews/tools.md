---
title: "Tools Role Skill Set — Preview"
role: tools
status: preview
---

# Tools Skill Set

> Preview of the skills the Tools role owns.

## Starter Skills

- **Docker Management**
  - Purpose: Build, run, network, debug containers on this host. Compose for multi-container setups.
  - migrates_from: 1.0HERMES/SKILLS/DOCKER EXPERT.md

- **MCP Server Wiring**
  - Purpose: Take a Coordinator-authored MCP spec, deploy it (Docker or code-based), verify the smoke call.
  - migrates_from: 4.0AGY/SKILLS/Environment Maintenance.md (MCP wiring section)

- **Local Server Bridge**
  - Purpose: Operate the ttyd-based Hermes terminal bridge (see SYSTEM/Hermes-Terminal-Bridge-Prompt.md).
  - migrates_from: 1.0HERMES/SKILLS/DOCKER EXPERT.md (terminal-bridge section; renames to a first-class skill)

- **Google Drive Sync**
  - Purpose: Maintain the Drive-sync script that backs up the vault. Roll back version drift.
  - migrates_from: 4.0AGY/SKILLS/Google Drive Sync.md

- **Environment Maintenance**
  - Purpose: PATHs, installed CLIs, Python interpreters (3.11, 3.14), Node.
  - migrates_from: 4.0AGY/SKILLS/Environment Maintenance.md

- **Backup Verification**
  - Purpose: Daily checksum compare of vault to Drive snapshot stub. Sends freshness status to the backup-verification workflow.
  - migrates_from: 4.0AGY/SKILLS/Google Drive Sync.md (verification section)
