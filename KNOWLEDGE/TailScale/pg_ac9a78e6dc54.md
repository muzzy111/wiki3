# Use DNSConfig for in-cluster MagicDNS resolution

Last validated Jun 5, 2026

A `DNSConfig` is a cluster-scoped custom resource that enables in-cluster resolution of Tailscale MagicDNS names.

When you use a cluster egress proxy or a Tailscale `Ingress`, your services become accessible through their MagicDNS names. For example, `my-service.example.ts.net`.

By default, pods within your Kubernetes cluster cannot resolve these `.ts.net` domain names. The `DNSConfig` resource fixes this by:

* **Deploying a nameserver**: It creates a dedicated nameserver inside the cluster.
* **Simplifying connectivity**: It lets cluster workloads reach tailnet devices using familiar DNS names rather than static IP addresses.

## Example

The following manifest sets up the Tailscale nameserver:

```yaml
apiVersion: tailscale.com/v1alpha1
kind: DNSConfig
metadata:
  name: ts-dns
spec:
  nameserver:
    image:
      repo: tailscale/k8s-nameserver
      tag: unstable
```

## How it works

When a `DNSConfig` resource is created, the Tailscale Kubernetes Operator deploys a nameserver that is dynamically updated with records for:

* **Cluster egress:** Maps MagicDNS names of tailnet devices to the IPs of in-cluster egress proxy pods.
* **Tailscale Ingress:** Maps MagicDNS names of `Ingress` resources to the IPs of in-cluster ingress proxy pods.

> **Note:**
>
> For Tailscale Ingress MagicDNS resolution to work from within the cluster, the `Ingress` resource must also be annotated with `tailscale.com/experimental-forward-cluster-traffic-via-ingress` to ensure the proxy listens on its pod IP address.

## Integrate with CoreDNS

To make this work, configure your cluster's primary DNS resolver (CoreDNS) to forward requests for the `.ts.net` domain to the new nameserver. Add a stub domain configuration to your CoreDNS `ConfigMap`. Refer to the [Kubernetes documentation][xt-k8s-coredns-stub] for details.

The nameserver's Service IP is written to `dnsconfig.status.nameserver.ip` after deployment.

> **Note:**
>
> `DNSConfig` is a singleton: only one can exist in a cluster.

## Further exploration

* [Access a Tailscale Service][kb-access-service] to reach a tailnet service from your cluster through an egress proxy by its MagicDNS name.

[kb-access-service]: /docs/kubernetes-operator/egress/access-tailnet-service

[xt-k8s-coredns-stub]: https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/#configuration-of-stub-domain-and-upstream-nameserver-using-coredns
