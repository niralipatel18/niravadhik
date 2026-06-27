export const metadata = { title: "અમારા વિશે — નિરવધિક" };

export default function AboutPage() {
  return (
    <div data-accent="poppy">
      <div className="border-b border-line" style={{ background: "radial-gradient(90% 100% at 20% 0%, rgba(232,70,43,0.16), transparent 60%), radial-gradient(80% 100% at 90% 0%, rgba(58,78,168,0.14), transparent 55%)" }}>
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
          <h1 className="font-guj text-4xl font-800 leading-tight sm:text-5xl">
            અમારા વિશે
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <div className="space-y-6 font-guj text-lg leading-[1.9] text-ink-soft">
          <p>
            નિરવધિક એ વિવિધ કલાઓનો પ્રચાર અને પ્રસાર કરતી સંસ્થા છે. કલારસિકોને એક છત નીચે ભેગા કરવા તથા કલાકારોને મંચ પૂરું પાડવું એ આ સંસ્થાનો હેતુ છે.
          </p>
          <p>
            અત્યાર સુધી અમે સાહિત્ય, સિનેમા અને સંગીતને લગતા કાર્યક્રમો કરવામાં સફળ રહ્યા છીએ. ભવિષ્યમાં બીજી અનેક કલાઓને આવરી લઈને કાર્યક્રમો કરવા અમે આતુર છીએ. ફક્ત કલાના ક્ષેત્રમાં જ નહીં પરંતુ શિક્ષણ, લોકજાગૃતિ, વગેરે જેવા અન્ય ક્ષેત્રોમાં પણ નિરવધિક સંસ્થા કાર્ય કરવા ઈચ્છુક છે.
          </p>
        </div>
      </div>
    </div>
  );
}
