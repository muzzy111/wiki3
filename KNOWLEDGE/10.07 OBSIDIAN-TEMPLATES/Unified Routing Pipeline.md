---
aliases: []
tags:
  - const
  - title
  - targetdir
  - await
---

<%*
// ANTI-OBSIDIAN: Unified Routing Pipeline
const title = await tp.system.prompt("Enter Note Title:");
if (!title) {
    new Notice("Intake aborted. A node cannot exist without a signifier.");
    return;
}

const destinations = [
    "01.00 INBOX",
    "20.00 PROJECTS",
    "[[10.01 [[[[PROMPTS]]]]]]",
    "[[10.02 TOOLS]]",
    "[[10.08 PYTHON]]",
    "[[10.10 OSINT]]",
    "30.00 CANVASES"
];
const aliases = destinations.map(d => d.replace(/[0-9.]+\s/, ""));
const targetDir = await tp.system.suggester(aliases, destinations, false, "Select Routing Destination:");

// Rename the current file and route it
await tp.file.rename(title);
if (targetDir) {
    await tp.file.move(targetDir + "/" + title);
}

// Generate the operational frontmatter
const created = tp.date.now("YYYY-MM-DDTHH:mm:ss");
const domainTag = targetDir ? targetDir.replace(/[0-9.]+\s/, "").toLowerCase() : "inbox";

tR += `---
title: "${title}"
aliases: []
tags: 
  - ${domainTag}
created: ${created}
modified: ${created}
type: atomic
[[status]]: active
---

# ${title}

## Synthesis
> [!abstract] 
> Core concepts, arguments, or operational data belong here.

## References & Edges
- 

## Open Threads
- [ ] Process and integrate into local graph
`
-%>
