import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import StructuredData from "../components/StructuredData";
import { pageMetadata } from "@/lib/site";
import { serviceSchema } from "@/lib/seo";
export const metadata = pageMetadata(
  "/pece-o-retez",
  "Čištění a horké voskování řetězu | Podlešín, Custom Cycling Lab",
  "Ultrazvukové čištění a horké voskování řetězu Dynamic za 650 Kč. Individuální péče o řetěz v Podlešíně u Slaného, předání po domluvě.",
);
export default function ChainCarePage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-[#f5f4f1] text-black px-6 md:px-16 pt-32 pb-24"
      >
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs path="/pece-o-retez" label="Péče o řetěz" />
          <p className="uppercase tracking-[0.2em] text-xs text-black/50">
            Péče o řetěz · Dynamic · Podlešín
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
            Ultrazvukové čištění
            <br />a horké voskování řetězu
          </h1>
          <p className="mt-8 text-lg text-black/70 leading-relaxed max-w-3xl">
            Čistý řetěz a pečlivé ošetření patří k fungujícímu pohonu. V Custom
            Cycling Lab nabízím ultrazvukové čištění a voskování řetězu v horké
            lázni Dynamic. Dílna je v Podlešíně u Slaného; předání kola a
            případný svoz si domluvíme předem.
          </p>
          <section
            className="mt-12 bg-[#171d1b] text-white p-7 md:p-10"
            aria-labelledby="chain-package"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Kompletní péče o řetěz
            </p>
            <h2 id="chain-package" className="mt-5 text-3xl font-light">
              Čištění a horká lázeň Dynamic
            </h2>
            <p className="mt-5 text-white/75">
              Ultrazvukové čištění řetězu a následné voskování v horké lázni.
              Vosk je zahrnutý v ceně; nový řetěz součástí služby není.
            </p>
            <p className="mt-7 text-5xl font-light">650 Kč</p>
            <a
              href="/#servis"
              className="mt-8 inline-block border border-white px-6 py-4 uppercase tracking-widest text-sm"
            >
              Poptat péči o řetěz ↗
            </a>
          </section>
          <section className="mt-14">
            <h2 className="text-3xl font-light">Co si můžeš objednat</h2>
            <dl className="mt-6">
              <div className="flex justify-between gap-5 border-t border-black/20 py-5">
                <dt>Ultrazvukové čištění řetězu</dt>
                <dd className="whitespace-nowrap">300 Kč</dd>
              </div>
              <div className="flex justify-between gap-5 border-t border-black/20 py-5">
                <dt>Voskování řetězu v horké lázni Dynamic, včetně vosku</dt>
                <dd className="whitespace-nowrap">350 Kč</dd>
              </div>
            </dl>
            <p className="mt-5 text-black/70">
              Ve formuláři jsou obě služby spojené do kompletní péče za 650 Kč.
              Samostatný úkon si domluvíme telefonicky nebo e-mailem.
            </p>
          </section>
          <section className="mt-14">
            <h2 className="text-3xl font-light">Jak předání probíhá</h2>
            <ol className="mt-6 list-decimal pl-6 space-y-4 text-black/70">
              <li>
                Vyplň servisní formulář a vyber kompletní péči o řetěz. Do
                poznámky můžeš doplnit stav kola a své požadavky.
              </li>
              <li>
                Ozvu se ti a domluvíme termín, rozsah práce a předání. Pokud je
                řetěz opotřebený, případnou výměnu nejprve probereme.
              </li>
              <li>
                Po vyčištění a horkém voskování spolu probereme další péči podle
                toho, jak a v jakých podmínkách jezdíš.
              </li>
            </ol>
          </section>
          <section className="mt-14 border-t border-black/20 pt-8">
            <h2 className="text-3xl font-light">Péče o celé kolo</h2>
            <p className="mt-5 text-black/70">
              Ultrazvukové čištění a horké voskování zahrnuje také{" "}
              <a href="/cenik#balicky" className="underline">
                Komplet pro fajnšmekry za 5 000 Kč
              </a>{" "}
              spolu s kompletním servisem a keramickou ochranou. Samotná
              varianta kompletního servisu s horkým voskováním stojí 3 250 Kč;
              ultrazvukové čištění do této varianty zahrnuto není.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <a href="/servis-kol" className="underline">
                Servis kol
              </a>
              <a href="/keramicka-ochrana-kola" className="underline">
                Keramická ochrana kola
              </a>
              <a href="/kontakt" className="underline">
                Kontakt a předání
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <StructuredData
        data={serviceSchema(
          "/pece-o-retez",
          "Ultrazvukové čištění a horké voskování řetězu Dynamic",
          "Obě služby dohromady za 650 Kč včetně vosku Dynamic. Předání po domluvě v Podlešíně.",
          650,
        )}
      />
    </>
  );
}
