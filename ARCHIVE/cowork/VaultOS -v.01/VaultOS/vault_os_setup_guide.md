# VaultOS: Obsidian Configuration & Setup Guide

This document outlines the exact configuration, folders, plugins, custom scripts, and CSS snippets required to establish **VaultOS**—the file-driven AI operating system and "Mission Control" dashboard inside an Obsidian vault.

***

## 1. Vault Directory Structure

Create the following folder structure in the root of your Obsidian vault. This forms the database, state engine, and memory bank of the system:

```text
VaultOS/
├── Dashboard/                 # UI notes, control panels, and metrics
│   ├── Mission Control.md     # Primary operations console
│   └── System Health.md       # LLM cost tracking, token budget, and resource usage
├── Agents/                    # One directory per AI agent worker
│   └── Research Agent/
│       ├── agent.yaml         # Static config (model, capabilities, API keys)
│       ├── status.json        # Live status (running, progress, last_run)
│       ├── queue.json         # Pending jobs for this specific agent
│       ├── logs/              # Log history files
│       ├── output/            # Intermediate outputs
│       └── memory/            # Local episodic/short-term memory
├── Workflows/                 # Multi-agent pipelines and templates (n8n-like)
├── Templates/                 # Scaffolds for new agents, workflows, and prompts
│   ├── Agent Template/
│   │   ├── README.md
│   │   ├── agent.yaml
│   │   └── status.json
├── Memory/                    # Shared system memory (long-term, semantic)
│   ├── long_term/             # Persistent notes (coding preferences, styling)
│   └── episodic/              # Recap notes of recent pipeline tasks
├── Queue/                     # Event-driven system-wide task orchestrator
│   ├── Incoming/              # Drop new task JSONs here to trigger agents
│   ├── Running/               # Currently processing tasks
│   ├── Completed/             # Successfully executed tasks
│   └── Failed/                # Errored tasks (contains error logs)
├── Events/                    # Real-time event bus (JSON notifications)
├── Logs/                      # Combined audit trails
├── Outputs/                   # Final, production-ready outputs (no scratchpad files)
├── Prompts/                   # Centralized prompt library (markdown files)
└── Config/                    # Global settings (llms.yaml, settings.yaml)
```

***

## 2. Core Obsidian Plugins

To make this dashboard interactive, you must install and enable the following community plugins:

| Plugin Name | Purpose | Configuration Requirements |
| :--- | :--- | :--- |
| **Dataview** | Dynamic querying of file metadata and status files. | Enable **Enable JavaScript Queries** and **Enable Inline Queries**. |
| **Meta Bind** | Interactive input controls (buttons, toggles, sliders). | Enable binding to frontmatter properties and external variables. |
| **Shell Commands** | Triggers Python scripts, CLI tools, and n8n workflows. | Enable commands and specify target shells (PowerShell/Bash). |
| **Templater** | Automates directory creation (scaffolding new agents). | Set up Templater folder templates mapping to the `Templates/` directory. |
| **Style Settings** | Styling configurations. | Used alongside custom CSS snippets to configure colors and borders. |

***

## 3. Dashboard UI Implementation

### A. Custom CSS Snippets (Mission Control Styling)

Create a file named `vault-os-style.css` in your vault's `.obsidian/snippets/` folder and enable it in **Appearance -> CSS Snippets**:

```css
/* Glassmorphism Cards for Dashboard */
.vaultos-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.vaultos-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.vaultos-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.15);
}

/* Status LEDs */
.led-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.led-indicator.running {
  background-color: #2ecc71;
  box-shadow: 0 0 8px #2ecc71;
  animation: pulse-green 1.5s infinite;
}

.led-indicator.idle {
  background-color: #95a5a6;
  box-shadow: 0 0 3px #95a5a6;
}

.led-indicator.waiting {
  background-color: #f1c40f;
  box-shadow: 0 0 8px #f1c40f;
  animation: pulse-yellow 1.5s infinite;
}

.led-indicator.failed {
  background-color: #e74c3c;
  box-shadow: 0 0 8px #e74c3c;
}

@keyframes pulse-green {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(46, 204, 113, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
}

@keyframes pulse-yellow {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(241, 196, 15, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(241, 196, 15, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(241, 196, 15, 0); }
}

/* Progress bar alignment */
.vaultos-progress-bg {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  height: 8px;
  width: 100%;
  margin-top: 8px;
  overflow: hidden;
}

.vaultos-progress-bar {
  background: linear-gradient(90deg, #3498db, #2ecc71);
  height: 100%;
  border-radius: 5px;
  transition: width 0.4s ease;
}
```

***

### B. Mission Control Dashboard (`Mission Control.md`)

This markdown file acts as the primary control interface. Use **DataviewJS** to parse the `status.json` states of each agent dynamically and render them inside glassmorphic cards:

```markdown
---
cssclasses: [vaultos-dashboard-page]
---

# 🛰️ VaultOS Mission Control

```dataviewjs
// 1. Locate all agent directories
const agentsFolder = "VaultOS/Agents";
const agentFolders = app.vault.getAbstractFileByPath(agentsFolder).children.filter(f => f.isFolder);

let cardsHTML = `<div class="vaultos-dashboard">`;

