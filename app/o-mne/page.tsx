export default function OMne() {
  return (
    <main className="min-h-screen bg-[#f5f4f1] text-black">
        <a
  href="/"
  className="fixed top-8 left-8 z-50 flex items-center gap-3 text-sm uppercase tracking-[0.2em] hover:opacity-60 transition"
>
  <span className="text-2xl leading-none">←</span>
  Zpět
</a>

      {/* HERO */}
      <section className="border-b border-black/10 px-8 py-24 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-black/40">
              O mně
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
              Preciznost.
              <br />
              Zkušenost.
              <br />
              Vášeň.
            </h1>

            <p className="mt-10 text-lg leading-relaxed text-black/70 max-w-xl">
              Cyklistice se věnuji více než deset let. Specializuji se
              na individuální servis, stavby kol a osobní přístup
              ke každému zákazníkovi.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/70 max-w-xl">
              Každé kolo, které projde mýma rukama, dostává maximální péči,
              precizní nastavení a důraz na detail.
            </p>
          </div>

          <div>
            <img
              src="/about.jpg"
              alt="O mně"
              className="w-full h-[750px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Přístup
          </p>

          <div className="mt-12 space-y-8 text-lg leading-relaxed text-black/70">

            <p>
              Nejsem jen opravář kol. Jsem aktivní fanoušek moderních
              cyklistických trendů a především aktivní cyklista,
              který rozumí tomu, co zákazník od svého kola očekává.
            </p>

            <p>
              Díky dlouholetým zkušenostem dokážu nabídnout nejen kvalitní
              servis, ale také individuální přístup a řešení šité na míru
              každému kolu i jezdci.
            </p>

            <p>
              Věřím, že perfektně připravené kolo dokáže změnit celý zážitek
              z jízdy. Proto ke každému detailu přistupuji s maximální
              pečlivostí a důrazem na kvalitu.
            </p>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-8 py-24 md:px-16">
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Co je pro mě důležité
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="border-t border-black pt-6">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                01
              </div>

              <h3 className="mt-4 text-2xl font-light">
                Individuální přístup
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed">
                Každý zákazník i každé kolo má jiné potřeby.
                Proto ke každému servisu přistupuji individuálně.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                02
              </div>

              <h3 className="mt-4 text-2xl font-light">
                Preciznost
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed">
                Detailní práce, kvalitní nářadí a pečlivost
                jsou základem každého servisu.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                03
              </div>

              <h3 className="mt-4 text-2xl font-light">
                Vášeň pro cyklistiku
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed">
                Cyklistika není jen práce — je to životní styl.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}