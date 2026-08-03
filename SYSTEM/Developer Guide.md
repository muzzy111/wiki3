---
title: "Developer Guide"
role: developer-guide
audience: [developers, integrators]
version: "1.0"
---

# LOOP Developer Guide

The Operating Manual is for users. This guide is for people who extend the OS: add an agent, write a skill, ship a new team preset, or change how `loopd` thinks. Read the Architecture doc first if you have not.

## Conventions

- Everything declarative lives in `C:\loop-services\`.
- Every persistent thing is a YAML, a Markdown file, or a Python module under one of those folders.
- The supervisor hot-reloads on file change. You should not need to restart `loopd` after editing a preset or a skill.
- All inter-process traffic flows through NATS. Never reach into another agent's process.

## 1. Add a New Agent to the Registry

Agents are declared as YAML files in `C:\loop-services\agents\`.

### File layout

```
C:\loop-services\agents\
  hermes.yaml
  claude.yaml
  cline.yaml
  ... (one YAML per agent)
```

### Schema

Create `C:\loop-services\agents\<agent_name>.yaml`:

```yaml
name: my-agent
display_name: "My Agent"
version: "0.1.0"
description: |
  Short prose description of what this agent does best.
binary: "C:\path\to\my-agent.exe"
args:
  - "--stdio"
env:
  MY_API_KEY: "${env:MY_API_KEY}"
capabilities:
  - code-review
  - debug
max_skills: 3
max_mcps: 2
default_skills:
  - code-review
default_mcps:
  - filesystem
health_check:
  interval_seconds: 30
  timeout_seconds: 5
  command: "my-agent ping"
restart_policy:
  max_retries: 3
  backoff_seconds: 10
```

### Validate

```
loopctl agent validate my-agent
```

The supervisor checks the schema, the binary path, and the env var resolution. If validation fails, the agent is not loaded.

### Verify

```
loopctl agent list
loopctl agent show my-agent
```

You should see the new agent in the table with a green row.

### Pitfalls

- Names must be unique and must match the filename's stem.
- `binary` must be an absolute path. Relative paths are rejected.
- `default_skills` and `default_mcps` must already exist in their registries.
- The `health_check.command` must exit zero on a healthy agent.

## 2. Add a New Skill

Skills live in `C:\loop-services\skills\`. One skill per file. Use the SKILL template at `SYSTEM/templates/SKILL.md.template`.

### File layout

```
C:\loop-services\skills\
  skill-name.md
  skill-name.evidence/   (created at runtime)
```

### Frontmatter

```yaml
---
title: "skill-name"
role: "the-role-this-skill-belongs-to"
version: "0.1.0"
inputs:
  - name: target
    type: string
    required: true
outputs:
  - name: report
    type: markdown
evidence_path: ".omo/evidence/skill-name-{timestamp}.txt"
---
```

### Body sections (required)

Every skill body must contain these H2 sections:

- `## Purpose`       - one paragraph
- `## When to Use`   - triggers and anti-triggers
- `## Procedure`     - numbered steps the agent should follow
- `## Pitfalls`      - what goes wrong and how to avoid it
- `## Related Skills` - links to siblings in the catalog
- `## Outputs`       - what gets written and where

### Validate

```
loopctl skill validate skill-name
```

The validator parses the frontmatter, checks the section headings, and verifies the evidence path is writable.

### Test

Skills ship with an eval fixture under `C:\loop-services\tests\skills\<skill-name>.yaml`. The fixture describes inputs, expected outputs, and a small set of cases. Run:

```
loopctl skill test skill-name
```

### Pitfalls

- Skill names must be kebab-case.
- Never embed secrets in a skill file. Use `${env:VAR_NAME}` and resolve at load time.
- The `Procedure` section is the source of truth. If the agent's behavior drifts from it, fix the procedure first.

## 3. Add a New Team Preset

Team presets live in `C:\loop-services\teams\`. The schema is fixed.

### Schema

```yaml
team: <kebab-case-name>
description: <one-line prose>
members:
  - role: <role-name>
    agent: <registered-agent-name>
    skills:
      - <skill-name>     # 1..3 entries
    mcps:
      - <mcp-name>       # 0..2 entries
  # 3..5 members total
default_prompts:
  - <example prompt 1>
  - <example prompt 2>   # 1..2 entries
workload_profile: light | medium | heavy
```

### Validation rules

The supervisor rejects a preset if:

- `team` is not kebab-case
- `members` has fewer than 3 or more than 5 entries
- any member lists more than 3 skills or more than 2 MCPs
- any agent, skill, or MCP name does not resolve in its registry
- `default_prompts` has fewer than 1 or more than 2 entries
- `workload_profile` is not one of `light`, `medium`, `heavy`

Run:

```
loopctl team validate my-team
loopctl team activate my-team
```

### Test

A preset gets a smoke test file at `C:\loop-services\tests\teams\<team>.yaml` that walks through one default prompt and asserts a structured result. Run:

```
loopctl team test my-team
```

### Pitfalls

- Keep member roles distinct. Two "lead" roles on the same team confuses the dispatch router.
- Don't put the same agent in the same team twice.
- Heavy teams run at low concurrency. If you need throughput, split into two teams.

## 4. Write a New SKILL.md

Use the template at `SYSTEM/templates/SKILL.md.template`. The template is the contract. Below is a worked example.

### Worked example: `evidence-trail.md`

```markdown
---
title: "evidence-trail"
role: "researcher"
version: "0.1.0"
inputs:
  - name: claim
    type: string
    required: true
  - name: sources
    type: list
    required: true
