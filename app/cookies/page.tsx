import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "/cookies",
  "Nastavení a používání cookies | Custom Cycling Lab",
  "Informace o nezbytných a volitelných cookies. Nastavení souhlasu s reklamním měřením na webu Custom Cycling Lab.",
);

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="w-full bg-[#171d1b] text-white px-6 pt-36 pb-24"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-10">
            Zásady používání cookies
          </h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p>
              Webové stránky customcyclinglab.com používají soubory cookies za
              účelem zajištění správné funkčnosti webu a měření účinnosti
              reklamních kampaní.
            </p>

            <h2 className="text-2xl text-white">Co jsou cookies?</h2>

            <p>
              Cookies jsou malé textové soubory ukládané do vašeho zařízení,
              které pomáhají webovým stránkám správně fungovat a poskytovat
              informace o jejich používání.
            </p>

            <h2 className="text-2xl text-white">Nezbytné cookies</h2>

            <p>
              Tyto cookies jsou nezbytné pro správné fungování webu a nelze je
              vypnout.
            </p>

            <h2 className="text-2xl text-white">Marketingové cookies</h2>

            <p>
              Používáme marketingové cookies společnosti Google za účelem měření
              výkonu reklamních kampaní Google Ads.
            </p>

            <p>Tyto cookies jsou ukládány pouze na základě vašeho souhlasu.</p>

            <h2 className="text-2xl text-white">Správa souhlasu</h2>

            <p>
              Souhlas s používáním marketingových cookies můžete kdykoliv změnit
              nebo odvolat pomocí odkazu „Nastavení cookies“ v patičce.
            </p>

            <h2 className="text-2xl text-white">Kontakt</h2>

            <p>
              Custom Cycling Lab – Marcel Bořánek
              <br />
              IČO: 07881070
              <br />
              Podlešín 161/1, 273 25 Podlešín
              <br />
              info@customcyclinglab.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
