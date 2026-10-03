# Chat — cross-agent message bus

Every file here is a markdown document with YAML frontmatter. See
`PROTOCOL.md` for the full schema.

## Layout

```
Chat/
├── README.md               ← this file
├── inbox/                  ← unread, addressed to specific agents
├── processed/              ← acknowledged, retained for history
└── archive/                ← older than 90 days
```

## Filename convention

```
<from-agent>-<phase>-<short-slug>.md
```

Examples:

- `hermes-survey-vault-priorities.md`
- `antigravity-discussion-1-stealth-scraping.md`
- `opencode-report-build-phase-2.md`
- `hermes-decision-0003-llm-mapreduce.md`
- `notebooklm-ack-private-corpus-loaded.md`

## Frontmatter (minimum required)

```yaml
---
from: <agent>
to: <target | @all>
phase: <phase>
priority: <priority>
status: <status>
created: <ISO8601>
---
```

## Phase cheat sheet

| Phase         | Purpose                              |
|---------------|--------------------------------------|
| survey        | Initial info-gathering request       |
| discussion-N  | Round N of structured discussion     |
| decision      | Locked decision (also in Decisions/) |
| checkpoint    | Mid-build review request             |
| report        | Status / completion                  |
| ack           | Acknowledgement of receipt           |
| question      | Clarification                        |
| block         | Stop-work signal (highest priority)  |
| unblock       | Resume-work signal                   |

## Lifecycle

```
inbox/  ──ack──►  processed/  ──90d+──►  archive/
```

Files are moved, never edited, after creation (except for status
updates, which go in the frontmatter).