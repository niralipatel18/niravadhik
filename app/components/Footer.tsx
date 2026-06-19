import Link from "next/link";
import { tagline, taglineEn } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper" data-accent="poppy">
      {/* Colour bar */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-poppy" />
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 bg-magenta" />
        <div className="flex-1 bg-indigo" />
        <div className="flex-1 bg-teal" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.8fr_1fr_1fr]">
          <div>
            <div className="font-guj text-3xl font-800 text-white">
              નિર્વાધિક
            </div>
            <p className="mt-3 max-w-xs font-guj text-sm leading-relaxed text-paper/70">
              {tagline}
            </p>
            <p className="mt-1 max-w-xs text-xs italic text-paper/50">
              {taglineEn}
            </p>
            <div className="mt-5 flex gap-2">
              <span className="h-2 w-10 rounded-full bg-poppy" />
              <span className="h-2 w-10 rounded-full bg-saffron" />
              <span className="h-2 w-10 rounded-full bg-magenta" />
              <span className="h-2 w-10 rounded-full bg-indigo" />
              <span className="h-2 w-10 rounded-full bg-teal" />
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4 text-saffron">વિભાગ · Sections</h4>
            <ul className="space-y-2.5 font-guj text-sm">
              {[
                { href: "/sahitya", label: "સાહિત્ય · Literature" },
                { href: "/cinema",  label: "સિનેમા · Cinema" },
                { href: "/sangeet", label: "સંગીત · Music" },
                { href: "/about",   label: "વિશે · About" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/70 transition-colors hover:text-saffron">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4 text-saffron">સંપર્ક · Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://instagram.com/nirvadhik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-paper/70 transition-colors hover:text-saffron"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                  Instagram · @nirvadhik
                </a>
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-paper/10 bg-paper/5 p-4">
              <p className="font-guj text-xs leading-relaxed text-paper/60">
                ગાંધીનગર, ગુજરાત, ભારત
              </p>
              <p className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-paper/40">
                Gandhinagar · Gujarat · India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-6">
          <p className="font-mono text-[0.68rem] text-paper/40">
            © {new Date().getFullYear()} નિર્વાધિક · Nirvadhik — Gandhinagar
          </p>
        </div>
      </div>
    </footer>
  );
}
