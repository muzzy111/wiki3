#!/usr/bin/env python3
"""
Regenerate high-level, agent-useful SKILL.md files for OpenSkills packages.

Reads folder name + references/ + scripts/ and writes a proper skill instruction
document instead of the bland "Synthesized SKILL.md" stubs.
"""

from __future__ import annotations

import ast
import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent

# Skip non-cyber / already-good / infrastructure dirs
SKIP_DIRS = {
    "anti-obsidian",
    "autocontext",
    "awesome-agent-skills-main",
    "dev-toolkit",
    "docs",
    "hooks",
    "journalism-core",
    "librarian1",
    "pdf-design",
    "pdf-playground",
    "persistent-sessions",
    "plans",
    "processing-karpathy-raw",
    "project-templates-toolkit",
    "research",
    "research-toolkit",
    "scripts",
    "security-toolkit",
    "specs",
    "superjawn",
    "visual-explainer",
}

# Only rewrite stubs (or force all open-skills packages)
STUB_MARKERS = (
    "Synthesized SKILL.md",
    "OpenSkills package:",
    "What's in this skill",
    "read the relevant file under `references/` first",
)

VERB_META = {
    "acquiring": {
        "role": "forensic acquisition",
        "goal": "collect evidence in a forensically sound manner with integrity verification",
        "audience": "DFIR analysts and incident responders",
        "imperative": "acquire",
        "gerund": "acquiring",
    },
    "analyzing": {
        "role": "deep analysis",
        "goal": "extract findings, indicators, and conclusions from technical evidence",
        "audience": "analysts and investigators",
        "imperative": "analyze",
        "gerund": "analyzing",
    },
    "auditing": {
        "role": "security audit",
        "goal": "measure configuration and access against policy and best practice",
        "audience": "security auditors and cloud/IAM engineers",
        "imperative": "audit",
        "gerund": "auditing",
    },
    "automating": {
        "role": "automation",
        "goal": "turn a repeatable security workflow into a reliable pipeline",
        "audience": "SOC engineers and detection engineers",
        "imperative": "automate",
        "gerund": "automating",
    },
    "building": {
        "role": "capability building",
        "goal": "design and stand up an operational security capability or process",
        "audience": "SOC leads, IR managers, and security engineers",
        "imperative": "build",
        "gerund": "building",
    },
    "conducting": {
        "role": "structured engagement",
        "goal": "run a complete assessment, exercise, or investigation end to end",
        "audience": "security teams running formal engagements",
        "imperative": "conduct",
        "gerund": "conducting",
    },
    "configuring": {
        "role": "secure configuration",
        "goal": "harden and tune security tooling for production use",
        "audience": "security engineers and platform admins",
        "imperative": "configure",
        "gerund": "configuring",
    },
    "deploying": {
        "role": "deployment",
        "goal": "roll out a security platform or agent capability safely",
        "audience": "security platform engineers",
        "imperative": "deploy",
        "gerund": "deploying",
    },
    "detecting": {
        "role": "detection engineering",
        "goal": "identify malicious or anomalous activity with high-signal detections",
        "audience": "detection engineers and SOC analysts",
        "imperative": "detect",
        "gerund": "detecting",
    },
    "exploiting": {
        "role": "authorized exploitation",
        "goal": "validate and demonstrate vulnerabilities only in authorized environments",
        "audience": "red teamers and penetration testers",
        "auth_required": True,
        "imperative": "exploit",
        "gerund": "exploiting",
    },
    "hunting": {
        "role": "threat hunting",
        "goal": "proactively search for adversary activity using hypotheses and telemetry",
        "audience": "threat hunters and SOC analysts",
        "imperative": "hunt for",
        "gerund": "hunting",
    },
    "implementing": {
        "role": "security control implementation",
        "goal": "design and implement durable security controls and architectures",
        "audience": "security architects and engineers",
        "imperative": "implement",
        "gerund": "implementing",
    },
    "performing": {
        "role": "hands-on assessment",
        "goal": "execute a focused security technique or assessment workflow",
        "audience": "pentesters, blue teamers, and DFIR practitioners",
        "auth_required": True,
        "imperative": "perform",
        "gerund": "performing",
    },
    "reverse-engineering": {
        "role": "reverse engineering",
        "goal": "disassemble and reason about binaries, malware, or protocols",
        "audience": "malware analysts and reverse engineers",
        "imperative": "reverse engineer",
        "gerund": "reverse-engineering",
    },
    "scanning": {
        "role": "security scanning",
        "goal": "discover exposures, misconfigurations, and vulnerable assets",
        "audience": "security engineers and vulnerability management teams",
        "imperative": "scan",
        "gerund": "scanning",
    },
    "securing": {
        "role": "hardening",
        "goal": "reduce attack surface and enforce strong security posture",
        "audience": "security engineers and system owners",
        "imperative": "secure",
        "gerund": "securing",
    },
    "testing": {
        "role": "security testing",
        "goal": "validate defenses, applications, or controls under controlled conditions",
        "audience": "QA security, pentesters, and AppSec engineers",
        "auth_required": True,
        "imperative": "test",
        "gerund": "testing",
    },
}

# Functions that are helpers, not procedure steps
SKIP_FUNCS = {
    "main", "run_cmd", "run", "parse_args", "setup_logging", "get_logger",
    "usage", "cli", "parse_arguments", "load_config", "save_json", "print_banner",
    "connect", "disconnect", "login", "logout", "to_json", "from_json",
}

