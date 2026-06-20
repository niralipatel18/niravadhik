import { SectionHead, PieceCard } from "../components/Cards";
import { sangeet } from "../data/content";

export const metadata = { title: "સંગીત · Music — નિરવધિક" };

export default function SangeetPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHead guj="સંગીત" latin="Music" accent="teal"
        blurb="સૂર, રાગ, લોકધૂન અને સુગમ સંગીતનો આસ્વાદ."
        blurbEn="Melody, raag, folk and light classical music." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sangeet.map((p) => (
          <PieceCard key={p.slug} piece={p} base="/sangeet" accent="teal" />
        ))}
      </div>
    </div>
  );
}
