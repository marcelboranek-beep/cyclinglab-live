import Image from "next/image";
import Header from "./components/Header";

import Footer from "./components/Footer";
import ServiceForm from "./components/ServiceForm";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  return (
    <span>
      {target}
      {suffix}
    </span>
  );
}
export default function CustomCyclingLab() {
  const services = [
    {
      title: "Individuální servis kol",
      text: "Kompletní péče o tvoje kolo s důrazem na detail.",
    },
    {
      title: "Individuální stavby kol",
      text: "Kolo na míru individuálním požadavkům.",
    },
    {
      title: "Vyzvednutí kola u zákazníka",
      text: "Nemáš čas? Nevadí, kolo si vyzvednu, kde bude potřeba.",
    },
    {
      title: "Odborná konzultace",
      text: "Pomohu s výběrem, nastavením a seřízením tvého kola.",
    },
  ];

  return (
    <main
      id="main-content"
      className="bg-[#f5f4f1] text-black min-h-screen font-sans"
    >
      <Header />
      <section className="relative min-h-[760px] md:min-h-screen overflow-hidden bg-black text-white">
        <Image
          src="/hero-bike.jpg"
          fill
          preload
          sizes="100vw"
          alt="Kolo v dílně Custom Cycling Lab v Podlešíně"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl px-6 sm:px-16 pt-36 pb-16">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-white/70">
              Servis a stavby kol · Podlešín u Slaného
            </p>
            <h1 className="text-5xl leading-tight md:text-7xl font-light">
              Radost z kola začíná
              <br />v detailech.
            </h1>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl">
              <div>
                <div className="text-3xl md:text-5xl font-light text-white">
                  <AnimatedCounter target={295} suffix="+" />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                  kol na zakázku
                </div>
              </div>

              <div>
                <div className="text-3xl md:text-5xl font-light text-white">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                  Let zkušeností
                </div>
              </div>

              <div>
                <div className="text-3xl md:text-5xl font-light text-white">
                  <AnimatedCounter target={100} suffix="%" />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                  Individuální přístup
                </div>
              </div>
            </div>

            <p className="mt-6 text-white/80 max-w-xl leading-relaxed">
              Servis kol v Podlešíně u Slaného, také pro jezdce z Kladna a
              okolí. Ultrazvukové čištění řetězů a horké voskování Dynamic.
              Vyzvednutí kola po domluvě.
            </p>
            <a
              href="/#servis"
              className="mt-12 inline-block border border-white px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-300"
            >
              Objednat servis
            </a>
            <a
              href="/cenik"
              className="mt-4 ml-0 sm:ml-4 inline-block border border-white px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-300"
            >
              Ceník servisu
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border-t border-black/10"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="border-b border-r border-black/10 p-10 md:p-14 min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <div className="mb-10 text-sm uppercase tracking-[0.25em] text-black/40">
                0{index + 1}
              </div>

              <h3 className="text-3xl font-light leading-snug max-w-xs">
                {service.title}
              </h3>

              <p className="mt-8 text-black/60 leading-relaxed max-w-sm">
                {service.text}
              </p>
            </div>

            <a
              href={
                index === 0
                  ? "/servis-kol"
                  : index === 1
                    ? "/stavby-kol"
                    : index === 2
                      ? "/vyzvednuti"
                      : "/konzultace"
              }
              className="mt-12 inline-block uppercase tracking-[0.2em] text-sm border-b border-black pb-2"
            >
              Více informací
            </a>
          </div>
        ))}
      </section>

      <section className="px-8 py-16 md:px-16 border-b border-black/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light">Péče o řetěz a ochrana laku</h2>
          <p className="mt-5 text-black/70 max-w-3xl">
            Vedle servisu kol nabízím ultrazvukové čištění a horké voskování
            řetězů Dynamic i keramickou ochranu KORREK TFC. Podrobnosti, rozsah
            a ceny najdeš u jednotlivých služeb.
          </p>
          <div className="mt-7 flex flex-wrap gap-6">
            <a href="/pece-o-retez" className="underline">
              Ultrazvukové čištění a horké voskování řetězu ↗
            </a>
            <a href="/keramicka-ochrana-kola" className="underline">
              Keramická ochrana kola KORREK TFC ↗
            </a>
          </div>
        </div>
      </section>
      <section id="work" className="bg-black text-white px-8 py-24 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-white/50">
              Stavby kol
            </p>

            <h2 className="mt-8 text-5xl md:text-6xl font-light leading-tight">
              Každé kolo
              <br />
              má svůj příběh.
            </h2>

            <a
              href="/stavby-kol"
              className="mt-12 inline-block border-b border-white pb-2 uppercase tracking-[0.2em] text-sm hover:opacity-70 transition"
            >
              Stavby kol
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              width={1152}
              height={2048}
              sizes="(max-width: 768px) 100vw, 33vw"
              src="/gallery-1.jpg"
              alt="Kolo z galerie staveb Custom Cycling Lab"
              className="h-[420px] w-full object-cover"
            />
            <Image
              width={1688}
              height={3008}
              sizes="(max-width: 768px) 100vw, 33vw"
              src="/gallery-2.jpg"
              alt="Detail zakázkové stavby kola Custom Cycling Lab"
              className="h-[420px] w-full object-cover"
            />
            <Image
              width={1688}
              height={3008}
              sizes="(max-width: 768px) 100vw, 33vw"
              src="/gallery-3.jpg"
              alt="Komponent ze stavby kola Custom Cycling Lab"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 py-24 md:px-16 items-center"
      >
        <Image
          width={6048}
          height={4024}
          sizes="(max-width: 1024px) 100vw, 50vw"
          src="/about.jpg"
          alt="Marcel Bořánek"
          className="w-full max-w-xl object-cover grayscale"
        />

        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-sm text-black/40">
            O mně
          </p>

          <h2 className="mt-8 text-5xl font-light leading-tight">
            Preciznost.
            <br />
            Zkušenost.
            <br />
            Vášeň.
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-black/70">
            Cyklistice se věnuji 18 let, z toho více než deset let stavím kola
            na míru. Každé kolo, které projde mýma rukama, dostává maximální
            péči a individuální přístup.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-black/70">
            Mým cílem je jediné — aby tvoje kolo fungovalo dokonale.
          </p>

          <a
            href="/o-mne"
            className="mt-12 inline-block border-b border-black pb-2 uppercase tracking-[0.2em] text-sm"
          >
            Více o mně
          </a>
        </div>
      </section>
      <section id="servis" className="bg-black text-white py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
              OBJEDNÁVKA SERVISU
            </div>

            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Potřebuješ servis
              <br />
              nebo seřízení kola?
            </h2>

            <p className="mt-6 text-white/60 max-w-xl">
              Vyplň formulář a ozvu se ti s návrhem termínu a rozsahu servisu.
            </p>
          </div>

          <ServiceForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
