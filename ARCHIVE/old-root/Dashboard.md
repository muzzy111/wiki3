---
aliases: []
tags:
  - ollama
  - local
  - compose
  - model
---

# Vault OS Dashboard

> [!INFO]
> *Welcome to your central control panel. This page aggregates metrics, indexes primary categories, and tracks recently modified assets using dynamic **DataviewJS** blocks and customized card stylings.*

---

## Vault Intelligence Metrics

```dataviewjs
const totalNotes = dv.pages().length;
const totalSkills = dv.pages('"10.03 SKILLS"').where(p => p.file.name === "SKILL").length;
const totalTools = dv.pages('"10.02 TOOLS"').length;
const totalPrompts = dv.pages('"10.01 PROMPTS"').length;

dv.paragraph(`
<div class="glass-panel" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; text-align: center; margin: 16px 0; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; background: rgba(17,24,39,0.3); padding: 16px;">
  <div>
    <div style="font-size: 24px; font-weight: bold; color: var(--accent-blue); text-shadow: 0 0 8px rgba(59,130,246,0.3);">${totalNotes}</div>
    <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; margin-top: 4px;">Total Notes</div>
  </div>
  <div>
    <div style="font-size: 24px; font-weight: bold; color: var(--accent-teal); text-shadow: 0 0 8px rgba(20,184,166,0.3);">${totalSkills}</div>
    <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; margin-top: 4px;">Skills Configured</div>
  </div>
  <div>
    <div style="font-size: 24px; font-weight: bold; color: var(--accent-purple); text-shadow: 0 0 8px rgba(168,85,247,0.3);">${totalTools}</div>
    <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; margin-top: 4px;">MCP Tools</div>
  </div>
  <div>
    <div style="font-size: 24px; font-weight: bold; color: var(--accent-amber); text-shadow: 0 0 8px rgba(245,158,11,0.3);">${totalPrompts}</div>
    <div style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; margin-top: 4px;">Prompt Sets</div>
  </div>
</div>
`);
```

---

## Interactive Knowledge Graph

<iframe src="10.19 Graphs/vault-graph.html" width="100%" height="450px" style="border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; background: #0b0f19;"></iframe>

---

## Core Categories (MOC Index)

```dataviewjs
// Dynamic MOC card layout for main vault folders (completely text-only)
const mainFolders = [
  { name: "00.01 Antigravity", path: "00.01 Antigravity", desc: "Core configuration and instructions for the Antigravity assistant stack." },
  { name: "00.02 MiniMaxx", path: "00.02 MiniMaxx", desc: "Local orchestration systems and GGUF model execution specifications." },
  { name: "00.03 Hermes", path: "00.03 Hermes", desc: "Hermes system agents, coordination workflows, and communication logs." },
  { name: "10.01 PROMPTS", path: "10.01 PROMPTS", desc: "Agent role prompts, system instructions, and prompt injection/jailbreak research." },
  { name: "10.02 TOOLS", path: "10.02 TOOLS", desc: "MCP servers, CLI integration files, API databases, and utilities." },
  { name: "10.03 SKILLS", path: "10.03 SKILLS", desc: "The primary skill matrix containing 774 executable skill capability modules." },
  { name: "10.10 OSINT", path: "10.10 OSINT", desc: "Open-source intelligence gathering guidelines, tools, and search patterns." },
  { name: "10.12 MCP", path: "10.12 MCP", desc: "Model Context Protocol servers, configurations, and connection specifications." }
];

dv.table(
  ["Category", "Details", "Action"],
  mainFolders.map(f => {
    // Check item count in folder
    const notesInFolder = dv.pages(`"${f.path}"`).length;
    return [
      `**[[${f.name}]]**`,
      f.desc,
      `${notesInFolder} nodes`
    ];
  })
);
```

---

## Recently Modified Notes

```dataviewjs
// Display the 6 most recently modified markdown files in the vault (excluding this one)
const recents = dv.pages()
  .where(p => p.file.name !== "Dashboard" && p.file.name !== "vault-graph")
  .sort(p => p.file.mtime, "desc")
  .slice(0, 6);

dv.table(
  ["Note", "Location", "Last Saved"],
  recents.map(p => [
    p.file.link,
    `\`${p.file.folder}\``,
    moment(p.file.mtime.toString()).format("YYYY-MM-DD HH:mm")
  ])
);
```

---

## Vault Quality & Health Audit

```dataviewjs
// Find potential gaps in the vault: orphans, blank notes, and notes missing tag definitions (text-only status)
const orphans = dv.pages().where(p => p.file.inlinks.length === 0 && p.file.name !== "Dashboard" && p.file.name !== "CLAUDE" && p.file.name !== "vault-graph");
const untagged = dv.pages().where(p => !p.file.tags || p.file.tags.length === 0);

dv.table(
  ["Audit Category", "Notes", "Status"],
  [
    ["Orphaned Notes (No incoming links)", orphans.slice(0, 3).map(p => p.file.link).join(", ") || "None", orphans.length > 0 ? "Review Required" : "Clear"],
    ["Untagged Notes (Needs metadata)", untagged.slice(0, 3).map(p => p.file.link).join(", ") || "None", untagged.length > 0 ? "Missing Tags" : "Clear"]
  ]
);
```
