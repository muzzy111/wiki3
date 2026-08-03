---
title: "System Meters"
type: system-meters
status: active
created: 2026-08-03
prometheus_endpoint: http://localhost:9090
loopd_endpoint: http://localhost:9101
---

# System Meters

> Fleet-wide live metrics. All values are fetched from Prometheus
> at `http://localhost:9090/api/v1/query` on each render.
> Bars are drawn with text characters only — no SVG, no canvas.

## Live Readout

```dataviewjs
const PROM = "http://localhost:9090/api/v1/query";
const q = (expr) => PROM + "?query=" + encodeURIComponent(expr);
const fmt = (n) => n === null || n === undefined ? "n/a" : n.toFixed(1);

async function get(name) {
  try {
    const r = await fetch(q(name));
    if (!r.ok) return null;
    const j = await r.json();
    const v = j?.data?.result?.[0]?.value?.[1];
    return v === undefined ? null : Number(v);
  } catch (e) { return null; }
}

const bar = (pct, width=40) => {
  const v = Math.max(0, Math.min(100, Number(pct)));
  const fill = Math.round((v/100) * width);
  return "[" + "#".repeat(fill) + "-".repeat(width - fill) + "] " + v.toFixed(1) + "%";
};

const el = dv.el("div", "");
el.style.cssText = "font-family: ui-monospace, Menlo, Consolas, monospace; line-height:1.6; padding:6px 0;";

// Fetch a handful of standard node-exporter series
const cpu    = await get("100 - (avg by(instance)(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)");
const ramPct = await get("(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100");
const netIn  = await get("rate(node_network_receive_bytes_total[1m])");
const netOut = await get("rate(node_network_transmit_bytes_total[1m])");
const diskPct= await get("(1 - (node_filesystem_avail_bytes{fstype!~"tmpfs|overlay"} / node_filesystem_size_bytes{fstype!~"tmpfs|overlay"})) * 100");
const containers = await get("count(kube_pod_info) or vector(0)");
const loopdUp  = await get("up{job=\"loopd\"}");
const promUp   = await get("up{job=\"prometheus\"}");
const natsUp   = await get("up{job=\"nats\"}");
const cadvUp   = await get("up{job=\"cadvisor\"}");
const nodeUp   = await get("up{job=\"node-exporter\"}");

const fmtBytes = (b) => {
  if (b === null || isNaN(b)) return "n/a";
  const u = ["B","KB","MB","GB","TB"];
  let i = 0;
  while (b >= 1024 && i < u.length-1) { b /= 1024; i++; }
  return b.toFixed(2) + " " + u[i];
};

const fmtRate = (b) => {
  if (b === null || isNaN(b)) return "n/a";
  return fmtBytes(b) + "/s";
};

const up = (v) => v === 1 ? '<span style="color:#22c55e;">UP</span>' : (v === 0 ? '<span style="color:#ef4444;">DOWN</span>' : '<span style="color:#f59e0b;">N/A</span>');

const row = (label, body) => {
  const r = document.createElement("div");
  r.style.cssText = "padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.06);";
  r.innerHTML = "<b style=\"display:inline-block;width:160px;color:#94a3b8;\">" + label + "</b> " + body;
  el.appendChild(r);
};

row("CPU",            bar(cpu));
row("RAM",            bar(ramPct));
row("Net In",         fmtRate(netIn));
row("Net Out",        fmtRate(netOut));
row("Disk",           bar(diskPct));
row("Containers",     (containers === null ? "n/a" : String(Math.round(containers))));
row("loopd",          up(loopdUp));
row("prometheus",     up(promUp));
row("nats",           up(natsUp));
row("node-exporter",  up(nodeUp));
row("cadvisor",       up(cadvUp));

const stamp = document.createElement("div");
stamp.style.cssText = "margin-top:14px; font-size:11px; color:#64748b;";
stamp.textContent = "rendered " + new Date().toISOString();
el.appendChild(stamp);
```

## Series Reference

| Metric | Prometheus query | Source |
|---|---|---|
| CPU % | `100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)` | node-exporter |
| RAM % | `(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100` | node-exporter |
| Net In | `rate(node_network_receive_bytes_total[1m])` | node-exporter |
| Net Out | `rate(node_network_transmit_bytes_total[1m])` | node-exporter |
| Disk % | `(1 - (node_filesystem_avail_bytes / node_filesystem_size_bytes)) * 100` | node-exporter |
| Containers | `count(kube_pod_info) or vector(0)` | cAdvisor / kube-state |
| loopd up | `up{job="loopd"}` | loopd self-scrape |
| prom up | `up{job="prometheus"}` | self |

## Failures

If Prometheus is unreachable, the bars render as `n/a` and the up/down column shows `N/A`. No exception is thrown to the vault.

## See Also

- `[[agents/hermes/DASHBOARD]]` — fleet status per agent
- `[[CANVAS/CoWork Dashboard]]` — single-page fleet view
- `[[SYSTEM/agents]]` — registry
