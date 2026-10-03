---
aliases: []
tags:
  - available
  - madriverai
  - unreachable
  - domain
---

# madriverai.com website — v0.1

> **[[Status]]:** v0.1 live. WIP by design.
> **Repo:** https://github.com/Mad-River-AI/madriverai.com
> **Live (deploy [[preview]]):** https://mad-river-ai.github.io/madriverai.com/
> **Custom domain:** `madriverai.com` (DNS repoint needed — Squarespace → GitHub Pages)

## What this is

The public-facing site for [[Mad River AI]]. Marketing + mission + projects
+ blog + links. The current Squarespace parking page is being replaced
by this build.

## Stack

- **Astro 6** (static site generator) — chosen for: zero JS by default,
  fast builds, easy GitHub Pages deploy, room to grow into the hosted
  product surface later (Astro can do SSR/SSG hybrid when we need it).
- **Tailwind CSS v4** via `@tailwindcss/vite` — utility-first, plays
  well with Astro.
- **Three.js** — for the knowledge graph background and the 3D orbital
  nav. ~80KB minified+gzipped for the whole experience.
- **No backend** — fully static. The blog is filesystem-based (Astro
  content collections), the projects list is hand-coded YAML inside
  the page.

## Pages (v0.1)

| path | what |
|---|---|
| `/` | hero, mission blurb, projects blurb, recent post |
| `/mission` | full mission statement + principles + where we're going |
| `/projects` | the three public repos with [[status]] / year / tags |
| `/blog` | blog index (one post so far) |
| `/blog/2026-06-21-v0-1-release` | the v0.1 framework announcement |
| `/links` | contact + handles, grouped by Code / Domain / About |

## Design tokens

- **Background:** deep navy `--color-river-950` (#020714) with a
  pixel-noise texture for grain.
- **Accents:** cyan (`--color-river-200` to `-500`) for the graph and
  links; amber (`--color-amber-glow` #f4b942) for highlights and the
  brand glow.
- **Type:** Inter for body, JetBrains Mono for code/eyebrow.
- **Glassmorphism:** `backdrop-filter: blur(18-24px) saturate(140-160%)`
  on cards, paired with `rgba(255,255,255,0.06-0.18)` borders.
- **Animations:** all respect `prefers-reduced-motion`.

## The two signature effects

### Knowledge graph background

A Three.js force-directed graph in the background. 80 nodes
(40 on mobile), 120 edges, ring topology + long-range shortcuts.
Slowly drifting, additive blending for the glow. Camera orbits a
fraction so the scene has parallax. Pointer-events disabled so it
never blocks scrolling.

### Orbital section directory

Six glassmorphic "planets" orbit a central hub on the right edge of
the viewport. Each is a section: Home, Mission, Projects, Blog, Links,
Contact. Auto-rotates by default; drag to override. On mobile it
collapses to a horizontal dock.

## Deploy

- **Hosting:** GitHub Pages
- **Source:** `main` branch → `dist/` artifact
- **Custom domain:** `madriverai.com` (configured via `public/CNAME`)
- **Workflow:** `.github/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]/deploy.yml` — builds on push to
  `main`, deploys via `actions/deploy-pages@v4`
- **HTTPS:** enforced

### DNS repoint (Muzzy's action)

To make `madriverai.com` resolve to the new site:

1. In the current DNS (Squarespace or wherever the registrar points),
   add the four GitHub Pages IPs as A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Add a CNAME for `www` → `mad-river-ai.github.io`
3. Drop the old Squarespace parking [[setup]]

Or simpler: repoint the nameservers to Cloudflare, add the records
in Cloudflare DNS, and let Cloudflare proxy everything. Both work.

## Open work for v0.2

- **OG / Twitter card images** (the link previews are ugly right now).
- **Real blog system** via Astro content collections + MD/MDX so
  writing a post is a markdown file in `src/content/blog/`, not a
  full Astro file.
- **Light/dark toggle** (currently dark only).
- **A "demo" page** showing the framework running in a sandbox
  iframe (deferred — needs the hosted surface first).
- **Real project cards with logos** once the org has more repos
  worth featuring.
- **Switching from github.io URL to madriverai.com** requires
  the DNS work above; once that's done, the deploy URL changes to
  `https://madriverai.com`.

## What I didn't do (and why)

- **No CMS.** Hand-edited Astro files. Three people maintain this;
  CMS is overhead we don't need.
- **No analytics.** The framework is privacy-first; the site should
  be too. If we want traffic numbers later, a self-hosted Plausible
  or Cloudflare Web Analytics (no cookies) is fine.
- **No dark/light toggle.** Dark-only ships faster and matches the
  "research terminal" vibe. Easy to add later.
- **No "demo" page yet.** That needs the hosted product surface,
  which is post-v0.1.