# API-heading noise that should never become tools or steps
NOISE_HEADING = re.compile(
    r"(?i)^(api reference|cli interface|cli usage|core functions|dependencies|syntax|output|"
    r"example|examples|format|conversion|timestamp|basic syntax|key options|"
    r"extended options|output format|output artifacts|output schema|browser types|table|"
    r"flag|flags|options|parameters|return|returns|usage|overview|introduction|"
    r"references|see also|notes|warning|install|installation|requirements|"
    r"functions|configuration|function|schema|schemas|variables|constants|"
    r"registry keys checked|suspicious indicators|key registry persistence locations|"
    r"sql error signatures|event|pretooluse|posttooluse|"
    r"validationresult|individual guards|content policy json schema|cli reference|"
    r"external resources|common patterns|policy types|allow specific ingress|"
    r"default deny-all policy|microsoft graph endpoints|microsoft entra id licensing|"
    r"critical entra directory roles|compliance framework mapping)$"
)

AUTH_VERBS = {"exploiting", "performing", "testing"}
AUTH_KEYWORDS = re.compile(
    r"(pentest|red.?team|exploit|payload|c2|beacon|kerberoast|pass.?the.?hash|"
    r"bloodhound|metasploit|cobalt.?strike|sliver|havoc|sql.?injection|"
    r"privilege.?escalation|lateral.?movement|phishing|brute.?force|crack)",
    re.I,
)


def read_text(path: Path, max_chars: int = 200_000) -> str:
    try:
        data = path.read_text(encoding="utf-8", errors="replace")
        return data[:max_chars]
    except OSError:
        return ""


def strip_obsidian_noise(text: str) -> str:
    """Remove vault link corruption patterns from source docs."""
    # Collapse excessive brackets around words
    text = re.sub(r"\[{2,}([^\[\]]+?)\]{2,}", r"\1", text)
    text = re.sub(r"\[{10,}.*?\]{10,}", "", text)
    return text


def humanize_slug(slug: str) -> str:
    words = slug.replace("_", "-").split("-")
    # Keep common tool acronyms uppercase-ish
    acronyms = {
        "ad", "acl", "api", "apt", "aws", "azure", "gcp", "dns", "dll", "edr",
        "elf", "gcp", "http", "https", "iam", "ids", "ips", "ioc", "iocs",
        "ir", "kql", "ldap", "llm", "mft", "mitre", "ntlm", "osint", "pdf",
        "pe", "rbac", "rdp", "saml", "siem", "smb", "soc", "spl", "sql",
        "ssrf", "sso", "tls", "ttp", "ttps", "uefi", "url", "usb", "waf",
        "wmi", "xss", "csrf", "idor", "jwt", "oauth", "oidc", "pam", "pki",
        "vpn", "vpc", "ami", "ec2", "s3", "eks", "aks", "gke", "cis", "cve",
        "cvss", "stix", "taxii", "yara", "sigma", "zeek", "nids", "hids",
        "xdr", "mdr", "soar", "tip", "cti", "dfir", "osint", "c2", "c3",
        "ida", "ghidra", "upx", "apk", "ios", "mac", "linux", "windows",
    }
    out = []
    for w in words:
        if w.lower() in acronyms:
            out.append(w.upper() if len(w) <= 4 else w.capitalize())
        elif w.lower() in {"with", "for", "and", "of", "in", "to", "from", "via", "using", "on"}:
            out.append(w.lower())
        else:
            out.append(w.capitalize())
    # Capitalize first word always
    if out:
        out[0] = out[0][0].upper() + out[0][1:] if out[0] else out[0]
    title = " ".join(out)
    # Fix common tool names
    replacements = {
        "Wireshark": "Wireshark",
        "Splunk": "Splunk",
        "Volatility": "Volatility",
        "Metasploit": "Metasploit",
        "Bloodhound": "BloodHound",
        "Cobalt Strike": "Cobalt Strike",
        "Cobaltstrike": "Cobalt Strike",
        "Mitre Attack": "MITRE ATT&CK",
        "Mitre Navigator": "MITRE Navigator",
        "Opencti": "OpenCTI",
        "Misp": "MISP",
        "Sysmon": "Sysmon",
        "Autopsy": "Autopsy",
        "Apktool": "Apktool",
        "Dcfldd": "dcfldd",
        "Dd": "dd",
        "Hindsight": "Hindsight",
        "Peepdf": "peepdf",
        "Pdfid": "pdfid",
        "Urlscan": "urlscan.io",
        "Dnstwist": "dnstwist",
        "Timesketch": "Timesketch",
        "Kubernetes": "Kubernetes",
        "Powershell": "PowerShell",
        "Active Directory": "Active Directory",
        "Zero Trust": "Zero Trust",
    }
    for a, b in replacements.items():
        title = re.sub(re.escape(a), b, title, flags=re.I)
    return title


def parse_verb_and_rest(slug: str) -> tuple[str, str]:
    for verb in sorted(VERB_META.keys(), key=len, reverse=True):
        if slug.startswith(verb + "-") or slug == verb:
            rest = slug[len(verb) :].lstrip("-")
            return verb, rest
    # fallback: first token
    parts = slug.split("-", 1)
    return parts[0], parts[1] if len(parts) > 1 else ""


