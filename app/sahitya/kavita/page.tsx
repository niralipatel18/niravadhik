import Link from "next/link";
import { SectionHead, PieceCard } from "../../components/Cards";
import { sahitya } from "../../data/content";

export const metadata = { title: "કવિતા · Poetry — નિરવધિક" };

export default function KavitaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href="/sahitya"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs font-600 uppercase tracking-[0.18em] text-poppy hover:opacity-70 transition-opacity"
      >
        ← સાહિત્ય
      </Link>
      <SectionHead
        guj="કવિતા"
        latin="Poetry"
        accent="poppy"
        blurb="અછાંદસ, ગીત, ગઝલ — ભાષાના ઊઘડ."
        blurbEn="Free verse, song-poems and ghazals."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sahitya.map((p) => (
          <PieceCard key={p.slug} piece={p} base="/sahitya" accent="poppy" />
        ))}
      </div>
    </div>
  );
}
