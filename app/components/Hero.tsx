"use client";

import Image from "next/image";
import { quotes, tagline, taglineEn, place, placeEn } from "../data/content";
import { SahityaArt, CinemaArt, SangeetArt } from "./Art";

const STRIP_IMAGES = [
  { src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=420&h=260&q=70", alt: "Manuscript" },
  { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=420&h=260&q=70", alt: "Concert" },
  { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=420&h=260&q=70", alt: "Cinema" },
  { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=420&h=260&q=70", alt: "Books" },
  { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=420&h=260&q=70", alt: "Film projector" },
  { src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=420&h=260&q=70", alt: "Writing" },
  { src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=420&h=260&q=70", alt: "Music" },
  { src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=420&h=260&q=70", alt: "Stage" },
];

export default function Hero() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now.getTime() - start.getTime()) / 86400000);
  const q = quotes[day % quotes.length];

  return (
    <section className="relative overflow-hidden">
      {/* Multi-layer gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background: [
            "radial-gradient(130% 90% at 50% -10%, rgba(246,160,26,0.28), transparent 55%)",
            "radial-gradient(90% 70% at 5% 20%, rgba(232,70,43,0.22), transparent 48%)",
            "radial-gradient(90% 70% at 95% 15%, rgba(58,78,168,0.18), transparent 48%)",
            "radial-gradient(60% 60% at 80% 60%, rgba(194,49,127,0.12), transparent 50%)",
          ].join(", "),
        }}
      />

      {/* Floating decorative circles */}
      <div className="pointer-events-none absolute left-[8%] top-[12%] h-36 w-36 rounded-full opacity-10 blur-3xl float" style={{ background: "var(--poppy)", animationDelay: "0s" }} />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-28 w-28 rounded-full opacity-10 blur-3xl float" style={{ background: "var(--indigo)", animationDelay: "1.5s" }} />
      <div className="pointer-events-none absolute left-[45%] top-[30%] h-20 w-20 rounded-full opacity-8 blur-2xl float" style={{ background: "var(--teal)", animationDelay: "3s" }} />

      {/* Main hero text block */}
      <div className="relative mx-auto max-w-4xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
        <div className="mb-10 flex items-end justify-center gap-4 sm:gap-8">
          <SahityaArt className="w-16 rise sm:w-24" />
          <CinemaArt  className="w-20 rise sm:w-32" />
          <SangeetArt className="w-16 rise sm:w-24" />
        </div>

        <p className="rise text-poppy text-md " style={{ animationDelay: "60ms" }}>
          આજનો શેર
        </p>

        <blockquote
          className="rise mx-auto mt-6 max-w-3xl font-guj text-3xl font-600 leading-[1.5] text-ink sm:text-[2.75rem] sm:leading-[1.4]"
          style={{ animationDelay: "140ms", whiteSpace: "pre-line" }}
        >
          {q.text}
        </blockquote>

        <p
          className="rise mt-5 font-mono text-s font-600 uppercase tracking-[0.22em] text-poppy-deep"
          style={{ animationDelay: "240ms" }}
        >
          — {q.author}{q.source ? ` · ${q.source}` : ""}
        </p>

        <div className="ornament mx-auto mt-8 max-w-md rise" style={{ animationDelay: "320ms" }}>
          <span className="font-guj text-lg text-saffron">✦</span>
        </div>

        <p className="rise mx-auto mt-6 max-w-xl font-guj text-lg leading-relaxed text-ink-soft" style={{ animationDelay: "380ms" }}>
          {tagline}
        </p>
        <p className="rise mx-auto mt-1.5 max-w-xl text-sm italic text-ink-soft/75" style={{ animationDelay: "430ms" }}>
          {taglineEn} — {place} / {placeEn}
        </p>

        {/* Real stats */}
        <div className="rise mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10" style={{ animationDelay: "500ms" }}>
          {[
            { n: "૩", label: "ફિલ્મ સ્ક્રીનિંગ", en: "Film Screenings" },
            { n: "૧",  label: "સૂફી સ્વર-સ&#x200D;ંધ્યા", en: "Sufi Music Event" },
            { n: "૨×", label: "માસિક સામયિક", en: "Monthly Magazine" },
          ].map(({ n, label, en }) => (
            <div key={en} className="text-center">
              <div className="shimmer-text font-guj text-4xl font-800 sm:text-5xl">{n}</div>
              <div className="mt-0.5 font-guj text-xs text-ink-soft">{label}</div>
              <div className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink-soft/60">{en}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling photo strip */}
      <div className="relative mt-8 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <div className="strip-track flex gap-3 w-max">
          {[...STRIP_IMAGES, ...STRIP_IMAGES].map((img, i) => (
            <div
              key={i}
              className="relative h-44 w-72 flex-none overflow-hidden rounded-xl sm:h-52 sm:w-80"
              style={{ boxShadow: "0 8px 24px -8px rgba(26,20,16,0.3)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,20,16,0.3), transparent 60%)" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16" style={{ background: "linear-gradient(to top, var(--paper), transparent)" }} />
    </section>
  );
}
