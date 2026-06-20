import Link from "next/link";
import { tagline } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper" data-accent="poppy">
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
            <div className="font-guj text-3xl font-800 text-white">નિરવધિક</div>
            <p className="mt-3 max-w-xs font-guj text-sm leading-relaxed text-paper/70">
              {tagline}
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
            <h4 className="eyebrow mb-4 text-saffron">વિભાગ</h4>
            <ul className="space-y-2.5 font-guj text-sm">
              {[
                { href: "/sahitya",  label: "સાહિત્ય" },
                { href: "/cinema",   label: "સિનેમા" },
                { href: "/sangeet",  label: "સંગીત" },
                { href: "/magazine", label: "કલાનિધિ" },
                { href: "/about",    label: "વિશે" },
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
            <h4 className="eyebrow mb-4 text-saffron">સંપર્ક</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://instagram.com/nirvadhik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-guj text-paper/70 transition-colors hover:text-saffron"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
                  @nirvadhik
                </a>
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-paper/10 bg-paper/5 p-4">
              <p className="font-guj text-xs leading-relaxed text-paper/60">
                ગાંધીનગર, ગુજરાત, ભારત
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-6">
          <p className="font-guj text-[0.68rem] text-paper/40">
            © {new Date().getFullYear()} નિરવધિક — ગાંધીનગર
          </p>
        </div>
      </div>
    </footer>
  );
}
