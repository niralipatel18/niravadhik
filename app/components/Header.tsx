"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "સાહિત્ય",  href: "/sahitya",  accent: "#e8462b" },
  { label: "સિનેમા",   href: "/cinema",   accent: "#3a4ea8" },
  { label: "સંગીત",   href: "/sangeet",  accent: "#128a7d" },
  { label: "કલાનિધિ", href: "/magazine", accent: "#f6a01a" },
  { label: "વિશે",    href: "/about",    accent: "#c2317f" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="h-0.5 w-full animated-gradient" style={{
        background: "linear-gradient(90deg, #e8462b, #f6a01a, #c2317f, #3a4ea8, #128a7d, #e8462b)",
        backgroundSize: "200% 100%",
      }} />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-guj text-2xl font-800 tracking-tight text-ink transition-colors group-hover:text-poppy">
            નિરવધિક
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="link-grow font-guj text-[0.95rem] text-ink transition-colors hover:text-[var(--accent)]"
              style={{ "--accent": n.accent } as React.CSSProperties}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="મેનૂ"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-poppy transition-colors hover:bg-poppy/10 md:hidden"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-5 py-3 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-paper-deep"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: n.accent }} />
              <span className="font-guj text-ink">{n.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
