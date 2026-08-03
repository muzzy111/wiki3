---
title: "Memory Curator Role Skill Set — Preview"
role: memory
status: preview
---

# Memory Curator Skill Set

> Preview of the skills the Memory Curator role owns.

## Starter Skills

- **Audit Playbook**
  - Purpose: Run the 9 audit categories (folder health, frontmatter, wikilinks, locks, backup, orphans, tasks, memory hygiene, wiki health). Posts to SYSTEM/STYTEM RECORD/Audit Log.md.
  - migrates_from: 2.0MAVIS/SKILLS/Audit Playbook.md

- **Karpathy Wiki Curation**
  - Purpose: Promote raw entries to wiki; manage the 3-folder schema.
  - migrates_from: 2.0MAVIS/SKILLS/Karpathy Wiki Curation.md

- **Review Verdict**
  - Purpose: Issue review verdicts on role outputs. Schema: {passed, severity, must_fix, nits, evidence}.
  - migrates_from: 2.0MAVIS/CHAT/Review Protocol.md

- **Frontmatter Schema**
  - Purpose: Enforce `title`, `tags`, `type`, `status`, `created`, `modified` on every operational note.
  - migrates_from: 2.0MAVIS/RULES/Documentation Standards.md

- **Performance Roll-Up**
  - Purpose: Read TASKS/STATUS/ for the last 7 days. Compute per-role metrics (turnaround, review pass rate, retry rate).
  - migrates_from: NEW (role scope expanded in this migration)

- **Agent Drift Detection**
  - Purpose: Compare each role's recent INBOX/OUTBOX against its Persona. Flag drift.
  - migrates_from: NEW (role scope expanded in this migration)

- **Review Protocol**
  - Purpose: How Memory Curator accepts review requests and writes verdicts.
  - migrates_from: 2.0MAVIS/CHAT/Review Protocol.md
