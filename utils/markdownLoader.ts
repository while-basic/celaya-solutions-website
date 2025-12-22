//----------------------------------------------------------------------------
// File:       markdownLoader.ts
// Project:    Celaya Solutions Website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Utility to load and parse markdown files from content folder
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

export interface MarkdownFrontmatter {
  title: string;
  date: string;
  author: string;
  tags: string[];
  status?: string;
  readTime: string;
}

export interface ParsedMarkdown {
  frontmatter: MarkdownFrontmatter;
  content: string;
}

/**
 * Parse frontmatter and content from markdown string
 */
export function parseMarkdown(markdown: string): ParsedMarkdown {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid markdown format: missing frontmatter');
  }

  const frontmatterText = match[1];
  const content = match[2].trim();

  // Parse frontmatter
  const frontmatter: any = {};
  const lines = frontmatterText.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1)
        .split(',')
        .map(item => item.trim().replace(/^["']|["']$/g, ''));
    }

    frontmatter[key] = value;
  }

  return {
    frontmatter: frontmatter as MarkdownFrontmatter,
    content,
  };
}

/**
 * Load markdown file dynamically
 */
export async function loadMarkdownFile(filename: string): Promise<ParsedMarkdown> {
  try {
    // Try public folder first (for production builds)
    let response = await fetch(`/content/lab-notes/${filename}`);
    
    // If not found, try direct path (for development)
    if (!response.ok) {
      response = await fetch(`/content/lab-notes/${filename}`);
    }
    
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}: ${response.statusText}`);
    }
    
    const markdown = await response.text();
    return parseMarkdown(markdown);
  } catch (error) {
    console.error(`Error loading markdown file ${filename}:`, error);
    throw error;
  }
}

/**
 * Get all available lab note filenames
 * Maps documentation parser IDs to markdown filenames
 */
export const labNoteFiles: Record<string, string> = {
  'local-first-ai': '01-local-first-ai.md',
  'week-1-findings': '02-clos-week-1.md',
  'mcp-server': '03-mcp-music-server.md',
  'systems-thinking': '04-systems-thinking.md',
  'cognitive-drift': '05-cognitive-drift.md',
};

/**
 * Load lab note by ID
 */
export async function loadLabNoteById(id: string): Promise<ParsedMarkdown | null> {
  const filename = labNoteFiles[id];
  if (!filename) {
    return null;
  }

  try {
    return await loadMarkdownFile(filename);
  } catch (error) {
    console.error(`Error loading lab note ${id}:`, error);
    return null;
  }
}