def extract_tools_from_slug(slug: str) -> list[str]:
    """Pull tool/product names after 'with' or known product tokens."""
    tools = []
    known = [
        ("wireshark", "Wireshark"),
        ("splunk", "Splunk"),
        ("volatility", "Volatility"),
        ("metasploit", "Metasploit"),
        ("bloodhound", "BloodHound"),
        ("cobalt-strike", "Cobalt Strike"),
        ("cobaltstrike", "Cobalt Strike"),
        ("ghidra", "Ghidra"),
        ("yara", "YARA"),
        ("sigma", "Sigma"),
        ("zeek", "Zeek"),
        ("sysmon", "Sysmon"),
        ("mitre", "MITRE ATT&CK"),
        ("opencti", "OpenCTI"),
        ("misp", "MISP"),
        ("autopsy", "Autopsy"),
        ("apktool", "Apktool"),
        ("hindsight", "Hindsight"),
        ("scapy", "Scapy"),
        ("nmap", "Nmap"),
        ("burp", "Burp Suite"),
        ("nessus", "Nessus"),
        ("elastic", "Elastic"),
        ("sentinel", "Microsoft Sentinel"),
        ("crowdstrike", "CrowdStrike"),
        ("wazuh", "Wazuh"),
        ("falco", "Falco"),
        ("terraform", "Terraform"),
        ("kubernetes", "Kubernetes"),
        ("docker", "Docker"),
        ("aws", "AWS"),
        ("azure", "Azure"),
        ("gcp", "GCP"),
        ("sliver", "Sliver"),
        ("havoc", "Havoc"),
        ("empire", "PowerShell Empire"),
        ("cuckoo", "Cuckoo Sandbox"),
        ("timesketch", "Timesketch"),
        ("gitlab", "GitLab CI"),
        ("saml", "SAML"),
        ("okta", "Okta"),
        ("cyberark", "CyberArk"),
        ("sailpoint", "SailPoint"),
        ("qradar", "QRadar"),
        ("arkime", "Arkime"),
        ("rekall", "Rekall"),
        ("ftk", "FTK"),
        ("foremost", "Foremost"),
        ("objection", "Objection"),
        ("dcfldd", "dcfldd"),
        ("dd-and-dcfldd", "dd / dcfldd"),
        ("peepdf", "peepdf"),
        ("pdfid", "pdfid"),
        ("urlscan", "urlscan.io"),
        ("dnstwist", "dnstwist"),
        ("malpedia", "Malpedia"),
        ("autoruns", "Autoruns"),
        ("netflow", "NetFlow"),
        ("lime", "LiME"),
        ("upx", "UPX"),
        ("osquery", "osquery"),
        ("velociraptor", "Velociraptor"),
        ("snort", "Snort"),
        ("suricata", "Suricata"),
    ]
    for token, name in known:
        if token in slug and name not in tools:
            tools.append(name)
    return tools[:8]


def extract_markdown_headings(text: str) -> list[str]:
    heads = []
    for line in text.splitlines():
        m = re.match(r"^#{1,3}\s+(.+)$", line.strip())
        if m:
            h = strip_obsidian_noise(m.group(1)).strip()
            h = re.sub(r"`+", "", h)
            if h and len(h) < 120 and not h.lower().startswith("api reference"):
                heads.append(h)
    return heads


def extract_workflow_steps(text: str) -> list[str]:
    """Pull high-level steps from ASCII workflows or numbered lists."""
    steps = []
    in_code = False
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if not s or s.startswith("#") or s.startswith("---"):
            continue
        # skip yaml / frontmatter / metadata
        if re.match(r"^(type|cssclasses|tags|name|description|event|tools|license|version)\s*:", s, re.I):
            continue
        # skip table rows and pure identifiers (KQL tables, EventCodes alone)
        if "|" in s or s.startswith("|"):
            continue
        if re.match(r"^[A-Z][A-Za-z0-9]+(Events|Log|Logs)?$", s) and " " not in s:
            continue
        if re.match(r"(?i)^(index=|source=|sourcetype=|Device[A-Z])", s):
            continue
        # workflow node: human phrase
        if re.match(r"^[A-Za-z][A-Za-z0-9 /,&()._-]{12,90}$", s):
            if s.lower() not in ("and", "or") and not NOISE_HEADING.match(s):
                # Prefer multi-word actionable phrases
                if len(s.split()) >= 2 or re.match(r"(?i)^phase\s+\d", s):
                    steps.append(s.rstrip("."))
        # numbered
        m = re.match(r"^\d+[\.)]\s+(.+)$", s)
        if m:
            step = m.group(1).strip()
            if len(step) > 8 and not step.startswith("index="):
                steps.append(step)
        # phase headers
        m = re.match(r"^#{1,3}\s+(Phase\s+\d+[:\s].+)$", s, re.I)
        if m:
            steps.append(m.group(1).strip())
    # dedupe preserve order
    seen = set()
    out = []
    for s in steps:
        key = s.lower()
        if key not in seen and not NOISE_HEADING.match(s):
            seen.add(key)
            out.append(s)
    return out[:12]


