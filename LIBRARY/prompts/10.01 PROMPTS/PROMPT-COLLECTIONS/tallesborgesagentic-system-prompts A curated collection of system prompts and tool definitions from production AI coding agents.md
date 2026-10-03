---
type: dashboard
cssclasses: [cards]
tags:
  - inbox
  - sector
  - abstract
  - overview
---
[![GitHub stars](https://camo.githubusercontent.com/1258cf9361e852c0b472d7b58d78d34b03cec32ce995dddd7172ed5c33acf6dd/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f74616c6c6573626f726765732f6167656e7469632d73797374656d2d70726f6d7074733f7374796c653d666c61742d737175617265)](https://github.com/tallesborges/[[agentic-system-[[[[prompts]]]]]]/stargazers) [![GitHub license](https://camo.githubusercontent.com/5c45073bb1fea8add7015c78f00b4f3290ce6ad9a2b05513c7223043732afaf3/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f74616c6c6573626f726765732f6167656e7469632d73797374656d2d70726f6d7074733f7374796c653d666c61742d737175617265)](https://github.com/tallesborges/[[agentic-system-[[[[prompts]]]]]]/blob/main/LICENSE) [![GitHub last commit](https://camo.githubusercontent.com/0bd79920800aae8db5559e6ed68ab92c7fd6efe357260251ba7df0c9254f83af/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6173742d636f6d6d69742f74616c6c6573626f726765732f6167656e7469632d73797374656d2d70726f6d7074733f7374796c653d666c61742d737175617265)](https://github.com/tallesborges/[[agentic-system-[[[[prompts]]]]]]/commits/main)

What makes agentic coding applications different? TBH, it's mostly their system [[[[prompts]]]], the tools they provide, and how they actually use them. In this repo, I'm documenting these system [[[[prompts]]]] and tools from different agentic coding solutions.

## Table of Contents- [Agent Comparison](#agent-comparison)
- [What's Included](#whats-included)
- [Research Value](#research-value)
- [Contributing](#contributing)
- [License](#license)

## Agent Comparison| Agent | Provider | Type | Tools |
| --- | --- | --- | --- |
| [Claude Code](/tallesborges/agentic-system-prompts/blob/main/agents/claude-code) | Anthropic | CLI | 15 |
| [Gemini CLI](/tallesborges/agentic-system-prompts/blob/main/agents/gemini-cli) | Google | CLI | 11 |
| [Cline](/tallesborges/agentic-system-prompts/blob/main/agents/cline) | Open Source | VS Code | 12 |
| [Aider](/tallesborges/agentic-system-prompts/blob/main/agents/aider) | Open Source | CLI | Git-based |
| [Roo Code](/tallesborges/agentic-system-prompts/blob/main/agents/roo-code) | RooCode Inc | VS Code | 12 |
| [Zed](/tallesborges/agentic-system-prompts/blob/main/agents/zed) | Zed Industries | Editor | 15 |
| [Codex CLI (Rust)](/tallesborges/agentic-system-prompts/blob/main/agents/codex-rs) | OpenAI | CLI | 1 |

## What's IncludedEach agent directory contains:

- **System [[[[Prompts]]]]** - Complete prompt templates with role definitions and instructions
- **Tool Documentation** - Detailed API specifications for all available tools
- **Source Attribution** - Direct links to original sources with retrieval dates
- **[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]** - Overview with GitHub repository links and feature summaries

## Research ValueThis collection provides insights into:

- **Prompt Engineering Patterns** - How production systems structure AI instructions
- **Tool Design** - Common patterns in AI agent tooling and capabilities
- **Safety Measures** - Security considerations and defensive programming practices
- **User Experience** - How different [[agents]] handle interaction and workflow management

## Contributing1. Create a new directory under `[[agents]]/[agent-name]/`
2. Add a `system-prompt.md` file with the complete system prompt
3. Document tools in `agents/[agent-name]/tools/` directory
4. Include source information and retrieval date in headers
5. Follow the established template formats (see [CLAUDE.md](/tallesborges/agentic-system-prompts/blob/main/CLAUDE.md))

## RoadmapPlanned additions to this repository:

- [ ] **Tools Comparison** - Detailed analysis and comparison of tools across different [[agents]]
- [ ] **[[[[Prompts]]]] Analysis** - In-depth analysis of prompt engineering patterns and techniques