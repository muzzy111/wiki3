---
aliases: []
tags:
  - state
  - execution
  - loop
  - agent
---

# Point madriverai.com to GitHub Pages

Muzzy's domain `madriverai.com` is registered with Google Domains (now
Squarespace Domains, since Squarespace bought Google Domains in 2023).
This is the exact recipe to point it at the new GitHub Pages site.

## What we're doing, in plain English

The internet has a giant phone book. When someone types
`madriverai.com` into their browser, the phone book looks up that name
and gives their browser four numbers (an "A record"). The browser then
asks those numbers "show me the website."

Right now the phone book has Squarespace's numbers. We're going to
replace them with GitHub's numbers. Five minutes of clicking, then
the internet catches up over the next few hours.

## Before you start

You need to be logged into the account that owns `madriverai.com`.
That's the Google account that originally bought the domain. After
Squarespace bought Google Domains, the [[dashboard]] is at
**https://domains.squarespace.com** — your Google account still logs
you in.

## The recipe

### Step 1: Open the DNS settings

1. Go to https://domains.squarespace.com
2. Click **madriverai.com** (or whatever it's listed as)
3. Click **DNS** in the left sidebar
4. Click **Custom Records** (or "Advanced" — the UI has been
   redesigned a few times, the wording changes)

### Step 2: Add the four GitHub Pages A records

Add these as four separate A records. **If old A records for
`@` (the bare domain) exist, delete them first.**

| type | host | value | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 3600 (or default) |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |

The host field might be blank or `@` or your domain name depending on
the [[dashboard]] version. All four mean "the bare domain."

### Step 3: Add the www CNAME

Add one CNAME record:

| type | host | value | TTL |
|---|---|---|---|
| CNAME | `www` | `mad-river-ai.github.io.` | 3600 |

Note the trailing dot on the value — that's standard for CNAMEs and
Squarespace usually adds it for you.

### Step 4: Save and wait

Click **Save** in the [[dashboard]]. The changes go live in 5 minutes to
a few hours, depending on TTL. To check progress:

```bash
dig madriverai.com +short
```

Should return the four GitHub IPs (in any order):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

You can run that from any terminal. The current PowerShell on this
machine works.

### Step 5: Tell GitHub about the custom domain

The repo already has `public/CNAME` with `madriverai.com` in it, so
this is already done at the code level. But to make the GitHub side
happy, go to:

1. https://github.com/Mad-River-AI/madriverai.com/settings/pages
2. Under **Custom domain**, `madriverai.com` should already be there
   (read from the CNAME file). If not, type it and save.
3. Wait for the DNS check to turn green ().
4. Check **Enforce HTTPS** once it's available (usually within an
   hour of DNS propagating).

## What if I want to use Cloudflare instead?

Same outcome, slightly nicer edge cache, free. Squarespace DNS works
fine for GitHub Pages — this is what the recipe above does. If you
want to switch to Cloudflare-managed DNS later:

1. Sign up at https://cloudflare.com (free tier is plenty)
2. Add `madriverai.com` to your account
3. Cloudflare gives you two nameservers; paste them into the
   Squarespace domain settings (replacing the default Squarespace
   nameservers)
4. Wait for nameserver propagation (~30 min usually)
5. In Cloudflare DNS, add the same four A records + www CNAME from
   above, then turn on the orange cloud (proxied) for each

Either path is fine. Default: keep Squarespace DNS, do the four A
records, you're done.

## Troubleshooting

**"DNS check failed" in GitHub Pages settings.**
The DNS hasn't propagated yet. Wait an hour, refresh.

**Browser shows the old Squarespace parking page.**
Same — DNS cache, either at your end or the registrar's. Try a
different browser, or `ipconfig /flushdns` in PowerShell.

**HTTPS not available yet.**
GitHub provisions a Let's Encrypt cert after the custom domain
resolves to their servers. Usually 15 min - 1 hour after DNS works.

**madriverai.com works but www.madriverai.com doesn't.**
Step 3 was missed. Add the www CNAME.

**A record already exists for `@` and you can't delete it.**
Some Squarespace DNS setups reserve the bare domain for their parking
page. If you can't delete the old A record, you may need to contact
Squarespace support to release the lock. Tell them you're moving
to GitHub Pages and you need the A record for `madriverai.com`
released. They usually do it same-day.

## Verification commands

Once you think it's done, run from a terminal:

```bash
# Check A records
nslookup madriverai.com
# or
dig madriverai.com +short

# Check CNAME
nslookup -type=cname www.madriverai.com

# Check HTTPS
curl -I https://madriverai.com
```

All three should return GitHub Pages responses within an hour.
