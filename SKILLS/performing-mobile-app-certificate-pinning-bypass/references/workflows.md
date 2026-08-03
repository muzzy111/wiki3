---
name: Document design
description: This skill should be used when the user asks to "create a proposal", "design a report", "make a one-pager", "build a PDF", "create a newsletter", "design slides", "make event materials", "design a flyer", or needs help with print-ready HTML documents. Provides brand configuration, CSS patterns for print layout, and document design best practices.
version: 1.0.0
tags:
  - brand
  - content
  - footer
  - config
---

# Workflows: Certificate Pinning Bypass

## Workflow 1: Escalating Bypass Approach
```
[Configure Burp proxy] --> [App connection fails?] --> [Yes: Pinning active]
                                                              |
                                          [Try Objection generic bypass]
                                                              |
                                                    [Traffic visible?]
                                                    /              \
                                              [Yes: Done]    [No: Advanced]
                                                              |
                                          [Identify pinning library]
                                          [frida-trace *Trust* *Pin*]
                                                              |
                                          [Write custom Frida script]
                                          [Target specific implementation]
                                                              |
                                          [Verify traffic capture]
```

## Decision Matrix
| Pinning Method | Bypass Tool | Difficulty |
|---------------|-------------|-----------|
| OkHttp CertificatePinner | Objection | Easy |
| Network Security Config | Manifest modification | Easy |
| Custom TrustManager | Frida hook | Medium |
| TrustKit | Objection or Frida | Medium |
| Native C/C++ validation | Frida Interceptor.attach | Hard |
| Certificate Transparency | Custom Frida script | Hard |
