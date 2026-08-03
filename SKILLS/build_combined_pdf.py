import os
import re
import html
import subprocess
import sys
import markdown

ROOT_DIR = r"C:\Users\Admin\Desktop\Music\LOOP\SKILLS"
OUTPUT_HTML = os.path.join(ROOT_DIR, "combined_skills.html")
OUTPUT_PDF = os.path.join(ROOT_DIR, "Skills_Collection.pdf")
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

def parse_frontmatter(text):
    """Separates YAML frontmatter from markdown body."""
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            fm_raw = parts[1].strip()
            body = parts[2].strip()
            fm_data = {}
            for line in fm_raw.splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    fm_data[k.strip()] = v.strip().strip('"').strip("'")
            return fm_data, body
    return {}, text

def main():
    print("Collecting files...")
    
    # 1. Top-level .md files
    top_files = []
    for f in sorted(os.listdir(ROOT_DIR)):
        full = os.path.join(ROOT_DIR, f)
        if f.endswith('.md') and os.path.isfile(full):
            top_files.append((f, full))
            
    # 2. Subdirectory SKILL.md files
    sub_files = []
    for root, dirs, files in os.walk(ROOT_DIR):
        if root == ROOT_DIR:
            continue
        if "SKILL.md" in files:
            rel_folder = os.path.basename(root)
            full = os.path.join(root, "SKILL.md")
            sub_files.append((rel_folder, full))
            
    sub_files.sort(key=lambda x: x[0].lower())
    
    print(f"Found {len(top_files)} top-level markdown files.")
    print(f"Found {len(sub_files)} subdirectory SKILL.md files.")
    print(f"Total documents: {len(top_files) + len(sub_files)}")
    
    # Setup Markdown parser extensions
    md_parser = markdown.Markdown(extensions=['fenced_code', 'tables', 'nl2br', 'sane_lists'])
    
    html_parts = []
    
    # Document Header & CSS
    html_parts.append("""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Skills & Documentation Collection</title>
<style>
@page {
    size: letter;
    margin: 18mm 15mm 18mm 15mm;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.5;
    color: #1f2937;
    background: #ffffff;
    margin: 0;
    padding: 0;
}

/* Cover Page */
.cover-page {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    page-break-after: always;
    padding: 40px;
}

.cover-title {
    font-size: 32pt;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 15px;
    line-height: 1.2;
}

.cover-subtitle {
    font-size: 16pt;
    color: #4b5563;
    margin-bottom: 40px;
}

.cover-meta {
    font-size: 11pt;
    color: #6b7280;
    border-top: 2px solid #e5e7eb;
    padding-top: 20px;
    width: 60%;
    margin: 0 auto;
}

.cover-badge {
    display: inline-block;
    background: #dbeafe;
    color: #1e40af;
    padding: 6px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 12pt;
    margin-bottom: 25px;
}

/* Table of Contents */
.toc-section {
    page-break-after: always;
    padding: 20px 0;
}

.toc-title {
    font-size: 20pt;
    font-weight: 700;
    color: #1e3a8a;
    border-bottom: 2px solid #3b82f6;
    padding-bottom: 8px;
    margin-bottom: 20px;
}

.toc-category {
    font-size: 14pt;
    font-weight: 700;
    color: #1f2937;
    margin-top: 25px;
    margin-bottom: 12px;
}

.toc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 20px;
}

.toc-item {
    font-size: 9.5pt;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.toc-item a {
    color: #2563eb;
    text-decoration: none;
}

.toc-item a:hover {
    text-decoration: underline;
}

/* Document Entry */
.doc-entry {
    page-break-before: always;
    margin-top: 10px;
}

.doc-header {
    background: #f8fafc;
    border-left: 4px solid #2563eb;
    padding: 12px 16px;
    margin-bottom: 20px;
    border-radius: 0 6px 6px 0;
}

.doc-title {
    font-size: 18pt;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 6px 0;
    word-break: break-word;
}

.doc-path {
    font-family: "Consolas", "Monaco", monospace;
    font-size: 8.5pt;
    color: #64748b;
    margin: 0;
}

.frontmatter-box {
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 6px;
    padding: 10px 14px;
    margin-bottom: 20px;
    font-size: 9.5pt;
}

.frontmatter-row {
    margin-bottom: 4px;
}

.frontmatter-row:last-child {
    margin-bottom: 0;
}

.fm-key {
    font-weight: 600;
    color: #1e40af;
}

/* Content Formatting */
h1, h2, h3, h4, h5, h6 {
    color: #0f172a;
    font-weight: 700;
    page-break-after: avoid;
    margin-top: 1.2em;
    margin-bottom: 0.5em;
}

h1 { font-size: 15pt; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
h2 { font-size: 13pt; }
h3 { font-size: 11pt; }
h4 { font-size: 10pt; }

p {
    margin-top: 0;
    margin-bottom: 0.8em;
    text-align: justify;
}

code {
    font-family: "Consolas", "Monaco", "Courier New", monospace;
    font-size: 9pt;
    background-color: #f1f5f9;
    color: #0f172a;
    padding: 2px 5px;
    border-radius: 3px;
}

pre {
    background-color: #0f172a;
    color: #f8fafc;
    padding: 12px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 8.5pt;
    line-height: 1.45;
    page-break-inside: avoid;
    white-space: pre-wrap;
    word-wrap: break-word;
}

pre code {
    background-color: transparent;
    color: inherit;
    padding: 0;
    border-radius: 0;
}

blockquote {
    border-left: 3px solid #cbd5e1;
    margin: 1em 0;
    padding-left: 12px;
    color: #475569;
    font-style: italic;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
    font-size: 9pt;
    page-break-inside: avoid;
}

th, td {
    border: 1px solid #cbd5e1;
    padding: 6px 10px;
    text-align: left;
}

th {
    background-color: #f1f5f9;
    font-weight: 600;
}

tr:nth-child(even) {
    background-color: #f8fafc;
}

ul, ol {
    margin-top: 0;
    margin-bottom: 0.8em;
    padding-left: 20px;
}

li {
    margin-bottom: 3px;
}

hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 1.5em 0;
}

</style>
</head>
<body>
""")
    
    # Cover Page
    html_parts.append(f"""
<div class="cover-page">
    <div class="cover-badge">Skills & Documentation Vault</div>
    <div class="cover-title">Complete Skills Reference</div>
    <div class="cover-subtitle">Aggregated Documentation & Instruction Set</div>
    <div class="cover-meta">
        <p><strong>Total Documents Included:</strong> {len(top_files) + len(sub_files)}</p>
        <p><strong>Top-Level Docs:</strong> {len(top_files)} files | <strong>Subdirectory Skills:</strong> {len(sub_files)} modules</p>
        <p><strong>Generated On:</strong> 2026-08-03</p>
    </div>
</div>
""")
    
    # Table of Contents
    html_parts.append("""
<div class="toc-section">
    <div class="toc-title">Table of Contents</div>
    
    <div class="toc-category">Part 1: Workspace Documentation</div>
    <div class="toc-grid">
""")
    for idx, (fname, fpath) in enumerate(top_files, 1):
        doc_id = f"top_doc_{idx}"
        safe_name = html.escape(fname)
        html_parts.append(f'<div class="toc-item"><a href="#{doc_id}">{idx}. {safe_name}</a></div>')
        
    html_parts.append("""
    </div>
    
    <div class="toc-category">Part 2: Subdirectory Skill Modules</div>
    <div class="toc-grid">
""")
    for idx, (sname, spath) in enumerate(sub_files, 1):
        doc_id = f"sub_doc_{idx}"
        safe_name = html.escape(sname)
        html_parts.append(f'<div class="toc-item"><a href="#{doc_id}">{idx}. {safe_name}</a></div>')
        
    html_parts.append("""
    </div>
</div>
""")
    
    # Render Part 1: Top-Level Files
    print("Processing Top-Level Files...")
    for idx, (fname, fpath) in enumerate(top_files, 1):
        doc_id = f"top_doc_{idx}"
        try:
            with open(fpath, "r", encoding="utf-8", errors="replace") as f:
                content = f.read()
        except Exception as e:
            content = f"Error reading file: {e}"
            
        fm, body = parse_frontmatter(content)
        md_parser.reset()
        rendered_md = md_parser.convert(body)
        
        html_parts.append(f"""
<div class="doc-entry" id="{doc_id}">
    <div class="doc-header">
        <div class="doc-title">{html.escape(fname)}</div>
        <div class="doc-path">{html.escape(fpath)}</div>
    </div>
""")
        if fm:
            html_parts.append('<div class="frontmatter-box">')
            for k, v in fm.items():
                html_parts.append(f'<div class="frontmatter-row"><span class="fm-key">{html.escape(k)}:</span> {html.escape(v)}</div>')
            html_parts.append('</div>')
            
        html_parts.append(rendered_md)
        html_parts.append("</div>")

    # Render Part 2: Subdirectory SKILL.md Files
    print("Processing Subdirectory Skill Files...")
    for idx, (sname, spath) in enumerate(sub_files, 1):
        doc_id = f"sub_doc_{idx}"
        try:
            with open(spath, "r", encoding="utf-8", errors="replace") as f:
                content = f.read()
        except Exception as e:
            content = f"Error reading file: {e}"
            
        fm, body = parse_frontmatter(content)
        md_parser.reset()
        rendered_md = md_parser.convert(body)
        
        rel_path = os.path.relpath(spath, ROOT_DIR)
        
        html_parts.append(f"""
<div class="doc-entry" id="{doc_id}">
    <div class="doc-header">
        <div class="doc-title">{html.escape(sname)} (Skill Module)</div>
        <div class="doc-path">{html.escape(rel_path)}</div>
    </div>
""")
        if fm:
            html_parts.append('<div class="frontmatter-box">')
            for k, v in fm.items():
                html_parts.append(f'<div class="frontmatter-row"><span class="fm-key">{html.escape(k)}:</span> {html.escape(v)}</div>')
            html_parts.append('</div>')
            
        html_parts.append(rendered_md)
        html_parts.append("</div>")

    html_parts.append("</body>\n</html>")
    
    full_html = "".join(html_parts)
    print(f"Writing combined HTML ({len(full_html)} chars) to {OUTPUT_HTML}...")
    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(full_html)
        
    print("Converting HTML to PDF via Edge Headless...")
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        f"--print-to-pdf={OUTPUT_PDF}",
        "--no-pdf-header-footer",
        OUTPUT_HTML
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0 and os.path.exists(OUTPUT_PDF):
        size_mb = os.path.getsize(OUTPUT_PDF) / (1024 * 1024)
        print(f"SUCCESS! PDF created at: {OUTPUT_PDF} (Size: {size_mb:.2f} MB)")
    else:
        print(f"PDF compilation failed. Returncode: {result.returncode}")
        print(f"Stderr: {result.stderr}")

if __name__ == "__main__":
    main()
