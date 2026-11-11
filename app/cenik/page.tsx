import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./cenik.css";

export const metadata: Metadata = {
  title: "Ceník servisu kol | Custom Cycling Lab",
  description:
    "Ceník servisu kol. Servisní balíčky, ultrazvukové čištění a horké voskování Dynamic i keramická ochrana KORREK TFC.",
};

export default function CenikPage() {
  return (
    <>
      <div className="price-header">
        <Header />
      </div>
      <main className="price-page">
        <div className="price-content">
          <section className="intro">
            <span className="eyebrow">Individuální péče o kolo</span>
            <h1>
              Péče v detailech.
              <br />
              Ceny přehledně.
            </h1>
            <p className="lede">
              Ceník jednotlivých servisních úkonů. Vyber si, co tvoje kolo
              potřebuje. S rozsahem opravy ti rád poradím.
            </p>
            <a className="btn" href="/#servis">
              POPTAT SERVIS ↗
            </a>
          </section>
          <section
            className="connoisseurs premium-panel"
            aria-labelledby="connoisseurs-title"
          >
            <div className="eyebrow">Nadstandardní péče</div>
            <h2 id="connoisseurs-title">Pro fajnšmekry</h2>
            <div className="premium-service">
              <div>
                <span className="eyebrow">Péče o řetěz · Dynamic</span>
                <h3>
                  Čistý řetěz.
                  <br />
                  Voskování v horké lázni.
                </h3>
                <p>Ultrazvukové čištění řetězu a voskování v horké lázni.</p>
              </div>
              <div className="premium-details">
                <p className="price">650,-</p>
              </div>
            </div>
            <div className="premium-service">
              <div>
                <span className="eyebrow">Péče o rám · KORREK TFC™</span>
                <h3>
                  Ochrana, která
                  <br />
                  podtrhne každý detail.
                </h3>
                <p>
                  Tenká keramická ochranná vrstva pomáhá odpuzovat vodu a
                  nečistoty a usnadňuje následné mytí. Precizní péče o povrchy
                  tvého kola.
                </p>
                <div className="premium-benefits">
                  <span>ODPUZOVÁNÍ VODY</span>
                  <span>SNADNĚJŠÍ ÚDRŽBA</span>
                </div>
              </div>
              <div className="premium-details">
                <p className="price">1 990,-</p>
                <p>
                  Životnost ochranné vrstvy
                  <br />
                  <strong>minimálně 15 měsíců.</strong>
                </p>
                <p>
                  V ceně je zahrnuta dekontaminace laku a u lesklého laku také
                  rozleštění jemných škrábanců leštičkou.
                </p>
                <p>
                  <strong>
                    Tuto službu je možné provést pouze při kompletním servisu
                    kola.
                  </strong>
                </p>
                <p className="surface-note">
                  Ošetření vhodných vnějších povrchů mimo brzdné a třecí plochy
                  a kluzné části odpružení.
                </p>
              </div>
            </div>
            <a className="btn" href="/#servis">
              POPTAT PÉČI ↗
            </a>
          </section>
          <section className="packages" aria-labelledby="balicky">
            <div className="eyebrow">Péče o celé kolo</div>
            <h2 id="balicky">Servisní balíčky</h2>
            <div className="package-grid">
              <article className="package">
                <h3>Základní servis</h3>
                <p className="price">1 090 Kč</p>
                <p>Kontrola a seřízení kola pro běžný provoz.</p>
                <ul>
                  <li>Seřízení řazení</li>
                  <li>Seřízení brzd</li>
                  <li>Dotažení důležitých spojů</li>
                  <li>Kontrola opotřebení komponentů</li>
                  <li>Kontrola tlaku a stavu plášťů</li>
                  <li>Vyčištění a namazání řetězu</li>
                </ul>
                <p className="note">
                  Pro pravidelně servisovaná kola, která nepotřebují kompletní
                  rozborku.
                </p>
                <a className="btn" href="/#servis">
                  OBJEDNAT SERVIS ↗
                </a>
              </article>
              <article className="package">
                <h3>Kompletní servis</h3>
                <p className="price">2 900 Kč</p>
                <p>Důkladná péče o kolo od diagnostiky po testovací jízdu.</p>
                <ul>
                  <li>
                    Umytí kola od hrubých nečistot a diagnostika důležitých
                    částí
                  </li>
                  <li>Konzultace navrženého řešení</li>
                  <li>Kompletní rozebrání a vyčištění kola</li>
                  <li>Čištění převodového systému ve speciálním roztoku</li>
                  <li>Vyčištění středového a hlavového složení</li>
                  <li>Namazání uložení sedlovky v rámu</li>
                  <li>Výměna brzdové kapaliny</li>
                  <li>Kontrola zapletených kol</li>
                  <li>Složení a dotažení momentovým klíčem</li>
                  <li>Navoskování řetězu a testovací jízda</li>
                  <li>Závěrečné vyleštění kola</li>
                </ul>
                <p className="note">
                  Po předchozí rezervaci je možné servis zvládnout během jednoho
                  dne.
                </p>
                <a className="btn" href="/#servis">
                  OBJEDNAT SERVIS ↗
                </a>
              </article>
            </div>
          </section>
          <section id="cenik">
            <div className="eyebrow">Ceník</div>
            <h2>Jednotlivé servisní úkony</h2>
            <table>
              <caption
                style={{
                  textAlign: "left",
                  color: "var(--muted)",
                  paddingBottom: "18px",
                }}
              >
                Práce na kole a péče o řetěz
              </caption>
              <thead>
                <tr>
                  <th scope="col">Služba</th>
                  <th scope="col">Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ultrazvukové čištění řetězu</td>
                  <td>300 Kč</td>
                </tr>
                <tr>
                  <td>
                    Voskování řetězu v horké lázni Dynamic
                    <small>Včetně vosku</small>
                  </td>
                  <td>350 Kč</td>
                </tr>
                <tr>
                  <td>Výměna duše</td>
                  <td>180 Kč</td>
                </tr>
                <tr>
                  <td>Výměna lanka včetně seřízení</td>
                  <td>300 Kč</td>
                </tr>
                <tr>
                  <td>Výměna pláště</td>
                  <td>200 Kč</td>
                </tr>
                <tr>
                  <td>Seřízení přehazovačky</td>
                  <td>200 Kč</td>
                </tr>
                <tr>
                  <td>Vypletení kola</td>
                  <td>1 200–1 400 Kč</td>
                </tr>
                <tr>
                  <td>Centrování jednoho kola</td>
                  <td>300 Kč</td>
                </tr>
                <tr>
                  <td>
                    Nalepení bezdušové pásky DT Swiss na jeden ráfek
                    <small>Včetně pásky</small>
                  </td>
                  <td>300 Kč</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              Ceny jednotlivých úkonů jsou za práci, materiál se účtuje zvlášť.
              Nalepení bezdušové pásky DT Swiss zahrnuje pásku a voskování
              řetězu v horké lázni Dynamic zahrnuje vosk.
            </p>
          </section>
          <section className="bottom">
            <div>
              <h2>Potřebuješ celkový servis?</h2>
              <p>
                Vyplň servisní formulář a společně domluvíme rozsah servisu i
                termín.
              </p>
              <a className="btn" href="/#servis">
                VYPLNIT SERVISNÍ FORMULÁŘ ↗
              </a>
            </div>
            <div>
              <h2>Nevíš, co zvolit?</h2>
              <p>
                Popiš mi problém nebo zavolej. Společně domluvíme další postup.
                Vyzvednutí kola je možné po domluvě.
              </p>
              <a href="tel:+420777732309">+420 777 732 309</a>
              <br />
              <a href="mailto:info@customcyclinglab.com">
                info@customcyclinglab.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
