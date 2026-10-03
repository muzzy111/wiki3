---
title: "Supermemory MCP App"
type: dashboard
cssclasses: [cards]
tags:
  - mcp-server
  - corpus/github
  - status/active
created: 2026-07-05
modified: 2026-07-05
---

# [[Supermemory]] MCP App

> [!info] MCP Server Profile
> **Type:** typescript
> **Framework:** @modelcontextprotocol/sdk + ext-apps
> **Source:** `C:/Users/Admin/Documents/GitHub/supermemory/apps/mcp`
> **Repo:** https://github.com/supermemory/supermemory

## Description

Supermemory MCP app — exposes long-term memory to any MCP-compatible client via ext-apps protocol.

## Quick reference

| Field | Value |
|-------|-------|
| Type | typescript |
| Framework | @modelcontextprotocol/sdk + ext-apps |
| Source path | `C:/Users/Admin/Documents/GitHub/supermemory/apps/mcp` |
| Repo | https://github.com/supermemory/supermemory |
| Tools detected | 1 |

## Tools exposed

- `supermemory-mcp`

## Source files

### `C:/Users/Admin/Documents/GitHub/supermemory/apps/mcp/src/index.ts`

```typescript
import { cors } from "hono/cors"
import { Hono, type Context } from "hono"
import { SupermemoryMCP } from "./server"
import { isApiKey, validateApiKey, validateOAuthToken } from "./auth"
import { initPosthog } from "./posthog"
import type { ContentfulStatusCode } from "hono/utils/http-status"

type Bindings = {
	MCP_SERVER: DurableObjectNamespace
	API_URL?: string
	MCP_URL?: string
	POSTHOG_API_KEY?: string
}

type Props = {
	userId: string
	apiKey: string
	containerTag?: string
	email?: string
	name?: string
}

const app = new Hono<{ Bindings: Bindings }>()

const DEFAULT_API_URL = "https://api.supermemory.ai"
const DEFAULT_MCP_URL = "https://mcp.supermemory.ai"

const mcpBaseUrl = (c: Context<{ Bindings: Bindings }>) => {
	if (c.env.MCP_URL) return c.env.MCP_URL.replace(/\/$/, "")
	const host = c.req.header("x-forwarded-host") || c.req.header("host")
	const proto = c.req.header("x-forwarded-proto") || "https"
	return host ? `${proto}://${host}` : DEFAULT_MCP_URL
}

// CORS
app.use(
	"*",
	cors({
		origin: "*",
		allowMethods: ["GET", "POST", "DELETE", "OPTIONS"],
		allowHeaders: [
			"Content-Type",
			"Authorization",
			"x-sm-project",
			"Accept",
			"Mcp-Session-Id",
			"MCP-Protocol-Version",
			"Last-Event-ID",
		],
		exposeHeaders: ["Mcp-Session-Id", "WWW-Authenticate"],
	}),
)

app.use("*", async (c, next) => {
	initPosthog(c.env.POSTHOG_API_KEY)
	await next()
})

app.get("/", (c) => {
	return c.json({
		name: "supermemory-mcp",
		version: "4.0.0",
		description: "Give your AI a memory",
		docs: "https://docs.supermemory.ai/mcp",
	})
})

// MCP clients use this to discover the authorization server
const protectedResourceHandler = (c: Context<{ Bindings: Bindings }>) => {
	const apiUrl = c.env.API_URL || DEFAULT_API_URL
	return c.json({
		resource: `${mcpBaseUrl(c)}/mcp`,
		authorization_servers: [apiUrl],
		scopes_supported: ["openid", "profile", "email", "offline_access"],
		bearer_methods_supported: ["header"],
		resource_documentation: "https://docs.supermemory.ai/mcp",
	})
}
app.get("/.well-known/oauth-protected-resource", protectedResourceHandler)
app.get("/.well-known/oauth-protected-resource/mcp", protectedResourceHandler)

// Proxy endpoint for MCP clients that don't follow the spec correctly
// Some clients look for oauth-authorization-server on the MCP server domain
// instead of following the authorization_servers array
app.get("/.well-known/oauth-authorization-server", async (c) => {
	const apiUrl = c.env.API_URL || DEFAULT_API_URL

	try {
		// Fetch the authorization server metadata from the main API
		const response = await fetch(
			`${apiUrl}/.well-known/oauth-authorization-server`,
		)

		if (!response.ok) {
			return c.json(
				{ error: "Failed to fetch authorization server metadata" },
				{ status: response.status as ContentfulStatusCode },
			)
		}

		const metadata = await response.json()
		return c.json(metadata)
	} catch (error) {
		console.error("Error fetching OAuth authorization server metadata:", error)
		return c.json({ error: "Internal server error" }, 500)
	}
})

