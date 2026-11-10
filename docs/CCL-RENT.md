# CCL Rent – e-mailové poptávky

Stránka `/ccl-rent` používá původní Header, logo a vzhled patičky. Do menu přibyl pouze CCL Rent, e-shop není součástí této etapy.

## Rezervace

Formulář odesílá poptávku na info@customcyclinglab.com přes stávající Resend. Odpověď na oznámení míří na zákazníka. Dostupnost ověří a rezervaci potvrdí majitel osobně. Databáze není potřeba; termíny se automaticky neblokují, což je uvedeno před odesláním i po něm. Server kontroluje vstupy a cenu znovu spočítá; úspěch hlásí až po přijetí zprávy poskytovatelem.

## Ceník

- Den vyzvednutí zdarma, den vrácení placený. Pondělí–pátek = 4 dny. Kalendářní dny se počítají nezávisle na změně letního času.
- Jeden Evoc Road Bike Bag PRO: 250 Kč/den, od 15 placených dní 200 Kč/den za všechny dny. Kauce 10 000 Kč zvlášť.
- Jeden Thule EasyFold XT 933: 150 Kč/den, kauce 7 000 Kč zvlášť.
- Zabalení 800 Kč a složení po návratu 800 Kč, pouze u Evoc.
- Dovoz k terminálu letiště v Praze: cena po domluvě, nezahrnutá do součtu.
- Předání CCL, Podlešín 161/1, Podlešín, po domluvě. Vrácení tentýž den řešit telefonicky, nemá automaticky stanovenou cenu.

## Nasazení

Použít stávající Vercel projekt napojený na marcelboranek-beep/cyclinglab-live. Podle majitele obsluhuje obě domény. Zachovat RESEND_API_KEY ve Vercel Environment Variables a ověřeného odesílatele info@customcyclinglab.com. Klíč nikdy nepatří do Gitu či chatu. Místně patří do ignorovaného .env.local; bez klíče stránka nabízí kalkulaci a telefonní/e-mailový kontakt. Skutečné doručení poptávky je nutné po nasazení ověřit s majitelem.

Původní checkout obsahoval uživatelské změny v app/page.tsx a app/layout.tsx a nové komponenty Header/MobileMenu. Zachovat je, nepřepisovat.
