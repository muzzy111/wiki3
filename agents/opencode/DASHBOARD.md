---
title: "Opencode — Dashboard"
type: agent-dashboard
agent: opencode
status: active
created: 2026-08-03
loopd_endpoint: http://localhost:9101
---

# Opencode — Dashboard

> Live operational state for the **opencode** agent. Pulls metrics from `loopd` at
> `http://localhost:9101/metrics`. Degrades gracefully if loopd is unreachable.
>
> For controls, see [[CONTROL]]. For chat history, see [[CHAT/Inbox]] and [[CHAT/Outbox]].

## Live Status

```dataviewjs
const role = "opencode";
const METRICS = "http://localhost:9101/metrics";
const OUTBOX = "agents/" + role + "/CHAT/Outbox";
const KANBAN = "TASKS/KANBAN/Kanban Board.md";

const el = dv.el("div", "");
el.classList.add("agent-dashboard");
el.style.cssText = "font-family: ui-monospace, Menlo, Consolas, monospace; line-height:1.55;";

const grid = document.createElement("div");
grid.style.cssText = "display:grid; grid-template-columns: 1fr 1fr; gap:14px; margin: 12px 0;";
el.appendChild(grid);

const card = (title) => {
  const c = document.createElement("div");
  c.style.cssText = "padding:14px 16px; border:1px solid rgba(255,255,255,0.08); border-radius:10px; background:rgba(17,24,39,0.35);";
  const h = document.createElement("div");
  h.style.cssText = "font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#94a3b8; margin-bottom:8px;";
  h.textContent = title;
  c.appendChild(h);
  const body = document.createElement("div");
  body.style.cssText = "font-size:14px; color:#e2e8f0;";
  c.appendChild(body);
  grid.appendChild(c);
  return body;
};

const statusBody  = card("Status");
const metricsBody = card("Token Spend");
const tasksBody   = card("Current Task");
const activityBody= card("Recent Outbox Activity");

// 1) Status: derived from Prometheus /metrics for loopd (job=loopd, instance=9101)
const promURL = "http://localhost:9090/api/v1/query?query=up%7Bjob%3D%22loopd%22%7D";
try {
  const r = await fetch(promURL);
  const j = await r.json();
  const v = j?.data?.result?.[0]?.value?.[1];
  if (v === "1") {
    statusBody.innerHTML = '<span style="color:#22c55e;">UP</span> &middot; loopd reachable';
  } else {
    statusBody.innerHTML = '<span style="color:#ef4444;">DOWN</span> &middot; loopd not reporting';
  }
} catch (e) {
  statusBody.innerHTML = '<span style="color:#f59e0b;">UNKNOWN</span> &middot; prom unreachable';
}

// 2) Token spend: scrape loopd /metrics for agent-scoped counters
try {
  const r = await fetch(METRICS);
  if (r.ok) {
    const txt = await r.text();
    const lines = txt.split("\n");
    const want = (k) => lines.filter(l => l.startsWith(k)).slice(0, 6).join("<br>");
    const tok = lines.find(l => l.startsWith("agent_tokens_total{role=\"opencode\"}")) ||
                lines.find(l => l.startsWith("loopd_agent_tokens_total{role=\"opencode\"}"));
    const today = lines.find(l => l.startsWith("agent_messages_today{role=\"opencode\"}")) ||
                  lines.find(l => l.startsWith("loopd_messages_today{role=\"opencode\"}"));
    const last  = lines.find(l => l.startsWith("agent_last_dispatch_timestamp_seconds{role=\"opencode\"}")) ||
                  lines.find(l => l.startsWith("loopd_last_dispatch_timestamp_seconds{role=\"opencode\"}"));
    let html = "";
    if (today) html += "messages today: <b>" + today.split(" ").slice(-1)[0] + "</b><br>";
    if (tok)   html += "tokens spent:  <b>" + tok.split(" ").slice(-1)[0] + "</b><br>";
    if (last)  {
      const ts = Number(last.split(" ").slice(-1)[0]);
      if (!isNaN(ts) && ts > 0) {
        const d = new Date(ts * 1000);
        html += "last dispatched: <b>" + d.toISOString().replace("T"," ").slice(0,19) + "Z</b>";
      }
    }
    if (!html) html = '<span style="color:#94a3b8;">no per-agent counters published yet</span>';
    metricsBody.innerHTML = html;
  } else {
    metricsBody.innerHTML = '<span style="color:#f59e0b;">loopd unreachable</span> &middot; retry later';
  }
} catch (e) {
  metricsBody.innerHTML = '<span style="color:#f59e0b;">loopd unreachable</span>';
}

// 3) Current task: parse Kanban Board.md for rows where Owner column == role
try {
  const page = app.workspace.getActiveFile();
  const kanban = app.vault.getAbstractFileByPath(KANBAN);
  if (kanban) {
    const content = await app.vault.read(kanban);
    const rows = content.split("\n").filter(l => l.startsWith("|") && !l.startsWith("|---") && !l.startsWith("| ID"));
    const match = rows.find(r => new RegExp("\\|" + role + "\\|").test(r));
    if (match) {
      const cols = match.split("|").map(s => s.trim());
      const [id, title, status, owner] = cols;
      tasksBody.innerHTML = '<b>' + id + '</b> &middot; <span style="color:#f59e0b;">' + status + '</span><br>' + title;
    } else {
      tasksBody.innerHTML = '<span style="color:#94a3b8;">no kanban row owned by this agent</span>';
    }
  } else {
    tasksBody.innerHTML = '<span style="color:#94a3b8;">kanban not found</span>';
  }
} catch (e) {
  tasksBody.innerHTML = '<span style="color:#ef4444;">error reading kanban</span>';
}

// 4) Recent Outbox activity: list last 5 files under CHAT/Outbox, sorted by mtime
try {
  const outbox = app.vault.getAbstractFileByPath(OUTBOX);
  if (outbox && outbox.children) {
    const files = outbox.children
      .filter(f => f instanceof obsidian.TAbstractFile === false ? true : true)
      .filter(f => typeof f.stat === "function")
      .sort((a,b) => b.stat.mtime - a.stat.mtime)
      .slice(0, 5);
    if (!files.length) {
      activityBody.innerHTML = '<span style="color:#94a3b8;">outbox empty</span>';
    } else {
      const ul = document.createElement("div");
      for (const f of files) {
        const row = document.createElement("div");
        row.style.cssText = "font-size:13px; padding:2px 0;";
        const d = new Date(f.stat.mtime);
        row.innerHTML = '<span style="color:#94a3b8;">' + d.toISOString().slice(0,16).replace("T"," ") + '</span> &middot; ' + f.name;
        ul.appendChild(row);
      }
      activityBody.appendChild(ul);
    }
  } else {
    activityBody.innerHTML = '<span style="color:#94a3b8;">outbox dir missing</span>';
  }
} catch (e) {
  activityBody.innerHTML = '<span style="color:#ef4444;">error reading outbox</span>';
}
```

## Notes

- The dashboard polls loopd once per render; Obsidian re-renders the block on view reload.
- When loopd is offline (current state during build), the Status and Token Spend cards show fallback text; the Kanban and Outbox cards remain live because they read the vault directly.
- See `[[../CONTROL]]` for spawn / kill / restart actions.

## See Also

- [[CONTROL]]
- [[CHAT/Inbox]]
- [[CHAT/Outbox]]
- [[../../SYSTEM/agents]]
- [[../../SYSTEM/METERS]]