const mcpHandler = SupermemoryMCP.serve("/mcp", {
	binding: "MCP_SERVER",
	corsOptions: {
		origin: "*",
		methods: "GET, POST, DELETE, OPTIONS",
		headers:
			"Content-Type, Authorization, x-sm-project, Accept, Mcp-Session-Id, MCP-Protocol-Version, Last-Event-ID",
	},
})

const handleMcpRequest = async (c: Context<{ Bindings: Bindings }>) => {
	const authHeader = c.req.header("Authorization")
	const token = authHeader?.replace(/^Bearer\s+/i, "")
	const containerTag = c.req.header("x-sm-project")
	const apiUrl = c.env.API_URL || DEFAULT_API_URL

	const resourceMetadataUrl = `${mcpBaseUrl(c)}/.well-known/oauth-protected-resource/mcp`

	if (!token) {
		return new Response("Unauthorized", {
			status: 401,
			headers: {
				"WWW-Authenticate": `Bearer resource_metadata="${resourceMetadataUrl}"`,
				"Access-Control-Expose-Headers": "WWW-Authenticate",
				"Access-Control-Allow-Origin": "*",
			},
		})
	}

	let authUser: {
		userId: string
		apiKey: string
		email?: string
		name?: string
	} | null = null

	if (isApiKey(token)) {
		console.log("Authenticating with API key")
		authUser = await validateApiKey(token, apiUrl)
	} else {
		console.log("Authenticating with OAuth token")
		authUser = await validateOAuthToken(token, apiUrl)
	}

	if (!authUser) {
		const errorMessage = isApiKey(token)
			? "Unauthorized: Invalid or expired API key"
			: "Unauthorized: Invalid or expired token"

		return new Response(
			JSON.stringify({
				jsonrpc: "2.0",
				error: {
					code: -32000,
					message: errorMessage,
				},
				id: null,
			}),
			{
				status: 401,
				headers: {
					"Content-Type": "application/json",
					"WWW-Authenticate": `Bearer error="invalid_token", resource_metadata="${resourceMetadataUrl}"`,
					"Access-Control-Expose-Headers": "WWW-Authenticate",
					"Access-Control-Allow-Origin": "*",
				},
			},
		)
	}

	// Create execution context with authenticated user props
	const ctx = {
		...c.executionCtx,
		props: {
			userId: authUser.userId,
			apiKey: authUser.apiKey,
			containerTag,
			email: authUser.email,
			name: authUser.name,
		} satisfies Props,
	} as ExecutionContext & { props: Props }

	return mcpHandler.fetch(c.req.raw, c.env, ctx)
}

app.all("/mcp", handleMcpRequest)
app.all("/mcp/*", handleMcpRequest)

// Export the Durable Object class for Cloudflare Workers
export { SupermemoryMCP }

export default app

```

### `C:/Users/Admin/Documents/GitHub/supermemory/apps/mcp/package.json`

```json
{
  "name": "supermemory-mcp",
  "version": "4.0.0",
  "type": "module",
  "portless": { "name": "mcp.dev.supermemory", "script": "dev:app" },
  "scripts": {
    "build:ui": "vite build",
    "dev": "portless",
    "dev:app": "vite build && wrangler dev --port ${PORT:-8788}",
    "deploy": "vite build && wrangler deploy --minify",
    "cf-typegen": "wrangler types --env-interface CloudflareBindings",
    "test:e2e": "vitest run"
  },
  "dependencies": {
    "@cloudflare/workers-oauth-provider": "^0.2.2",
    "@modelcontextprotocol/ext-apps": "^1.0.0",
    "@modelcontextprotocol/sdk": "^1.25.2",
    "agents": "^0.3.5",
    "hono": "^4.11.1",
    "posthog-node": "^5.18.0",
    "supermemory": "^4.0.0",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20250620.0",
    "d3-force-3d": "^3.0.5",
    "force-graph": "^1.49.0",
    "typescript": "^5.8.3",
    "vite": "^6.0.0",
    "vite-plugin-singlefile": "^2.3.0",
    "vitest": "^3.2.4",
    "wrangler": "^4.4.0"
  }
}

