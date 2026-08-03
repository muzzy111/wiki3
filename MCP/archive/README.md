---
title: MCP Archive
tags: [mcp, archive, deprecated]
created: 2026-07-01
type: mcp-archive
status: active
---

# MCP Archive

> Deprecated MCP servers. Kept for at least 30 days before removal. Useful for understanding prior art and for recovery if a deprecated server turns out to be needed again.

## What Lives Here

When a server is deprecated:

1. Move the entire `servers/<server-name>/` folder into `archive/<server-name>/`.
2. Update the server's `README.md` frontmatter: `status: deprecated`, add `deprecated_on: YYYY-MM-DD`, `deprecated_reason: <why>`.
3. Update the [[../README]] catalog index: move the row from `Active` to `Deprecated`.
4. After 30 days, if no revival request has been received, the server may be deleted.

## Revival

If a deprecated server needs to come back:

1. Move the folder from `archive/<server-name>/` back to `servers/<server-name>/`.
2. Update frontmatter: `status: draft` (or `active` if no changes needed).
3. Update the catalog.
4. Verify the server still works (deps may have drifted).
5. Submit to Mavis for re-review.

## Current Archived Servers

> None archived.