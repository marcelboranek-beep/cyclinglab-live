export default function ServisKol() {
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
              Individuální servis
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
              Precizní servis
              <br />
              bez kompromisů.
            </h1>

            <p className="mt-10 text-lg leading-relaxed text-black/70 max-w-xl">
              Přes více jak deset let pracuji v cyklistice a jako vášnivý
              cyklista chápu potřeby i těch nejnáročnějších klientů.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/70 max-w-xl">
              Moje zkušenosti začínají u opravy dětského kola až po kompletní
              realizace high-endových silničních, gravel a horských kol.
            </p>
          </div>

          <div>
            <img
              src="/service-new.jpg"
              alt="Servis kol"
              className="w-full h-[700px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* TEXT */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Přístup
          </p>

          <div className="mt-12 space-y-8 text-lg leading-relaxed text-black/70">

            <p>
              Základ správného servisu je kvalitní nářadí, čisté prostředí
              a klidná hlava. Přesně takové prostředí jsem vytvořil, abych mohl
              každému zákazníkovi předat dokonale opravené kolo.
            </p>

            <p>
              Díky dlouholetým zkušenostem vím, co je pro kolo nejlepší,
              a proto se soustředím především na kompletní servis, který
              vrací pocit jízdy na novém kole.
            </p>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Jak servis probíhá
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

            {[
              "Kolo před začátkem servisu umyji od hrubých nečistot.",
              "Provedu kompletní diagnostiku všech důležitých částí.",
              "Zavolám s návrhem řešení a vše společně konzultujeme.",
              "Kolo kompletně rozeberu a vyčistím.",
              "Převodový systém čistím ve speciálním roztoku.",
              "Vyčistím středové i hlavové složení.",
              "Namažu uložení sedlovky v rámu.",
              "Vyměním brzdovou kapalinu.",
              "Zkontroluji zapletená kola.",
              "Kolo kompletně složím a dotáhnu momentovým klíčem.",
              "Řetěz navoskuji a provedu finální testovací jízdu.",
              "Na závěr kolo vyleštím, aby vypadalo jako nové.",
            ].map((item, index) => (
              <div
                key={index}
                className="border-t border-black pt-6"
              >
                <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                  0{index + 1}
                </div>

                <p className="mt-4 text-lg leading-relaxed text-black/70">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Kompletní servis
          </p>

          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

            <div>
              <h2 className="text-5xl md:text-7xl font-light">
                2900,-
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-black/70 max-w-xl">
            <a
  href="/#servis"
  className="mt-10 inline-block border border-black px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition"
>
  Objednat servis
</a>
                Po předchozí rezervaci je možné vše zvládnout během jednoho dne,
                abyste byli co nejdříve zpět v sedle.
              </p>
            </div>

          </div>

        </div>
      </section>

<section className="px-8 py-24 md:px-16 border-b border-black/10">
  <div className="max-w-6xl mx-auto">
    <div className="max-w-2xl">
      <p className="uppercase tracking-[0.3em] text-sm text-black/40">
        Nepotřebujete kompletní servis?
      </p>

      <h2 className="mt-6 text-5xl font-light">
        Základní servis
      </h2>

      <div className="mt-6 text-6xl font-light">
        1090,-
      </div>

      <p className="mt-8 text-lg text-black/70">
        Kontrola a seřízení kola pro běžný provoz.
      </p>

      <ul className="mt-8 space-y-3 text-black/70">
        <li>• seřízení řazení</li>
        <li>• seřízení brzd</li>
        <li>• dotažení důležitých spojů</li>
        <li>• kontrola opotřebení komponentů</li>
        <li>• kontrola tlaku a stavu plášťů</li>
        <li>• vyčištění a namazání řetězu</li>
      </ul>

      <p className="mt-8 text-black/60">
        Ideální pro kola, která jsou pravidelně servisována a
        nepotřebují kompletní rozborku.
      </p>
<a
  href="/#servis"
  className="mt-10 inline-block border border-black px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition"
>
  Objednat servis
</a>
    </div>
  </div>
</section>
      {/* EXTRA */}
      <section className="px-8 py-24 md:px-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Servisní úkony navíc
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="border-t border-black pt-6">
              <h3 className="text-2xl font-light">
                Doplnění tmelu
              </h3>

              <p className="mt-4 text-black/70">
                150,- / 1 kolo
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h3 className="text-2xl font-light">
                Přepáskování ráfku
              </h3>

              <p className="mt-4 text-black/70">
                200,-
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h3 className="text-2xl font-light">
                Výměna Hlavového složení
              </h3>

              <p className="mt-4 text-black/70">
                200–1000,- dle typu kola
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-8 py-24 md:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Individuální přístup
          </p>

          <h2 className="mt-8 text-4xl md:text-6xl font-light leading-tight">
            Potřebujete drobnou opravu
            <br />
            nebo máte nové kolo v krabici?
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-black/70">
            Ozvěte se s vaším problémem a společně najdeme nejlepší řešení
            přesně pro vás a vaše kolo.
          </p>

          <a
            href="/o-mne"
            className="mt-12 inline-block border-b border-black pb-2 uppercase tracking-[0.2em] text-sm"
          >
            Kontaktovat
          </a>

        </div>
      </section>

    </main>
  );
}