```

### `C:/Users/Admin/Documents/GitHub/supermemory/apps/mcp/wrangler.jsonc`

```
{
	"$schema": "node_modules/wrangler/config-schema.json",
	"name": "supermemory-mcp",
	"build": {
		"command": "bun run build:ui"
	},
	"main": "src/index.ts",
	"compatibility_date": "2025-01-01",
	"compatibility_flags": ["nodejs_compat"],

	"rules": [{ "type": "Text", "globs": ["**/*.html"], "fallthrough": false }],

	"vars": {
		"API_URL": "https://api.supermemory.ai"
	},
	"routes": [
		{
			"pattern": "mcp.supermemory.ai",
			"zone_name": "supermemory.ai",
			"custom_domain": true
		}
	],
	"durable_objects": {
		"bindings": [
			{
				"name": "MCP_SERVER",
				"class_name": "SupermemoryMCP"
			}
		]
	},

	"migrations": [
		{
			"tag": "v1",
			"new_sqlite_classes": ["SupermemoryMCP"]
		}
	],

	"observability": {
		"enabled": true
	}
}

```


## Original README

# Supermemory MCP Server 4.0

A standalone MCP (Model Context Protocol) server for Supermemory that gives AI assistants persistent memory across conversations. Built on Cloudflare Workers with Durable Objects for scalable, persistent connections.

## Features

- **Authentication** - Supports both API keys and OAuth authentication
- **Persistent Memory** - Save and recall information across sessions
- **User Profiles** - Auto-generated profiles from stored memories
- **Project Scoping** - Organize memories by project with `x-sm-project` header
- **Analytics** - PostHog integration for usage tracking

## Setup

### Quick Install (Recommended)

```bash
npx -y install-mcp@latest https://mcp.supermemory.ai/mcp --client claude --oauth=yes
```

Replace `claude` with your MCP client: `claude`, `cursor`, `windsurf`, etc.

### Manual Configuration

Add to your MCP client config (Claude Desktop, Cursor, Windsurf, etc.):

```json
{
  "mcpServers": {
    "supermemory": {
      "url": "https://mcp.supermemory.ai/mcp"
    }
  }
}
```

The server uses OAuth authentication by default. Your MCP client will automatically discover the authorization server via `/.well-known/oauth-protected-resource` and prompt you to authenticate.

### API Key Authentication (Alternative)

If you prefer to use an API key instead of OAuth, you can pass it directly in the `Authorization` header. Get your API key from [app.supermemory.ai](https://app.supermemory.ai):

```json
{
  "mcpServers": {
    "supermemory": {
      "url": "https://mcp.supermemory.ai/mcp",
      "headers": {
        "Authorization": "Bearer sm_your_api_key_here"
      }
    }
  }
}
```

API keys start with `sm_` and are automatically detected. When an API key is provided, OAuth [[authentication]] is skipped.

### Project Scoping (Optional)

To scope all operations to a specific project, add the `x-sm-project` header:

```json
{
  "mcpServers": {
    "supermemory": {
      "url": "https://mcp.supermemory.ai/mcp",
      "headers": {
        "x-sm-project": "your-project-id"
      }
    }
  }
}
```

## Tools

### `memory`

Save or forget information about the user.

```json
{
  "content": "User prefers dark mode and uses TypeScript",
  "action": "save",
  "containerTag": "optional-project-tag"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | Yes | The memory content to save or forget |
| `action` | `"save"` \| `"forget"` | No | Default: `"save"` |
| `containerTag` | string | No | Project tag to scope the memory |

### `recall`

Search memories and get user profile.

```json
{
  "query": "What are the user's programming preferences?",
  "includeProfile": true,
  "containerTag": "optional-project-tag"
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Search query to find relevant memories |
| `includeProfile` | boolean | No | Include user profile summary. Default: `true` |
| `containerTag` | string | No | Project tag to scope the search |

### `whoAmI`

Get the current logged-in user's information.

```json
{}
```

Returns: `{ userId, email, name, client, sessionId }`

## Resources

| URI | Description |
|-----|-------------|
| `[[supermemory]]://profile` | User profile with stable preferences and recent activity |
| `[[supermemory]]://projects` | List of available memory projects |

## [[[[Prompts]]]]

| Name | Description |
|------|-------------|
| `context` | User profile and preferences for system context injection |

## Development

### Prerequisites

- [Bun](https://bun.sh/) or Node.js
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### Install Dependencies

```bash
bun install
```

### Environment Variables

Create a `.dev.vars` file:

```env
API_URL=http://localhost:8787
or 
API_URL=https://api.supermemory.ai
```

| Variable | Description | Default |
|----------|-------------|---------|
| `API_URL` | Main [[Supermemory]] API URL for OAuth validation | `https://api.[[supermemory]].ai` |

### Run Locally

```bash
bun run dev
```

The server will start at `http://localhost:8788`.

**Note:** For local development, you also need the main [[Supermemory]] API running at the `API_URL` for OAuth token validation.

### End-to-End Tests

The `e2e/` suite drives a real MCP server over streamable HTTP (no mocks) and asserts the
core journey: handshake -> tool/resource/prompt discovery -> `whoAmI` -> `listProjects` ->
`memory` save -> `recall` round-trip, plus `memory-graph`/`fetch-graph-data`, resource reads,
the `context` prompt, container-tag isolation, and auth rejections.

```bash
export SUPERMEMORY_API_KEY=sm_...                          # staging key (required; tests skip without it)
export SUPERMEMORY_MCP_URL=https://mcp.supermemory.ai/mcp  # optional, this is the default
export SUPERMEMORY_API_URL=https://api.supermemory.ai      # optional, OAuth authorization server
bun run test:e2e
```

| File | Covers |
|------|--------|
| `e2e/auth.test.ts` | `GET /` info, OAuth discovery, 401 on missing/invalid token (runs without a key) |
| `e2e/oauth.test.ts` | OAuth discovery chain, dynamic client registration, token-endpoint negatives, real refresh->access token round-trip |
| `e2e/discovery.test.ts` | handshake, tools/resources/[[[[prompts]]]] listing, `whoAmI`, `listProjects` |
| `e2e/memory.test.ts` | save->recall round-trip, profile variants, `forget`, container scoping, bad args |
| `e2e/root-scope.test.ts` | `x-sm-project` header strips the `containerTag` param and scopes the whole connection |
| `e2e/graph.test.ts` | `memory-graph`, `fetch-graph-data`, resource reads, `context` prompt |

#### OAuth flow tests

`mcp.[[supermemory]].ai` is an OAuth **resource server**; the **authorization server** is the main
API (`api.[[supermemory]].ai`, better-auth). `oauth.test.ts` covers the real flow in tiers:

- **A–C (no secrets)** — discovery chain, dynamic client registration, and token/authorize
  negatives. These exercise the protocol wiring with no key and no browser, so they always run.
- **D (real token)** — exchanges a seeded `refresh_token` for an `access_token` and connects to
  `/mcp` with it, exercising the OAuth-token validation path (not the `sm_` API-key path). It
  **skips** unless both env vars below are set.

```bash
# One-time capture (opens a browser for login + consent, prints the env vars):
bun e2e/capture-oauth-token.ts
export SUPERMEMORY_MCP_CLIENT_ID=...
export SUPERMEMORY_MCP_REFRESH_TOKEN=...
```

Notes:
- Tests **skip** (not fail) without `SUPERMEMORY_API_KEY`; Tier D OAuth tests skip without the
  refresh-token env vars — so CI is safe without secrets.
- `recall` is eventually-consistent (save -> ingestion pipeline -> memories), so the round-trip
  **polls up to ~90s**. `forget` removal is slower still and is asserted as best-effort.
- The suite uses unique per-run markers and forgets them in teardown to avoid polluting the account.

### Deploy

```bash
bun run deploy
```

## Architecture

```
┌─────────────────┐  OAuth/API Key ┌──────────────────┐
│   MCP Client    │◄──────────────►│  Supermemory API │
│ (Claude, Cursor)│                │  (api.supermemory.ai)
└────────┬────────┘                └──────────────────┘
         │                                   ▲
         │ MCP Protocol                      │ Auth Validation
         ▼                                   │
┌─────────────────────────────────────────────────────┐
│            Supermemory MCP Server                   │
│         (mcp.supermemory.ai/mcp)                   │
│  ┌─────────────────────────────────────────────┐   │
│  │           Cloudflare Durable Object          │   │
│  │  * Session state                             │   │
│  │  * Client info persistence                   │   │
│  │  * MCP protocol handling                     │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## Tech Stack

- **Runtime:** Cloudflare Workers
- **State:** Durable Objects with SQLite
- **Framework:** Hono
- **MCP SDK:** @modelcontextprotocol/sdk + [[agents]]
- **API Client:** [[supermemory]] SDK
- **Analytics:** PostHog




## See also

- [[10.12 MCP]] — sector index
- [[pentest-ai-mcp]]
- [[omniwire-mcp]]
- [[ponytail-mcp]]
- [[mcp-code-executor]]
- [[read-file-enhanced-mcp]]
