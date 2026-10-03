# Google Cloud Platform reference architecture

Last validated Jan 5, 2026

This document details best practices and a reference architecture for Tailscale deployments on Google Cloud Platform (GCP). The following guidance applies for all Tailscale modes of operation—devices, exit nodes, subnet routers, and the like.

> **Note:**
>
> For the purposes of this document, the following terminology is used:
>
> * **Tailscale device**—a Tailscale node, exit node, subnet router, and the like.
> * **Tailscale agent**—the Tailscale client that runs on a device to allow it to connect to the Tailscale network.
> * **GCP resource**—a resource in Google Cloud Platform. This can be a GCE instance, a Cloud SQL instance, a Cloud Run service, and the like.

## High-level architecture

This diagram illustrates how Tailscale integrates with Google Cloud Platform to provide secure, reliable network connectivity across distributed cloud resources. The architecture shows a Virtual Private Cloud (VPC) divided into multiple zones, each containing both public and private subnets with strategically placed Tailscale components.

![Potential deployments of Tailscale to access Google Cloud resources](reference/reference-architectures/gcp/gcp-reference-architecture.png)

Within the public subnets, Tailscale connectors are deployed with failover capabilities to handle inbound connections from external sources. These connectors serve as access points to GCP services including Cloud SQL, Cloud Storage, and other platform offerings. In parallel, private subnets host redundant Tailscale SSH session recorders to ensure high availability for security monitoring.

The architecture maintains clear separation between public-facing components and private infrastructure, with multiple connection pathways (Tailscale connectors, Tailscale instances, GKE Control Plane, and Cloud NAT) working together to enhance reliability, security, and accessibility across the entire cloud deployment.

## Ways to deploy Tailscale to connect to and from GCP resources

Tailscale provides a few options for connecting to resources within GCP. At a high-level they are:

* **[Agent-to-agent connectivity][ar-agent-to-agent-connectivity]**—connect to "static" resources such as Google Compute Engine (GCE) instances. This is recommended when you can install and run Tailscale directly on the resource you wish to connect to.
* **[IP-based connectivity with a Tailscale subnet router][ar-subnet-router-ip-connect]**—connect to managed GCP resources such as Cloud SQL or Spanner. This is recommended when you either cannot run Tailscale on the resource you are connecting to or you want to expose an existing [subnet][kb-subnets] or services in a Virtual Private Cloud (VPC) to your tailnet.
* **[DNS-based routing with a Tailscale app connector][ar-dns-routing-with-app-connector]**—connect to software as a service (SaaS) applications or other resources over your tailnet with DNS-based routing.
* **[Kubernetes services and auth proxy with Tailscale Kubernetes operator][ar-services-and-api-proxy]**—expose services in your Google Kubernetes Engine (GKE) cluster and your GKE cluster control plane directly to your Tailscale network. This is recommended when you are connecting to resources running in a Kubernetes cluster, or to a Kubernetes cluster's control plane.
* **[Cloud Run and other container services][ar-cloud-run-and-other-container-services]**—access resources in your tailnet from Cloud Run, Cloud Run functions, and other container solutions.

### Agent-to-agent connectivity

It's best practice to [install the Tailscale client (agent)][kb-installation] whenever possible—for example, [when setting up servers][kb-set-up-servers] on GCE instances. Installing Tailscale on your GCE instances directly generally provides the best and most scalable connectivity while enabling Tailscale agent-based functionality such as Tailscale SSH.

### IP-based connectivity with subnet router

For managed resources where you cannot install the Tailscale agent, such as Cloud SQL, Spanner, and similar services, you can run a [subnet router][kb-subnets] within your VPC to access these resources from Tailscale. Subnet routers can also be used to connect to resources using [Private Service Connect][xt-gcp-private-service-connect].

### DNS-based routing with an app connector

[App connectors][kb-app-connectors] let you route traffic bound for SaaS applications or managed services by proxying DNS for the target domains and advertising the subnet routes for the observed DNS results. This is useful for cases where the application has an allowlist of IP addresses which can connect to it; the IP address of the nodes running an app connector can be added to the allowlist, and all nodes in the tailnet will use that IP address for their traffic egress.

### Kubernetes services and API server proxy with Tailscale Kubernetes Operator

The [Tailscale Kubernetes operator][kb-kubernetes-operator] lets you expose services in your Kubernetes cluster to your Tailscale network, and use an API server proxy for secure connectivity to the Kubernetes control plane.

### Cloud Run and other container services

Tailscale supports [userspace networking][kb-userspace-networking] where processes in the container can connect to other resources on your Tailscale network by using a SOCKS5 or HTTP proxy. This lets [Cloud Run][kb-cloudrun], Cloud Run functions, and other container-based solutions to connect to the Tailscale network with minimal configuration needed.

## Production best practices

Below are general recommendations and best practices for running Tailscale in production environments. Much of what is listed below is explained in greater detail throughout this document:

* When possible deploy [subnet routers][kb-subnets], [exit nodes][kb-exit-nodes], [app connectors][kb-app-connectors], and the like, to public subnets with public IP addresses to ensure [direct connections][kb-connection-types] and optimal performance.
* Run subnet routers, exit nodes, app connectors, and the like, separately from the systems you are administering with Tailscale—for example, run your subnet routers outside of your GKE clusters.
* Deploy dynamically scaled resources (for example, containers or serverless functions) as [ephemeral nodes][kb-ephemeral-nodes] to automatically clean up devices after they shut down.

### High availability and regional routing

* Run multiple [subnet routers][kb-subnets] and [app connectors][kb-app-connectors] across multiple GCP zones to improve resiliency against zone failures with [high availability failover][kb-high-availability] and deploy across multiple regions for [regional routing][kb-high-availability-regional-routing].
* Run multiple Tailscale SSH session recorder nodes across multiple GCP zones to improve resiliency against zone failures with [recorder node failover][kb-multiple-recorder-nodes] and deploy across multiple regions for [regional routing][kb-high-availability-regional-routing].

## Performance best practices

When deploying Tailscale in Google Cloud Platform (GCP), several performance considerations should be taken into account. These include selecting appropriate instance types based on workload requirements, configuring Cloud NAT for optimal direct connections, deploying subnet routers strategically, and ensuring high availability through multi-zone deployments.

Refer to [Performance best practices][kb-performance-best-practices] for general recommendations.

### In-region load balancing

Deploy multiple overlapping connectors within a [DERP][kb-derp-servers] region to take advantage of [in-region load balancing][kb-high-availability-region-load-balancing] to evenly spread load across the connectors on a best-effort basis, and enable in-region redundancy.

### Recommended instance sizing

When selecting instance types for Tailscale deployments on GCP, the requirements vary significantly based on the role of the instance. For normal Tailscale device usage, the instance type is typically determined by the primary workload rather than Tailscale's minimal resource needs. However, for specialized roles like subnet routers, exit nodes, and app connectors, careful consideration should be given to CPU performance, network bandwidth limits, and instance stability. Below are specific recommendations for different Tailscale deployment scenarios.

#### Normal usage

When installing Tailscale on a GCE instance as a "normal" Tailscale device (for example, not a subnet router or exit node), you likely have already sized that instance to a suitable instance type for its workload and running Tailscale on it will likely add negligible resource usage.

#### Subnet routers, exit nodes, and app connectors

There are many variables that affect performance and workloads vary widely so we do not have specific size recommendations, but we do have general guidance for selecting an instance type for a GCE instance running as a [subnet router][kb-subnets], [exit node][kb-exit-nodes], or [app connector][kb-app-connectors]. In general:

* Higher CPU clock speed is more important than more cores.
* Instances with ARM-based processors are quite cost effective for packet forwarding.
* Avoid shared-core machine types. These machine types timeshare a physical core and can result in inconsistent performance.
* Consult Google's [network bandwidth][xt-gcp-network-bandwidth] documentation to better understand per-instance egress and ingress limitations.

### Security groups

Tailscale uses various [NAT traversal techniques][bl-how-nat-traversal-works] to safely connect to other Tailscale nodes without manual intervention. Nearly all the time, you do not need to open any [firewall ports][kb-firewalls] for Tailscale. However, if your VPC and security groups are overly restrictive about internet-bound egress traffic, refer to [What firewall ports should I open to use Tailscale][kb-firewall-ports].

### Public vs private subnets

Tailscale devices deployed to a public subnet with a public IP address will benefit from [direct connections][kb-connection-types] between nodes for the best performance.

#### Cloud NAT

Tailscale uses both [direct and relayed connections][kb-connection-types], opting for direct connections where possible. Enable [endpoint-independent mapping on Cloud NAT][xt-gcp-nat-endpoint-independent-mapping] to enable direct connections to resources behind NAT.

### VPC peering and Network Connectivity Center

Deploy a subnet router (or a set for high availability) within a VPC to allow access to multiple VPCs through [VPC peering][xt-gcp-vpc-peering] or [Network Connectivity Center][xt-gcp-network-connectivity-center].

If you have VPCs or subnets with overlapping IPv4 addresses, use [4via6 subnet routers][kb-4via6-subnets] to access resources with unique IPv6 addresses for each overlapping subnet.

### Subnet routers within GKE

Oftentimes organizations use Tailscale to connect to and administer their GKE clusters. While Tailscale can [run within a container][kb-userspace-networking] and be deployed to GKE, we recommend running your [subnet routers][kb-subnets] externally to these clusters to ensure connectivity is available in the event your cluster is having issues. In other words, run your subnet router on dedicated CGE instances or a GKE cluster separate from than the cluster you're administering.

