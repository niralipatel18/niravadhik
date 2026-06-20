import { SectionHead, PieceCard } from "../components/Cards";
import { sahitya } from "../data/content";

export const metadata = { title: "સાહિત્ય — નિરવધિક" };

export default function SahityaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHead guj="સાહિત્ય" accent="poppy" blurb="કવિતા, ગઝલ, અછાંદસ અને ગદ્ય — શબ્દની સૃષ્ટિ." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sahitya.map((p) => (
          <PieceCard key={p.slug} piece={p} base="/sahitya" accent="poppy" />
        ))}
      </div>
    </div>
  );
}
