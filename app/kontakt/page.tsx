import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageMetadata } from "@/lib/site";
import Image from "next/image";

export const metadata = pageMetadata(
  "/kontakt",
  "Cykloservis Podlešín 161/1: kontakt | Custom Cycling Lab",
  "Dílna Custom Cycling Lab, Podlešín 161/1, 273 25 Podlešín. Telefon +420 777 732 309. Servis i předání kola po předchozí domluvě.",
);

export default function Kontakt() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="pt-36 min-h-screen bg-[#f5f4f1] text-black px-8 py-24 md:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            Kontakt
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
            Ozvi se mi.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-black/60 leading-8">
            Každý servis i stavbu kola řeším individuálně. Pokud máš zájem o
            servis, stavbu kola nebo konzultaci, neváhej mě kontaktovat.
          </p>

          <div className="mt-16 space-y-8 text-lg text-black/70">
            <p>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:info@customcyclinglab.com" className="underline">
                info@customcyclinglab.com
              </a>
            </p>

            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/custom_cycling_lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @custom_cycling_lab
              </a>
            </p>

            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+420777732309" className="underline">
                +420 777 732 309
              </a>
            </p>
          </div>

          <section
            className="mt-16 border-t border-black/20 pt-10"
            aria-labelledby="adresa"
          >
            <h2 id="adresa" className="text-3xl font-light">
              Dílna a předání kola
            </h2>
            <address className="mt-6 not-italic text-lg">
              Custom Cycling Lab · Marcel Bořánek
              <br />
              Podlešín 161/1
              <br />
              273 25 Podlešín
            </address>
            <p className="mt-5 text-black/70">
              Návštěvu, vyzvednutí i vrácení kola si prosím domluv předem
              telefonicky nebo pomocí servisního formuláře.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Podle%C5%A1%C3%ADn%20161%2F1%2C%20273%2025%20Podle%C5%A1%C3%ADn"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-6 py-3"
              >
                Navigovat do dílny ↗
              </a>
              <a href="/#servis" className="border border-black px-6 py-3">
                Vyplnit servisní formulář
              </a>
            </div>
          </section>
          {/* Hero fotografie */}

          <section className="mt-32">
            <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">
              <Image
                src="/workshop/hero.jpg"
                alt="Dílna Custom Cycling Lab"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                preload
                className="object-cover"
              />
            </div>
          </section>

          {/* Text */}

          <section className="mt-24 max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-black/40">
              Dílna
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-light leading-tight">
              Kde vzniká precizní servis.
            </h2>

            <p className="mt-8 text-lg text-black/70 leading-8">
              Každé kolo, které projde dílnou Custom Cycling Lab, dostává
              stejnou péči bez ohledu na to, zda jde o běžný servis, kompletní
              stavbu nebo přípravu závodního kola. Pracuji s profesionálním
              vybavením, kvalitním nářadím a důrazem na každý detail.
            </p>
          </section>

          {/* Galerie */}

          <section className="mt-20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[420px] overflow-hidden rounded-2xl">
                <Image
                  src="/workshop/workshop-1.jpg"
                  alt="Dílna"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="relative h-[420px] overflow-hidden rounded-2xl">
                <Image
                  src="/workshop/workshop-2.jpg"
                  alt="Dílna"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="relative h-[420px] overflow-hidden rounded-2xl">
                <Image
                  src="/workshop/workshop-3.jpg"
                  alt="Dílna"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="relative h-[420px] overflow-hidden rounded-2xl">
                <Image
                  src="/workshop/workshop-4.jpg"
                  alt="Dílna"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
