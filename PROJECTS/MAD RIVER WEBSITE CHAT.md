---
aliases: []
tags:
  - shannon
  - repo
  - path
  - report
---
**You**

\# madriverai.com

Source for the [[Mad River AI]] website.

\## Stack

\- \[Astro 6\](https://astro.build) — static site generator

\- \[Tailwind CSS v4\](https://tailwindcss.com) — via \`@tailwindcss/vite\`

\- \[Three.js\](https://threejs.org) — knowledge graph background, 3D effects

\## Develop

\`\`\`bash

npm install

npm run dev # http://localhost:4321

\`\`\`

\## Build

\`\`\`bash

npm run build

npm run [[preview]]

\`\`\`

\## Deploy

GitHub Pages. Pushes to \`main\` trigger \`.github/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/deploy.yml\`,

which builds to \`./dist\` and deploys to Pages.

The custom domain \`madriverai.com\` is configured via \`public/CNAME\` —

point the DNS at GitHub's Pages servers (see repo Settings → Pages for

the current IPs and the ALIAS/ANAME [[setup]]).

\## Structure

\`\`\`

src/

layouts/Base.astro # shell, fonts, knowledge graph + orbital nav

components/

KnowledgeGraph.astro # Three.js force-directed background

OrbitalNav.astro # 3D revolving section directory

pages/

index.astro # home

mission.astro # mission & goals

projects.astro # public projects

links.astro # contact + handles

blog/

index.astro # blog index

2026-06-21-v0-1-release.astro # first post

styles/global.css # design tokens, glassmorphism, glow

public/

favicon.svg

CNAME # madriverai.com

.github/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/deploy.yml

\`\`\`

\## Design notes

\- \*\*Dark theme\*\*, deep navy + cyan/amber accents.

\- \*\*Knowledge graph\*\* is a Three.js force-directed graph with 80 nodes

(40 on mobile), drifting slowly, never blocking pointer events.

\- \*\*Orbital nav\*\* is six glassmorphic "planets" orbiting a central hub.

Auto-rotates by default; drag to override.

\- \*\*Reduced motion\*\* is respected — animations collapse to instant.

show me what this website would look like

---

**Gemini**

Here is a visual breakdown and structural [[preview]] of how the **[[Mad River AI]]** website looks and functions based on your design architecture.

Because we are working in text, I have rendered a simulated desktop viewport of the home page (`index.astro`), followed by the interactive behaviors of your Three.js layers.

###  Homepage [[Preview]] (Desktop Viewport Simulation)

```
+--------------------------------------------------------------------------------------------------+
|   MAD RIVER AI                                                  [ Mission ] [ Projects ] [ Blog ]|
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
|                                                                                                  |
|         ------------------             ()                                                    |
|        / \                /                                                                     |
|       /   --------------         ------------           [ CORE HUB ]                        |
|         /              / \         \    /     /           /        \ \                      |
|       \                           -------           o   o  o  o   o o                     |
|        \              /   /                              /            \ \                    |
|         ---------------             ()                                           |
|                                                                                                  |
|    [ BACKGROUND LAYER: Three.js Graph ]                [ FOREGROUND LAYER: Orbital Nav ]         |
|    80 nodes floating lazily in deep navy space.       6 glassmorphic planets revolving in 3D.     |
|    Interactive, interactive but clicks pass through.   Draggable, clickable section shortcuts.    |
|                                                                                                  |
|                                                                                                  |
|                      INTELLIGENT ORCHESTRATION & ADVANCED KNOWLEDGE                          |
|                     Building the next paradigm of AI-driven execution.                           |
|                                                                                                  |
|                     +---------------------------------------+                                    |
|                     |       Explore the Network [->]         |                                    |
|                     +---------------------------------------+                                    |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
|  © 2026 Mad River AI | Built with Astro 6 & Tailwind v4                         [ Github ] [ Links ] |
+--------------------------------------------------------------------------------------------------+
```

###  Theming & Visual Style (styles/global.css)

Using Tailwind v4's modern color engine and CSS variables, the layout renders with a highly premium, futuristic aesthetic:

- **The Canvas:** A rich, immersive gradient background sliding from a pitch-black abyss into a deep, celestial navy (`#030712` to `#0a192f`).
- **Accents:** Kinetic glows using vibrant neon cyan (`#06b6d4`) for active nodes/links and warm, radioactive amber (`#f59e0b`) for highlights, system alerts, or major structural hubs.
- **The Glassmorphism (UI Cards & Nav):** The orbital elements and main containers utilize advanced CSS backdrops:
	```
	background: rgba(255, 255, 255, 0.03);
	backdrop-filter: blur(12px);
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 0 25px rgba(6, 182, 212, 0.15); /* Soft Cyan Glow */
	```

```
---

###  Interactive Mechanics

#### 1. Background: \`KnowledgeGraph.astro\` (Three.js)
*   **What it looks like:** A sprawling web of 80 interconnected dots (nodes) and faint lines (edges) drifting across the screen like a living constellation.
*   **Behavior:** It is computational but non-intrusive. By utilizing \`pointer-events: none\` in CSS, the graph floats entirely *behind* the user interface. It detects mouse vectors to slightly repel or pull nodes when you move across the screen, mimicking an active neural net without blocking text selection or link clicks.

#### 2. Main Interface: \`OrbitalNav.astro\` (Three.js / Canvas)
*   **What it looks like:** Six distinct, semi-transparent frosted glass spherical elements floating in a 3D elliptical plane around a glowing core. Each planet represents a directory path:
    1.  **Home** (\`/\`)
    2.  **Mission** (\`/mission\`)
    3.  **Projects** (\`/projects\`)
    4.  **Blog Index** (\`/blog\`)
    5.  **Latest Release v0.1** (\`/blog/2026-06-21-v0-1-release\`)
    6.  **Connect / Links** (\`/links\`)
*   **Behavior:** It slowly auto-rotates on a continuous loop. If you click and drag anywhere near the orbit, the engine tracks the velocity of your mouse gesture, letting you spin the navigation ring manually. Clicking a "planet" triggers a slick smooth-fade page transition handled by Astro's routing engine.

#### 3. Content Sections (\`/mission\`, \`/projects\`, \`/blog\`)
*   When navigating away from the home page, the layout shifts using \`Base.astro\`. The central orbital navigation ring scales down and anchors cleanly into a smaller corner utility or a top nav configuration, while your structured Markdown/Astro content fades in front of the constantly shifting 3D background graph.
```