def extract_agent_info(py_path: Path) -> dict:
    info = {
        "docstring": "",
        "functions": [],
        "constants": [],
        "auth_disclaimer": False,
    }
    src = read_text(py_path)
    if not src:
        return info
    if re.search(r"authorized|illegal|consent|educational|lab/CTF", src, re.I):
        info["auth_disclaimer"] = True
    try:
        tree = ast.parse(src)
        doc = ast.get_docstring(tree)
        if doc:
            info["docstring"] = " ".join(doc.strip().split())
        for node in tree.body:
            if isinstance(node, ast.FunctionDef) and not node.name.startswith("_"):
                fdoc = ast.get_docstring(node) or ""
                info["functions"].append(
                    {
                        "name": node.name,
                        "doc": " ".join(fdoc.strip().split()) if fdoc else "",
                    }
                )
            if isinstance(node, (ast.Assign, ast.AnnAssign)):
                targets = []
                if isinstance(node, ast.Assign):
                    for t in node.targets:
                        if isinstance(t, ast.Name):
                            targets.append(t.id)
                elif isinstance(node.value, ast.Name) is False and isinstance(node, ast.AnnAssign):
                    if isinstance(node.target, ast.Name):
                        targets.append(node.target.id)
                for t in targets:
                    if t.isupper() and len(t) > 3:
                        info["constants"].append(t)
    except SyntaxError:
        # fallback docstring regex
        m = re.search(r'"""(.+?)"""', src, re.S)
        if m:
            info["docstring"] = " ".join(m.group(1).strip().split())
        info["functions"] = [
            {"name": n, "doc": ""}
            for n in re.findall(r"^def ([a-zA-Z_][a-zA-Z0-9_]*)\(", src, re.M)
            if not n.startswith("_")
        ][:20]
    return info


def clean_tool_name(name: str) -> str | None:
    name = strip_obsidian_noise(name).strip()
    # Strip " - description" suffix often in headings
    if " - " in name:
        left, right = name.split(" - ", 1)
        # Keep short product left of dash if right looks like description
        if len(left) <= 40 and len(right) > 8:
            name = left.strip()
    name = re.sub(r"\s+", " ", name).strip(" -:")
    if not name or len(name) < 2 or len(name) > 50:
        return None
    if NOISE_HEADING.match(name):
        return None
    if re.search(r"(?i)(api reference|syntax|output format|key options)", name):
        return None
    # Concepts/formats/patterns are not tools
    if re.search(
        r"(?i)\b(format|bitmask|bitmasks|connection|queries for|commands for|"
        r"database|timestamp|conversion|risk scoring|core functions|"
        r"schema|patterns?|mapping|licensing|endpoints|guards?|"
        r"policy types|ingress|deny-all)\b",
        name,
    ):
        return None
    # Skip pure library/import noise
    if name.lower() in {"json", "re", "os", "sys", "time", "logging", "argparse", "subprocess"}:
        return None
    return name


def extract_tools_from_api_ref(text: str) -> list[str]:
    tools = []
    # Prefer explicit ## Tools section
    in_tools = False
    for line in text.splitlines():
        if re.match(r"^##\s+Tools\b", line, re.I):
            in_tools = True
            continue
        if in_tools:
            if line.startswith("##"):
                in_tools = False
                continue
            m = re.match(r"^[-*]\s+\*?\*?([A-Za-z0-9][^:|*]+?)(?:\*\*)?\s*(?::|—|-)\s*", line)
            if m:
                t = clean_tool_name(m.group(1))
                if t:
                    tools.append(t)
            else:
                m = re.match(r"^[-*]\s+\[?([A-Za-z0-9][^\]|]+)", line)
                if m and "http" not in line.lower():
                    t = clean_tool_name(re.sub(r"[\[\]]", "", m.group(1)))
                    if t:
                        tools.append(t)

    # ## Tool headings only when they look like CLI tools (short, often with path or known pattern)
    if len(tools) < 2:
        for m in re.finditer(r"^##\s+([A-Za-z0-9][A-Za-z0-9 ._+/-]{1,40})(?:\s*[-—:].*)?$", text, re.M):
            raw = m.group(1).strip()
            # Prefer headings that look like tool names: single product, optional CLI
            if re.search(r"(?i)(format|query|queries|commands|bitmask|sddl|ace|connection|database|syntax|option)", raw):
                continue
            t = clean_tool_name(raw)
            if t and len(t.split()) <= 4:
                tools.append(t)

    seen = set()
    out = []
    for t in tools:
        key = t.lower()
        if key in seen:
            continue
        # de-dupe near-matches / substrings
        if any(key in s or s in key for s in seen):
            continue
        seen.add(key)
        out.append(t)
    return out[:8]


def extract_key_concepts(standards: str, api: str) -> list[str]:
    concepts = []
    skip_libs = re.compile(
        r"(?i)^(json|re|os|sys|time|logging|argparse|subprocess|requests|pathlib|"
        r"datetime|hashlib|collections|typing|shutil|glob|io|csv|boto3|"
        r"google-cloud|azure-|msgraph|yaml|event|pretooluse|posttooluse)\b"
    )
    for text in (standards,):
        # Prefer standards.md for concepts; API is mostly CLI noise
        text = strip_obsidian_noise(text)
        in_code = False
        for line in text.splitlines():
            line = line.strip()
            if line.startswith("```"):
                in_code = not in_code
                continue
            if in_code:
                continue
            if re.match(r"^(type|cssclasses|tags|name|description|event|tools)\s*:", line, re.I):
                continue
            m = re.match(r"^[-*]\s+\*?\*?([A-Za-z][^:]{2,50})\*?\*?\s*:\s*(.+)$", line)
            if m:
                key, val = m.group(1).strip().strip("*"), m.group(2).strip()
                if skip_libs.match(key) or "http" in val.lower()[:12]:
                    continue
                if len(val) < 12:
                    continue
                if re.search(r"(?i)(sdk for|pip install|import )", val):
                    continue
                concepts.append(f"{key}: {val[:110]}")
            elif re.match(r"^[-*]\s+[A-Za-z].{20,110}$", line) and "http" not in line:
                item = re.sub(r"^[-*]\s+\*?\*?", "", line).strip("* ")
                if skip_libs.match(item):
                    continue
                if any(x in item.lower() for x in ("pip install", "import ", "```", "pretooluse")):
                    continue
                concepts.append(item[:120])
    seen = set()
    out = []
    for c in concepts:
        k = c.lower()
        if k not in seen:
            seen.add(k)
            out.append(c)
    return out[:8]


