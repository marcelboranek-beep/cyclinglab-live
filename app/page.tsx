"use client";

import { useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += Math.ceil(target / 25);

      if (start >= target) {
        start = target;
        clearInterval(interval);
      }

      setCount(start);
    }, 40);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
export default function CustomCyclingLab() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      bikeType: formData.get("bikeType"),
      deliveryMethod: formData.get("deliveryMethod"),
      message: formData.get("message"),
    }),
  });

  if (response.ok) {
    alert("Poptávka byla úspěšně odeslána.");
    form.reset();
  } else {
    alert("Nepodařilo se odeslat formulář.");
  }
};
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
    <main className="bg-[#f5f4f1] text-black min-h-screen font-sans">
      <section className="relative h-screen overflow-hidden bg-black text-white">
        <img
          src="/hero-bike.jpg"
          alt="Custom Cycling Lab"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

<header className="relative z-10 flex items-center justify-between px-16 py-8">
  <div className="relative h-64 w-[768px] ml-[-180px]">
  <img
    src="/logo-white.png"
    alt="Custom Cycling Lab"
    className="object-contain h-full w-full"
  />
</div>
          <nav className="hidden gap-10 text-sm uppercase tracking-[0.25em] md:flex">
            <a href="#services" className="hover:opacity-70 transition">
              Služby
            </a>
            <a href="/o-mne" className="hover:opacity-70 transition">
              O mně
            </a>
            <a href="/stavby-kol" className="hover:opacity-70 transition">
              Stavby kol
            </a>
            <a href="/kontakt" className="hover:opacity-70 transition">
              Kontakt
            </a>
          </nav>
        </header>

        <div className="relative z-10 max-w-3xl px-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl leading-tight md:text-7xl font-light">
              Radost z kola začíná
              <br />
              v detailech.
            </h2>
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
           
            <a
  href="#services"
  className="mt-12 inline-block border border-white px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-300"
>
  Prozkoumat služby
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
            <img
              src="/gallery-1.jpg"
              alt="Bike"
              className="h-[420px] w-full object-cover"
            />
            <img
              src="/gallery-2.jpg"
              alt="Bike detail"
              className="h-[420px] w-full object-cover"
            />
            <img
              src="/gallery-3.jpg"
              alt="Bike component"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 py-24 md:px-16 items-center"
      >
        <img
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
            Cyklistice se věnuji více jak deset let. Každé kolo, které projde mýma
            rukama, dostává maximální péči a individuální přístup.
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
<section
  id="servis"
  className="bg-black text-white py-32 px-8"
>
  <div className="max-w-4xl mx-auto">

    <div className="mb-10">

  <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
    OBJEDNÁVKA SERVISU
  </div>

  <h2 className="text-3xl md:text-5xl font-light leading-tight">
    Potřebujete servis
    <br />
    nebo seřízení kola?
  </h2>

  <p className="mt-6 text-white/60 max-w-xl">
    Vyplňte formulář a ozvu se vám s návrhem termínu a rozsahu servisu.
  </p>

</div>

    <form
  className="space-y-8"
  onSubmit={handleSubmit}
>

      <input
  name="name"
  type="text"
  placeholder="Jméno *"
  className="w-full bg-transparent border-b border-white/20 pb-4 text-white outline-none transition-colors focus:border-white"
/>

      <input
  name="email"
  type="email"
  placeholder="E-mail *"
  className="w-full bg-transparent border-b border-white/20 pb-4 text-white outline-none transition-colors focus:border-white"
/>

      <input
  name="phone"
  type="tel"
  placeholder="Telefon *"
  className="w-full bg-transparent border-b border-white/20 pb-4 text-white outline-none transition-colors focus:border-white"
/>

      <div className="relative">

  <select
  name="bikeType"
  className="w-full bg-transparent text-white border-b border-white/20 pb-4 outline-none appearance-none"
  defaultValue=""
>
    <option value="" disabled>
      Jaké máte kolo?
    </option>
    <option>MTB</option>
    <option>Silniční</option>
    <option>Gravel</option>
    <option>Treking</option>
    <option>E-bike</option>
    <option>Jiné</option>
  </select>

  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
⌄
</span>

</div>

      <div className="relative">

  <select
  name="deliveryMethod"
  className="w-full bg-black text-white border-b border-white/20 pb-4 outline-none appearance-none"
  defaultValue=""
>
  <option value="" disabled>
    Jak chcete kolo předat?
  </option>
  <option>Přivezu osobně</option>
  <option>Chci vyzvednutí kola na adrese</option>
</select>

  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
    ⌄
  </span>

</div>

      <textarea
  name="message"
  rows={5}
  placeholder="Dotaz / Popis servisu *"
  className="w-full bg-black text-white border-b border-white/20 pb-4 outline-none appearance-none"
/>
 

      <button
  type="submit"
  className="mt-10 border border-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
>
  Odeslat poptávku
</button>

    </form>

  </div>
</section>
      <footer
        id="contact"
        className="bg-black text-white px-8 py-16 md:px-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-4xl font-light">CCL</h3>
            <p className="mt-3 text-xl">Custom Cycling Lab</p>
            <p className="mt-2 uppercase tracking-[0.3em] text-sm text-white/50">
              Marcel Bořánek
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-white/50">
              Kontakt
            </p>

            <div className="mt-6 space-y-3 text-white/80">
              <a
                href="tel:+420777732309"
                className="block hover:text-white transition"
              >
                +420 777 732 309
              </a>

              <a
                href="mailto:info@customcyclinglab.cz"
                className="block hover:text-white transition"
              >
                info@customcyclinglab.com
              </a>

              <p>Podlešín, Česká republika</p>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-white/50">
              Otevírací doba
            </p>

            <div className="mt-6 space-y-3 text-white/80">
              <p>Otevřeno dle telefonické domluvy</p>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-white/50">
              Sledujte mě
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/custom_cycling_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 rounded-full px-5 py-3 hover:bg-white hover:text-black transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-white/40 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2025 Custom Cycling Lab</p>

          <div className="flex gap-6">
            <a href="#">Zásady ochrany osobních údajů</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
