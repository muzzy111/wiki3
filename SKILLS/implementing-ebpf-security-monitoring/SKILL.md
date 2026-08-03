---
name: implementing-ebpf-security-monitoring
description: "Agent for deploying and managing eBPF security monitoring with Cilium Tetragon. Use when the user asks to implement ebpf security monitoring."
version: 1.0.0
tags:
  - implementing
source: implementing-ebpf-security-monitoring
---

# Implementing Ebpf Security Monitoring

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Common Kprobe Hook Points, Argument Types, Selector Operators, Match Actions, Tetragon gRPC API, Log Export Configuration

## When to use

- The user wants to **implement** ebpf security monitoring.
- Capability: Agent for deploying and managing eBPF security monitoring with Cilium Tetragon.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, ebpf, security, monitoring`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Verify that required tools are available on the system
2. Generate a TracingPolicy for monitoring file access via fd_install kprobe
3. Generate a TracingPolicy for monitoring TCP connections via tcp_connect kprobe
4. Generate a TracingPolicy for detecting setuid(0) and commit_creds calls
5. Generate a TracingPolicy that kills crypto miner processes via Sigkill
6. Generate a TracingPolicy for detecting reverse shell network connections
7. Generate a TracingPolicy for detecting container escape attempts
8. Generate a TracingPolicy for monitoring file writes to sensitive paths

## Tools & resources

- Common Kprobe Hook Points
- Argument Types
- Selector Operators
- Match Actions
- Tetragon gRPC API
- Log Export Configuration

## How the agent should work

1. **Orient** — Restate the user's goal, scope, and constraints in one short paragraph.
2. **Load depth as needed** — Do **not** dump raw API tables into the chat. Read only the reference sections required for the current step.
   - Workflows and playbooks: `references/workflows.md` (if present)
   - Standards, data models, event IDs: `references/standards.md` (if present)
   - CLI/API flags and query snippets: `references/api-reference.md`
3. **Prefer automation** — Use `scripts/agent.py` (and `scripts/process.py` if present) for repeatable collection/analysis when the environment allows.
4. **Explain at the right altitude** — Lead with decisions and findings; put flags, full queries, and hex dumps in collapsible detail or appendices.
5. **Close the loop** — Summarize confidence, residual risk, and concrete next steps.

## Package layout

| Path | Purpose |
|------|---------|
| `SKILL.md` | This high-level playbook (start here) |
| `references/` | Deep procedure, standards, and CLI/API detail |
| `scripts/` | Automation helpers for collection/analysis |

## Automation entry points

- `check_prerequisites` — Verify that required tools are available on the system.
- `generate_file_access_policy` — Generate a TracingPolicy for monitoring file access via fd_install kprobe.
- `generate_network_monitor_policy` — Generate a TracingPolicy for monitoring TCP connections via tcp_connect kprobe.
- `generate_privilege_escalation_policy` — Generate a TracingPolicy for detecting setuid(0) and commit_creds calls.
- `generate_crypto_miner_enforcement_policy` — Generate a TracingPolicy that kills crypto miner processes via Sigkill.
- `generate_reverse_shell_detection_policy` — Generate a TracingPolicy for detecting reverse shell network connections.
- `generate_container_escape_policy` — Generate a TracingPolicy for detecting container escape attempts.
- `generate_write_monitoring_policy` — Generate a TracingPolicy for monitoring file writes to sensitive paths.
- `apply_policy` — Apply a TracingPolicy to the Kubernetes cluster or write to file.
- `list_tracing_policies` — List all TracingPolicy resources in the cluster.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-ebpf-security-monitoring`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
