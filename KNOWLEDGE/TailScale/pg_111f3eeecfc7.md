# How Aperture grants work

Last validated Jun 25, 2026

\[Missing snippet: aperture\_release\_note.mdx]

Aperture controls which users and groups can access which models and MCP capabilities through *grants*. This topic explains the model behind grants so you can reason about access before you write configuration. For step-by-step instructions, refer to the grant how-tos linked under [Next steps][ar-next-steps].

## The grants model

Aperture grants build on the [Tailscale grants framework][kb-tailscale-grants], so they inherit two properties that shape everything else:

* **Deny-by-default.** Without a matching grant, a user can connect to the Aperture device but cannot access any models or MCP capabilities. Access exists only where a grant explicitly provides it.
* **Additive and allow-only.** Each grant only *adds* access. There is no deny rule. A user's effective access is the union of every grant whose `src` matches their identity. To take access away, narrow or remove the grants that provide it. You cannot subtract it with a rule.

If you are coming from the tailnet policy file, this is the key difference: there is no `deny` in grants. You express policy entirely through what you allow.

## Anatomy of a grant

A grant pairs a set of identities with a set of capabilities:

```json
{
  "grants": [
    {
      "src": ["group:ai-users"],
      "app": {
        "tailscale.com/cap/aperture": [
          { "role": "user" },
          { "models": "anthropic/**" }
        ]
      }
    }
  ]
}
```

* **`src`** lists who the grant applies to. Entries can be individual users (`"alice@example.com"`), SCIM groups by email, Tailscale groups (`"group:ai-users"`), or tags (`"tag:ci"`). Use a tag to grant access to non-user devices, such as a CI runner or service, that connect to Aperture. Matching a `group:` entry requires [visible groups][ar-groups-in-grants].
* **`app["tailscale.com/cap/aperture"]`** is an array of capability objects describing what the matched identities can do. Common capabilities include `role` (the user's permission level), `models` (a glob over `provider/model` names), and the MCP fields `mcp_tools`, `mcp_resources`, and `mcp_templates`. Operational fields such as custom headers, quotas, hooks, and CORS settings also live here.

For the complete list of capability fields and their syntax, refer to the [grants configuration reference][kb-aperture-grants].

## Aperture grant fields

An Aperture configuration grant uses two fields:

* **`src`** works the same as in a network grant. It accepts the same identity types (users, SCIM groups, Tailscale groups, and tags), and matching is exact: globs such as `tag:prod-*` do not match.
* **`app["tailscale.com/cap/aperture"]`** holds a fixed set of Aperture-defined fields, not free-form application capabilities. Resource fields (`models`, `connectors`, and the `mcp_*` fields) take glob patterns over slash-separated names, where `*` matches one segment and `**` matches zero or more. `role` takes the exact string `"user"` or `"admin"`. This field controls access, so most of an Aperture grant lives here.

The `dst` and `ip` fields are omitted because the destination is always the Aperture device. They apply only when you define the same grant in the tailnet policy file. For that comparison and the conversion steps, refer to [Aperture grants vs. tailnet policy file grants][kb-aperture-vs-tailnet-grants].

## How Aperture evaluates a request

Aperture resolves access at request time using the connecting user's Tailscale identity:

1. **Identify the user.** Aperture authenticates every connection through [Tailscale identity][kb-tailscale-identity], so there is no separate login step.
2. **Collect matching grants.** Aperture gathers every grant whose `src` matches the user's login, email, or group membership.
3. **Merge capabilities.** The capabilities from all matching grants combine into the user's effective access.
4. **Check the requested action.** Aperture matches the requested model name against the merged `models` patterns (and MCP items against the `mcp_*` patterns), then applies the precedence rules below.
5. **Allow or deny.** If a capability grants the requested access, the request proceeds. If nothing matches, Aperture denies the request, consistent with deny-by-default.

## Precedence and conflicts

Because grants are additive, multiple grants commonly apply to the same user. Two resolution rules determine the outcome when they overlap:

* **Roles: the highest permission wins.** If matching grants assign different roles, admin takes precedence over user. A user who matches both an admin grant and a user grant receives admin-level permissions.
* **Model patterns: the most specific glob wins.** When several `models` patterns match a requested model, Aperture uses the most specific one. For example, `"anthropic/claude-opus-4-7"` beats `"anthropic/**"`, which beats `"**"`. When two patterns are equally specific, the entry that appears earlier in the configuration wins.

These rules apply *within* the additive union; they decide which matching entry takes effect, not whether to subtract access.

## Groups in grants

To use `group:` identifiers in a grant's `src`, the Aperture device needs group membership information, which the Tailscale control plane does not send by default. Enable [visible groups][kb-visible-groups] by adding the `tailscale.com/visible-groups` node attribute to the Aperture device in your tailnet policy file. Aperture then evaluates group membership at request time using the connecting user's identity.

## Next steps

* [Grant access to models][kb-grant-model-access]: Configure grants that control which models each user or group can use.
* [Grant access to MCP tools][kb-grant-mcp-tool-access]: Extend grants to MCP tools, resources, and templates.
* [Set up admin access][kb-set-up-admin-access]: Assign the admin role for dashboard and configuration management.
* [How Aperture works][kb-how-aperture-works]: Understand how identity, routing, and telemetry fit together.

[ar-groups-in-grants]: #groups-in-grants

[ar-next-steps]: #next-steps

[kb-aperture-grants]: /docs/aperture/configuration#grants

[kb-aperture-vs-tailnet-grants]: /docs/aperture/reference/aperture-vs-tailnet-grants

[kb-grant-mcp-tool-access]: /docs/aperture/how-to/grant-mcp-tool-access

[kb-grant-model-access]: /docs/aperture/how-to/grant-model-access

[kb-how-aperture-works]: /docs/aperture/how-aperture-works

[kb-set-up-admin-access]: /docs/aperture/how-to/set-up-admin-access

[kb-tailscale-grants]: /docs/features/access-control/grants/grants-app-capabilities

[kb-tailscale-identity]: /docs/concepts/tailscale-identity

[kb-visible-groups]: /docs/aperture/visible-groups