### Linux VMs using exit nodes

> **Note:**
>
> This is no longer required for Tailscale v1.96 or later.

There is a [known GitHub issue][xt-gh-tailscale-issue-3310] that Linux instances with reverse path filtering (RPF) strict mode enabled can prevent packets from being forwarded to a Tailscale exit node as well as potentially breaking all egress connectivity from the VM, including to the Tailscale control plane. GCP specifically sets RPF with strict mode enabled on most Linux VMs by using the `sysctl` command `net.ipv4.conf.all.rp_filter = 1` in the file `/etc/sysctl.d/60-gce-network-security.conf`.

While setting an exit node by using the `--exit-node` flag, normally the `tailscaled` daemon on the machine will add a warning to the local `syslog` but still end up setting the exit node and break connectivity.

The error log usually looks like this:

```shell
error: Exit node misconfiguration: The following issues on your machine will
likely make usage of exit nodes impossible: [interface "tailscale0" has strict
reverse-path filtering enabled interface "ens4" has strict reverse-path filtering
enabled], please set rp_filter=2 instead of rp_filter=1;
see https://github.com/tailscale/tailscale/issues/3310
```

In this case, if you are accessing the VM remotely using SSH, you will immediately lose the session before the warning is displayed and will not know the root cause of why the VM has lost all network connectivity.

To work around this issue, you can disable RPF strict mode on the Linux instance by setting the `sysctl` values to `2` which uses loose mode. Set `net.ipv4.conf.all.rp_filter = 2` and `net.ipv4.conf.default.rp_filter = 2` in the file `/etc/sysctl.d/60-gce-network-security.conf` and reload `sysctl` with `sysctl -p /etc/sysctl.d/60-gce-network-security.conf` to verify that the values have been updated before setting the flag to make the instance use an exit node.

### Tailscale SSH session recording

Deploy [multiple session recorder instances][kb-multiple-recorder-nodes] across multiple availability zones to improve resiliency against zone failures. If your organization operates across multiple regions, consider deploying SSH session recording nodes in each region you operate and [configure SSH access rules][kb-tailscale-ssh-session-turn-on] to send recording information to the local region for your nodes.

[ar-agent-to-agent-connectivity]: #agent-to-agent-connectivity

[ar-cloud-run-and-other-container-services]: #cloud-run-and-other-container-services

[ar-dns-routing-with-app-connector]: #dns-based-routing-with-an-app-connector

[ar-services-and-api-proxy]: #kubernetes-services-and-api-server-proxy-with-tailscale-kubernetes-operator

[ar-subnet-router-ip-connect]: #ip-based-connectivity-with-subnet-router

[bl-how-nat-traversal-works]: /blog/how-nat-traversal-works

[kb-4via6-subnets]: /docs/features/subnet-routers/4via6-subnets

[kb-app-connectors]: /docs/features/app-connectors

[kb-cloudrun]: /docs/install/cloud/cloudrun

[kb-connection-types]: /docs/reference/connection-types

[kb-derp-servers]: /docs/reference/derp-servers

[kb-ephemeral-nodes]: /docs/features/ephemeral-nodes

[kb-exit-nodes]: /docs/features/exit-nodes

[kb-firewall-ports]: /docs/reference/faq/firewall-ports

[kb-firewalls]: /docs/integrations/firewalls

[kb-high-availability-region-load-balancing]: /docs/how-to/set-up-high-availability#in-region-load-balancing-default

[kb-high-availability-regional-routing]: /docs/how-to/set-up-high-availability#regional-routing

[kb-high-availability]: /docs/how-to/set-up-high-availability

[kb-installation]: /docs/install

[kb-kubernetes-operator]: /docs/kubernetes-operator

[kb-multiple-recorder-nodes]: /docs/reference/multiple-recorder-nodes

[kb-performance-best-practices]: /docs/reference/best-practices/performance

[kb-set-up-servers]: /docs/how-to/set-up-servers

[kb-subnets]: /docs/features/subnet-routers

[kb-tailscale-ssh-session-turn-on]: /docs/features/tailscale-ssh/tailscale-ssh-session-recording#turn-on-session-recording-in-acls

[kb-userspace-networking]: /docs/concepts/userspace-networking

[xt-gcp-nat-endpoint-independent-mapping]: https://cloud.google.com/nat/docs/public-nat#specs-rfcs

[xt-gcp-network-bandwidth]: https://cloud.google.com/compute/docs/network-bandwidth

[xt-gcp-network-connectivity-center]: https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview

[xt-gcp-vpc-peering]: https://cloud.google.com/vpc/docs/vpc-peering

[xt-gcp-private-service-connect]: https://cloud.google.com/vpc/docs/private-service-connect

[xt-gh-tailscale-issue-3310]: https://github.com/tailscale/tailscale/issues/3310
