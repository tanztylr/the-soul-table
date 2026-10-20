'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CourseItem {
  number: string;
  time: string;
  name: string;
  dish: string;
  pairing: string;
  notes: string;
}

const COURSES: CourseItem[] = [
  {
    number: '01',
    time: '7:15 PM',
    name: 'Arrival & Gathering',
    dish: 'Skillet Sweet Potato Cornbread with Whipped Sorghum Butter & Flaky Sea Salt',
    pairing: 'House-Steeped Hibiscus Ginger Shrub',
    notes: 'Breaking warm bread together by hand as an intentional communal icebreaker.',
  },
  {
    number: '02',
    time: '7:45 PM',
    name: 'Earth & Harvest',
    dish: 'Charred Georgia Collard Greens Salad with Pickled Red Onions, Crispy Benne Seeds & Smoked Peach Vinaigrette',
    pairing: 'Chilled Muscadine & Meyer Lemon Spritz',
    notes: 'Blistered over high cast-iron heat to preserve snap, texture, and coastal lineage grains.',
  },
  {
    number: '03',
    time: '8:20 PM',
    name: 'Centerpiece & Hearth',
    dish: 'Slow-Braised Short Rib over Stone-Ground Heirloom Grits with Potlikker Reduction',
    pairing: 'Smoked King Oyster Mushroom & Charred Grit Bowl (Plant-Forward Alternative)',
    notes: 'Six-hour gentle braise paired with granite-milled Georgia white dent corn.',
  },
  {
    number: '04',
    time: '9:05 PM',
    name: 'Sweet Hearth & Reflection',
    dish: 'Spiced Sweet Potato Tart with Vanilla Bean Chantilly Cream & Candied Georgia Pecans',
    pairing: 'Roasted Chicory Coffee Pour-Over',
    notes: 'An unhurried closing course designed for lingering conversation before departure.',
  },
];

