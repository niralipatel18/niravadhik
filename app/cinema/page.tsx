import { SectionHead, PieceCard } from "../components/Cards";
import { cinema } from "../data/content";

export const metadata = { title: "સિનેમા · Cinema — નિર્વાધિક" };

export default function CinemaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHead guj="સિનેમા" latin="Cinema" accent="indigo"
        blurb="દૃશ્ય-ભાષા, સમીક્ષા અને દિગ્દર્શનની કળા."
        blurbEn="Visual language, reviews and the craft of direction." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cinema.map((p) => (
          <PieceCard key={p.slug} piece={p} base="/cinema" accent="indigo" />
        ))}
      </div>
    </div>
  );
}
