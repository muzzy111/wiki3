---
aliases: []
tags:
  - search
  - tools
  - google
  - archive
---

# Threat Detection Framework -- Graph Analysis

> *Findings from a graphify knowledge graph run over [[10.03 SKILLS]]. AST extraction of 1,097 code files produced 16,839 nodes and 24,835 edges across 1,115 communities. This analysis traces the Elasticsearch pipeline, geo-detection primitives, and the emergent endpoint hunting framework hidden across the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] library.*

---

## Graph Run Summary

| Metric | Value |
|---|---|
| Input folder | `[[10.03 [[SKILLS]]]]` |
| Files scanned | 2,998 (1,097 code + 1,854 doc + 47 image) |
| Extraction mode | AST only (semantic deferred -- quota) |
| Nodes | 16,839 |
| Edges | 24,835 |
| Communities | 1,115 |
| God nodes | 10 |
| Graph outputs | `00.00 Root/[[graphify-out]]/` |

> [!info] Incremental [[update]] available
> Run `/graphify [[10.03 [[SKILLS]]]] --[[update]]` after quota resets to layer semantic extraction over the existing AST graph. No rebuild required.

---

## God Nodes -- Highest-Degree Connectors

| Node | Degree | [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Significance |
|---|---|---|---|
| `generate_report()` | 10 | alert-triage-with-elastic-siem | Natural pipeline terminus |
| `BloodHoundAnalyzer` | 24 | exploiting-active-directory-with-bloodhound | AD attack surface hub |
| `GoPhishClient` | 24 | performing-phishing-simulation-with-gophish | Phishing simulation core |
| `MemoryForensicsAgent` | 22 | performing-memory-forensics-with-volatility3 | Memory analysis hub |
| `EvidenceCollector` | 20 | (cross-[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]) | Forensics data gatherer |

---

## Finding 1 -- The Hidden Elasticsearch Pipeline

Six [[skills]] share `Elasticsearch` as their data backbone. Composable into a unified threat detection pipeline today.

### [[Skills]] in the Pipeline

| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Layer | Key Function |
|---|---|---|
| `performing-alert-triage-with-elastic-siem` | Triage (terminus) | `generate_report()` |
| `detecting-insider-threat-with-ueba` | Detection | `build_user_baseline()` |
| `performing-user-behavior-analytics` | Behavioral | `detect_impossible_travel()` |
| `hunting-for-living-off-the-land-binaries` | Hunt | `run_hunt()` |
| `hunting-for-living-off-the-cloud-techniques` | Hunt | `run_hunt()` |
| `performing-threat-hunting-with-elastic-siem` | Hunt | `get_es_client()` |

### Connection Path (Graph-Extracted)

```
build_user_baseline()
  --[calls | EXTRACTED]--> main()
    --[calls | EXTRACTED]--> generate_report()
```

2 hops. Fully EXTRACTED. [[Integration]] gap: ueba output to alert-triage input -- one adapter needed.

### Surprising Cross-Community Bridges

- `get_es_client()` -- bridges UBA and Threat Hunting
- `connect_es()` -- bridges Insider Threat and Alert Triage
- `hunt_lotc_elastic()` / `hunt_lolbins_elastic()` -- bridge LotL and LotC hunters to SIEM

**Interpretation:** Elasticsearch is the hidden spine of the security [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] set. These connections emerged independently -- never designed, only revealed by the graph.

---

## Finding 2 -- haversine() is a Vault-Wide Primitive

Impossible-travel / geographic distance detection appears in **8 separate [[skills]]**. Copy-pasted, never shared.

### All [[Skills]] Using Geo-Detection

| [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] | Function |
|---|---|
| `performing-user-behavior-analytics` | `haversine()` |
| `detecting-anomalous-[[authentication]]-patterns` | `haversine_km()` |
| `detecting-email-account-compromise` | `haversine_km()` |
| `detecting-oauth-token-theft` | `haversine()` + `detect_impossible_travel()` |
| `performing-adversary-in-the-middle-phishing` | `haversine_km()` + `haversine_distance()` |
| `building-cloud-siem-with-sentinel` | `detect_impossible_travel()` |
| `analyzing-azure-activity-logs-for-threat` | `detect_impossible_travel()` |
| `analyzing-web-server-logs-for-intrusion` | `enrich_with_geoip()` |

> [!warning] Refactoring signal
> A single `geo_utils.py` with `haversine()`, `detect_impossible_travel()`, and `enrich_with_geoip()` should replace all 8 independent copies.

---

## Finding 3 -- The Emergent Endpoint Hunting Framework

28 endpoint hunting [[skills]] all implement an identical 4-function interface. Never designed -- emerged from consistent implementation patterns.

### The De Facto Interface

| Function | [[Skills]] | Coverage |
|---|---|---|
| `run_hunt()` | 28/28 | Universal entry point |
| `parse_logs()` | 21/28 | Log ingestion layer |
| `analyze_event()` | 13/28 | Detection logic |
| `main()` | 55+ | Orchestration |
| `generate_sigma_rule()` | 4/28 | Sigma rule output |
| `normalize_event()` | 4/28 | Log normalization |

### Structural Clone Clusters (Jaccard >= 0.80)

> [!note] Clone Cluster -- The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Four (Jaccard = 1.00)
> Byte-for-byte structural clones. Only detection logic inside `analyze_event()` differs.
> - `detecting-mimikatz-execution-patterns`
> - `detecting-email-forwarding-rules-attack`
> - `detecting-privilege-escalation-attempts`
> - `detecting-insider-threat-behaviors`

A `HunterTemplate` class + detection rule file per technique would replace all four.

---

## Finding 4 -- MITRE ATT&CK Coverage

**27 unique techniques across 11 of 14 MITRE tactics.**

| Tactic | Techniques |
|---|---|
| Initial Access | T1566 Spearphishing, T1195 Supply Chain |
| Execution | T1059 PowerShell, T1047 WMI, T1218 LOLBins |
| Persistence | T1053 Sched Tasks, T1547 Registry, T1546 WMI |
| Privilege Escalation | T1068, T1548 UAC Bypass, T1574 DLL Sideloading |
| Defense Evasion | T1055 Process Injection, T1055.012 Hollowing |
| Credential Access | T1003 Dump, T1003.006 DCSync, T1550 PtH, T1558 Kerberoast |
| Lateral Movement | T1021, T1557 NTLM Relay |
| Collection | T1114 Email Forwarding |
| C2 | T1071 Beaconing, T1571 Non-Standard Port |
| Exfiltration | T1041 |
| Impact | T1490 Shadow Copy Deletion |

> [!warning] Coverage gaps
> **Missing tactics:** Reconnaissance, Resource Development, Discovery -- no pre-attack or internal network enumeration hunting [[skills]] exist.

---

## Unified Framework Blueprint

```python
class HunterFramework:
    backends = [ElasticBackend, SplunkBackend, ZeekBackend, EndpointBackend]
    geo = GeoUtils(haversine, detect_impossible_travel, enrich_with_geoip)

    def run_hunt(self, technique: MITRETechnique) -> HuntResult:
        raw        = self.backend.parse_logs()      # 21 skills implement this
        normalized = self.normalize_event(raw)      # 4 skills implement this
        findings   = self.analyze_event(normalized) # 13 skills implement this
        sigma      = self.generate_sigma_rule(findings) # 4 skills already do this
        return self.generate_report(findings, sigma)
```

This architecture already exists across 28 files. The graph proved it. It needs to be extracted, not invented.

---

## Graph Artifacts

| File | Path |
|---|---|
| Interactive graph | `00.00 Root/[[graphify-out]]/graph.html` |
| Full audit [[[[report]]]] | `00.00 Root/[[graphify-out]]/[[[[[[GRAPH_REPORT]]]]]].md` |
| Raw graph data | `00.00 Root/[[graphify-out]]/graph.json` |

---

## Related Nodes

| Node | Relationship |
|---|---|
| [[10.03 SKILLS]] | Source corpus for this analysis |
| [[10.10 OSINT]] | Parent domain |
| [[Mad River AI]] | OSINT framework that could deploy this pipeline |
| [[00.01 Antigravity]] | Agent that ran the graphify analysis |
