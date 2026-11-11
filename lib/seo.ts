import { site } from "./site";
export const businessId = site.origin + "/#business";
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "BikeStore",
  "@id": businessId,
  name: site.name,
  url: site.origin,
  telephone: site.tel,
  email: site.email,
  description:
    "Individuální servis a stavby kol v Podlešíně u Slaného. Ultrazvukové čištění a horké voskování řetězů Dynamic, keramická ochrana KORREK TFC a vyzvednutí kola po domluvě.",
  image: [site.origin + "/workshop/hero.jpg", site.origin + "/service-new.jpg"],
  logo: site.origin + "/logo-white.png",
  sameAs: [site.instagram],
  hasMap: site.map,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Podlešín 161/1",
    addressLocality: "Podlešín",
    postalCode: "273 25",
    addressCountry: "CZ",
  },
  areaServed: [
    "Podlešín",
    "Slaný",
    "Kladno",
    "Praha",
    "Kralupy nad Vltavou",
  ].map((name) => ({
    "@type": "City",
    name,
  })),
  currenciesAccepted: "CZK",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servis a péče o kolo",
    itemListElement: [
      {
        "@type": "Offer",
        price: "1090",
        priceCurrency: "CZK",
        url: site.origin + "/cenik",
        itemOffered: { "@type": "Service", name: "Základní servis kola" },
      },
      {
        "@type": "Offer",
        price: "2900",
        priceCurrency: "CZK",
        url: site.origin + "/cenik",
        itemOffered: { "@type": "Service", name: "Kompletní servis kola" },
      },
      {
        "@type": "Offer",
        price: "650",
        priceCurrency: "CZK",
        url: site.origin + "/pece-o-retez",
        itemOffered: {
          "@type": "Service",
          name: "Ultrazvukové čištění a horké voskování řetězu Dynamic",
        },
      },
      {
        "@type": "Offer",
        price: "1990",
        priceCurrency: "CZK",
        url: site.origin + "/keramicka-ochrana-kola",
        description:
          "Pouze při kompletním servisu kola, který se účtuje zvlášť.",
        itemOffered: {
          "@type": "Service",
          name: "Keramická ochrana kola KORREK TFC",
        },
      },
      {
        "@type": "Offer",
        price: "5000",
        priceCurrency: "CZK",
        url: site.origin + "/cenik",
        itemOffered: {
          "@type": "Service",
          name: "Komplet pro fajnšmekry: kompletní servis, keramika, čištění a horké voskování řetězu",
        },
      },
    ],
  },
};
export function serviceSchema(
  path: string,
  name: string,
  description: string,
  price: number,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": site.origin + path + "#service",
    name,
    description,
    url: site.origin + path,
    provider: { "@id": businessId },
    areaServed: businessSchema.areaServed,
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency: "CZK",
      url: site.origin + path,
      description,
    },
  };
}