def needs_auth_warning(slug: str, verb: str, agent: dict) -> bool:
    if VERB_META.get(verb, {}).get("auth_required"):
        return True
    if agent.get("auth_disclaimer"):
        return True
    if AUTH_KEYWORDS.search(slug):
        return True
    return False


def build_description(title: str, slug: str, verb: str, docstring: str, tools: list[str]) -> str:
    meta = VERB_META.get(verb, {})
    goal = meta.get("goal", "complete the security workflow")
    imperative = meta.get("imperative", verb)
    topic = slug.replace(verb + "-", "").replace("-", " ") if slug.startswith(verb) else slug.replace("-", " ")
    if imperative.endswith(" for") and topic.startswith("for "):
        topic = topic[4:]
    tool_bit = f" Tools: {', '.join(tools[:4])}." if tools else ""
    if docstring and len(docstring) > 30:
        base = " ".join(docstring.split())
        base = base.rstrip(".")
        # Drop trailing "agent" boilerplate if redundant
        base = re.sub(r"(?i)\bagent$", "", base).strip().rstrip(".")
        if len(base) > 220:
            base = base[:217].rsplit(" ", 1)[0] + "..."
        desc = f"{base}. Use when the user asks to {imperative} {topic}."
    else:
        desc = (
            f"{title}: {goal}. "
            f"Use when the user asks to {imperative} {topic}."
            f"{tool_bit}"
        )
    desc = re.sub(r"\s+", " ", desc).strip()
    if len(desc) > 400:
        desc = desc[:397] + "..."
    return desc


