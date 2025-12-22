# Content Sync Guide

## Overview

Lab notes are now loaded from markdown files in the `content/lab-notes/` folder and displayed using `react-markdown`.

## File Structure

```
content/
└── lab-notes/
    ├── 01-local-first-ai.md    # Markdown file with frontmatter
    └── README.md                # Documentation

public/
└── content/
    └── lab-notes/
        ├── 01-local-first-ai.md    # Copied for serving
        └── README.md
```

## How It Works

1. **Markdown Files**: Create `.md` files in `content/lab-notes/` with frontmatter:
   ```markdown
   ---
   title: "Article Title"
   date: "Month Day, Year"
   author: "Chris Celaya"
   tags: ["Tag1", "Tag2"]
   status: "published"
   readTime: "X min"
   ---
   
   # Article Content
   ```

2. **Documentation Parser**: Add entry to `utils/documentationParser.ts`:
   ```typescript
   {
     id: 'article-id',
     title: 'Article Title',
     category: 'lab-notes',
     date: 'Month Day, Year',
     readTime: 'X min',
     excerpt: 'Article excerpt...',
     tags: ['Tag1', 'Tag2'],
     status: 'new' | null,
   }
   ```

3. **Markdown Loader**: Add mapping in `utils/markdownLoader.ts`:
   ```typescript
   export const labNoteFiles: Record<string, string> = {
     'article-id': 'XX-article-filename.md',
   };
   ```

4. **Copy to Public**: Copy markdown files to `public/content/lab-notes/`:
   ```bash
   cp content/lab-notes/*.md public/content/lab-notes/
   ```

## Adding New Lab Notes

1. Create markdown file: `content/lab-notes/XX-title.md`
2. Add frontmatter with metadata
3. Write article content in markdown
4. Add entry to `documentationParser.ts`
5. Add mapping to `markdownLoader.ts`
6. Copy to public folder: `cp content/lab-notes/XX-title.md public/content/lab-notes/`

## Development Workflow

### Option 1: Manual Copy (Current)
```bash
# After creating/updating markdown files
cp content/lab-notes/*.md public/content/lab-notes/
```

### Option 2: Watch Script (Future)
Create a watch script to auto-copy on changes:
```bash
# Install chokidar-cli
npm install --save-dev chokidar-cli

# Add to package.json scripts:
"watch:content": "chokidar 'content/**/*.md' -c 'cp content/lab-notes/*.md public/content/lab-notes/'"
```

## Current Lab Notes

1. **local-first-ai** → `01-local-first-ai.md` ✅
2. **week-1-findings** → `02-clos-week-1.md` (needs markdown file)
3. **mcp-server** → `03-mcp-music-server.md` (needs markdown file)
4. **systems-thinking** → `04-systems-thinking.md` (needs markdown file)
5. **cognitive-drift** → `05-cognitive-drift.md` (needs markdown file)

## Rendering

The `ResearchDetail` component:
- Loads markdown for lab notes automatically
- Renders using `react-markdown` with GitHub Flavored Markdown
- Falls back to placeholder content if markdown not found
- Shows loading state while fetching

## Styling

Markdown is styled using custom component overrides in `ResearchDetail.tsx`:
- Headings: White, bold, with spacing
- Paragraphs: Zinc-300, relaxed leading
- Code: Zinc-900 background, monospace
- Blockquotes: Left border, italic
- Links: Blue-400, underlined

---

Built with 🤍 by [Celaya Solutions](https://celayasolutions.com)

