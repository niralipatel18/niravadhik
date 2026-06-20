import { tagline, magazine } from "../data/content";

export const metadata = { title: "વિશે — નિરવધિક" };

export default function AboutPage() {
  return (
    <div data-accent="poppy">
      <div className="border-b border-line" style={{ background: "radial-gradient(90% 100% at 20% 0%, rgba(232,70,43,0.16), transparent 60%), radial-gradient(80% 100% at 90% 0%, rgba(58,78,168,0.14), transparent 55%)" }}>
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow text-poppy">નિરવધિક વિશે</p>
          <h1 className="mt-4 font-guj text-4xl font-800 leading-tight sm:text-5xl">
            જગતથી જુદા બનવાની પહેલ
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <div className="ornament mb-10 max-w-[12rem]">
          <span className="font-guj text-saffron">✦</span>
        </div>

        <div className="space-y-6 font-guj text-lg leading-[1.9] text-ink-soft">
          <p>{tagline} — આ વાક્ય નિરવધિકનો આત્મા છે.</p>
          <p>
            નિરવધિક ગાંધીનગરથી ચાલતો એક સાંસ્કૃતિક મંચ છે, જ્યાં સાહિત્ય,
            સિનેમા અને સંગીત — ત્રણેય કલાસ્વરૂપો સમાન આદર સાથે વસે છે.
          </p>
          <p>
            અહીં કવિતા વંચાય છે, ફ્રેમ વાંચાય છે, અને સૂર સંભળાય છે. ધ્યેય એક જ —
            કલા દ્વારા જગતને થોડું વધુ સંવેદનશીલ બનાવવું.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="font-guj text-2xl font-700 text-ink">આયોજન</h2>
          <div className="rule mt-3 mb-6" />
          <ul className="space-y-5">
            {[
              { color: "bg-indigo",   n: "૧", title: "Rockstar — ફિલ્મ સ્ક્રીનિંગ",          sub: "Imtiaz Ali · A.R. Rahman · ૨૦૨૪" },
              { color: "bg-magenta",  n: "૨", title: "Laila Majnu — ફિલ્મ સ્ક્રીનિંગ",       sub: "Sajid Ali · ૨૦૨૪" },
              { color: "bg-teal",     n: "૩", title: "Reva — ગુજરાતી ફિલ્મ સ્ક્રીનિંગ",     sub: "Rahul Golani · ૨૦૨૪ · નિરવધિકની પ્રથમ ગુજરાતી ફિલ્મ" },
              { color: "bg-saffron",  n: "✦", title: "સૂફી સ્વર-સંધ્યા",                    sub: "નિરવધિકની પ્રથમ live music evening · ૨૦૨૪" },
              { color: "bg-poppy",    n: "✎", title: magazine.name,                           sub: magazine.tagline },
            ].map((item) => (
              <li key={item.n} className="flex gap-4">
                <span className={`mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full ${item.color} font-mono text-xs font-700 text-white`}>
                  {item.n}
                </span>
                <div>
                  <p className="font-guj font-600 text-ink">{item.title}</p>
                  <p className="font-guj text-sm text-ink-soft/80">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rule mt-12" />
        <a
          href="https://instagram.com/nirvadhik"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-guj text-xs font-600 text-poppy link-grow"
        >
          @nirvadhik →
        </a>
      </div>
    </div>
  );
}
