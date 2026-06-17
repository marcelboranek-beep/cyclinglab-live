export default function Vyzvednuti() {
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
              Vyzvednutí kola
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
              Servis bez
              <br />
              starostí.
            </h1>

            <p className="mt-10 text-lg leading-relaxed text-black/70 max-w-xl">
              Vím, jak je těžké v pracovním vytížení řešit
              osobní potřeby a hledat čas na servis kola.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/70 max-w-xl">
              Proto si dokážu kolo převzít tam,
              kde budete potřebovat, a po servisu
              ho zase zpět dovézt.
            </p>
          </div>

          <div>
            <img
              src="/vyzvednuti.jpg"
              alt="Vyzvednutí kola"
              className="w-full h-[750px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* INFO */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Jak to funguje
          </p>

          <div className="mt-12 space-y-8 text-lg leading-relaxed text-black/70">

            <p>
              Stačí se ozvat a společně domluvíme
              místo i čas převzetí kola.
            </p>

            <p>
              Kolo bezpečně převezmu, provedu servis
              a následně vám ho přivezu zpět připravené k jízdě.
            </p>

            <p className="text-3xl md:text-5xl font-light text-black leading-tight">
              Pohodlně.
              <br />
              Bez stresu.
              <br />
              Bez zbytečného času navíc.
            </p>

          </div>

        </div>
      </section>

      {/* PRICE */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Cena dopravy
          </p>

          <div className="mt-12 space-y-6">

            <p className="text-lg text-black/70 leading-relaxed">
              Cena je počítána podle vzdálenosti
              od místa servisu.
            </p>

            <div className="border-t border-black pt-8">
              <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                Cena za dopravu
              </div>

              <div className="mt-4 text-5xl md:text-7xl font-light">
                6 Kč / km  POZOR - Počítáme pouze cenu za jednu cestu!
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="px-8 py-24 md:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Individuální domluva
          </p>

          <h2 className="mt-8 text-4xl md:text-6xl font-light leading-tight">
            Potřebujete
            <br />
            vyzvednout kolo?
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-black/70">
            Ozvěte se mi a společně domluvíme
            termín i místo převzetí.
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