import Link from "next/link";
import Image from "next/image";
import type { Piece } from "../data/content";

export default function Reader({
  piece, backHref, backLabel, accent = "poppy",
}: {
  piece: Piece; backHref: string; backLabel: string; accent?: string;
}) {
  return (
    <article data-accent={accent}>
      {/* image banner */}
      <div className="relative h-[42vh] min-h-[280px] w-full overflow-hidden">
        <Image
          src={piece.image}
          alt={piece.titleEn || piece.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--paper) 2%, color-mix(in srgb, var(--accent) 30%, transparent) 60%, rgba(26,20,16,0.35))",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-2xl px-5 pb-6 sm:px-8">
          <span className="chip">{piece.kindEn}</span>
          <h1 className="mt-3 font-guj text-4xl font-800 leading-tight text-ink drop-shadow-sm sm:text-5xl">
            {piece.title}
          </h1>
          {piece.titleEn && (
            <p className="mt-1 text-base italic text-ink-soft">{piece.titleEn}</p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
        <Link
          href={backHref}
          className="link-grow font-mono text-xs font-600 uppercase tracking-[0.16em]"
          style={{ color: "var(--accent)" }}
        >
          ← {backLabel}
        </Link>

        <div className="mt-4 flex items-center gap-3 font-guj text-ink-soft">
          <span>{piece.author}</span>
          {piece.year && <span>· {piece.year}</span>}
        </div>

        <div className="ornament my-9 max-w-[12rem]">
          <span className="font-guj" style={{ color: "var(--accent)" }}>✦</span>
        </div>

        <div className="font-guj text-xl leading-[2] text-ink">
          {piece.body.map((line, i) =>
            line === "" ? <div key={i} className="h-6" /> : <p key={i}>{line}</p>
          )}
        </div>

        <div className="rule mt-14" />
        <p className="mt-6 font-guj text-sm text-ink-soft">
          નિરવધિક · {piece.author}
        </p>
      </div>
    </article>
  );
}
