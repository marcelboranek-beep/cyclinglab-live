import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import StructuredData from "../components/StructuredData";
import { pageMetadata } from "@/lib/site";
import { serviceSchema } from "@/lib/seo";
export const metadata = pageMetadata(
  "/keramicka-ochrana-kola",
  "Keramická ochrana kola KORREK TFC | Custom Cycling Lab",
  "Keramická ochrana kola KORREK TFC v Podlešíně u Slaného. Dekontaminace a rozleštění jemných škrábanců na lesklém laku. Příplatek k servisu 1 990 Kč.",
);
export default function CeramicCarePage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-[#f5f4f1] text-black px-6 md:px-16 pt-32 pb-24"
      >
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            path="/keramicka-ochrana-kola"
            label="Keramická ochrana kola"
          />
          <p className="uppercase tracking-[0.2em] text-xs text-black/50">
            Péče o rám · KORREK TFC · Podlešín
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
            Keramická ochrana kola
            <br />
            KORREK TFC
          </h1>
          <p className="mt-8 text-lg text-black/70 leading-relaxed max-w-3xl">
            Precizní péče o povrch kola začíná jeho přípravou. Keramická ochrana
            KORREK TFC vytváří tenkou vrstvu, která pomáhá odpuzovat vodu a
            nečistoty a usnadňuje následné mytí. Aplikaci nabízím v dílně Custom
            Cycling Lab v Podlešíně u Slaného.
          </p>
          <section
            className="mt-12 bg-[#171d1b] text-white p-7 md:p-10"
            aria-labelledby="ceramic-price"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Nadstandardní péče
            </p>
            <h2 id="ceramic-price" className="mt-5 text-3xl font-light">
              Keramická ochrana včetně přípravy laku
            </h2>
            <p className="mt-7 text-5xl font-light">1 990 Kč</p>
            <p className="mt-5 text-white/75">
              Službu je možné provést pouze při kompletním servisu kola.
              Kompletní servis za 2 900 Kč se účtuje zvlášť; varianta servisu s
              keramikou stojí celkem 4 890 Kč.
            </p>
            <a
              href="/#servis"
              className="mt-8 inline-block border border-white px-6 py-4 uppercase tracking-widest text-sm"
            >
              Poptat servis s keramikou ↗
            </a>
          </section>
          <section className="mt-14">
            <h2 className="text-3xl font-light">Co je v ceně</h2>
            <ul className="mt-6 list-disc pl-6 space-y-4 text-black/70">
              <li>Dekontaminace laku před aplikací ochrany.</li>
              <li>U lesklého laku rozleštění jemných škrábanců leštičkou.</li>
              <li>
                Aplikace keramické ochranné vrstvy KORREK TFC na vhodné vnější
                povrchy kola.
              </li>
            </ul>
            <p className="mt-6 text-black/70">
              Rozleštění jemných škrábanců není příslibem odstranění hlubokého
              poškození laku. Stav povrchu a rozsah přípravy spolu probereme
              před prací. Brzdné a třecí plochy a kluzné části odpružení se
              neošetřují.
            </p>
          </section>
          <section className="mt-14">
            <h2 className="text-3xl font-light">Ochrana a další péče</h2>
            <p className="mt-5 text-black/70">
              U této služby nabízím životnost ochranné vrstvy minimálně 15
              měsíců. Při předání spolu probereme následnou údržbu. Smyslem
              ošetření je snazší čištění a péče o povrch tvého kola.
            </p>
          </section>
          <section className="mt-14 border-t border-black/20 pt-8">
            <h2 className="text-3xl font-light">Komplet pro fajnšmekry</h2>
            <p className="mt-5 text-black/70">
              Chceš ošetřit i pohon?{" "}
              <a href="/cenik#balicky" className="underline">
                Balíček za 5 000 Kč
              </a>{" "}
              zahrnuje kompletní servis, keramickou ochranu, ultrazvukové
              čištění řetězu a horké voskování Dynamic. Oproti součtu
              jednotlivých služeb ušetříš 540 Kč.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <a href="/pece-o-retez" className="underline">
                Čištění a horké voskování řetězu
              </a>
              <a href="/cenik" className="underline">
                Ceník servisu
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
          "/keramicka-ochrana-kola",
          "Keramická ochrana kola KORREK TFC",
          "Aplikace včetně dekontaminace a rozleštění jemných škrábanců na lesklém laku za 1 990 Kč. Pouze při kompletním servisu za 2 900 Kč, celkem 4 890 Kč.",
          1990,
        )}
      />
    </>
  );
}