outputs:
  - name: trail
    type: markdown
evidence_path: ".omo/evidence/evidence-trail-{timestamp}.txt"
---

# evidence-trail

## Purpose

Attach every atomic claim in a piece of research to its primary source and record the chain in an evidence file.

## When to Use

Use when a research deliverable will be cited downstream and the provenance must survive review. Do not use for casual notes.

## Procedure

1. Decompose the report into atomic claims. One sentence per claim.
2. For each claim, locate the primary source. Reject secondary sources unless no primary exists.
3. For each primary source, record: URL, retrieval timestamp, SHA-256 of the body, and a quote.
4. Write the chain to the evidence path declared in the frontmatter.
5. Embed a one-line citation under each claim in the deliverable: `[claim-id -> source-id]`.

## Pitfalls

- A source that moved between fetch and citation is not a primary source. Re-fetch.
- Quotes must be exact. Trim whitespace but never rephrase.
- If a claim cannot be sourced, drop the claim. Do not soften the wording.

## Related Skills

- `source-verification`
- `citation-graph`

## Outputs

The deliverable plus a markdown evidence trail at the configured path. The trail must be append-only.
```

### Validate and test

```
loopctl skill validate evidence-trail
loopctl skill test evidence-trail
```

### Pitfalls

- Do not skip a section. The `Procedure` is what agents actually follow.
- Avoid code blocks longer than 20 lines inside a skill. Long code belongs in a script under the agent's tools, not in the skill.
- Skills are versioned. Bump the version on any procedural change.

## 5. Extend the Controller Prompt

The controller prompt is the supervisor's own system prompt. It tells `loopd` how to route, when to escalate, and what to log. Two files matter:

- `C:\loop-services\prompts\controller.md` - the active controller
- `C:\loop-services\prompts\controller.previous.md` - the previous version, kept for rollback

### Edits

1. Copy `controller.md` to `controller.previous.md`.
2. Edit `controller.md`.
3. Run `loopctl prompt validate controller`.
4. Run `loopctl prompt diff controller` to review the change.
5. Apply with `loopctl prompt apply controller`. The supervisor hot-swaps on the next dispatch.

### Structure

The controller has five sections, in this order:

| Section            | Purpose                                              |
|--------------------|------------------------------------------------------|
| `## Identity`      | Who `loopd` is, in two sentences                     |
| `## Routing Rules` | How a task is split across a team's members          |
| `## Escalation`    | When to halt, when to ask the user, when to retry    |
| `## Logging`       | What to write to the audit log, and what to skip    |
| `## Safety`        | Hard rules. Never edited without a code review       |

`## Safety` is the only section that must be reviewed by two people before a change ships.

### Pitfalls

- Do not move sections. The order is part of the contract with the model.
- Do not paste tool docs into the controller. Reference MCPs by name.
- If you find yourself adding a long example, move the example into a skill and reference it.

## 6. Versioning

- Skills, agents, team presets, and the controller prompt all carry a `version` field.
- Bump `major` for breaking changes, `minor` for new features, `patch` for fixes.
- `loopctl release notes <type> <name>` generates a changelog entry from the diff.
- Tags live in `C:\loop-services\backups\<yyyy-mm-dd>\` so you can roll back any single artifact.

## 7. Testing

There are three test tiers.

| Tier     | Where                                    | Command                       |
|----------|------------------------------------------|-------------------------------|
| Skill    | `C:\loop-services\tests\skills\`         | `loopctl skill test <name>`   |
| Team     | `C:\loop-services\tests\teams\`          | `loopctl team test <name>`    |
| End-to-end | `C:\loop-services\tests\e2e\`         | `loopctl e2e run`             |

End-to-end tests spin up `loopd` against a sandbox vault, run a preset, and assert on the chat mirror.

## 8. Local Dev Loop

A typical change cycle:

1. Edit the artifact (skill, preset, agent, controller).
2. Run the matching validator.
3. Run the matching test.
4. `loopctl apply` to hot-reload.
5. Watch the kanban and logs.
6. If a regression appears, `loopctl rollback <type> <name>`.

That is the full loop. There is no compile step.

## See Also

- `SYSTEM/Architecture.md`      - the system you are extending
- `SYSTEM/Operating Manual.md`   - the user view of the same system
- `SYSTEM/ONBOARDING.md`         - first-run wizard for new operators
