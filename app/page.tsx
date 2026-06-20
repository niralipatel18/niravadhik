import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Hero";
import { SectionHead, PieceCard } from "./components/Cards";
import { SahityaArt, CinemaArt, SangeetArt } from "./components/Art";
import { strands, initiatives, magazine, magazineIssues } from "./data/content";

const ART = { sahitya: SahityaArt, cinema: CinemaArt, sangeet: SangeetArt };

const ACCENT_HEX: Record<string, string> = {
  poppy:   "#e8462b",
  indigo:  "#3a4ea8",
  teal:    "#128a7d",
  saffron: "#f6a01a",
  magenta: "#c2317f",
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Strand hero cards ── */}
      <section className="mx-auto mt-6 max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {strands.filter((s) => s.key !== "sangeet").map((s) => {
            const Art = ART[s.key as keyof typeof ART];
            const hex = ACCENT_HEX[s.accent] ?? "#e8462b";
            return (
              <Link
                key={s.key}
                href={s.href}
                data-accent={s.accent}
                className="strand-card group relative overflow-hidden rounded-2xl"
                style={{ minHeight: 320 }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={(s as { cover?: string }).cover ?? ""}
                    alt={s.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover img-zoom"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${hex}cc 0%, rgba(26,20,16,0.78) 100%)` }} />
                </div>
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-55" style={{ background: hex }} />
                <div className="relative flex h-full flex-col p-7" style={{ minHeight: 320 }}>
                  <Art className="w-16 sm:w-20" />
                  <div className="mt-auto pt-10">
                    <h3 className="mt-1 font-guj text-4xl font-700 text-white drop-shadow">{s.label}</h3>
                    <p className="mt-2 font-guj text-sm leading-relaxed text-white/80">{s.blurb}</p>
                    <span className="mt-5 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-guj text-xs font-600 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
                      જુઓ →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Initiatives ── */}
      <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <div className="mb-9">
          <h2 className="font-guj text-3xl font-700 text-ink sm:text-4xl">આયોજન</h2>
          <p className="mt-2 font-guj text-ink-soft">
            ગાંધીનગરમાં નિરવધિક દ્વારા આયોજિત ફિલ્મ-સ્ક્રીનિંગ, સ્વર-સ&#x200D;ંધ્યા અને સામ&#x200D;યિ&#x200D;ક.
          </p>
          <div className="rule mt-5" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((ev) => {
            const hex = ACCENT_HEX[ev.accent] ?? "#e8462b";
            return (
              <div key={ev.slug} data-accent={ev.accent} className="card group relative overflow-hidden rounded-2xl border border-line bg-paper">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={ev.image} alt={ev.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover img-zoom" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${hex}dd 0%, transparent 55%)` }} />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="chip" style={{ background: hex }}>{ev.kindLabel}</span>
                    <p className="mt-1.5 font-guj text-lg font-700 leading-tight text-white drop-shadow">{ev.title}</p>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-0.5 font-mono text-[0.58rem] text-white/80 backdrop-blur-sm">{ev.year}</div>
                </div>
                <div className="p-4">
                  <p className="font-guj text-sm leading-relaxed text-ink-soft">{ev.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Magazine banner ── */}
      <section className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <div
          className="animated-gradient relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl px-8 py-12 text-center sm:flex-row sm:text-left"
          style={{ background: "linear-gradient(135deg, #1a1410 0%, #2a1f1a 40%, #1a1410 100%)" }}
        >
          <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-3xl" style={{ background: "linear-gradient(to bottom, #e8462b, #f6a01a, #c2317f, #128a7d)" }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-64 opacity-10" style={{ background: "radial-gradient(circle at right, #f6a01a, transparent 70%)" }} />

          <div className="flex-1 pl-4">
            <p className="eyebrow text-saffron">નિરવધિક સામયિક</p>
            <h3 className="mt-2 font-guj text-3xl font-800 text-white sm:text-4xl">{magazine.name}</h3>
            <p className="mt-1 font-mono text-xs font-600 uppercase tracking-[0.2em] text-saffron/80">{magazine.frequency}</p>
            <p className="mt-3 max-w-lg font-guj text-base leading-relaxed text-white/70">{magazine.tagline}</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <div className="text-center sm:text-right">
              <div className="font-guj text-5xl font-800 text-saffron">{magazineIssues.length}</div>
              <div className="font-guj text-sm text-white/60">અંક પ્રકાશિત</div>
            </div>
            <Link href="/magazine" className="inline-block rounded-full bg-saffron px-6 py-2.5 font-guj text-xs font-700 text-ink transition-all hover:bg-white">
              બધા અંક →
            </Link>
            <a href="https://instagram.com/nirvadhik" target="_blank" rel="noopener noreferrer" className="font-guj text-xs text-saffron/70 hover:text-saffron transition-colors">
              @nirvadhik →
            </a>
          </div>
        </div>
      </section>

      {/* ── Pull-quote banner ── */}
      <section className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <div
          className="animated-gradient relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16"
          style={{ background: "linear-gradient(135deg, #e8462b, #f6a01a, #c2317f, #3a4ea8, #128a7d)", backgroundSize: "300% 300%" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <p className="eyebrow relative text-white/70">નિરવધિક</p>
          <blockquote className="relative mx-auto mt-4 max-w-2xl font-guj text-2xl font-700 leading-relaxed text-white drop-shadow-lg sm:text-3xl">
            'કોઈ કલા સ્વરૂપે જગતથી જુદા બનો'
          </blockquote>
          <div className="relative mt-6 flex justify-center gap-3">
            <span className="h-2 w-10 rounded-full bg-white/50" />
            <span className="h-2 w-10 rounded-full bg-white/30" />
            <span className="h-2 w-10 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* ── Latest from each strand ── */}
      {strands.map((s) => (
        <section key={s.key} className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
          <SectionHead guj={s.label} blurb={s.blurb} accent={s.accent} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.slice(0, 3).map((p) => (
              <PieceCard key={p.slug} piece={p} base={s.href} accent={s.accent} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={s.href}
              data-accent={s.accent}
              className="inline-block rounded-full border-2 px-6 py-2.5 font-guj text-xs font-600 transition-all duration-300 hover:text-white"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              બધું જુઓ →
            </Link>
          </div>
        </section>
      ))}

      {/* ── Bottom CTA ── */}
      <section className="mx-auto mt-24 max-w-2xl px-5 pb-4 text-center sm:px-8">
        <div className="ornament mb-8 mx-auto max-w-[14rem]">
          <span className="font-guj text-saffron text-lg">✦</span>
        </div>
        <p className="font-guj text-2xl font-700 text-ink">ગાંધીનગરથી — કળાની ભૂમિ</p>
        <Link href="/about" className="mt-6 inline-block rounded-full bg-poppy px-8 py-3 font-guj text-xs font-600 text-white shadow-lg transition-all duration-300 hover:bg-poppy-deep hover:shadow-xl">
          નિરવધિક વિશે →
        </Link>
      </section>
    </>
  );
}
