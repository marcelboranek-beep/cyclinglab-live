import Image from "next/image";

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-[#f5f4f1] text-black px-8 py-24 md:px-16">

      <a
        href="/"
        className="fixed top-8 left-8 z-50 flex items-center gap-3 text-sm uppercase tracking-[0.2em] hover:opacity-60 transition"
      >
        <span className="text-2xl leading-none">←</span>
        Zpět
      </a>

      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-sm text-black/40">
          Kontakt
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
          Ozvěte se mi.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-black/60 leading-8">
          Každý servis i stavbu kola řeším individuálně.
          Pokud máte zájem o servis, stavbu kola nebo konzultaci,
          neváhejte mě kontaktovat.
        </p>

        <div className="mt-16 space-y-8 text-lg text-black/70">

          <p>
            <strong>Email:</strong> info@customcyclinglab.com
          </p>

          <p>
            <strong>Instagram:</strong> @customcyclinglab
          </p>

          <p>
            <strong>Telefon:</strong> +420 777 732 309
          </p>

        </div>

        {/* Hero fotografie */}

        <section className="mt-32">

          <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">

            <Image
              src="/workshop/hero.jpg"
              alt="Dílna Custom Cycling Lab"
              fill
              priority
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
            Každé kolo, které projde dílnou Custom Cycling Lab,
            dostává stejnou péči bez ohledu na to, zda jde o běžný servis,
            kompletní stavbu nebo přípravu závodního kola.
            Pracuji s profesionálním vybavením, kvalitním nářadím
            a důrazem na každý detail.
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
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/workshop/workshop-2.jpg"
                alt="Dílna"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/workshop/workshop-3.jpg"
                alt="Dílna"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/workshop/workshop-4.jpg"
                alt="Dílna"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}