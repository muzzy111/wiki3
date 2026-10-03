# Build — active project outputs

Each project lives in its own subfolder. Inside, each agent's work
lives in a per-agent subfolder, and the lead's promoted/integrated
version lives at the top level.

```
Build/
├── README.md
└── <project-name>/
    ├── README.md          ← project overview, lead, status
    ├── Hermes/            ← promoted/integrated (lead is Hermes here)
    ├── OpenCode/          ← in-progress OpenCode work
    ├── Antigravity/       ← in-progress Antigravity work
    └── NotebookLM/        ← in-progress NotebookLM work
```

## Promotion rules

- Each agent writes only into their own `<project>/<agent>/` folder.
- The lead promotes work to `<project>/` only after verification.
- `Build/<project>/` is the source of truth for "what's done".

Empty at template bootstrap.