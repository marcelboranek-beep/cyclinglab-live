import type { Metadata } from "next";
export const site = {
  origin: "https://www.customcyclinglab.com",
  name: "Custom Cycling Lab",
  email: "info@customcyclinglab.com",
  phone: "+420 777 732 309",
  tel: "+420777732309",
  address: "Podlešín 161/1, 273 25 Podlešín",
  instagram: "https://www.instagram.com/custom_cycling_lab/",
  map: "https://www.google.com/maps/search/?api=1&query=Podle%C5%A1%C3%ADn%20161%2F1%2C%20273%2025%20Podle%C5%A1%C3%ADn",
};
export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: site.origin + path },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.origin + "/hero-bike.jpg"],
    },
    openGraph: {
      title,
      description,
      url: site.origin + path,
      siteName: site.name,
      locale: "cs_CZ",
      type: "website",
      images: [{ url: site.origin + "/hero-bike.jpg", alt: site.name }],
    },
  };
}
