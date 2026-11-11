import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "/stavby-kol",
  "Stavby kol na míru v Podlešíně | Custom Cycling Lab",
  "Zakázkové stavby silničních, gravelových a horských kol v Podlešíně u Slaného. Osobní výběr rámu a komponentů podle rozpočtu a stylu jízdy.",
);

export default function StavbyKol() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="pt-20 min-h-screen bg-[#f5f4f1] text-black"
      >
        {/* HERO */}
        <section className="border-b border-black/10 px-8 py-24 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-black/40">
                Stavby kol
              </p>

              <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
                Kolo,
                <br />
                které budeš
                <br />
                milovat.
              </h1>

              <p className="mt-10 text-lg leading-relaxed text-black/70 max-w-xl">
                Chceš postavit kolo, které budou kamarádi obletovat a ty si
                splníš svůj sen?
              </p>

              <p className="mt-6 text-lg leading-relaxed text-black/70 max-w-xl">
                Stavba kola na zakázku je dnes symbolem toho, že cyklistiku
                opravdu miluješ a chceš pro sebe to nejlepší možné.
              </p>
            </div>

            <div>
              <Image
                width={3109}
                height={4024}
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/stavba-kol.jpg"
                alt="Stavba kol"
                className="w-full h-[750px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* TEXT */}
        <section className="px-8 py-24 md:px-16 border-b border-black/10">
          <div className="max-w-5xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-black/40">
              Filosofie
            </p>

            <div className="mt-12 space-y-8 text-lg leading-relaxed text-black/70">
              <p>Vždycky říkám, že u kola jsou důležité dvě věci...</p>

              <p className="text-3xl md:text-5xl font-light text-black leading-tight">
                Kolo se mi musí líbit.
                <br />A musí se na něm dobře sedět.
              </p>

              <p>
                Každá stavba je individuální proces, kde řešíme nejen vzhled,
                ale hlavně funkčnost, posed a pocit z jízdy.
              </p>
            </div>
          </div>
        </section>

        {/* QUESTIONS */}
        <section className="px-8 py-24 md:px-16 border-b border-black/10">
          <div className="max-w-6xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-black/40">
              Co společně vyřešíme
            </p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="border-t border-black pt-6">
                <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                  01
                </div>

                <h3 className="mt-4 text-2xl font-light">Vysněná značka</h3>

                <p className="mt-4 text-black/70 leading-relaxed">
                  Máš svou oblíbenou značku nebo rám, o kterém dlouho přemýšlíš?
                </p>
              </div>

              <div className="border-t border-black pt-6">
                <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                  02
                </div>

                <h3 className="mt-4 text-2xl font-light">
                  Nejnovější komponenty
                </h3>

                <p className="mt-4 text-black/70 leading-relaxed">
                  Chceš nejaktuálnější technologie, elektronické řazení nebo top
                  kola?
                </p>
              </div>

              <div className="border-t border-black pt-6">
                <div className="text-sm uppercase tracking-[0.25em] text-black/40">
                  03
                </div>

                <h3 className="mt-4 text-2xl font-light">Rozpočet</h3>

                <p className="mt-4 text-black/70 leading-relaxed">
                  Společně nastavíme ideální konfiguraci přesně podle tvého
                  rozpočtu. Ať už jde o silniční kolo, gravel, nebo enduro.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-8 py-20 md:px-16 border-b border-black/10"
          aria-labelledby="realizace"
        >
          <div className="max-w-6xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-xs text-black/50">
              Z dílny Custom Cycling Lab
            </p>
            <h2 id="realizace" className="mt-6 text-4xl font-light">
              Detaily staveb kol
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  src: "/gallery-1.jpg",
                  alt: "Kolo z galerie Custom Cycling Lab",
                },
                {
                  src: "/gallery-2.jpg",
                  alt: "Detail stavby kola z dílny Custom Cycling Lab",
                },
                {
                  src: "/gallery-3.jpg",
                  alt: "Komponenty ze stavby kola Custom Cycling Lab",
                },
              ].map((photo) => (
                <figure key={photo.src}>
                  <Image
                    width={1152}
                    height={2048}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-80 object-cover"
                  />
                </figure>
              ))}
            </div>
            <p className="mt-8 text-black/70">
              Každá stavba má vlastní rozpočet. Společně vybereme rám a
              komponenty podle tvých potřeb a předem domluvíme konfiguraci i
              cenu.
            </p>
            <a className="mt-6 inline-block underline" href="/kontakt">
              Probrat stavbu kola ↗
            </a>
          </div>
        </section>
        {/* CONTACT */}
        <section className="px-8 py-24 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-black/40">
              Individuální stavba
            </p>

            <h2 className="mt-8 text-4xl md:text-6xl font-light leading-tight">
              Máš svoji představu?
              <br />
              Já ji postavím.
            </h2>

            <p className="mt-10 text-lg leading-relaxed text-black/70">
              Ozvi se mi se svojí představou a společně vytvoříme kolo, které
              bude přesně odpovídat tvému stylu, potřebám a snům.
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
      <Footer />
    </>
  );
}
