<%*
const title = tp.file.title.startsWith("Untitled") ? await tp.system.prompt("Skill Name:") : tp.file.title;
if (tp.file.title.startsWith("Untitled")) {
    await tp.file.rename(title);
}
const serial = "SKL-" + tp.date.now("YYMMDD") + "-" + tp.date.now("HHmmss");
const description = await tp.system.prompt("Skill Description:");
-%>
---
serial: "<% serial %>"
description: "<% description %>"
tags:
  - skill
status: active
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
---
# ⚡ <% title %>

## ▸ SKILL EXECUTION PROTOCOL
<% tp.file.cursor(1) %>

## ▸ DEPENDENCIES & TRIGGERS


---
*VaultOS | Skill Serial: `<% serial %>`*
