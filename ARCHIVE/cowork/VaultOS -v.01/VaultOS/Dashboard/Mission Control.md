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
,Description:
