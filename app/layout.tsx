import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import { pageMetadata, site } from "@/lib/site";
import StructuredData from "./components/StructuredData";
import { businessSchema } from "@/lib/seo";

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
    "Servis kol Podlešín u Slaného | Custom Cycling Lab",
    "Servis a stavby kol v Podlešíně u Slaného, také pro jezdce z Kladna. Horké voskování Dynamic, keramická ochrana KORREK TFC a svoz kola po domluvě.",
  ),
  metadataBase: new URL(site.origin),
  verification: { google: "3ruAb6ah7jdzFrqfl1EJf6YtMkHm6Nt1jgWtOFRLRcI" },
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
        <StructuredData
          data={[
            businessSchema,
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": site.origin + "/#website",
              url: site.origin,
              name: site.name,
              inLanguage: "cs",
            },
          ]}
        />
        <CookieBanner />
      </body>
    </html>
  );
}
