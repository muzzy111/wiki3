<%*
const title = tp.file.title.startsWith("Untitled") ? await tp.system.prompt("Prompt Name:") : tp.file.title;
if (tp.file.title.startsWith("Untitled")) {
    await tp.file.rename(title);
}
const serial = "PRM-" + tp.date.now("YYMMDD") + "-" + tp.date.now("HHmmss");
const description = await tp.system.prompt("Prompt Description:");
-%>
---
serial: "<% serial %>"
description: "<% description %>"
tags:
  - prompt
status: active
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
---
# <% title %>

## ▸ SYSTEM PERSONA
<% tp.file.cursor(1) %>

## ▸ CORE INSTRUCTIONS


## ▸ OUTPUT FORMAT


---
*VaultOS | Prompt Serial: `<% serial %>`*
