---
aliases: [Vault Dashboard, Automator]
tags:
  - tools
  - maintenance
  - dashboard
---
# Vault Maintenance [[Dashboard]]

This [[dashboard]] controls the automated processing pipeline for the vault. The script ensures YAML integrity, extracts organic tags, and injects unlinked mentions as dynamic wiki links.

## Quick Actions
```bash
# To run the automator manually from the terminal, execute this:
python "C:\Users\Admin\OBSIDIAN\wiki\10.02 TOOLS\vault_automator.py"
```

## Automator [[Status]]

Below is the live [[status]] of the latest run of the Vault Automator script. 
*(Requires Dataview to render dynamically)*

```dataviewjs
const fs = require('fs');
const path = require('path');
const logPath = app.vault.adapter.getBasePath() + "/10.02 TOOLS/automator-log.json";

if (fs.existsSync(logPath)) {
    const data = JSON.parse(fs.readFileSync(logPath, 'utf8'));
    
    let color = data.status === "Complete" ? "var(--accent-blue)" : "var(--accent-red)";
    
    dv.paragraph(`### Current Status: <span style="color: ${color}">${data.status}</span>`);
    dv.paragraph(`**Progress:** ${data.processed} / ${data.total} files`);
    dv.paragraph(`**Message:** ${data.message}`);
    
    // Simple progress bar
    let percent = (data.processed / data.total) * 100;
    dv.paragraph(`<div style="width: 100%; background: rgba(255,255,255,0.1); border-radius: 5px;"><div style="width: ${percent}%; background: ${color}; height: 10px; border-radius: 5px;"></div></div>`);
} else {
    dv.paragraph("No log file found. Run the automator script to generate status logs.");
}
```

## Features Executed by the Automator
1. **YAML Validation:** Injects foundational YAML structure (`aliases`, `tags`) into any markdown file missing a frontmatter block.
2. **Keyword Extraction:** Calculates term frequency, stripping common stop words, and injects the highest density terms directly into the `tags` array.
3. **Cross-Pollination Engine (Auto-linking):** Scans document bodies for raw textual mentions of existing node titles and wraps them in `[[wiki links]]` without touching code blocks or existing links.
