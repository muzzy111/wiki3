# Workflow library

Workflow library mirror. The canonical source is
`C:\Users\Admin\Documents\hlp\` (created earlier). This folder is a
local mirror so each agent can find workflow prompts without
traversing the user's Documents directory.

## Structure

```
Workflows/
├── INDEX.md                  ← this file
├── _manifest.json            ← machine-readable catalog
├── 01-research-agent/
├── 02-code-review-agent/
├── 03-content-creation-agent/
├── 04-data-analysis-agent/
├── 05-automation-agent/
├── 06-multi-agent-orchestration/
├── 07-code-generation-agent/
├── 08-testing-qa-agent/
├── 09-document-processing-agent/
├── 10-system-admin-agent/
├── knowledge-retrieval/     ← extra: for NotebookLM
├── strategic-review/         ← extra: for Antigravity
├── checkpoint/               ← extra: for Antigravity
├── decision-locking/         ← extra: for Hermes
└── plan/                     ← extra: for Hermes
```

## Sync with hlp

The canonical source lives at `C:\Users\Admin\Documents\hlp\`. To
re-mirror after editing hlp, copy each `*/PROMPT.md` into the matching
folder here. The extra workflows (knowledge-retrieval, strategic-
review, checkpoint, decision-locking, plan) are space-specific and
not in hlp.

## Index of workflows

| # | Workflow                    | Primary agent(s)          |
|---|-----------------------------|---------------------------|
| 01 | research-agent              | Antigravity               |
| 02 | code-review-agent           | OpenCode, Antigravity     |
| 03 | content-creation-agent      | Hermes (for outbound)     |
| 04 | data-analysis-agent         | OpenCode                  |
| 05 | automation-agent            | OpenCode                  |
| 06 | multi-agent-orchestration   | Hermes                    |
| 07 | code-generation-agent       | OpenCode                  |
| 08 | testing-qa-agent            | OpenCode                  |
| 09 | document-processing-agent   | NotebookLM, OpenCode      |
| 10 | system-admin-agent          | OpenCode                  |
| — | knowledge-retrieval         | NotebookLM                |
| — | strategic-review            | Antigravity               |
| — | checkpoint                  | Antigravity               |
| — | decision-locking            | Hermes                    |
| — | plan                        | Hermes                    |