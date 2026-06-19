import { notFound } from "next/navigation";
import Reader from "../../components/Reader";
import { cinema, findPiece } from "../../data/content";

export function generateStaticParams() {
  return cinema.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = findPiece(cinema, slug);
  if (!piece) notFound();
  return <Reader piece={piece} backHref="/cinema" backLabel="સિનેમા" accent="indigo" />;
}
