import os
import re
from collections import Counter
import json
import time

vault_dir = r'C:\Users\Admin\OBSIDIAN\wiki'
ignore_dirs = {'.git', '.obsidian', '.smart-env', '.trash', 'node_modules', '.gemini'}

STOP_WORDS = {
    'about', 'above', 'after', 'again', 'against', 'all', 'also', 'am', 'an', 'and', 'any', 'are', 'aren', 'as', 'at', 
    'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'can', 'cannot', 'could', 
    'couldn', 'did', 'didn', 'do', 'does', 'doesn', 'doing', 'don', 'down', 'during', 'each', 'few', 'for', 'from', 
    'further', 'had', 'hadn', 'has', 'hasn', 'have', 'haven', 'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 
    'himself', 'his', 'how', 'if', 'in', 'into', 'is', 'isn', 'it', 'its', 'itself', 'let', 'me', 'more', 'most', 
    'mustn', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 
    'ours', 'ourselves', 'out', 'over', 'own', 'same', 'shan', 'she', 'should', 'shouldn', 'so', 'some', 'such', 
    'than', 'that', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this', 'those', 
    'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasn', 'we', 'were', 'weren', 'what', 'when', 
    'where', 'which', 'while', 'who', 'whom', 'why', 'with', 'would', 'wouldn', 'you', 'your', 'yours', 'yourself', 
    'yourselves', 'will', 'just', 'like', 'then', 'now', 'make', 'use', 'using', 'used', 'from', 'when', 'what', 'know',
    'think', 'see', 'time', 'good', 'well', 'want', 'way', 'look', 'even', 'new', 'work', 'first', 'get', 'give', 'need',
    'much', 'many', 'really', 'take', 'come', 'could', 'would', 'should', 'might', 'must', 'may', 'can', 'will', 'shall'
}

def extract_keywords(text, num_keywords=3):
    text_clean = re.sub(r'```.*?```', '', text, flags=re.DOTALL)
    words = re.findall(r'\b[a-zA-Z]{5,}\b', text_clean.lower())
    valid_words = [w for w in words if w not in STOP_WORDS]
    if not valid_words:
        return []
    counts = Counter(valid_words)
    return [word for word, count in counts.most_common(num_keywords)]

def remove_digital_slop(text):
    # Remove emojis and pictographs
    text = re.sub(r'[\U0001f600-\U0001f64f]', '', text)
    text = re.sub(r'[\U0001f300-\U0001f5ff]', '', text)
    text = re.sub(r'[\U0001f680-\U0001f6ff]', '', text)
    text = re.sub(r'[\U0001f700-\U0001f77f]', '', text)
    text = re.sub(r'[\U0001f780-\U0001f7ff]', '', text)
    text = re.sub(r'[\U0001f800-\U0001f8ff]', '', text)
    text = re.sub(r'[\U0001f900-\U0001f9ff]', '', text)
    text = re.sub(r'[\U0001fa00-\U0001faff]', '', text)
    text = re.sub(r'[\u2600-\u26ff]', '', text)
    text = re.sub(r'[\u2700-\u27bf]', '', text)
    # Remove inline SVG blocks
    text = re.sub(r'<svg.*?>.*?</svg>', '', text, flags=re.DOTALL | re.IGNORECASE)
    # Remove icon tags
    text = re.sub(r'<i class="[^"]*?(?:fa|icon)[^"]*?">.*?</i>', '', text, flags=re.IGNORECASE)
    return text

def write_log(status, processed, total, message):
    log_file = os.path.join(vault_dir, '10.02 TOOLS', 'automator-log.json')
    data = {
        "status": status,
        "processed": processed,
        "total": total,
        "message": message,
        "timestamp": time.time()
    }
    with open(log_file, 'w', encoding='utf-8') as f:
        json.dump(data, f)

# Step 1: Collect all note titles for auto-linking
all_files = []
note_titles = []

for root, dirs, files in os.walk(vault_dir):
    dirs[:] = [d for d in dirs if d not in ignore_dirs and not d.startswith('.')]
    for file in files:
        if file.endswith('.md'):
            all_files.append(os.path.join(root, file))
            # Exclude dashboard/logs from linking targets
            if file not in ['Vault Maintenance Dashboard.md']:
                title = file[:-3]
                if len(title) > 3: # Only auto-link words longer than 3 chars
                    note_titles.append(title)

# Sort titles by length descending so we match longest phrases first
note_titles.sort(key=len, reverse=True)

total_files = len(all_files)
write_log("Running", 0, total_files, "Starting vault analysis...")

updated_count = 0

for idx, file_path in enumerate(all_files):
    if idx % 50 == 0:
        write_log("Running", idx, total_files, f"Processing {os.path.basename(file_path)}")
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Enforce YAML
        yaml_template = "---\naliases: []\ntags: []\n---\n"
        if not content.startswith('---'):
            content = yaml_template + "\n" + content
            
        # Extract blocks to process
        match = re.match(r'^(---.*?---)\n(.*)', content, re.DOTALL)
        if not match:
            continue
            
        yaml_block = match.group(1)
        body = match.group(2)
        
        # 2. Extract and inject keywords
        keywords = extract_keywords(body)
        if keywords:
            tags_line = "tags:\n" + "\n".join([f"  - {kw}" for kw in keywords])
            if "tags: []" in yaml_block:
                yaml_block = yaml_block.replace("tags: []", tags_line)
            elif "tags:" not in yaml_block:
                yaml_block = yaml_block[:-3] + tags_line + "\n---"
                
        # 3. Auto-link unlinked mentions (skip code blocks and existing links)
        # To do this safely, we split by code blocks and existing links, and only replace in normal text
        segments = re.split(r'(```.*?```|\[\[.*?\]\]|\[.*?\]\(.*?\))', body, flags=re.DOTALL)
        
        for i in range(0, len(segments), 2): # Even indices are normal text
            text_seg = segments[i]
            for title in note_titles:
                if title == os.path.basename(file_path)[:-3]:
                    continue # don't self-link
                
                # regex to match whole word case-insensitive, not already in brackets
                escaped_title = re.escape(title)
                pattern = re.compile(r'\b(' + escaped_title + r')\b', re.IGNORECASE)
                text_seg = pattern.sub(r'[[\1]]', text_seg)
            segments[i] = text_seg
            
        new_body = "".join(segments)
        
        # 4. Remove digital slop (emojis, SVGs, icons)
        new_body = remove_digital_slop(new_body)
        yaml_block = remove_digital_slop(yaml_block)
        
        new_content = yaml_block + "\n" + new_body
        
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_count += 1
            
    except Exception as e:
        pass

write_log("Complete", total_files, total_files, f"Finished! Updated {updated_count} files.")
