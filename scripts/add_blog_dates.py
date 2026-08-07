#!/usr/bin/env python3
import os
import re

blog_dates = {
    'chatGpt.md': '2023-12-02',
    'microService.md': '2023-12-02',
    'mutationobserver.md': '2023-12-02',
    'shadowsocks.md': '2024-01-05',
    'ssr.mdx': '2024-03-07',
    'type.md': '2025-09-12',
    'v2ray.md': '2024-01-05',
    'wechatLogin.mdx': '2025-07-25',
}

for filename, date in blog_dates.items():
    filepath = os.path.join('docs/blog', filename)
    if not os.path.exists(filepath):
        print(f'Skip {filename} (not found)')
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already has date
    if re.search(r'^date:\s*\d{4}-\d{2}-\d{2}\s*$', content, re.MULTILINE):
        print(f'Skip {filename} (already has date)')
        continue

    # Replace frontmatter: add date after sidebar line
    new_content = re.sub(
        r'^(---\s*\nsidebar:\s*false\s*\n)',
        r'\1date: ' + date + r'\n',
        content,
        count=1
    )

    if new_content == content:
        print(f'Warning: {filename} frontmatter not matched')
        continue

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'Updated {filename} with date {date}')