export default function HomePage() {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  const bookedSeats = [2, 4, 5, 9, 14, 16, 21, 22];

  return (
    <main className="min-h-screen px-6 py-12 lg:px-16 max-w-7xl mx-auto flex flex-col gap-20">
      
      {/* Top Brand Bar */}
      <header className="flex items-center justify-between border-b border-stone-800/80 pb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-candle font-semibold">Inaugural Gathering</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-stone-100 tracking-tight mt-1">The Soul Table</h1>
        </div>
        <div className="flex items-center gap-4 text-xs tracking-wider uppercase text-stone-400">
          <span>Atlanta, GA</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-candle"></span>
          <span>24 Seats Only</span>
        </div>
      </header>

      {/* Hero Atmosphere Section */}
      <section className="relative overflow-hidden rounded-3xl border border-stone-800/80 p-8 sm:p-16 lg:p-20 shadow-2xl min-h-[560px] flex flex-col justify-end">
        {/* Background Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/soul-table-home-page-rendition.png')" }}
        />

        {/* Dark Vignette Overlays for Crisp Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/60" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-candle/30 bg-stone-950/80 px-3.5 py-1 text-xs font-medium text-candle w-fit backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-candle animate-pulse" />
            Reservation Window Open
          </span>

          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl font-serif text-stone-100 leading-[1.1] tracking-tight">
              Your Seat is Waiting.
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-stone-300 italic">
              Gather around something meaningful.
            </p>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light max-w-lg">
            Chef-led gatherings inspired by culture, conversation, and community. We gather 24 people around a single candlelit table for a 4-course modern Southern culinary narrative.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#seating"
              className="rounded-xl bg-brass px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-stone-950 hover:bg-brass-hover transition-colors shadow-lg shadow-brass/20 cursor-pointer"
            >
              Choose Your Seat
            </a>
            <Link
              href="/story"
              className="rounded-xl border border-stone-600/80 bg-stone-950/60 backdrop-blur-md px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-stone-200 hover:border-candle hover:text-candle transition-colors"
            >
              Read Why We Gather →
            </Link>
          </div>
        </div>

        {/* Soft Ambient Candlelight Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-candle/15 blur-3xl" />
      </section>

      {/* Section: The 4-Course Narrative Culinary Sequence */}
      <section className="flex flex-col gap-8 rounded-3xl border border-stone-800/80 bg-surface/40 p-8 sm:p-12 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-candle font-medium">Seasonal Run-of-Show</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-100 mt-1">The 4-Course Narrative Menu</h3>
          </div>
          <span className="text-xs font-mono text-stone-400">
            Served Family-Style · Paced for Conversation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.number}
              className="rounded-2xl border border-stone-800/80 bg-surface/60 p-6 flex flex-col gap-3 shadow-lg"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-candle font-bold uppercase tracking-wider">Course {course.number}</span>
                <span className="text-stone-500">{course.time}</span>
              </div>
              <h4 className="text-xs uppercase tracking-widest text-stone-400 font-serif">{course.name}</h4>
              <p className="font-serif text-lg text-stone-100 leading-snug">{course.dish}</p>
              <p className="text-xs font-mono text-brass">Accompaniment: {course.pairing}</p>
              <p className="text-xs text-stone-400 leading-relaxed font-sans pt-1 border-t border-stone-800/60 mt-1">
                {course.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Interactive 24-Seat Long Table Map */}
      <section id="seating" className="rounded-3xl border border-stone-800/80 bg-surface/40 p-8 sm:p-12 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-candle font-medium">Communal Seating Flow</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-100 mt-1">The 24-Seat Long Table</h3>
            <p className="text-stone-400 text-sm mt-1">
              Select your specific chair along the table, or let the host assign your placement.
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-stone-400">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-md border border-stone-600 bg-surface-elevated"></span> Available
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-md bg-candle"></span> Selected
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-md bg-stone-800 opacity-50"></span> Claimed
            </span>
          </div>
        </div>

        {/* Table Map */}
        <div className="relative flex flex-col items-center gap-6 py-6 overflow-x-auto">
          {/* North Side */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((seat) => {
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeat === seat;
              return (
                <button
                  key={seat}
                  disabled={isBooked}
                  onClick={() => setSelectedSeat(seat)}
                  className={`flex h-11 w-11 sm:h-13 sm:w-13 flex-col items-center justify-center rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isBooked
                      ? 'border-stone-800/50 bg-stone-900/40 text-stone-600 cursor-not-allowed'
                      : isSelected
                      ? 'border-candle bg-candle text-stone-950 font-bold shadow-lg shadow-candle/25 scale-105'
                      : 'border-stone-700/80 bg-surface-elevated text-stone-300 hover:border-candle/70 hover:text-candle'
                  }`}
                >
                  <span>{seat}</span>
                  {isBooked && <span className="text-[9px] opacity-60">●</span>}
                </button>
              );
            })}
          </div>

          {/* Table Center */}
          <div className="relative h-20 sm:h-24 w-full min-w-[700px] max-w-4xl rounded-2xl border border-stone-800/80 bg-gradient-to-r from-stone-900 via-stone-800/70 to-stone-900 flex items-center justify-between px-8 shadow-inner">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-serif">Table Head — North</span>
            <div className="flex items-center gap-6 text-stone-400 text-xs">
              <span className="inline-flex items-center gap-1.5 text-candle">
                <span>🕯️</span> Ambient Candlelight Runner
              </span>
              <span>·</span>
              <span>Family-Style Service Line</span>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-serif">Table Foot — South</span>
          </div>

          {/* South Side */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {Array.from({ length: 12 }, (_, i) => i + 13).map((seat) => {
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeat === seat;
              return (
                <button
                  key={seat}
                  disabled={isBooked}
                  onClick={() => setSelectedSeat(seat)}
                  className={`flex h-11 w-11 sm:h-13 sm:w-13 flex-col items-center justify-center rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isBooked
                      ? 'border-stone-800/50 bg-stone-900/40 text-stone-600 cursor-not-allowed'
                      : isSelected
                      ? 'border-candle bg-candle text-stone-950 font-bold shadow-lg shadow-candle/25 scale-105'
                      : 'border-stone-700/80 bg-surface-elevated text-stone-300 hover:border-candle/70 hover:text-candle'
                  }`}
                >
                  <span>{seat}</span>
                  {isBooked && <span className="text-[9px] opacity-60">●</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Tray */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-stone-800 bg-surface-subtle p-5">
          <div className="text-sm">
            {selectedSeat ? (
              <span className="text-stone-200">
                You have selected <strong className="text-candle font-serif text-lg">Seat #{selectedSeat}</strong> along the communal table.
              </span>
            ) : (
              <span className="text-stone-400">
                Click any open number along the table above, or choose fast-track host placement below.
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const available = Array.from({ length: 24 }, (_, i) => i + 1).filter(
                  (s) => !bookedSeats.includes(s)
                );
                setSelectedSeat(available[0] || null);
              }}
              className="rounded-xl border border-stone-700 px-4 py-2.5 text-xs font-medium text-stone-300 hover:border-stone-500 hover:text-white transition-colors cursor-pointer"
            >
              Host’s Choice (Place Me Anywhere)
            </button>

            <Link
              href="/reserve"
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSeat
                  ? 'bg-brass text-stone-950 hover:bg-brass-hover shadow-md shadow-brass/20'
                  : 'bg-stone-800 text-stone-500 pointer-events-none'
              }`}
            >
              Continue to Intake →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
