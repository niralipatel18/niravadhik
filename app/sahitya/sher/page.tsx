import Link from "next/link";
import { SectionHead } from "../../components/Cards";
import { shers } from "../../data/content";

export const metadata = { title: "શેર — નિરવધિક" };

const ACCENTS = [
  { border: "#e8462b", bg: "rgba(232,70,43,0.07)",  author: "#c2331c" },
  { border: "#f6a01a", bg: "rgba(246,160,26,0.09)", author: "#b8862f" },
  { border: "#3a4ea8", bg: "rgba(58,78,168,0.07)",  author: "#3a4ea8" },
  { border: "#128a7d", bg: "rgba(18,138,125,0.08)", author: "#128a7d" },
  { border: "#c2317f", bg: "rgba(194,49,127,0.07)", author: "#c2317f" },
];

export default function SherPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Link href="/sahitya" className="mb-8 inline-flex items-center gap-1.5 font-guj text-xs font-600 text-poppy hover:opacity-70 transition-opacity">
        ← સાહિત્ય
      </Link>
      <SectionHead guj="★ શેર" accent="poppy" blurb="ગઝલના ચૂંટેલા શેર — ૩૪ ગુજરાતી કવિઓ." />
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {shers.map((s, i) => {
          const c = ACCENTS[i % ACCENTS.length];
          return (
            <div key={i} className="mb-5 break-inside-avoid rounded-2xl px-6 py-5" style={{ background: c.bg, border: `1px solid ${c.border}30`, borderTopColor: c.border, borderTopWidth: "3px" }}>
              <span className="mb-2 block text-xl font-700 leading-none" style={{ color: c.border }}>★</span>
              {s.text.map((line, j) => (
                <p key={j} className="font-guj text-base leading-relaxed text-ink">{line}</p>
              ))}
              <p className="mt-3 font-guj text-sm font-600" style={{ color: c.author }}>— {s.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
