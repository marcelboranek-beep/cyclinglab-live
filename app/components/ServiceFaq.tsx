const questions = [
  [
    "Co zahrnují ceny jednotlivých úkonů?",
    "Jde o ceny za práci. Materiál a náhradní díly se účtují zvlášť. Výjimkou je nalepení bezdušové pásky DT Swiss včetně pásky a voskování v horké lázni Dynamic včetně vosku.",
  ],
  [
    "Co zahrnuje Komplet pro fajnšmekry?",
    "Za 5 000 Kč získáš kompletní servis kola, keramickou ochranu KORREK TFC, ultrazvukové čištění řetězu a horké voskování Dynamic. Příprava laku zahrnuje dekontaminaci a u lesklého laku i rozleštění jemných škrábanců. Náhradní díly se účtují zvlášť.",
  ],
  [
    "Je horké voskování součástí běžného kompletního servisu?",
    "Kompletní servis za 2 900 Kč obsahuje běžné ošetření řetězu. Horké voskování Dynamic je v rozšířené variantě za 3 250 Kč. Ultrazvukové čištění i horké voskování zahrnuje péče o řetěz za 650 Kč a balíček Komplet pro fajnšmekry.",
  ],
  [
    "Jak dlouho servis trvá?",
    "Termín a rozsah si spolu domluvíme při vyřízení poptávky. Po předchozí rezervaci je možné kompletní servis zvládnout během jednoho dne. Odeslání formuláře samo o sobě termín nepotvrzuje.",
  ],
  [
    "Jak schválím další opravy?",
    "Po diagnostice ti zavolám s návrhem řešení. Rozsah práce a potřebné výměny spolu probereme před pokračováním servisu.",
  ],
  [
    "Jak funguje vyzvednutí a vrácení kola?",
    "Svoz stojí 8 Kč/km podle jednosměrné vzdálenosti od dílny v Podlešíně 161/1. Cena zahrnuje vyzvednutí i vrácení. Například 20 km od dílny znamená 160 Kč celkem. Místo, termín a cenu si potvrdíme předem.",
  ],
  [
    "Nevím, jaký servis potřebuji. Co mám udělat?",
    "Zavolej na +420 777 732 309 nebo napiš na info@customcyclinglab.com. Popiš, co tvoje kolo potřebuje, a společně vybereme vhodný postup.",
  ],
];
export default function ServiceFaq() {
  return (
    <section className="service-faq" aria-labelledby="service-faq-title">
      <h2 id="service-faq-title" className="text-3xl font-light">
        Než přivezeš kolo
      </h2>
      <div className="mt-8">
        {questions.map(([question, answer]) => (
          <details key={question} className="border-t border-current/20 py-5">
            <summary className="cursor-pointer font-medium">{question}</summary>
            <p className="mt-4 leading-relaxed opacity-75">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
