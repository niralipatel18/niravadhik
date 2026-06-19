import Link from "next/link";
import Image from "next/image";
import type { Piece } from "../data/content";

export function SectionHead({
  guj, latin, blurb, blurbEn, accent = "poppy",
}: {
  guj: string; latin: string; blurb?: string; blurbEn?: string; accent?: string;
}) {
  return (
    <div className="mb-9" data-accent={accent}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="font-guj text-3xl font-700 text-ink sm:text-4xl">{guj}</h2>
        <span
          className="font-mono text-sm font-600 uppercase tracking-[0.18em]"
          style={{ color: "var(--accent)" }}
        >
          {latin}
        </span>
      </div>
      {blurb   && <p className="mt-2 max-w-2xl font-guj text-ink-soft">{blurb}</p>}
      {blurbEn && <p className="mt-0.5 max-w-2xl text-sm italic text-ink-soft/75">{blurbEn}</p>}
      <div className="rule mt-5" />
    </div>
  );
}

export function PieceCard({
  piece, base, accent = "poppy",
}: {
  piece: Piece; base: string; accent?: string;
}) {
  return (
    <Link
      href={`${base}/${piece.slug}`}
      data-accent={accent}
      className="card group block overflow-hidden rounded-2xl border border-line bg-paper"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={piece.image}
          alt={piece.titleEn || piece.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover img-zoom"
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,20,16,0.55), transparent 55%)" }}
        />
        {/* Accent glow on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--accent) 40%, transparent), transparent 60%)" }}
        />
        {/* Badges row */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="chip">{piece.kindEn}</span>
          {piece.year && (
            <span
              className="inline-block rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] font-600 text-white/90"
              style={{ background: "rgba(26,20,16,0.55)", backdropFilter: "blur(6px)" }}
            >
              {piece.year}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-guj text-xl font-600 text-ink leading-snug">{piece.title}</h3>
        {piece.titleEn && (
          <p className="mt-0.5 text-sm italic text-ink-soft/70">{piece.titleEn}</p>
        )}
        <p className="mt-2.5 font-guj text-sm leading-relaxed text-ink-soft line-clamp-2">
          {piece.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-guj text-xs text-ink-soft/70">{piece.author}</span>
          <span
            className="flex items-center gap-1 rounded-full px-3 py-1 font-mono text-xs font-600 opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              color: "var(--accent)",
              background: "color-mix(in srgb, var(--accent) 10%, transparent)",
            }}
          >
            વાંચો →
          </span>
        </div>
      </div>
    </Link>
  );
}
