import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import { pageMetadata, site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...pageMetadata(
    "/",
    "Custom Cycling Lab | Servis a stavby kol",
    "Individuální servis a stavby kol. Ultrazvukové čištění řetězů, horké voskování Dynamic, keramická ochrana KORREK TFC a svoz kola po domluvě.",
  ),
  metadataBase: new URL(site.origin),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Script id="google-consent-default" strategy="beforeInteractive">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
    gtag('js', new Date());
  `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BikeStore",
              name: site.name,
              url: site.origin,
              telephone: site.tel,
              email: site.email,
              image: site.origin + "/workshop/hero.jpg",
              sameAs: [site.instagram],
              hasMap: site.map,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Podlešín 161/1",
                addressLocality: "Podlešín",
                postalCode: "273 25",
                addressCountry: "CZ",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <CookieBanner />
      </body>
    </html>
  );
}
