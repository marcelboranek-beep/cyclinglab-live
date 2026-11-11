# Úpravy po kontrole webu — 11. 11. 2026

- Potvrzená adresa: Podlešín 161/1, 273 25 Podlešín. Instagram: @custom_cycling_lab. Veřejný e-mail: info@customcyclinglab.com.
- Hlavní doména https://www.customcyclinglab.com. Next redirects převádějí .cz i bare .com na hlavní doménu s původní cestou a parametry. Canonical, sitemap a robots jsou shodné.
- Svoz: 8 Kč/km z jednosměrné vzdálenosti; zahrnuje vyzvednutí i vrácení. Příklad 20 km = 160 Kč. Potvrzeno majitelem.
- Sdílené menu a patička na všech stránkách; mobilní menu s Escape a návratem fokusu. Trvalé popisky formuláře a stavy odeslání.
- Šest schválených možností formuláře je v lib/services.ts. Server používá stejný seznam. Ostatní úkony lze poptat přímo telefonem/e-mailem.
- Servisní formulář validuje vstupy, posílá prostý text, nastavuje reply-to, používá idempotency key a hlásí úspěch pouze po přijetí poskytovatelem. Nenahrazuje potvrzení doručení do zákazníkovy schránky.
- Google Ads se nenačítá před souhlasem. Volba cookies se dá změnit z patičky. Odvolání souhlasu vypíná měření a obnoví stránku bez Google skriptu.
- Zkušenosti jsou rozlišeny: 18 let cyklistiky a více než 10 let staveb. Jednotný styl tykání v marketingových textech, ceny v Kč a skutečné hodnoty statistik už v serverovém HTML.
- Galerie používá stávající fotografie. Konkrétní případové studie, rozpočty a zákaznické citace vyžadují skutečné podklady od majitele; nejsou vymyšlené.

## Ověření

`npm run build` a `npm run test:contact`. Testy kontaktu používají výhradně mock poskytovatele a neposílají e-maily. Kontrola 11 stránek: jazyk, jeden H1, canonical a interní odkazy. Kontrola 308 přesměrování s parametry, sitemap a robots. V prohlížeči: kontakt, formulář na mobilu, menu, Escape a nastavení cookies.

Pro skutečnou testovací poptávku je potřeba souhlas majitele; přijetí API poskytovatele neprokazuje doručení do schránky. Zachovat produkční RESEND_API_KEY ve Vercelu.