def procedure_from_sources(
    verb: str,
    workflow_steps: list[str],
    functions: list[dict],
    slug: str,
) -> list[str]:
    # Prefer documented agent functions (most reliable high-level steps)
    func_steps: list[str] = []
    if functions:
        candidates = [
            f for f in functions
            if f["name"] not in SKIP_FUNCS and not f["name"].startswith("_")
        ]
        with_docs = [f for f in candidates if f.get("doc")]
        if len(with_docs) >= 3:
            for f in with_docs[:8]:
                doc = f["doc"].rstrip(".")
                if doc and doc[0].islower():
                    doc = doc[0].upper() + doc[1:]
                func_steps.append(doc)
        elif len(with_docs) >= 1 and len(candidates) >= 4:
            for f in candidates[:8]:
                if f.get("doc"):
                    doc = f["doc"].rstrip(".")
                    if doc and doc[0].islower():
                        doc = doc[0].upper() + doc[1:]
                    func_steps.append(doc)
                else:
                    name = f["name"].replace("_", " ")
                    name = re.sub(r"\bacl\b", "ACL", name, flags=re.I)
                    name = re.sub(r"\bsid\b", "SID", name, flags=re.I)
                    name = re.sub(r"\bioc\b", "IOC", name, flags=re.I)
                    func_steps.append(name.capitalize())
    if len(func_steps) >= 3:
        return func_steps

    # Next: workflow phase / narrative steps
    cleaned_wf = []
    for s in workflow_steps:
        s = strip_obsidian_noise(s).strip()
        if not s or NOISE_HEADING.match(s):
            continue
        if re.search(r"(?i)api reference|cli interface|core functions", s):
            continue
        if s.lower() in {"main", "run cmd", "parse args"}:
            continue
        cleaned_wf.append(s)
    if len(cleaned_wf) >= 3:
        return cleaned_wf[:10]

    # Generic by verb
    rest = slug.replace(verb + "-", "").replace("-", " ")
    templates = {
        "acquiring": [
            "Confirm authorization and case/chain-of-custody metadata",
            f"Identify and document the source for {rest}",
            "Apply write-protection / non-destructive collection methods",
            "Acquire the image or artifact set with hashing",
            "Verify integrity and produce an acquisition report",
        ],
        "analyzing": [
            f"Ingest and validate inputs for {rest}",
            "Establish baseline context (scope, hosts, time window, hypotheses)",
            "Run structured analysis using the skill tools and references",
            "Extract indicators, artifacts, and high-confidence findings",
            "Correlate results and document conclusions with evidence pointers",
        ],
        "auditing": [
            "Define audit scope, standards, and success criteria",
            f"Enumerate relevant configuration and access for {rest}",
            "Compare current state against benchmarks and policy",
            "Score findings by risk and exploitability",
            "Produce a remediation-oriented audit report",
        ],
        "building": [
            "Clarify requirements, stakeholders, and operational constraints",
            f"Design the target capability for {rest}",
            "Implement core components and integrations",
            "Validate with test scenarios and edge cases",
            "Document runbooks, ownership, and maintenance",
        ],
        "detecting": [
            "Define the detection hypothesis and data sources",
            f"Identify telemetry and features relevant to {rest}",
            "Build or refine detection logic (rules, queries, models)",
            "Tune against baselined benign activity to reduce noise",
            "Validate with true-positive cases and document coverage gaps",
        ],
        "exploiting": [
            "Confirm written authorization and engagement rules of engagement",
            f"Recon and identify candidates related to {rest}",
            "Validate exploitability safely in the authorized scope",
            "Demonstrate impact with minimal necessary proof",
            "Document findings, reproduction steps, and remediation",
        ],
        "hunting": [
            "Form a threat hypothesis grounded in TTPs or intel",
            f"Select data sources and time range for {rest}",
            "Execute hunt queries and pivot on anomalies",
            "Triage hits into benign, suspicious, or confirmed malicious",
            "Capture IOCs, lessons learned, and detection opportunities",
        ],
        "implementing": [
            "Capture requirements, risks, and success metrics",
            f"Design the control architecture for {rest}",
            "Implement configuration, policies, and integrations",
            "Test effectiveness and failure modes",
            "Hand off operational docs and monitoring",
        ],
        "performing": [
            "Confirm scope, authorization, and safety constraints",
            f"Prepare tooling and environment for {rest}",
            "Execute the technique methodically and record evidence",
            "Validate outcomes and eliminate false paths",
            "Report results with clear remediation guidance",
        ],
        "testing": [
            "Define test objectives, success criteria, and out-of-scope items",
            f"Prepare harnesses and targets for {rest}",
            "Execute tests and capture raw results",
            "Analyze failures, edge cases, and coverage",
            "Report issues with severity and fix recommendations",
        ],
        "configuring": [
            "Baseline current configuration and requirements",
            f"Apply secure configuration for {rest}",
            "Validate functionality and security posture",
            "Document settings, exceptions, and rollback",
        ],
        "deploying": [
            "Plan rollout, dependencies, and rollback",
            f"Deploy components for {rest}",
            "Smoke-test health and integrations",
            "Monitor early telemetry and fix issues",
            "Document operational ownership",
        ],
        "securing": [
            "Assess current exposure and priorities",
            f"Apply hardening controls for {rest}",
            "Verify controls do not break critical workflows",
            "Document residual risk and monitoring",
        ],
        "scanning": [
            "Define asset scope and scan policy",
            f"Run scans for {rest}",
            "Triage and de-duplicate findings",
            "Prioritize by risk and asset criticality",
            "Track remediation and retest",
        ],
        "reverse-engineering": [
            "Triage the sample safely (hash, packer, environment)",
            f"Static analysis pass for {rest}",
            "Dynamic / behavioral analysis as needed",
            "Recover capabilities, IOCs, and C2 patterns",
            "Document family attribution and detection ideas",
        ],
        "conducting": [
            "Plan scope, roles, and communications",
            f"Execute engagement activities for {rest}",
            "Track findings and evidence continuously",
            "Debrief stakeholders with prioritized outcomes",
            "Archive artifacts and lessons learned",
        ],
        "automating": [
            "Map the manual workflow and handoff points",
            f"Implement automation for {rest}",
            "Add logging, retries, and failure alerts",
            "Validate with sample inputs end to end",
            "Operationalize with ownership and SLAs",
        ],
    }
    return templates.get(
        verb,
        [
            f"Clarify the objective for {rest}",
            "Gather inputs and required access",
            "Execute the core workflow using skill scripts and references",
            "Validate results and document findings",
            "Recommend next actions",
        ],
    )


