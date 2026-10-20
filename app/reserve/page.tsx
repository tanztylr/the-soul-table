'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReservePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dietary: [] as string[],
    customDietary: '',
    conversationPrompt: '',
    seatNumber: 'Host’s Choice',
  });
  const [confirmed, setConfirmed] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);

  const DIETARY_OPTIONS = [
    'No Restrictions',
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Shellfish Allergy',
    'Nut Allergy',
  ];

  const PROMPT_OPTIONS = [
    'A Southern food memory or family tradition that shaped you',
    'A personal or creative milestone you are celebrating right now',
    'An unexpected passion project currently consuming your mind',
  ];

  const handleDietaryToggle = (item: string) => {
    if (item === 'No Restrictions') {
      setFormData({ ...formData, dietary: ['No Restrictions'] });
      return;
    }
    const filtered = formData.dietary.filter((d) => d !== 'No Restrictions');
    if (filtered.includes(item)) {
      setFormData({ ...formData, dietary: filtered.filter((d) => d !== item) });
    } else {
      setFormData({ ...formData, dietary: [...filtered, item] });
    }
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  // Google Calendar URL Generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent('The Soul Table: Inaugural Dining Gathering');
    const details = encodeURIComponent(
      `Communal 4-Course Modern Southern Dinner.\nGuest: ${formData.fullName}\nPrompt: "${formData.conversationPrompt || 'A Southern food memory that shaped you'}"`
    );
    const location = encodeURIComponent('West End, Atlanta, GA');
    // 2026-11-14 19:00 EST to 22:00 EST (UTC: 20261115T000000Z to 20261115T030000Z)
    const dates = '20261115T000000Z/20261115T030000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Apple / Outlook .ics File Generator
  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Soul Table//Dining Reservation//EN',
      'BEGIN:VEVENT',
      'UID:soul-table-' + Date.now() + '@thesoultable.com',
      'DTSTAMP:20261020T120000Z',
      'DTSTART:20261115T000000Z',
      'DTEND:20261115T030000Z',
      'SUMMARY:The Soul Table: Inaugural Dining Gathering',
      `DESCRIPTION:Communal 4-Course Modern Southern Dinner. Guest: ${formData.fullName}`,
      'LOCATION:West End\\, Atlanta\\, GA',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'soul-table-reservation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen px-6 py-12 lg:px-16 max-w-4xl mx-auto flex flex-col gap-10">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-6">
        <div>
          <Link href="/" className="text-xs uppercase tracking-widest text-candle hover:underline">
            ← Back to Table Map
          </Link>
          <h1 className="text-3xl font-serif text-stone-100 mt-2">
            {confirmed ? 'Reservation Confirmed' : 'Guest Dossier & Intake'}
          </h1>
        </div>
        <div className="text-right">
          <span className="text-xs uppercase tracking-widest text-stone-500">Event</span>
          <p className="font-serif text-lg text-brass font-medium">Inaugural Dinner</p>
        </div>
      </div>

      {!confirmed ? (
        <form onSubmit={handleComplete} className="flex flex-col gap-8 rounded-3xl border border-stone-800/80 bg-surface/50 p-8 sm:p-12 shadow-2xl">
          
          {/* Step 1: Core Contact */}
          <div className="flex flex-col gap-4 border-b border-stone-800/80 pb-8">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-candle-glow border border-candle/30 text-xs font-mono text-candle">
                01
              </span>
              <h2 className="text-xl font-serif text-stone-100">Contact Information</h2>
            </div>
            <p className="text-xs text-stone-400">Your confirmation and day-of arrival logistics will be delivered here.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-stone-300 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Lee"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="rounded-xl border border-stone-700/80 bg-surface-elevated px-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:border-candle focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-stone-300 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="jordan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border border-stone-700/80 bg-surface-elevated px-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:border-candle focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Dietary Safeguards */}
          <div className="flex flex-col gap-4 border-b border-stone-800/80 pb-8">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-candle-glow border border-candle/30 text-xs font-mono text-candle">
                02
              </span>
              <h2 className="text-xl font-serif text-stone-100">Hospitality & Dietary Safeguards</h2>
            </div>
            <p className="text-xs text-stone-400">Every dish is prepared to welcome every guest safely.</p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {DIETARY_OPTIONS.map((item) => {
                const isSelected = formData.dietary.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleDietaryToggle(item)}
                    className={`rounded-xl px-4 py-2 text-xs font-medium transition-all cursor-pointer border ${
                      isSelected
                        ? 'border-candle bg-candle/20 text-candle font-semibold'
                        : 'border-stone-700/80 bg-surface-elevated text-stone-400 hover:border-stone-500 hover:text-stone-200'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <input
              type="text"
              placeholder="Additional kitchen notes or severe sensitivities..."
              value={formData.customDietary}
              onChange={(e) => setFormData({ ...formData, customDietary: e.target.value })}
              className="mt-2 rounded-xl border border-stone-700/80 bg-surface-elevated px-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 focus:border-candle focus:outline-none"
            />
          </div>

          {/* Step 3: Communal Connection Prompt */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-candle-glow border border-candle/30 text-xs font-mono text-candle">
                03
              </span>
              <h2 className="text-xl font-serif text-stone-100">Your Table Card Prompt</h2>
            </div>
            <p className="text-xs text-stone-400">Select the question printed on your place setting to anchor your dinner conversation.</p>

            <div className="flex flex-col gap-3 pt-2">
              {PROMPT_OPTIONS.map((prompt) => {
                const isSelected = formData.conversationPrompt === prompt;
                return (
                  <label
                    key={prompt}
                    onClick={() => setFormData({ ...formData, conversationPrompt: prompt })}
                    className={`flex items-center gap-3.5 rounded-xl border p-4 text-xs cursor-pointer transition-all ${
                      isSelected
                        ? 'border-candle bg-candle-glow text-stone-100 font-medium'
                        : 'border-stone-800 bg-surface-subtle text-stone-400 hover:border-stone-700 hover:text-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="prompt"
                      checked={isSelected}
                      onChange={() => {}}
                      className="accent-amber-500"
                    />
                    <span>{prompt}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="mt-4 rounded-xl bg-brass py-4 text-xs font-semibold uppercase tracking-widest text-stone-950 hover:bg-brass-hover transition-colors shadow-lg shadow-brass/20 cursor-pointer"
          >
            Confirm Reservation & Lock Chair
          </button>
        </form>
      ) : (
        /* Real Restaurant Confirmation Screen */
        <div className="flex flex-col gap-8 rounded-3xl border border-stone-800/80 bg-surface/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-stone-800 pb-8">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Chair Locked & Confirmed
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-stone-100">
                We're holding your seat, {formData.fullName}.
              </h2>
              <p className="text-stone-400 text-sm mt-1">
                A confirmation email with venue arrival details and your prep notes has been sent to{' '}
                <strong className="text-stone-200 font-mono">{formData.email}</strong>.
              </p>
            </div>

            <div className="h-16 w-16 rounded-2xl border border-candle/30 bg-candle-glow flex items-center justify-center text-3xl shrink-0">
              🕯️
            </div>
          </div>

          {/* Reservation Summary Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2 border-b border-stone-800 pb-8">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Date</span>
              <p className="text-stone-200 font-medium text-sm mt-1">Saturday, Nov 14</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Service Time</span>
              <p className="text-stone-200 font-medium text-sm mt-1">7:00 PM EST</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Location</span>
              <p className="text-stone-200 font-medium text-sm mt-1">West End, Atlanta, GA</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500">Communal Format</span>
              <p className="text-stone-200 font-medium text-sm mt-1">4 Courses · 24 Guests</p>
            </div>
          </div>

          {/* Place Card & Dietary Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-800/80 bg-surface-subtle p-5 flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-widest text-candle font-medium">Your Place Card Question</span>
              <p className="font-serif text-stone-200 italic text-sm">
                "{formData.conversationPrompt || 'A Southern food memory or family tradition that shaped you'}"
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800/80 bg-surface-subtle p-5 flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-widest text-stone-400 font-medium">Dietary Safeguards Noted</span>
              <p className="text-stone-200 text-sm">
                {formData.dietary.length > 0 ? formData.dietary.join(', ') : 'None requested'}
                {formData.customDietary && ` (${formData.customDietary})`}
              </p>
            </div>
          </div>

          {/* Hospitality Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800">
            <Link
              href="/"
              className="text-xs uppercase tracking-wider text-stone-400 hover:text-stone-200 transition-colors"
            >
              ← Return to Table Overview
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              {/* Google Calendar Link */}
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-stone-700 px-4 py-2.5 text-xs font-medium text-stone-300 hover:border-candle hover:text-candle transition-colors"
              >
                + Google Calendar
              </a>

              {/* Apple / Outlook .ics Download */}
              <button
                type="button"
                onClick={downloadIcsFile}
                className="rounded-xl border border-stone-700 px-4 py-2.5 text-xs font-medium text-stone-300 hover:border-candle hover:text-candle transition-colors cursor-pointer"
              >
                + Apple / Outlook (.ics)
              </button>

              {/* View Pass In-App Modal (No print prompt) */}
              <button
                type="button"
                onClick={() => setShowPassModal(true)}
                className="rounded-xl border border-stone-800 bg-surface-subtle px-4 py-2.5 text-xs font-medium text-stone-400 hover:border-stone-700 hover:text-stone-200 transition-colors cursor-pointer"
              >
                View Digital Pass
              </button>
            </div>
          </div>

        </div>
      )}

      {/* In-App Pass Modal (Replaces Browser Print Dialog) */}
      {showPassModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-3xl border border-stone-700/80 bg-surface p-8 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-candle font-semibold">Communal Pass</span>
                <h3 className="font-serif text-2xl text-stone-100 mt-1">The Soul Table</h3>
              </div>
              <button
                onClick={() => setShowPassModal(false)}
                className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-800 hover:text-stone-100 text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3 text-xs">
              <div className="flex justify-between border-b border-stone-800/60 pb-2">
                <span className="text-stone-500">Guest</span>
                <span className="text-stone-200 font-medium">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/60 pb-2">
                <span className="text-stone-500">Date</span>
                <span className="text-stone-200 font-medium">Saturday, Nov 14, 2026</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/60 pb-2">
                <span className="text-stone-500">Time</span>
                <span className="text-stone-200 font-medium">7:00 PM EST</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/60 pb-2">
                <span className="text-stone-500">Location</span>
                <span className="text-stone-200 font-medium">West End, Atlanta, GA</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-stone-500">Seating</span>
                <span className="text-candle font-mono font-medium">{formData.seatNumber}</span>
              </div>
            </div>

            <div className="rounded-xl border border-stone-800 bg-surface-subtle p-3 text-[11px] text-stone-400 italic text-center">
              "An intentional table where culture, hospitality, and storytelling meet."
            </div>

            <button
              onClick={() => setShowPassModal(false)}
              className="w-full rounded-xl bg-surface-elevated border border-stone-700 py-3 text-xs uppercase tracking-wider text-stone-200 hover:border-stone-500 transition-colors cursor-pointer"
            >
              Close Pass
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
