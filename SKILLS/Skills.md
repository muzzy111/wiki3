---
type: dashboard
cssclasses: [cards]
tags:
  - tools
  - sector
  - abstract
  - overview
---

#  Skills

> *Skills are the DNA of [[agents]]. A [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] is a portable, invokable package of specialized instructions, scripts, and domain knowledge that extends any agent's capabilities beyond its base training.*

---

##  What Are Skills

**Skills** are modular capability packages that [[agents]] invoke to perform specialized tasks. They follow the OpenSkills format: each [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] is a folder containing a `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[SKILL]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].md` instruction file, optional scripts, examples, and resources.

Invocation pattern:
```bash
npx openskills read <skill-name>
# Multiple:
npx openskills read skill-one,skill-two
```

---

##  Skills in This System

### Antigravity Skills (`.gemini/config/skills/`)
| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Purpose |
|---|---|
| `canvas-design` | Visual art and poster design |
| `claude-api` | Claude SDK [[integration]] |
| `doc-coauthoring` | Documentation co-writing |
| `mcp-builder` | MCP server creation |
| `frontend-design` | Premium UI/web design |
| `pdf` | PDF manipulation |
| `pptx` | PowerPoint generation |
| `xlsx` | Spreadsheet operations |
| `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]-creator` | Create and optimize new skills |
| `anti-obsidian` | Supreme Obsidian vault architecture |
| `graphify-windows` | Knowledge graph generation for the vault |

### Hermes Skills (`.hermes/skills/`)
| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Purpose |
|---|---|
| `obsidian-wiki-ingest` | Ingest content into this vault |
| `cross-linker` | Build wikilinks across notes |
| `graph-colorize` | Color the [[vault graph]] by domain |
| `wiki-agent` | General vault agent |
| `wiki-synthesize` | Synthesize notes from sources |
| `wiki-query` | Query vault with Dataview logic |
| `wiki-research` | Research and capture pipeline |
| `[[tag-taxonomy]]` | Tag system management |
| `daily-[[update]]` | Periodic note generation |
| `data-ingest` | External data ingestion |
| `llm-wiki` | LLM-powered wiki generation |
| `memory-bridge` | Cross-agent memory sync |

### Pi Skills (`.pi/agent/skills/`)
| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Purpose |
|---|---|
| `[[paperclip]]` | Personal memory and capture |
| `para-memory-files` | PARA-organized memory |
| `[[paperclip]]-create-agent` | Spawn Pi sub-[[agents]] |
| `[[paperclip]]-converting-plans-to-tasks` | Planning → tasks |

### OpenClaw Skills (`.openclaw/plugin-skills/`)
| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Purpose |
|---|---|
| `obsidian` | Obsidian vault [[integration]] |
| `mcporter` | MCP bridge protocol |
| `coding-agent` | Code generation |
| `github` | GitHub operations |
| `summarize` | Content summarization |
| `xurl` | URL fetch and extract |

---

### [[Mad River AI]] Skills
| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Purpose |
|---|---|
| `osint-framework` | OSINT tool orchestration and agent dispatch |
| `domain-recon` | Automated domain reconnaissance (cron) |
| `company-investigator` | Business entity investigation pipeline |

---

##  [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Ecosystem Map

```
Skills
 Consumed by → [[Antigravity]]
 Consumed by → [[Hermes]]
 Consumed by → [[Pi]]
 Consumed by → [[OpenClaw]]
 Consumed by → [[OpenCode]]
 Built via → [[MCP]] (mcp-builder skill)
 Indexed in → [[Obsidian]] (10.03 Skills/)
 Operated through → [[Agents]]
```

---

##  Related Nodes

| Node | Relationship |
|---|---|
| [[Antigravity]] | Primary [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] consumer — Google DeepMind runtime |
| [[Hermes]] | Rich wiki-focused [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] ecosystem |
| [[Pi]] | Personal intelligence [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] stack |
| [[OpenClaw]] | Broadest built-in skills marketplace |
| [[OpenCode]] | Coding-focused skills |
| [[Agents]] | [[Agents]] are empowered by skills |
| [[MCP]] | Skills can create and bridge MCP servers |
| [[Obsidian]] | Vault where [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] documentation lives |

---

##  Skills Notes

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  doc-type AS "Type",
  dateformat(file.mtime, "YYYY-MM-dd") AS "Modified"
FROM "10.03 Skills"
SORT file.mtime DESC
```

---

##  Create a New [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

> [!tip] Use the `[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]-creator` [[Skills|Skill]]
> ```bash
> npx openskills read skill-creator
> ```
> The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]-creator [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] provides complete guidance for authoring, testing, and publishing new skills into any agent's ecosystem.
