"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const karyakramChildren = [
  { label: "સાહિત્ય", href: "/sahitya",  accent: "#e8462b" },
  { label: "સિનેમા",  href: "/cinema",   accent: "#3a4ea8" },
  { label: "સંગીત",  href: "/sangeet",  accent: "#128a7d" },
];

const nav = [
  { label: "કાર્યક્રમ", accent: "#e8462b", children: karyakramChildren },
  { label: "કલાનિધિ",   accent: "#f6a01a", href: "/magazine" },
  { label: "અમારા વિશે", accent: "#c2317f", href: "/about" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileKaryakramOpen, setMobileKaryakramOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  }
  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setDropOpen(false), 120);
  }

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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => {
            if ("children" in n) {
              return (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="link-grow font-guj text-[0.95rem] text-ink transition-colors hover:text-[var(--accent)] flex items-center gap-1"
                    style={{ "--accent": n.accent } as React.CSSProperties}
                  >
                    {n.label}
                    <span className="text-[0.6rem] opacity-60">▾</span>
                  </button>
                  {dropOpen && (
                    <div className="absolute left-0 top-full mt-2 w-36 rounded-xl border border-line bg-paper shadow-lg py-1">
                      {n.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="flex items-center gap-2.5 px-4 py-2.5 font-guj text-sm text-ink transition-colors hover:bg-paper-deep"
                        >
                          <span className="h-1.5 w-1.5 flex-none rounded-full" style={{ background: c.accent }} />
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={n.href}
                href={n.href}
                className="link-grow font-guj text-[0.95rem] text-ink transition-colors hover:text-[var(--accent)]"
                style={{ "--accent": n.accent } as React.CSSProperties}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="મેનૂ"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-poppy transition-colors hover:bg-poppy/10 md:hidden"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-line bg-paper px-5 py-3 md:hidden">
          {/* કાર્યક્રમ expandable */}
          <button
            onClick={() => setMobileKaryakramOpen((v) => !v)}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-paper-deep"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-poppy" />
            <span className="font-guj text-ink flex-1 text-left">કાર્યક્રમ</span>
            <span className="text-[0.6rem] text-ink-soft">{mobileKaryakramOpen ? "▴" : "▾"}</span>
          </button>
          {mobileKaryakramOpen && (
            <div className="ml-7 mt-1 mb-1 space-y-0.5">
              {karyakramChildren.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 transition-colors hover:bg-paper-deep"
                >
                  <span className="h-1.5 w-1.5 flex-none rounded-full" style={{ background: c.accent }} />
                  <span className="font-guj text-sm text-ink">{c.label}</span>
                </Link>
              ))}
            </div>
          )}

          {/* Other nav items */}
          {nav.filter((n) => !("children" in n)).map((n) => (
            <Link
              key={"href" in n ? n.href : n.label}
              href={"href" in n ? n.href : "/"}
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
