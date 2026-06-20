import { SectionHead, PieceCard } from "../components/Cards";
import { sangeet } from "../data/content";

export const metadata = { title: "સંગીત — નિરવધિક" };

export default function SangeetPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHead guj="સંગીત" accent="teal" blurb="સૂર, રાગ, લોકધૂન અને સુગમ સંગીતનો આસ્વાદ." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sangeet.map((p) => (
          <PieceCard key={p.slug} piece={p} base="/sangeet" accent="teal" />
        ))}
      </div>
    </div>
  );
}
