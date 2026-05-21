export default function Konzultace() {
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
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Odborná konzultace
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
            Správná rada
            <br />
            dokáže změnit
            <br />
            celé kolo.
          </h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="border-t border-black pt-6">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                01
              </div>

              <h3 className="mt-4 text-2xl font-light">
                Špatně ti funguje kolo?
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed">
                Pomohu najít příčinu problému a navrhnu nejlepší řešení.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                02
              </div>

              <h3 className="mt-4 text-2xl font-light">
                Špatný posed?
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed">
                Správný posed je základ pohodlí i výkonu na kole.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                03
              </div>

              <h3 className="mt-4 text-2xl font-light">
                Elektronické řazení?
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed">
                Poradím s výběrem moderních komponentů i jejich kompatibilitou.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                04
              </div>

              <h3 className="mt-4 text-2xl font-light">
                Bazarové kolo?
              </h3>

              <p className="mt-4 text-black/70 leading-relaxed">
                Pomohu zkontrolovat stav kola a vyhnout se špatné investici.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TEXT */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Zkušenosti
          </p>

          <div className="mt-12 space-y-8 text-lg leading-relaxed text-black/70">

            <p>
              Sám vím, jak důležité je mít vedle sebe člověka,
              který má v daném oboru zkušenosti a dokáže poradit.
            </p>

            <p>
              Já mám zkušenosti v cyklistice a dokážu poradit
              v celé řadě oblastí — od základního servisu až po
              výběr správného kola nebo komponentů.
            </p>

            <p>
              Někdy se na věc podívám jako profesionální mechanik,
              jindy jako obyčejný člověk, který chce prostě začít jezdit
              a užívat si kolo bez zbytečných problémů.
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 md:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Individuální přístup
          </p>

          <h2 className="mt-8 text-4xl md:text-6xl font-light leading-tight">
            Máš dotaz
            <br />
            nebo potřebuješ poradit?
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-black/70">
            Neboj se ozvat se svým problémem nebo požadavkem.
            Rád poradím a společně najdeme nejlepší řešení.
          </p>

          <a
            href="/kontakt"
            className="mt-12 inline-block border-b border-black pb-2 uppercase tracking-[0.2em] text-sm"
          >
            Kontakt
          </a>

        </div>
      </section>

    </main>
  );
}