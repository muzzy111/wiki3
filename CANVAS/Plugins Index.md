---
title: Plugins Index
type: plugin-index
status: active
plugin_count: 35
---

# Obsidian Plugins Index

> Index of **35 community plugins** enabled in `.obsidian/community-plugins.json`. Columns: id, name, purpose, configured (yes/no), config file, role that owns its configuration.

## Plugins

| Plugin ID | Name | Purpose | Configured | Config Path | Owning Role |
|---|---|---|---|---|---|
| `3d-graph-new` | 3D Graph New | Renders the vault graph in 3D. Alt to Obsidian's built-in graph. | no | `.obsidian/plugins/3d-graph-new/data.json` | researcher |
| `advanced-canvas` | Advanced Canvas | Adds styling, occlusion, and grid features to canvases. | no | `.obsidian/plugins/advanced-canvas/data.json` | coordinator |
| `agentfiles` | Agent Files | Quick access to AGENT.md-style definitions across the vault. | no | `.obsidian/plugins/agentfiles/data.json` | coordinator |
| `antigravity-cli-sidebar` | Antigravity CLI Sidebar | Sidebar UI for the Antigravity CLI. | no | `.obsidian/plugins/antigravity-cli-sidebar/data.json` | tools |
| `better-embedded-canvas` | Better Embedded Canvas | Embed canvases in notes with improved rendering. | no | `.obsidian/plugins/better-embedded-canvas/data.json` | coordinator |
| `buttons` | Buttons | Adds inline buttons that run Templater scripts or shell commands. | no | `.obsidian/plugins/buttons/data.json` | coordinator |
| `cannoli` | Cannoli | Execute code blocks in notes. | no | `.obsidian/plugins/cannoli/data.json` | coder |
| `canvas-send-to-back` | Canvas Send to Back | Send a node behind others in a canvas. | no | `.obsidian/plugins/canvas-send-to-back/data.json` | coordinator |
| `canvasblocks` | Canvas Blocks | Convert a note block into a canvas node and back. | no | `.obsidian/plugins/canvasblocks/data.json` | coder |
| `css-editor` | CSS Editor | Edit snippets.css for Obsidian without leaving the app. | no | `.obsidian/plugins/css-editor/data.json` | coder |
| `csv-obsidian` | CSV Editor | Edit CSV files in a tabular UI. | no | `.obsidian/plugins/csv-obsidian/data.json` | coder |
| `data-files-editor` | Data Files Editor | Edit JSON / YAML / CSV / TOML files in a structured view. | no | `.obsidian/plugins/data-files-editor/data.json` | coder |
| `dataview` | Dataview | Query your vault like a database. Used in dashboards and Kanbans. | no | `.obsidian/plugins/dataview/data.json` | coordinator |
| `editing-toolbar` | Editing Toolbar | Adds a formatting toolbar above the editor. | no | `.obsidian/plugins/editing-toolbar/data.json` | researcher |
| `extended-graph` | Extended Graph | Filter and group the vault graph by tag, folder, property. | no | `.obsidian/plugins/extended-graph/data.json` | memory |
| `graph-nested-tags` | Graph: Nested Tags | Render nested tag relationships as a graph. | no | `.obsidian/plugins/graph-nested-tags/data.json` | researcher |
| `make-md` | Make.md | Spaces, workflow buttons, and inline tags inside notes. | no | `.obsidian/plugins/make-md/data.json` | coordinator |
| `notebook-navigator` | Notebook Navigator | File-tree navigation in a sidebar pane. | no | `.obsidian/plugins/notebook-navigator/data.json` | coordinator |
| `obsidian-charts` | Charts | Render bar / line / pie / radar charts from frontmatter or Dataview queries. | no | `.obsidian/plugins/obsidian-charts/data.json` | memory |
| `obsidian-excalidraw-plugin` | Excalidraw | Hand-drawn-style drawing canvas for diagrams and sketches. | no | `.obsidian/plugins/obsidian-excalidraw-plugin/data.json` | coordinator |
| `obsidian-html-plugin` | HTML Plugin | Execute HTML inside notes (render blocks, iframes). | no | `.obsidian/plugins/obsidian-html-plugin/data.json` | coder |
| `obsidian-link-embed` | Link Embed | Embed OpenGraph previews for URLs. | no | `.obsidian/plugins/obsidian-link-embed/data.json` | researcher |
| `obsidian-markdown-formatting-assistant-plugin` | Markdown Formatting Assistant | Adds hotkeys and menu items for common formatting tasks. | no | `.obsidian/plugins/obsidian-markdown-formatting-assistant-plugin/data.json` | researcher |
| `obsidian-projects` | Projects | Project management with Kanban, Calendar, Table views over markdown. | no | `.obsidian/plugins/obsidian-projects/data.json` | coordinator |
| `open-in-terminal` | Open in Terminal | Right-click to open a file or folder in the system terminal. | no | `.obsidian/plugins/open-in-terminal/data.json` | tools |
| `optimize-canvas-connections` | Optimize Canvas Connections | Auto-route canvas edges with minimal crossings. | no | `.obsidian/plugins/optimize-canvas-connections/data.json` | coordinator |
| `oz-image-plugin` | Oz Image | Image utility toolkit (zoom, pan, invert colors, etc.). | no | `.obsidian/plugins/oz-image-plugin/data.json` | coder |
| `pdf-plus` | PDF+ | Extend Obsidian PDF viewer (areas, highlights, annotations). | no | `.obsidian/plugins/pdf-plus/data.json` | researcher |
| `personal-assistant` | Personal Assistant | Right-click menu actions (templates, AI helpers). | no | `.obsidian/plugins/personal-assistant/data.json` | coordinator |
| `quickadd` | QuickAdd | Powerful macro engine: capture to notes, run Templater scripts, open commands. | no | `.obsidian/plugins/quickadd/data.json` | coordinator |
| `show-all-hidden-files` | Show All Hidden Files | Toggle visibility of dot-files in the file tree. | no | `.obsidian/plugins/show-all-hidden-files/data.json` | tools |
| `show-hidden-files` | Show Hidden Files | Like above, simpler version. | no | `.obsidian/plugins/show-hidden-files/data.json` | tools |
| `smart-connections` | Smart Connections | Surface semantically similar notes when you open one. | no | `.obsidian/plugins/smart-connections/data.json` | memory |
| `templater-obsidian` | Templater | Author templates that run JavaScript at insertion time. | no | `.obsidian/plugins/templater-obsidian/data.json` | coordinator |
| `tq-obsidian` | Task Query | Compound-task query language for Obsidian Tasks plugin. | no | `.obsidian/plugins/tq-obsidian/data.json` | memory |

## How to Add a Plugin

1. Install via Obsidian Settings -> Community Plugins -> Browse.
2. Confirm it appears in `.obsidian/community-plugins.json`.
3. Add a row in the table above.
4. If the plugin manages its own state, do NOT edit `data.json` directly.

## Roles and Their Plugin Sets

- **Coordinator** (default owner): query, navigation, capture, calendar, project tooling.
- **Coder** (executable code in notes, syntax): Cannoli, Canvas Blocks, CSS, CSV, HTML, Oz Image.
- **Researcher** (web, citations, PDFs): Link Embed, Markdown Assistant, PDF+, Web Research workflows via web.
- **Tools** (host integration): Open in Terminal, Show Hidden Files, CLI sidebars.
- **Memory** (graph, drift, charts): Extended Graph, Smart Connections, Charts, Task Query.

## Related

- `SYSTEM/SYSTEM RULES/Rules.md` for plugin policy.
- `CANVAS/plugins/<plugin-id>.md` for per-plugin detail notes (in Wave 5).