#!/usr/bin/env python3
import os
import glob

path = r"c:\Users\Emmanuel\Desktop\His-Grace-Foundation-Site\His-Grace-Foundation-Site\src\components"

for file_path in glob.glob(os.path.join(path, "*.vue")):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace all smart quotes with regular quotes
    replacements = {
        '\u201C': '"',  # "
        '\u201D': '"',  # "
        '\u2018': "'",  # '
        '\u2019': "'",  # '
        '\u2013': '-',  # en-dash
        '\u2014': '--', # em-dash
    }
    
    for smart, regular in replacements.items():
        content = content.replace(smart, regular)
    
    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Fixed: {os.path.basename(file_path)}")
    else:
        print(f"  {os.path.basename(file_path)} - no changes")

print("\nDone!")
