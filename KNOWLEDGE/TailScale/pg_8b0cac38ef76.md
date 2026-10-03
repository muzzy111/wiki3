# Automations

Last validated Dec 14, 2025

Streamline and [automate your Tailscale workflow][ln-tailscale-iac] using official infrastructure as code (IaC) providers, the Tailscale application programming interface (API), webhooks, and integrations.

## Infrastructure as code

[Infrastructure as code (IaC)][kb-iac] is a method of managing infrastructure using machine-readable definition files rather than physical hardware or interactive configuration tools. Tailscale offers official providers for Terraform and Pulumi that let you interact with the [Tailscale API][kb-api] to manage various Tailscale resources, such as access control policies, devices, nameservers, and other configurations.

[**Manage Tailscale resources using Terraform**](/docs/integrations/terraform-provider) — Use the Terraform Tailscale provider to interact with the Tailscale API.

[**Manage Tailscale resources using Pulumi**](/docs/integrations/pulumi-provider) — Use the Pulumi Tailscale provider to interact with the Tailscale API.

## API

Tailscale offers an API to let you automate various aspects of your network.

[**Tailscale API**](/docs/reference/tailscale-api) — Explore the Tailscale application programming interface (API).

## Webhooks

Webhooks let you subscribe to certain events on your Tailscale network and process the event notifications through an integration or app.

[**Webhooks**](/docs/features/webhooks) — Set up a webhook to receive notification of events on your Tailscale network.

## GitOps

[GitOps][xt-opengitops] for Tailscale is an alternative to managing [access control policies][kb-access-control] and the [tailnet policy file][kb-tailnet-policy-file] using the admin console.

[**GitOps for Tailscale with Bitbucket**](/docs/integrations/bitbucket/gitops) — Use a Bitbucket CI to maintain your tailnet policy file as code.

[**GitOps for Tailscale with GitLab CI**](/docs/integrations/gitlab/gitops) — Use a GitLab CI to maintain your tailnet policy file as code.

[**GitOps for Tailscale with GitHub Actions**](/docs/integrations/github/gitops) — Use a GitHub Action to maintain your tailnet policy file as code.

## Tailscale Shortcuts for macOS and iOS

Tailscale works with the Shortcuts app on macOS and iOS to provide several built-in shortcut actions, allowing you to automate tasks. For example, you can create shortcuts to connect your device to a tailnet, use an exit node, or switch user accounts.

[**macOS and iOS shortcuts**](/docs/features/mac-ios-shortcuts) — Understand how Tailscale works with the Shortcuts app, allowing you to automate tasks.

[kb-access-control]: /docs/features/access-control

[kb-api]: /docs/reference/tailscale-api

[kb-iac]: /docs/integration-infrastructure-as-code

[kb-tailnet-policy-file]: /docs/features/tailnet-policy-file

[ln-tailscale-iac]: /learn/provision-manage-and-query-tailscale-resources-programmatically-as-code

[xt-opengitops]: https://opengitops.dev
