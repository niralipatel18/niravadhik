import Link from "next/link";
import { magazineIssues, magazine } from "../data/content";

export const metadata = { title: "કલાનિધિ — નિરવધિક" };

const ACCENT_COLORS = [
  { bg: "rgba(232,70,43,0.08)",  border: "#e8462b", num: "#e8462b" },
  { bg: "rgba(246,160,26,0.10)", border: "#f6a01a", num: "#b8862f" },
  { bg: "rgba(58,78,168,0.08)",  border: "#3a4ea8", num: "#3a4ea8" },
  { bg: "rgba(18,138,125,0.08)", border: "#128a7d", num: "#128a7d" },
  { bg: "rgba(194,49,127,0.08)", border: "#c2317f", num: "#c2317f" },
];

export default function MagazinePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="mb-14">
        <p className="eyebrow text-poppy mb-2">નિરવધિક</p>
        <h1 className="font-guj text-4xl font-800 text-ink sm:text-5xl">કલાનિધિ</h1>
        <p className="mt-3 max-w-xl font-guj text-ink-soft">{magazine.tagline}</p>
        <div className="rule mt-6" />
      </div>

      {magazineIssues.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-guj text-2xl text-ink-soft/60">અંકો ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...magazineIssues].reverse().map((issue) => {
            const c = ACCENT_COLORS[(issue.issue - 1) % ACCENT_COLORS.length];
            return (
              <div key={issue.issue} className="flex flex-col rounded-2xl overflow-hidden" style={{ background: c.bg, border: `1px solid ${c.border}30`, borderTopWidth: "3px", borderTopColor: c.border }}>
                <div className="flex-1 px-6 pt-6 pb-4">
                  <span className="font-mono text-[0.62rem] font-700 uppercase tracking-[0.2em]" style={{ color: c.num }}>{issue.date}</span>
                  <h2 className="mt-2 font-guj text-xl font-700 text-ink leading-snug">{issue.title}</h2>
                  {issue.description && <p className="mt-1.5 font-guj text-sm leading-relaxed text-ink-soft">{issue.description}</p>}
                </div>
                <div className="flex gap-2 border-t px-6 py-4" style={{ borderColor: `${c.border}20` }}>
                  <Link href={`/magazine/${issue.issue}`} className="flex-1 rounded-full py-2 text-center font-guj text-xs font-600 text-white transition-opacity hover:opacity-80" style={{ background: c.num }}>
                    વાંચો →
                  </Link>
                  <a href={issue.pdf} download className="rounded-full border px-4 py-2 font-guj text-xs font-600 transition-opacity hover:opacity-70" style={{ borderColor: c.border, color: c.num }}>
                    ↓ ડાઉનલોડ
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
