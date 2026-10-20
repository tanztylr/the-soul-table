'use client';

import Link from 'next/link';

interface Gathering {
  id: string;
  date: string;
  dayOfWeek: string;
  time: string;
  neighborhood: string;
  venueTheme: string;
  menuFocus: string;
  seatsTotal: number;
  seatsBooked: number;
  status: 'Open' | 'Filling Fast' | 'Waitlist';
}

const UPCOMING_GATHERINGS: Gathering[] = [
  {
    id: 'gathering-nov-14',
    date: 'November 14, 2026',
    dayOfWeek: 'Saturday',
    time: '7:00 PM – 10:00 PM EST',
    neighborhood: 'West End · Atlanta',
    venueTheme: 'Exposed Brick Warehouse & Candlelight',
    menuFocus: 'The Inaugural Table: Modern Southern Heritage & Sorghum Harvest',
    seatsTotal: 24,
    seatsBooked: 18,
    status: 'Filling Fast',
  },
  {
    id: 'gathering-dec-05',
    date: 'December 5, 2026',
    dayOfWeek: 'Saturday',
    time: '7:00 PM – 10:00 PM EST',
    neighborhood: 'Old Fourth Ward · Atlanta',
    venueTheme: 'Historic Industrial Loft & Hearth',
    menuFocus: 'Winter Hearth: Slow-Braised Heritage Cuts, Root Crops & Smoked Citrus',
    seatsTotal: 24,
    seatsBooked: 8,
    status: 'Open',
  },
  {
    id: 'gathering-jan-16',
    date: 'January 16, 2027',
    dayOfWeek: 'Saturday',
    time: '7:00 PM – 10:00 PM EST',
    neighborhood: 'Summerhill · Atlanta',
    venueTheme: 'Intimate Greenhouse & Ambient Lanterns',
    menuFocus: 'The Georgia Soil: Coastal Field Peas, Sea Island Greens & Preserved Stone Fruit',
    seatsTotal: 24,
    seatsBooked: 24,
    status: 'Waitlist',
  },
];

export default function CalendarPage() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-16 max-w-5xl mx-auto flex flex-col gap-12">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-8">
        <div>
          <Link href="/" className="text-xs uppercase tracking-widest text-candle hover:underline">
            ← Back to Table Map
          </Link>
          <span className="block text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold mt-2">
            Reservations & Schedule
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif text-stone-100 mt-1">
            Gathering Calendar
          </h1>
        </div>
        <p className="text-xs text-stone-400 font-mono sm:text-right max-w-xs">
          Each gathering is limited to a single 24-seat table to preserve intentional conversation.
        </p>
      </div>

      {/* Gatherings List */}
      <section className="flex flex-col gap-6">
        {UPCOMING_GATHERINGS.map((gathering) => {
          const seatsRemaining = gathering.seatsTotal - gathering.seatsBooked;
          const isSoldOut = gathering.status === 'Waitlist';

          return (
            <article
              key={gathering.id}
              className={`group relative rounded-3xl border p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-200 shadow-xl ${
                isSoldOut
                  ? 'border-stone-800/60 bg-surface/30 opacity-75'
                  : 'border-stone-800/90 bg-surface/60 hover:border-candle/50'
              }`}
            >
              {/* Event Information */}
              <div className="flex flex-col gap-3 max-w-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-candle font-semibold">
                    {gathering.dayOfWeek} · {gathering.date}
                  </span>
                  <span className="text-stone-600 text-xs">·</span>
                  <span className="text-stone-400 text-xs font-mono">{gathering.time}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold border ${
                      isSoldOut
                        ? 'border-stone-700 bg-stone-800/80 text-stone-400'
                        : gathering.status === 'Filling Fast'
                        ? 'border-candle/40 bg-candle-glow text-candle'
                        : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    }`}
                  >
                    {gathering.status}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif text-stone-100 group-hover:text-champagne transition-colors">
                  {gathering.menuFocus}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 font-sans">
                  <span className="flex items-center gap-1.5">
                    <span className="text-candle">📍</span> {gathering.neighborhood}
                  </span>
                  <span>·</span>
                  <span>{gathering.venueTheme}</span>
                </div>
              </div>

              {/* Seating Availability & Booking Action */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-stone-800">
                <div className="flex flex-col lg:items-end">
                  <span className="text-xs uppercase tracking-widest text-stone-500 font-mono">Capacity</span>
                  <p className="text-sm text-stone-200 font-mono mt-0.5">
                    {isSoldOut ? (
                      <span className="text-stone-500">24 / 24 Seats Filled</span>
                    ) : (
                      <>
                        <strong className="text-candle font-bold">{seatsRemaining}</strong> of {gathering.seatsTotal} seats open
                      </>
                    )}
                  </p>
                </div>

                {isSoldOut ? (
                  <button
                    disabled
                    className="rounded-xl border border-stone-800 bg-surface-subtle px-6 py-3 text-xs font-semibold uppercase tracking-widest text-stone-600 cursor-not-allowed"
                  >
                    Waitlist Full
                  </button>
                ) : (
                  <Link
                    href={`/reserve?event=${gathering.id}`}
                    className="rounded-xl bg-brass px-6 py-3 text-xs font-semibold uppercase tracking-widest text-stone-950 hover:bg-brass-hover transition-colors shadow-md shadow-brass/20 cursor-pointer"
                  >
                    Reserve Place →
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </section>

      {/* Narrative Footer Note */}
      <div className="rounded-2xl border border-stone-800 bg-surface-subtle p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg text-stone-100">Hosting a Private Gathering?</h3>
          <p className="text-xs text-stone-400 mt-1">
            We partner with local creatives, community groups, and founders for dedicated 24-seat dinners.
          </p>
        </div>
        <Link
          href="/story"
          className="text-xs uppercase tracking-wider text-candle hover:underline font-medium shrink-0"
        >
          Read Our Model →
        </Link>
      </div>

    </main>
  );
}
