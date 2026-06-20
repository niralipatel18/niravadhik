import { notFound } from "next/navigation";
import Link from "next/link";
import { magazineIssues } from "../../data/content";
import PdfMagazineGrid from "../../components/PdfMagazineGrid";

export function generateStaticParams() {
  return magazineIssues.map((m) => ({ issue: String(m.issue) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ issue: string }>;
}) {
  const { issue } = await params;
  const m = magazineIssues.find((x) => x.issue === Number(issue));
  if (!m) return {};
  return { title: `${m.title} · નિરવધિક` };
}

export default async function IssueViewerPage({
  params,
}: {
  params: Promise<{ issue: string }>;
}) {
  const { issue } = await params;
  const m = magazineIssues.find((x) => x.issue === Number(issue));
  if (!m) notFound();

  return (
    <div>
      {/* Back + title — padded */}
      <div className="mx-auto max-w-4xl px-5 pt-12 pb-8 sm:px-8 sm:pt-16">
        <Link
          href="/magazine"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-600 uppercase tracking-[0.18em] text-poppy hover:opacity-70 transition-opacity"
        >
          ← કલાનિધિ
        </Link>
        <h1 className="mt-4 font-guj text-3xl font-800 text-ink sm:text-4xl">
          {m.title}
        </h1>
        {m.description && (
          <p className="mt-2 font-guj text-ink-soft">{m.description}</p>
        )}
        <div className="rule mt-5" />
      </div>

      {/* PDF — full width, no side padding */}
      <PdfMagazineGrid issues={[m]} />
    </div>
  );
}
