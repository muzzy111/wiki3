---
title: "Onboarding Wizard"
role: onboarding
audience: [new-operators]
version: "1.0"
---

# LOOP Onboarding Wizard

Welcome. This page walks you through your first run of the LOOP Agent OS. There are four steps, each with a single action. Buttons are Dataview-style links; the live state below them updates as you go.

> Tip: open this page in Obsidian with the Dataview plugin installed. The wizard reads your local state and renders itself.

---

## Step 1 of 4 - OpenRouter API Key

LOOP routes through OpenRouter by default. Paste your key into the local secrets file. The wizard will then confirm it loads.

**Action:** create `C:\loop-services\loopd\.env` with one line:

```
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Then click:** [I have saved my key](#step-2-of-4)

---

## Step 2 of 4 - Verify Agent Binaries

Each of the ten persistent agents must be on disk and respond to a health check. The wizard below auto-runs the checks.

```dataviewjs
const agents = ["hermes", "claude", "cline", "grok", "opencode",
                "mavis", "antigravity", "copilot", "openwork", "ollama"];

const rows = agents.map(name => {
  const f = app.vault.getAbstractFileByPath(`loop-services/agents/${name}.yaml`);
  const present = !!f;
  return [name, present ? "FOUND" : "MISSING", present ? "[restart](#)" : "[install](#)"];
});

dv.table(["Agent", "Status", "Action"], rows);
```

If any row says MISSING, open the row's link and follow the install instructions. When all ten say FOUND, move on.

**Then click:** [All agents green](#step-3-of-4)

---

## Step 3 of 4 - Activate Your First Team

Pick the team that matches what you want to do today. The button below activates it.

```dataviewjs
const teams = [
  ["osint",            "OSINT investigations"],
  ["software-eng",     "Code, reviews, tests"],
  ["agent-eng",        "Build new agents and skills"],
  ["kb-creation",      "Ingest into your vault"],
  ["deep-research",    "Long-form research"],
  ["global-outlook",   "Trends, economics, signals"]
];

dv.list(teams.map(([t, desc]) =>
  `[Activate ${t}](#step-4-of-4) - ${desc}`
));
```

A good first pick is **software-eng** if you want to see code work, or **osint** if you want to see the live web pipeline. If you are unsure, take **osint**.

After activation, the kanban at `TASKS/Kanban.md` will show the team as Ready.

**Then click:** [Team is ready](#step-4-of-4)

---

## Step 4 of 4 - First Dispatch

You are ready to dispatch. Pick a starter prompt. The wizard will paste it for you.

```dataviewjs
const starters = {
  "osint":          "Verify the provenance of a recent news image. Identify first source and mutation chain.",
  "software-eng":   "Run the test suite on the current branch. Summarize failures and propose a fix.",
  "agent-eng":      "Author a new SKILL.md for a capability you wish you had. Use the template.",
  "kb-creation":    "Ingest the last 10 PDFs from your Downloads folder. Summarize each and link related ones.",
  "deep-research":  "Research the current state of one policy area you follow. Extract claims and sources.",
  "global-outlook": "Scan the last week for one signal in your region. Forecast one variable 30 days out."
};

const active = dv.current().frontmatter?.active_team || "osint";
dv.paragraph(`> Suggested prompt for your active team (${active}):`);
dv.block(starters[active]);
dv.paragraph("[Copy and paste into the chat pane, then press Enter](#)");
```

**Run it.** Watch the kanban. The card moves through:

```
Backlog   ->   In Progress   ->   Review   ->   Done
```

Open the card's `task_id` to see the live transcript in the chat mirror.

---

## You Are Done

You have:

- [x] Saved your OpenRouter key
- [x] Confirmed all ten agents are healthy
- [x] Activated your first team
- [x] Dispatched your first task

**Next reads:**

- `SYSTEM/Operating Manual.md` - the daily manual
- `SYSTEM/Architecture.md`     - the system map
- `SYSTEM/Developer Guide.md`  - how to extend LOOP

Welcome aboard.
