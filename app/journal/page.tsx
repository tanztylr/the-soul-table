'use client';

import { useState } from 'react';
import Link from 'next/link';

interface JournalEntry {
  id: string;
  category: 'Recipe' | 'Purveyor' | 'Field Note';
  readTime: string;
  title: string;
  subtitle: string;
  excerpt: string;
  ingredients?: string[];
  notes: string;
}

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'sorghum-butter',
    category: 'Recipe',
    readTime: '4 min read',
    title: 'The Table Butter: Whipped Cane Sorghum & Flaky Sea Salt',
    subtitle: 'The introductory bite served with Course 01 skillet cornbread.',
    excerpt:
      'In modern Southern cooking, butter is never an afterthought. Sorghum molasses carries a deeper, mineral-rich earthiness compared to maple or refined honey—balancing fat with deep Southern cane harvest tradition.',
    ingredients: [
      '2 sticks cultured unsalted European-style butter (softened at room temp)',
      '3 tbsp pure dark amber Georgia cane sorghum',
      '1 tsp raw clover honey',
      '1 tsp Maldon flaky sea salt (plus extra for finishing)',
      '1 pinch freshly grated nutmeg',
    ],
    notes:
      'Whip with an electric mixer for 5 full minutes until the fat incorporates the sorghum into a pale, silk-like emulsion. Spoon onto warm skillet bread immediately.',
  },
  {
    id: 'charred-greens',
    category: 'Field Note',
    readTime: '6 min read',
    title: 'Blistering the Leaf: Collards Without the 4-Hour Pot',
    subtitle: 'A technique exploration for Course 02.',
    excerpt:
      'Tradition often demands braising collard greens low and slow until the potlikker turns emerald black. For The Soul Table, we treat early-season brassicas over intense hickory embers—preserving cellular snap, bright acid, and coastal benne seed texture.',
    notes:
      'The leaf is washed, stripped from woody center ribs, tossed in smoked peach oil, and kissed by a 500-degree cast iron surface for no more than 40 seconds per batch.',
  },
  {
    id: 'heirloom-grits',
    category: 'Purveyor',
    readTime: '5 min read',
    title: 'Stone-Ground White Dent Corn & The Preservation of Grain',
    subtitle: 'Spotlighting our partnership with regional Georgia millers.',
    excerpt:
      'Industrial cornmeal strips away the germ and the soul of the grain for shelf stability. The grits anchored under our braised short rib come from non-GMO heritage dent varieties milled on natural granite stones in small batches.',
    notes:
      'Cooked gently over low flame with equal parts whole milk, filtered spring water, and cultured butter, finished with freshly cracked white peppercorn.',
  },
];

export default function JournalPage() {
  const [filter, setFilter] = useState<string>('All');

  const filteredEntries =
    filter === 'All'
      ? JOURNAL_ENTRIES
      : JOURNAL_ENTRIES.filter((e) => e.category === filter);

  return (
    <main className="min-h-screen px-6 py-12 lg:px-16 max-w-5xl mx-auto flex flex-col gap-12">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-8">
        <div>
          <Link href="/" className="text-xs uppercase tracking-widest text-candle hover:underline">
            ← Back to Table Map
          </Link>
          <span className="block text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold mt-2">
            Recipes, Field Notes & Origins
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-stone-100 mt-1">
            The Soul Table Journal
          </h1>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {['All', 'Recipe', 'Field Note', 'Purveyor'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer border ${
                filter === cat
                  ? 'border-candle bg-candle/20 text-candle font-semibold'
                  : 'border-stone-800 bg-surface-subtle text-stone-400 hover:border-stone-700 hover:text-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Journal Articles List */}
      <section className="flex flex-col gap-8">
        {filteredEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-3xl border border-stone-800/80 bg-surface/50 p-8 sm:p-10 shadow-xl flex flex-col gap-6 hover:border-candle/40 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/60 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-candle font-semibold">
                  {entry.category}
                </span>
                <span className="text-stone-600 text-xs">·</span>
                <span className="text-stone-400 text-xs font-mono">{entry.readTime}</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-stone-500 font-serif">
                The Soul Table Kitchen
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl font-serif text-stone-100 leading-tight">
                {entry.title}
              </h2>
              <p className="text-sm text-stone-400 font-serif italic">
                {entry.subtitle}
              </p>
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              {entry.excerpt}
            </p>

            {/* Ingredients block if present */}
            {entry.ingredients && (
              <div className="rounded-2xl border border-stone-800 bg-surface-subtle p-5 flex flex-col gap-3">
                <span className="text-xs uppercase tracking-widest text-candle font-semibold">
                  Kitchen Provisions
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-stone-300 font-sans">
                  {entry.ingredients.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-candle mt-0.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-xl border-l-2 border-brass bg-surface-elevated/40 p-4 text-xs text-stone-300 italic">
              <strong>Technique Note:</strong> {entry.notes}
            </div>
          </article>
        ))}
      </section>

      {/* Bottom Tray */}
      <div className="rounded-2xl border border-stone-800 bg-surface-subtle p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg text-stone-100">Gather at the Table</h3>
          <p className="text-xs text-stone-400 mt-1">
            Recipes taste best when shared across a candlelit room.
          </p>
        </div>
        <Link
          href="/calendar"
          className="rounded-xl bg-brass px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-stone-950 hover:bg-brass-hover transition-colors shadow-md shadow-brass/20 shrink-0"
        >
          View Calendar & Seats →
        </Link>
      </div>

    </main>
  );
}