for (let folder of agentFolders) {
    const statusFile = `${folder.path}/status.json`;
    const configFile = `${folder.path}/agent.yaml`;
    
    let status = { status: "offline", progress: 0, last_run: "Never" };
    let config = { model: "Unknown", capabilities: [] };
    
    // Parse status.json safely
    let statusAbsFile = app.vault.getAbstractFileByPath(statusFile);
    if (statusAbsFile) {
        try {
            let content = await app.vault.read(statusAbsFile);
            status = JSON.parse(content);
        } catch(e) {}
    }
    
    // Determine LED Class
    let ledClass = "idle";
    if (status.status === "running") ledClass = "running";
    else if (status.status === "waiting") ledClass = "waiting";
    else if (status.status === "failed") ledClass = "failed";
    
    // Add Card
    cardsHTML += `
    <div class="vaultos-card">
        <h3 style="margin: 0 0 8px 0;">
            <span class="led-indicator ${ledClass}"></span>
            ${folder.name}
        </h3>
        <p style="font-size: 0.85em; margin: 4px 0; color: var(--text-muted);">
            <b>Status:</b> ${status.status.toUpperCase()}<br>
            <b>Last Run:</b> ${status.last_run}
        </p>
        <div style="font-size: 0.8em; margin-top: 8px;">
            <b>Progress:</b> ${status.progress}%
        </div>
        <div class="vaultos-progress-bg">
            <div class="vaultos-progress-bar" style="width: ${status.progress}%"></div>
        </div>
        <div style="margin-top: 12px; display: flex; gap: 8px;">
            <button class="mod-cta" onclick="window.runVaultOSAgent('${folder.name}')">Run</button>
            <button onclick="window.stopVaultOSAgent('${folder.name}')">Stop</button>
        </div>
    </div>`;
}

cardsHTML += `</div>`;
dv.paragraph(cardsHTML);

// 2. Global handlers (wired to Meta Bind / Shell Commands execution)
window.runVaultOSAgent = function(agentName) {
    app.commands.executeCommandById(`shell-commands:run-agent-${agentName.toLowerCase().replace(/\\s/g, "-")}`);
};

window.stopVaultOSAgent = function(agentName) {
    app.commands.executeCommandById(`shell-commands:stop-agent-${agentName.toLowerCase().replace(/\\s/g, "-")}`);
};
```

***

## 4. Integration with Shell Commands (The Core Runner)

To connect the UI buttons to your local scripts (e.g., Python execution of Hermes or local scripts), configure the **Shell Commands** plugin:

1. Open **Settings -> Shell Commands -> New Command**.
2. **Title**: `Run Agent - Research Agent`
3. **Command**:
   ```bash
   python "{{vault_path}}/VaultOS/System/Scripts/runner.py" --agent "Research Agent" --action start
   ```
4. Assign this shell command an ID, e.g., `run-agent-research-agent`. This maps to the click handler in the DataviewJS dashboard.
5. Create a stop handler command `Stop Agent - Research Agent` with `--action stop`.

***

## 5. Event-Driven Task Queue (No Databases)

To enqueue a task deterministically without a database, use the `VaultOS/Queue/` folder structure:

1. To run a task, create a file named `<task_id>.json` in `VaultOS/Queue/Incoming/`:
   ```json
   {
     "task_id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
     "agent": "Research Agent",
     "workflow": "Literature Search",
     "input": {
       "queries": ["multi-agent consensus protocols", "model routing benchmarks"],
       "depth": 3
     },
     "max_budget_usd": 0.25,
     "timestamp": "2026-06-19T00:10:00Z"
   }
   ```
2. Your local daemon script (running in the background via python/scheduler or called when a shell trigger fires) polls `Incoming/`, moves the JSON to `Running/`, updates the corresponding agent's `status.json` (`running: true`, `progress: 10%`), and runs the executor.
3. Upon completion or failure, the file moves to `Completed/` or `Failed/` with an appended output or error trace field.

***

## 6. The Model Router implementation (`Config/llms.yaml`)

Define your intelligence tier rules in `VaultOS/Config/llms.yaml` for agents to query:

```yaml
tiers:
  level_1_tiny:
    default_model: "ollama/llama3:8b"
    fallback_model: "openrouter/meta-llama/llama-3-8b-instruct"
    max_token_budget: 1000
    hourly_rate_limit: 50
    actions: ["classify", "rename", "regex-extract", "tagging"]

  level_2_standard:
    default_model: "gemini/gemini-1.5-flash"
    fallback_model: "openrouter/google/gemini-flash-1.5"
    max_token_budget: 8000
    actions: ["summarize", "explanation", "rewrite"]

  level_3_reasoning:
    default_model: "openrouter/deepseek/deepseek-chat"
    fallback_model: "openai/gpt-4o-mini"
    max_token_budget: 16000
    actions: ["coding", "literature-synthesis", "search-planning"]

  level_4_premium:
    default_model: "anthropic/claude-3-5-sonnet"
    fallback_model: "openai/gpt-4o"
    max_token_budget: 32000
    actions: ["architecture-review", "complex-debugging", "synthesis"]

budget_governance:
  max_spend_per_workflow_usd: 0.25
  downgrade_threshold: 0.80 # Downgrade to lower tier model when spending hits 80%
```

***

## 7. Step-by-Step Configuration Checklist

1. [ ] **Folder Scaffolding**: Create the root directory `VaultOS` and all subdirectories listed in Section 1.
2. [ ] **Templates Configuration**: Populate `VaultOS/Templates/Agent Template/` with scaffolding defaults.
3. [ ] **CSS Injection**: Add the snippet from Section 3.A to your vault snippets directory and activate it.
4. [ ] **Dashboard Note Creation**: Create `VaultOS/Dashboard/Mission Control.md` and insert the DataviewJS code from Section 3.B.
5. [ ] **Install Plugins**: Go to community plugins and search for and install *Dataview*, *Meta Bind*, and *Shell Commands*.
6. [ ] **Command Mapping**: Wire up the executable triggers in *Shell Commands* pointing to your background runner script.
7. [ ] **YAML Initialization**: Define global rules inside `VaultOS/Config/llms.yaml`.
