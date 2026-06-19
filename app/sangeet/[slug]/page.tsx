import { notFound } from "next/navigation";
import Reader from "../../components/Reader";
import { sangeet, findPiece } from "../../data/content";

export function generateStaticParams() {
  return sangeet.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = findPiece(sangeet, slug);
  if (!piece) notFound();
  return <Reader piece={piece} backHref="/sangeet" backLabel="સંગીત" accent="teal" />;
}
