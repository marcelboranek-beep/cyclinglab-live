# SEO — Custom Cycling Lab

## Nastavení webu
- Kanonická doména: https://www.customcyclinglab.com; .cz přesměrovává se zachováním cesty a parametrů.
- Lokální kontext: skutečná dílna Podlešín 161/1, zákazníci ze Slaného, Kladna a okolí. Web netvrdí, že má v těchto městech další pobočky.
- Vlastní titulky a popisy stránek, Open Graph a Twitter metadata, český jazyk, jediný H1 na každé stránce.
- Stabilní identifikátor firmy v JSON-LD, skutečná adresa a kontakty, oblast služeb a nabídka s cenami. Nevymyšlené recenze, hodnocení, souřadnice ani pevná otevírací doba.
- Stránky /pece-o-retez a /keramicka-ochrana-kola mají samostatný popis skutečné nabídky, Service a BreadcrumbList a funkční odkazy z úvodu, servisu i ceníku.
- Sitemap zahrnuje nové stránky. Nevkládáme fiktivní lastmod ani meta keywords.
- Velké fotografie používají next/image, rozměry a responzivní sizes. Hlavní fotografie má preload, ostatní se načítají podle potřeby.

## Search Console

Majitel se přihlásil do Google Search Console účtem info@customcyclinglab.com. Byla přidána URL-prefix služba https://www.customcyclinglab.com/ a do webu vložena veřejná HTML ověřovací značka vydaná tímto účtem. Dokončení ověření a odeslání sitemap ještě čeká na zveřejnění značky.

1. Přihlásit vlastní Google účet do https://search.google.com/search-console.
2. Nejjednodušší pro současné nasazení je URL-prefix https://www.customcyclinglab.com/ a ověření značkou HTML. Doménová služba je širší a vyžaduje DNS.
3. Přesný veřejný token z Google lze vložit do metadata.verification.google nebo do GOOGLE_SITE_VERIFICATION při sestavení. Nevymýšlet token ani nepoužívat cizí účet.
4. Až je značka nasazená a dostupná v HTML hlavní stránky, potvrdit Ověřit v účtu majitele.
5. Odeslat sitemap https://www.customcyclinglab.com/sitemap.xml a zkontrolovat hlavní URL a nové služby pomocí Kontroly adresy URL. Odeslání ani test nezaručuje indexaci či konkrétní pozici.
6. Po shromáždění dat sledovat dotazy, zobrazení, prokliky, indexaci a Core Web Vitals. Další změny mají vycházet ze skutečných dat.

## Firemní profil
Před zakládáním nového profilu ověřit, zda už existuje. Název, adresa, telefon, web a skutečná dostupnost mají odpovídat dílně. Ověření firmy provádí majitel podle postupu Google; neuvádět falešné otevírací hodiny ani recenze.

## Ověření změn
Produkční sestavení. HTTP kontrola 13 stránek včetně unikátních titulků, canonical, popisů, H1, JSON-LD, cen, interních odkazů a sitemap. Test optimalizované fotografie about.jpg na lokálním serveru: zdroj 1 874 650 B, WebP šířky 640 px 12 278 B. Toto není Lighthouse skóre ani měření reálných Core Web Vitals.

## Podklady
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://support.google.com/webmasters/answer/34592
