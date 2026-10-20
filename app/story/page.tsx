import Link from 'next/link';

export default function StoryPage() {
  return (
    <main className="min-h-screen px-6 py-12 lg:px-16 max-w-4xl mx-auto flex flex-col gap-14">
      
      {/* Top Breadcrumb & Title */}
      <div className="flex flex-col gap-2 border-b border-stone-800 pb-8">
        <Link href="/" className="text-xs uppercase tracking-widest text-candle hover:underline">
          ← Back to Table Map
        </Link>
        <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-semibold mt-2">
          Origins & Philosophy
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-stone-100 mt-1 leading-tight">
          Why We Gather
        </h1>
      </div>

      {/* Hero Quote Card */}
      <div className="rounded-3xl border border-stone-800/80 bg-surface/50 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-candle/10 blur-3xl"></div>
        <p className="font-serif text-2xl sm:text-3xl text-champagne leading-relaxed italic">
          "The Soul Table envisions a dining experience where every guest leaves feeling whole."
        </p>
        <div className="flex items-center gap-3 mt-6 text-xs uppercase tracking-widest text-stone-400">
          <span className="h-1.5 w-1.5 rounded-full bg-candle"></span>
          <span>The Soul Table Founding Charter · Atlanta, GA</span>
        </div>
      </div>

      {/* Core Narrative / The Problem & Opportunity */}
      <article className="flex flex-col gap-8 text-stone-300 leading-relaxed font-sans font-light text-base sm:text-lg">
        
        <p>
          Atlanta is widely recognized for its vibrant and diverse culinary scene. However, many dining experiences have become increasingly similar, making it difficult for guests to discover restaurants that feel both distinctive and memorable.
        </p>

        <p>
          While some establishments successfully create unique concepts, they are often accompanied by high prices, limited reservation availability, or popularity that shifts the focus from hospitality to hype.
        </p>

        {/* Callout Highlight Block */}
        <blockquote className="rounded-2xl border-l-2 border-brass bg-surface-subtle p-6 sm:p-8 font-serif text-xl sm:text-2xl text-stone-100 italic my-2">
          "Branding frequently promises an experience that the menu, atmosphere, service, and overall hospitality do not fully deliver."
        </blockquote>

        <p>
          Additionally, many restaurants position themselves around ideas such as Southern hospitality, soul, authenticity, and community, yet the guest experience does not always reflect those values. Branding frequently promises an authenticity that the overall dining room does not sustain.
        </p>

        <p>
          These observations revealed an opportunity to create a dining concept where every aspect of the guest experience intentionally supports the same promise. Rather than operating as a high-turnover restaurant, The Soul Table focuses on limited-capacity gatherings where the food, environment, service, and storytelling work in harmony.
        </p>

        <p className="text-stone-100 font-medium">
          By emphasizing quality over scale, we seek to demonstrate an alternative approach to hospitality—one that values meaningful connection as much as exceptional food.
        </p>

      </article>

      {/* 3 Core Tenets */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-800">
        
        <div className="rounded-2xl border border-stone-800/80 bg-surface/40 p-6 flex flex-col gap-2">
          <span className="text-candle font-serif text-xl">01. Intentionality</span>
          <h2 className="text-sm uppercase tracking-wider text-stone-200 font-semibold">Hospitality Over Hype</h2>
          <p className="text-xs text-stone-400 leading-normal">
            Removing the transactional rush to prioritize presence, eye contact, and unhurried care.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-800/80 bg-surface/40 p-6 flex flex-col gap-2">
          <span className="text-candle font-serif text-xl">02. Modern Heritage</span>
          <h2 className="text-sm uppercase tracking-wider text-stone-200 font-semibold">Culture & Soil</h2>
          <p className="text-xs text-stone-400 leading-normal">
            Rooted in Georgia small-farm crops, coastal rice cultures, and generational Southern culinary craft.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-800/80 bg-surface/40 p-6 flex flex-col gap-2">
          <span className="text-candle font-serif text-xl">03. The Table</span>
          <h2 className="text-sm uppercase tracking-wider text-stone-200 font-semibold">Communal Belonging</h2>
          <p className="text-xs text-stone-400 leading-normal">
            24 seats along a single shared table where strangers share bread and leave feeling whole.
          </p>
        </div>

      </section>

      {/* Footer Call to Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-stone-800 bg-surface-subtle p-6 mt-4">
        <div>
          <h3 className="font-serif text-xl text-stone-100">Experience the table.</h3>
          <p className="text-xs text-stone-400 mt-1">Limited to 24 seats for our inaugural gathering.</p>
        </div>
        <Link
          href="/reserve"
          className="rounded-xl bg-brass px-6 py-3 text-xs font-semibold uppercase tracking-widest text-stone-950 hover:bg-brass-hover transition-colors shadow-md shadow-brass/20"
        >
          Reserve Your Chair →
        </Link>
      </div>

    </main>
  );
}