def build_skill_md(skill_dir: Path) -> str | None:
    slug = skill_dir.name
    if slug in SKIP_DIRS or slug.startswith("_") or slug.startswith("."):
        return None

    skill_path = skill_dir / "SKILL.md"
    if not skill_path.exists():
        return None

    existing = read_text(skill_path)
    is_stub = any(m in existing for m in STUB_MARKERS)
    is_our_gen = "High-level skill guide for" in existing or "How the agent should work" in existing
    is_api_leak = bool(re.search(r"\|[- ]+\|", existing[:500])) or "API Reference" in existing[:200]
    is_openskill = (skill_dir / "scripts" / "agent.py").exists() or (skill_dir / "references").exists()
    # Only rewrite stubs, prior generator output, or API-leak frontmatter — leave hand-written skills alone
    if not (is_stub or is_our_gen or is_api_leak or (is_openskill and len(existing) < 2500)):
        return None

    verb, rest = parse_verb_and_rest(slug)
    title = humanize_slug(slug)
    meta = VERB_META.get(verb, {"role": "security workflow", "goal": "complete the task", "audience": "security practitioners"})

    refs = skill_dir / "references"
    api = read_text(refs / "api-reference.md") if (refs / "api-reference.md").exists() else ""
    workflows = read_text(refs / "workflows.md") if (refs / "workflows.md").exists() else ""
    standards = read_text(refs / "standards.md") if (refs / "standards.md").exists() else ""

    scripts_dir = skill_dir / "scripts"
    agent_path = scripts_dir / "agent.py"
    process_path = scripts_dir / "process.py"
    agent = extract_agent_info(agent_path) if agent_path.exists() else {
        "docstring": "", "functions": [], "constants": [], "auth_disclaimer": False
    }
    if process_path.exists() and not agent["docstring"]:
        pinfo = extract_agent_info(process_path)
        if pinfo["docstring"]:
            agent["docstring"] = pinfo["docstring"]

    tools: list[str] = []
    for t in extract_tools_from_slug(slug):
        ct = clean_tool_name(t) if " - " in t or len(t) > 30 else t
        tools.append(ct or t)
    for t in extract_tools_from_api_ref(api + "\n" + standards):
        if not any(t.lower() == x.lower() or t.lower() in x.lower() or x.lower() in t.lower() for x in tools):
            tools.append(t)
    # final tool cleanup
    cleaned_tools: list[str] = []
    seen_t: set[str] = set()
    for t in tools:
        t = re.sub(r"\s+", " ", t).strip()
        key = t.lower()
        if key in seen_t or NOISE_HEADING.match(t):
            continue
        seen_t.add(key)
        cleaned_tools.append(t)
    tools = cleaned_tools[:8]

    workflow_steps = extract_workflow_steps(workflows) if workflows else []
    # Do NOT use API headings as procedure — they're low-level and noisy

    procedure = procedure_from_sources(verb, workflow_steps, agent["functions"], slug)
    concepts = extract_key_concepts(standards, api)
    description = build_description(title, slug, verb, agent["docstring"], tools)
    auth = needs_auth_warning(slug, verb, agent)
    imperative = meta.get("imperative", verb.rstrip("ing") if verb.endswith("ing") else verb)
    topic = rest.replace("-", " ") if rest else title.lower()
    # Avoid "hunt for for X" / "scan for for Y"
    if imperative.endswith(" for") and topic.startswith("for "):
        topic = topic[4:]
    topic = topic.strip()

    # Tags
    tags = [verb]
    domain_tags = []
    domain_map = [
        (r"windows|sysmon|prefetch|amcache|registry|powershell|lnk|shellbag|mft", "windows"),
        (r"linux|elf|auditd|systemd|kernel", "linux"),
        (r"android|apk|ios|mobile", "mobile"),
        (r"aws|azure|gcp|cloud|kubernetes|docker|s3|iam", "cloud"),
        (r"malware|ransomware|rootkit|bootkit|packed|beacon", "malware"),
        (r"forensic|memory|disk.?image|autopsy|volatility|browser.?forensic", "forensics"),
        (r"network|wireshark|zeek|pcap|dns|netflow|tls", "network"),
        (r"threat|mitre|apt|ioc|cti|misp|opencti|attribution", "threat-intel"),
        (r"active.?directory|kerberos|ldap|bloodhound|ntlm", "active-directory"),
        (r"incident|ir|playbook|soc|response", "incident-response"),
        (r"zero.?trust|identity|saml|oauth|pam|rbac", "identity"),
        (r"web|sql.?injection|xss|ssrf|idor|api.?gateway", "appsec"),
        (r"ransomware", "ransomware"),
        (r"phishing|email|header", "email"),
    ]
    blob = slug + " " + title.lower()
    for pat, tag in domain_map:
        if re.search(pat, blob, re.I):
            domain_tags.append(tag)
    tags.extend(domain_tags[:4])

    # Package inventory
    has_refs = refs.exists() and any(refs.iterdir()) if refs.exists() else False
    has_scripts = scripts_dir.exists() and any(scripts_dir.glob("*.py"))
    has_assets = (skill_dir / "assets").exists() and any((skill_dir / "assets").iterdir()) if (skill_dir / "assets").exists() else False

    # Build body
    lines: list[str] = []
    lines.append("---")
    lines.append(f"name: {slug}")
    # YAML description: use folded style safely
    safe_desc = description.replace('"', "'")
    lines.append(f'description: "{safe_desc}"')
    lines.append("version: 1.0.0")
    lines.append("tags:")
    for t in tags:
        lines.append(f"  - {t}")
    lines.append(f"source: {slug}")
    lines.append("---")
    lines.append("")
    lines.append(f"# {title}")
    lines.append("")
    lines.append(f"**Role:** {meta.get('role', 'security workflow').capitalize()}  ")
    lines.append(f"**Audience:** {meta.get('audience', 'security practitioners')}  ")
    primary = [t for t in tools if not NOISE_HEADING.match(t) and len(t.split()) <= 5][:6]
    if primary:
        lines.append(f"**Primary tools:** {', '.join(primary)}")
    lines.append("")

    if auth:
        lines.append("## Authorization & safety")
        lines.append("")
        lines.append(
            "Use this skill **only** with explicit written authorization on systems you own "
            "or are contracted to assess (labs, CTFs, approved engagements). Unauthorized "
            "access or exploitation is illegal. Prefer non-destructive validation, minimize "
            "blast radius, and stop if scope is unclear."
        )
        lines.append("")

    lines.append("## When to use")
    lines.append("")
    lines.append(f"- The user wants to **{imperative}** {topic}.")
    if agent["docstring"]:
        lines.append(f"- Capability: {agent['docstring']}")
    lines.append(f"- Goal: {meta.get('goal', 'complete the workflow')}.")
    # Trigger phrases from slug tokens
    trigger_bits = [w for w in slug.split("-") if len(w) > 3 and w not in {"with", "from", "using", "based"}][:6]
    if trigger_bits:
        lines.append(f"- Trigger keywords: `{', '.join(trigger_bits)}`")
    lines.append("")

    lines.append("## Outcomes")
    lines.append("")
    lines.append("A successful run should leave the user with:")
    lines.append("1. A clear answer to the objective (findings, status, or deliverable).")
    lines.append("2. Evidence pointers (commands, logs, artifacts, hashes, or query results).")
    lines.append("3. Prioritized next actions (contain, remediate, hunt further, or document).")
    if has_assets:
        lines.append("4. Completed or draft artifacts from `assets/` templates when applicable.")
    lines.append("")

    lines.append("## High-level procedure")
    lines.append("")
    for i, step in enumerate(procedure, 1):
        # clean step text
        step = strip_obsidian_noise(step)
        step = re.sub(r"\s+", " ", step).strip()
        lines.append(f"{i}. {step}")
    lines.append("")

    if concepts:
        lines.append("## Key concepts")
        lines.append("")
        for c in concepts[:8]:
            c = strip_obsidian_noise(c)
            lines.append(f"- {c}")
        lines.append("")

    # Only show tools section if we have real tool names
    real_tools = [t for t in tools if not NOISE_HEADING.match(t) and len(t.split()) <= 5]
    if real_tools:
        lines.append("## Tools & resources")
        lines.append("")
        for t in real_tools[:8]:
            lines.append(f"- {t}")
        lines.append("")
    tools = real_tools  # keep primary tools line consistent

    # How the agent should work
    lines.append("## How the agent should work")
    lines.append("")
    lines.append("1. **Orient** — Restate the user's goal, scope, and constraints in one short paragraph.")
    lines.append("2. **Load depth as needed** — Do **not** dump raw API tables into the chat. Read only the reference sections required for the current step.")
    if has_refs:
        lines.append("   - Workflows and playbooks: `references/workflows.md` (if present)")
        lines.append("   - Standards, data models, event IDs: `references/standards.md` (if present)")
        lines.append("   - CLI/API flags and query snippets: `references/api-reference.md`")
    if has_scripts:
        lines.append("3. **Prefer automation** — Use `scripts/agent.py` (and `scripts/process.py` if present) for repeatable collection/analysis when the environment allows.")
    else:
        lines.append("3. **Execute carefully** — Run only commands appropriate to the environment; explain destructive or privileged steps before running them.")
    lines.append("4. **Explain at the right altitude** — Lead with decisions and findings; put flags, full queries, and hex dumps in collapsible detail or appendices.")
    lines.append("5. **Close the loop** — Summarize confidence, residual risk, and concrete next steps.")
    lines.append("")

    # Package layout
    lines.append("## Package layout")
    lines.append("")
    lines.append("| Path | Purpose |")
    lines.append("|------|---------|")
    lines.append("| `SKILL.md` | This high-level playbook (start here) |")
    if has_refs:
        lines.append("| `references/` | Deep procedure, standards, and CLI/API detail |")
    if has_scripts:
        lines.append("| `scripts/` | Automation helpers for collection/analysis |")
    if has_assets:
        lines.append("| `assets/` | Templates, checklists, and report scaffolds |")
    lines.append("")

    # Function map if useful
    if agent["functions"]:
        useful = [
            f for f in agent["functions"]
            if f["name"] not in SKIP_FUNCS and not f["name"].startswith("_")
        ][:10]
        if useful:
            lines.append("## Automation entry points")
            lines.append("")
            for f in useful:
                if f["doc"]:
                    lines.append(f"- `{f['name']}` — {f['doc']}")
                else:
                    lines.append(f"- `{f['name']}`")
            lines.append("")

    lines.append("## Quality bar")
    lines.append("")
    lines.append("- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).")
    lines.append("- Separate **fact**, **inference**, and **recommendation**.")
    lines.append("- Call out false-positive pitfalls for this technique.")
    lines.append("- When unsure, say so and propose the cheapest validation step.")
    lines.append("")

    lines.append("---")
    lines.append("")
    lines.append(
        f"*High-level skill guide for `{slug}`. Low-level flags and schemas live under `references/` — "
        "load them on demand rather than treating them as the skill definition.*"
    )
    lines.append("")

    return "\n".join(lines)


