AGENT: Hermes
TICKET: 001
ASSIGNED: OpenCode
STATUS: OPEN
TIMESTAMP: 2026-06-29T10:32:00-04:00

---

## TASK-001

Assigned: OpenCode
Input: `C:\Users\Admin\Documents\GitHub\Source\OmniRoute - Copy\docker-compose.yml`, `C:\Users\Admin\Documents\GitHub\Source\OmniRoute - Copy\.env.example`, `C:\Users\Admin\Documents\GitHub\Source\OmniRoute - Copy\bin\omniroute.mjs`
Output: `C:\Users\Admin\Documents\GitHub\Build\vault-core\01-omniroute-deploy\` (folder with files listed below)
Objective: Stand up OmniRoute locally in Docker, complete first-run setup, and verify its OpenAI-compatible API at `http://localhost:20128/v1/chat/completions` successfully proxies a test completion to at least one free provider.
Dependencies: NONE

## Required deliverables in the output folder

1. **`.env`** — copy of `.env.example` with the three required secrets generated:
   - `JWT_SECRET` (use `openssl rand -base64 48` or equivalent)
   - `API_KEY_SECRET` (use `openssl rand -hex 32` or equivalent)
   - `INITIAL_PASSWORD` (set to a non-default value)
2. **`docker-compose.override.yml`** — overrides the base compose to:
   - Pin to the `base` profile
   - Expose port 20128 to host
   - Mount the local `.env` you just created
   - Disable any sidecars (no redis, no qdrant, no bifrost for now)
3. **`README.md`** — step-by-step run instructions:
   - How to generate secrets
   - `docker compose --profile base -f docker-compose.yml -f docker-compose.override.yml up -d`
   - How to verify the gateway is up (curl `/health` or similar)
   - How to test a completion through it
4. **`verify.log`** — captured output of:
   - `docker compose up` showing healthy startup
   - A `curl` test to `http://localhost:20128/v1/chat/completions` returning a non-error response (use OpenAI free tier or any free provider configured in OmniRoute's dashboard)
   - The actual model response

## CONTEXT

OmniRoute is the LLM gateway for vault-core. It runs on port 20128 (dashboard) / 20129 (API) by default. It's a Node.js Docker stack that aggregates 231 providers (50+ free tiers) and exposes them via an OpenAI-compatible endpoint. We need it running so AgentLoop can route all LLM calls through it.

The base profile in the source `docker-compose.yml` is `base` — no redis/qdrant/bifrost sidecars. The compose file documents that the `base` profile uses minimal image with no CLI tools.

Use any free provider that doesn't require an API key (or use a dummy key — OmniRoute's free-tier aggregation handles auth). The goal is a working gateway, not a specific provider integration.

## Acceptance criteria

- `docker compose ... up -d` succeeds with no errors.
- Container is healthy per the healthcheck.
- A test curl to the OpenAI-compatible chat completions endpoint returns a valid response (not 401/404/500).
- `verify.log` contains the actual JSON response from a real completion.

## What NOT to do

- Don't write code (you orchestrate only via config + curl). Wait — actually you DO write the `.env`, `docker-compose.override.yml`, and verification scripts. Just don't modify OmniRoute source itself.
- Don't configure multiple providers — one is enough for verification.
- Don't enable any sidecars (redis/qdrant/bifrost) — base profile only.

Report completion by writing `Chat\ticket-001-complete.md` with: summary of what you did, the exact docker compose command used, and confirmation that `verify.log` shows a working completion.