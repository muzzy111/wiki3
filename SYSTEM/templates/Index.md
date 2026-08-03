---
title: "System Templates Index"
type: templates-index
status: active
---

# System Templates

> Canonical templates for LOOP vault artifacts. Use these as the starting point for any new role folder, persona, memory file, or skill.

## Templates

| Template | Purpose |
|---|---|
| `AGENT.md.template` | Canonical agent definition (role, responsibilities, authority, exclusions, communication edges, lifecycle hooks). |
| `Persona.md.template` | Canonical persona prompt (identity, tone, domain boundaries, anti-patterns). |
| `Memory.md.template` | Canonical agent memory starter (long-term, recent, outstanding questions). |
| `SKILL.md.template` | Canonical skill definition (purpose, when-to-use, procedure, pitfalls, related). |
| `SKILL-previews/coordinator.md` | Preview of the Coordinator role's skill set. |
| `SKILL-previews/coder.md` | Preview of the Coder role's skill set. |
| `SKILL-previews/researcher.md` | Preview of the Researcher role's skill set. |
| `SKILL-previews/tools.md` | Preview of the Tools role's skill set. |
| `SKILL-previews/memory.md` | Preview of the Memory Curator role's skill set. |

## How to Use

1. Pick the template that matches your artifact.
2. Replace every `{{PLACEHOLDER}}` with the role-specific value.
3. Remove the `template: true` frontmatter field before committing.
4. Add `{{ROLE}}-specific` wikilinks to other parts of the vault.

## Invariants

- Templates are generic. NO role-specific content lives here.
- Use `{{PLACEHOLDER}}` syntax with double curly braces.
- No emojis. No icons. Plain text only.

## Related

- `SYSTEM/agents.yaml` — the role registry
- `SYSTEM/SYSTEM RULES/Rules.md` — vault-wide rules
- `SYSTEM/SYSTEM GRAPH/Graph.md` — structural map