def main() -> int:
    force = "--force" in sys.argv
    dry = "--dry-run" in sys.argv
    limit = None
    for a in sys.argv:
        if a.startswith("--limit="):
            limit = int(a.split("=", 1)[1])

    dirs = sorted(
        [p for p in BASE.iterdir() if p.is_dir() and not p.name.startswith(".")],
        key=lambda p: p.name.lower(),
    )

    written = 0
    skipped = 0
    errors = 0
    samples: list[str] = []

    for skill_dir in dirs:
        if limit is not None and written >= limit:
            break
        try:
            if skill_dir.name in SKIP_DIRS:
                skipped += 1
                continue
            content = build_skill_md(skill_dir)
            if content is None:
                # If force and has SKILL + references/scripts cyber pattern, still try
                if force and (skill_dir / "SKILL.md").exists():
                    # temporarily treat as stub by patching check - skip for safety
                    skipped += 1
                    continue
                skipped += 1
                continue
            out = skill_dir / "SKILL.md"
            if dry:
                print(f"[dry] would write {out} ({len(content)} chars)")
            else:
                out.write_text(content, encoding="utf-8")
            written += 1
            if written <= 5 or written % 100 == 0:
                samples.append(skill_dir.name)
                print(f"[{written}] {skill_dir.name} ({len(content)} bytes)")
        except Exception as e:
            errors += 1
            print(f"[error] {skill_dir.name}: {e}", file=sys.stderr)

    print(f"\nDone. written={written} skipped={skipped} errors={errors}")
    return 0 if errors == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
