---
title: "Ponytail MCP Server"
type: dashboard
cssclasses: [cards]
tags:
  - mcp-server
  - corpus/github
  - status/active
created: 2026-07-05
modified: 2026-07-05
---

# [[Ponytail]] MCP Server

> [!info] MCP Server Profile
> **Type:** javascript
> **Framework:** @modelcontextprotocol/sdk
> **Source:** `C:/Users/Admin/Documents/GitHub/[[ponytail]]/[[ponytail]]-mcp`
> **Repo:** https://github.com/.../[[ponytail]]

## Description

MCP server that serves [[Ponytail]]'s lazy-senior-dev instructions as a prompt and a tool.

## Quick reference

| Field | Value |
|-------|-------|
| Type | javascript |
| Framework | @modelcontextprotocol/sdk |
| Source path | `C:/Users/Admin/Documents/GitHub/[[ponytail]]/[[ponytail]]-mcp` |
| Repo | https://github.com/.../[[ponytail]] |
| Tools detected | 1 |

## Tools exposed

- `[[ponytail]]`

## Source files

### `C:/Users/Admin/Documents/GitHub/[[ponytail]]/[[ponytail]]-mcp/index.js`

```javascript
#!/usr/bin/env node
// Ponytail MCP server: serves the lazy-senior-dev ruleset over stdio as a
// prompt (user-invoked) and a tool (for hosts that pull context via tools).
// It does NOT replace the always-on adapters; it's the clean option for hosts
// whose only injection point is the prompt menu (see #70).
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { MODES, buildInstructions, resolveMode } from "./instructions.js";

const server = new McpServer({ name: "ponytail", version: "0.1.0" });

const modeArg = z
  .enum(MODES)
  .optional()
  .describe("Ponytail intensity: lite, full, or ultra. Omit for the configured default.");

server.registerPrompt(
  "ponytail",
  {
    title: "Ponytail mode",
    description: "Lazy senior dev instructions: YAGNI, stdlib first, the smallest correct change.",
    argsSchema: { mode: modeArg },
  },
  ({ mode }) => ({
    messages: [{ role: "user", content: { type: "text", text: buildInstructions(mode) } }],
  }),
);

server.registerTool(
  "ponytail_instructions",
  {
    title: "Ponytail instructions",
    description: "Return the Ponytail ruleset for the given intensity (lite, full, or ultra).",
    inputSchema: { mode: modeArg },
    outputSchema: { mode: z.string(), instructions: z.string() },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  ({ mode }) => {
    const resolvedMode = resolveMode(mode);
    const instructions = buildInstructions(resolvedMode);
    const structuredContent = { mode: resolvedMode, instructions };
    return { content: [{ type: "text", text: instructions }], structuredContent };
  },
);

await server.connect(new StdioServerTransport());

```

### `C:/Users/Admin/Documents/GitHub/[[ponytail]]/[[ponytail]]-mcp/instructions.js`

```javascript
// Pure instruction selection for the Ponytail MCP server. No MCP/SDK imports,
// so this stays unit-testable on its own. Reuses the same builder the Claude
// hooks and Pi extension use, so every host emits identical rules.
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { getPonytailInstructions } = require("../hooks/ponytail-instructions.js");
const { getDefaultMode, normalizeMode } = require("../hooks/ponytail-config.js");

// The three intensities the server offers. "off" has no instructions to serve.
export const MODES = ["lite", "full", "ultra"];

// Resolve a requested mode to a runtime intensity. Unknown, empty, or "off"
// falls back to the configured default, then to "full".
// ponytail: keep the surface to these three; "off"/"review" aren't served here.
export function resolveMode(requested) {
  const asked = normalizeMode(requested);
  if (asked && asked !== "off") return asked;

  const fallback = normalizeMode(getDefaultMode());
  return fallback && fallback !== "off" ? fallback : "full";
}

export function buildInstructions(requested) {
  return getPonytailInstructions(resolveMode(requested));
}

```

### `C:/Users/Admin/Documents/GitHub/[[ponytail]]/[[ponytail]]-mcp/package.json`

```json
{
  "name": "ponytail-mcp",
  "version": "0.1.0",
  "description": "MCP server that serves Ponytail's lazy-senior-dev instructions as a prompt and a tool.",
  "private": true,
  "type": "module",
  "license": "MIT",
  "scripts": { "test": "node --test ./test/*.test.js" },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.26.0",
    "zod": "^3.23.0"
  }
}

```


## Original [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

# [[ponytail]]-mcp

An MCP server that serves [[Ponytail]]'s lazy-senior-dev instructions. It exposes
the same ruleset the Claude hooks and Pi extension use, so every host emits
identical rules.

It is not a replacement for the always-on adapters. [[Ponytail]] normally lives in
the system context every turn. MCP [[[[prompts]]]] are user-invoked, and there is no
portable MCP primitive for "inject this into every turn" across hosts. So this
server is the clean option for MCP hosts whose only injection point is the
prompt menu, or that pull context through tools. See issue #70.

## What it exposes

- Prompt `[[ponytail]]`, returns the ruleset as a user message. Optional `mode`
  argument: `lite`, `full`, or `ultra`. Omit it to use the configured default.
- Tool `ponytail_instructions`, same text, plus `structuredContent`
  (`{ mode, instructions }`), for hosts that pull context via tools or code
  execution. Read-only.

Mode resolution reuses `hooks/[[ponytail]]-config.js`, so `PONYTAIL_DEFAULT_MODE`
and `~/.config/[[ponytail]]/config.json` work the same as everywhere else.

## Run it

```bash
cd ponytail-mcp
npm install
node index.js        # speaks MCP over stdio
```

Point an MCP host at that command. Example client entry:

```json
{ "mcpServers": { "ponytail": { "command": "node", "args": ["ponytail-mcp/index.js"] } } }
```

## Test

```bash
npm test
```

Covers mode resolution and the instruction text. The MCP wiring in `index.js`
is intentionally thin: it just maps the prompt and tool onto
`buildInstructions`.



## See also

- [[10.12 MCP]] — sector index
- [[pentest-ai-mcp]]
- [[omniwire-mcp]]
- [[supermemory-mcp]]
- [[mcp-code-executor]]
- [[read-file-enhanced-mcp]]
