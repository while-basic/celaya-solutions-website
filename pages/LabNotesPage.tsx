//----------------------------------------------------------------------------
// File:       LabNotesPage.tsx
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Complete lab notes listing page with all documentation
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React, { useState } from 'react';
import { ArrowLeft, Clock, Filter, Search } from 'lucide-react';
import { allDocumentation, DocItem } from '../utils/documentationParser';

interface LabNotesPageProps {
  onBack: () => void;
  onSelectItem: (id: string) => void;
}

const LabNotesPage: React.FC<LabNotesPageProps> = ({ onBack, onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Notes' },
    { id: 'research', label: 'Research' },
    { id: 'development', label: 'Development' },
    { id: 'planning', label: 'Planning' },
    { id: 'lab-notes', label: 'Lab Notes' },
  ];

  const filteredItems = allDocumentation.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors mb-8"
            data-test="back-button"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono uppercase">Back to Home</span>
          </button>

          <div className="mb-8">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">
              Lab Notes & Research
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Everything we're learning. <br />
              <span className="text-zinc-600">Documented in real-time.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              {filteredItems.length} articles covering research, development, planning, and
              insights from the lab. All documentation from the CLOS project.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-white/10 text-sm focus:outline-none focus:border-white/30 transition-colors"
                data-test="search-input"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-mono uppercase whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-zinc-500 hover:text-white'
                  }`}
                  data-test={`filter-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => onSelectItem(item.id)}
                className="group glass-card p-6 rounded-sm border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                data-test={`article-${item.id}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    {item.category}
                  </span>
                  {item.status && (
                    <span
                      className={`text-[10px] font-mono px-2 py-1 rounded uppercase ${
                        item.status === 'active'
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : item.status === 'beta'
                          ? 'bg-blue-500/10 text-blue-500'
                          : item.status === 'new'
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : 'bg-zinc-800 text-zinc-500'
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-500 mb-4 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-1 bg-zinc-900 text-zinc-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-[10px] font-mono text-zinc-700 pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Built with footer */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-zinc-600">
            Built with 🤍 by{' '}
            <a
              href="https://celayasolutions.com"
              className="hover:text-white transition-colors"
            >
              Celaya Solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabNotesPage;

