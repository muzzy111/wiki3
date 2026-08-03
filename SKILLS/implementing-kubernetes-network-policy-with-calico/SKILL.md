---
name: implementing-kubernetes-network-policy-with-calico
description: "Agent for auditing and generating Calico Kubernetes network policies. Use when the user asks to implement kubernetes network policy with calico."
version: 1.0.0
tags:
  - implementing
  - cloud
  - network
source: implementing-kubernetes-network-policy-with-calico
---

# Implementing Kubernetes Network Policy with Calico

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Kubernetes, Calico GlobalNetworkPolicy, calicoctl CLI, Industry Standards, Calico Documentation References, Zero Trust Network Model

## When to use

- The user wants to **implement** kubernetes network policy with calico.
- Capability: Agent for auditing and generating Calico Kubernetes network policies.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, kubernetes, network, policy, calico`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Get Kubernetes resources via kubectl
2. List all NetworkPolicy and Calico GlobalNetworkPolicy resources
3. Audit network policies for security gaps
4. Generate a default deny-all NetworkPolicy for a namespace
5. Generate a policy allowing DNS egress to kube-dns
6. Generate a Calico-style network policy for an application
7. Find namespaces without any network policies

## Key concepts

- Section 4.4: Container Networking - Isolate container network traffic using network policies
- Section 5.3: Network Security - Implement micro-segmentation between containers
- Recommends default-deny policies with explicit allowlisting
- SC-7: Boundary Protection - Implement network segmentation controls
- AC-4: Information Flow Enforcement - Control network traffic between pods
- SC-7(5): Deny by Default / Allow by Exception
- Section 3: Network Separation and Hardening
- Use network policies to isolate workloads

## Tools & resources

- Kubernetes
- Calico GlobalNetworkPolicy
- calicoctl CLI
- Industry Standards
- Calico Documentation References
- Zero Trust Network Model
- Compliance Mappings

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
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `kubectl_get` — Get Kubernetes resources via kubectl.
- `list_network_policies` — List all NetworkPolicy and Calico GlobalNetworkPolicy resources.
- `audit_network_policies` — Audit network policies for security gaps.
- `generate_default_deny` — Generate a default deny-all NetworkPolicy for a namespace.
- `generate_allow_dns_egress` — Generate a policy allowing DNS egress to kube-dns.
- `generate_app_policy` — Generate a Calico-style network policy for an application.
- `check_unprotected_namespaces` — Find namespaces without any network policies.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-kubernetes-network-policy-with-calico`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
