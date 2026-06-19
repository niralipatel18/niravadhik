import { notFound } from "next/navigation";
import Reader from "../../components/Reader";
import { sahitya, findPiece } from "../../data/content";

export function generateStaticParams() {
  return sahitya.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = findPiece(sahitya, slug);
  if (!piece) notFound();
  return <Reader piece={piece} backHref="/sahitya" backLabel="સાહિત્ય" accent="poppy" />;
}
