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

        <div className="mt-16 space-y-8 text-lg text-black/70">

          <p>
            Email: info@customcyclinglab.com
          </p>

          <p>
            Instagram: @customcyclinglab
          </p>

          <p>
            Telefon: +420 777 732 309
          </p>

        </div>

      </div>
    </main>
  );
}