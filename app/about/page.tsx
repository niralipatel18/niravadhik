import { tagline, taglineEn, magazine } from "../data/content";

export const metadata = { title: "વિશે · About — નિર્વાધિક" };

export default function AboutPage() {
  return (
    <div data-accent="poppy">
      <div
        className="border-b border-line"
        style={{
          background:
            "radial-gradient(90% 100% at 20% 0%, rgba(232,70,43,0.16), transparent 60%), radial-gradient(80% 100% at 90% 0%, rgba(58,78,168,0.14), transparent 55%)",
        }}
      >
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow text-poppy">નિર્વાધિક વિશે · About</p>
          <h1 className="mt-4 font-guj text-4xl font-800 leading-tight sm:text-5xl">
            જગતથી જુદા બનવાની પહેલ
          </h1>
          <p className="mt-2 text-lg italic text-ink-soft">
            An initiative to become distinct from the world.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <div className="ornament mb-10 max-w-[12rem]">
          <span className="font-guj text-saffron">✦</span>
        </div>

        <div className="space-y-6 font-guj text-lg leading-[1.9] text-ink-soft">
          <p>{tagline} — આ વાક્ય નિર્વાધિકનો આત્મા છે.</p>
          <p>
            નિર્વાધિક ગાંધીનગરથી ચાલતો એક સાંસ્કૃતિક મંચ છે, જ્યાં સાહિત્ય,
            સિનેમા અને સંગીત — ત્રણેય કલાસ્વરૂપો સમાન આદર સાથે વસે છે.
          </p>
          <p>
            અહીં કવિતા વંચાય છે, ફ્રેમ વાંચાય છે, અને સૂર સંભળાય છે. ધ્યેય એક જ —
            કલા દ્વારા જગતને થોડું વધુ સંવેદનશીલ બનાવવું.
          </p>
        </div>

        <p className="mt-8 text-base italic leading-relaxed text-ink-soft/80">
          Nirvadhik is a Gandhinagar-based cultural platform where literature,
          cinema and music live with equal regard. {taglineEn}
        </p>

        {/* Real milestones */}
        <div className="mt-12 space-y-4">
          <h2 className="font-guj text-2xl font-700 text-ink">આયોજન · What We've Done</h2>
          <div className="rule mt-3 mb-6" />

          <ul className="space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-indigo font-mono text-xs font-700 text-white">
                ૧
              </span>
              <div>
                <p className="font-guj font-600 text-ink">Rockstar — ફિલ્મ સ્ક્રીનિંગ</p>
                <p className="text-sm text-ink-soft/80">Imtiaz Ali · A.R. Rahman · ૨૦૨૪</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-magenta font-mono text-xs font-700 text-white">
                ૨
              </span>
              <div>
                <p className="font-guj font-600 text-ink">Laila Majnu — ફિલ્મ સ્ક્રીનિંગ</p>
                <p className="text-sm text-ink-soft/80">Sajid Ali · ૨૦૨૪</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-teal font-mono text-xs font-700 text-white">
                ૩
              </span>
              <div>
                <p className="font-guj font-600 text-ink">Reva — ગુજરાતી ફિલ્મ સ્ક્રીનિંગ</p>
                <p className="text-sm text-ink-soft/80">Rahul Golani · ૨૦૨૪ · Nirvadhik ની પ્રથમ ગુજરાતી ફિલ્મ</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-saffron font-mono text-xs font-700 text-ink">
                ✦
              </span>
              <div>
                <p className="font-guj font-600 text-ink">સૂફી સ્વર-સંધ્યા — Live Music Event</p>
                <p className="text-sm text-ink-soft/80">Nirvadhik ની પ્રથમ live music evening · ૨૦૨૪</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-poppy font-mono text-xs font-700 text-white">
                ✎
              </span>
              <div>
                <p className="font-guj font-600 text-ink">{magazine.name}</p>
                <p className="text-sm text-ink-soft/80">
                  {magazine.frequencyEn} — {magazine.taglineEn}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rule mt-12" />
        <a
          href="https://instagram.com/nirvadhik"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-xs font-600 uppercase tracking-[0.16em] text-poppy link-grow"
        >
          Instagram · @nirvadhik →
        </a>
      </div>
    </div>
  );
}
