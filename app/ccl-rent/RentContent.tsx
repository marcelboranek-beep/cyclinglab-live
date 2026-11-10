"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { currency, isProduct, pragueToday, products, quote, type ProductId } from "@/lib/rent/pricing";
import s from "./rent.module.css";


export default function RentContent({ enabled }: { enabled: boolean }) {
  const root = useRef<HTMLElement>(null);
  const [product, setProduct] = useState<ProductId>("evoc");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [packing, setPacking] = useState(false);
  const [unpacking, setUnpacking] = useState(false);
  const [airport, setAirport] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const requestId = useRef("");
  const [today, setToday] = useState("");

  useEffect(() => { setToday(pragueToday()); }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add(s.reveal); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    root.current?.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  let price: ReturnType<typeof quote> | null = null, dateError = "";
  if (start && end) {
    try { price = quote(product, start, end, packing, unpacking); if (today && start < today) dateError = "Vyzvednutí nesmí být v minulosti."; }
    catch (error) { dateError = error instanceof Error ? error.message : "Zkontroluj termín."; }
  }
  const ready = enabled && !dateError && price !== null;

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || busy) return;
    setBusy(true); setMessage("");
    const form = new FormData(event.currentTarget);
    if (!requestId.current) requestId.current = crypto.randomUUID();
    try {
      const response = await fetch("/api/rent", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        product, start, end, packing: product === "evoc" && packing, unpacking: product === "evoc" && unpacking,
        airport: product === "evoc" && airport, name: form.get("name"), email: form.get("email"), phone: form.get("phone"),
        message: form.get("message"), consent: form.get("consent") === "on", website: form.get("website"), requestId: requestId.current,
      }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setSuccess(data.id);
    } catch (error) { setMessage(error instanceof Error ? error.message : "Odeslání se nepodařilo. Zkus to znovu nebo nám zavolej."); }
    finally { setBusy(false); }
  }

  return <main className={s.page} ref={root}>
    <section className={s.hero}>
      <Image src="/rent/hero.jpg" alt="Detail kola připravovaného k přepravě v dílně CCL, logo Evoc" fill priority sizes="100vw" className={s.heroImage} />
      <div className={s.shade} />
      <div className={s.heroCopy}><div className={s.eyebrow}>CCL Rent</div><h1>Za zážitky.<br />S vlastním<br />kolem.</h1><p>Půjč si vybavení na cestu autem i letadlem. O tvoje kolo se postarám i před odletem.</p><button className={s.button} onClick={() => scrollTo("rent-products")}>Vybrat vybavení</button></div>
    </section>
    <div className={s.content}>
      <div className={s.eyebrow}>Půjčovna</div><h2 className={s.heading} id="rent-products" style={{ scrollMarginTop: 110 }}>Dvě cesty. Stejná radost z kola.</h2>
      <div className={s.products}>
        {(["evoc", "thule"] as const).map((id, index) => <article className={s.product} key={id} data-reveal>
          <div className={`${s.photo} ${id === "evoc" ? s.evoc : ""}`}><Image src={`/rent/${id}.jpg`} alt={products[id].name} fill sizes="(max-width:650px) 100vw, 50vw" /></div>
          <div className={s.eyebrow}>0{index + 1} / {id === "evoc" ? "Letadlem" : "Autem"}</div><h2>{products[id].name}</h2>
          <p className={s.price}>{id === "evoc" ? "250" : "150"} Kč <small>/ den</small></p>
          <p className={s.muted}>{id === "evoc" ? <>Při zapůjčení na 15 a více placených dní 200 Kč/den<br />za všechny dny zápůjčky.</> : <>Skládací nosič na tažné zařízení<br />pro přepravu dvou kol.</>}</p>
          <div className={s.deposit}><span>Vratná kauce</span><span>{currency(products[id].deposit)}</span></div>
          <button className={s.button} onClick={() => { setProduct(id); setMessage(""); scrollTo("rent-booking"); }}>Vybrat termín ↗</button>
        </article>)}
      </div>
      <section className={s.extras}>
        <div data-reveal><div className={s.eyebrow}>Více než půjčení</div><h2>O kolo se postarám.</h2><div className={s.service}><span>Rozložení a zabalení kola do kufru</span><span>800 Kč</span></div><div className={s.service}><span>Vybalení a složení kola po návratu</span><span>800 Kč</span></div><div className={s.service}><span>Dovoz zabaleného kufru k terminálu letiště v Praze</span><span>Po domluvě</span></div></div>
        <div data-reveal><div className={s.eyebrow}>Osobní předání</div><h2>Z dílny rovnou na cestu.</h2><p>CCL · Podlešín 161/1, Podlešín</p><p className={s.muted}>Vyzvednutí a vrácení po předchozí domluvě.<br />Od každého vybavení je k dispozici jeden kus.<br />Rezervaci osobně potvrdím.</p><p className={s.muted}>Den vyzvednutí se neúčtuje. Den vrácení ano.<br />Vyzvednutí v pondělí a vrácení v pátek = 4 placené dny.</p></div>
      </section>
      <section id="rent-booking" className={s.booking} data-reveal>
        <div className={s.eyebrow}>Rezervace</div><h2 className={s.heading}>Naplánuj svou cestu.</h2>
        {!enabled && <p className={s.notice}>Online rezervace právě připravujeme. Pro domluvu termínu zavolej na <a href="tel:+420777732309">+420 777 732 309</a> nebo napiš na <a href="mailto:info@customcyclinglab.com">info@customcyclinglab.com</a>.</p>}
        {success ? <div className={s.success} role="status"><h3>Poptávka byla přijata.</h3><p>Poptávka dorazila e-mailem do CCL. Ověřím dostupnost a osobně se ti ozvu s potvrzením nebo návrhem jiného termínu. Termín zatím není rezervovaný.</p><p className={s.muted}>Číslo poptávky: {success}</p></div> : <form onSubmit={submit}>
          <div className={s.fields}>
            <label className={s.wide}>Vybavení<select value={product} onChange={event => { if (isProduct(event.target.value)) setProduct(event.target.value); }}>{Object.entries(products).map(([id, item]) => <option key={id} value={id}>{item.name}</option>)}</select></label>
            <label>Vyzvednutí<input type="date" required min={today || undefined} value={start} onChange={event => setStart(event.target.value)} /></label><label>Vrácení<input type="date" required min={start || today || undefined} value={end} onChange={event => setEnd(event.target.value)} /></label>
          </div>
          {product === "evoc" && <div className={s.checks}><label><input type="checkbox" checked={packing} onChange={event => setPacking(event.target.checked)} />Zabalení +800 Kč</label><label><input type="checkbox" checked={unpacking} onChange={event => setUnpacking(event.target.checked)} />Složení po návratu +800 Kč</label><label><input type="checkbox" checked={airport} onChange={event => setAirport(event.target.checked)} />Dovoz na letiště Praha, cena po domluvě</label></div>}
          <div className={s.summary} aria-live="polite"><div>{dateError ? <p role="alert">{dateError}</p> : price ? <><p className={s.muted}>{price.days} placených dní × {currency(price.rate)}{price.services > 0 ? ` + služby ${currency(price.services)}` : ""}</p><strong>{currency(price.total)}</strong>{product === "evoc" && airport && <p className={s.muted}>+ dovoz na letiště dle domluvy</p>}</> : <p>Zvol termín pro výpočet ceny.</p>}<p className={s.muted}>Vratná kauce zvlášť: {currency(products[product].deposit)}</p></div></div>
          {enabled && <><div className={s.fields}><label>Jméno a příjmení<input name="name" autoComplete="name" required maxLength={120} /></label><label>E-mail<input name="email" type="email" autoComplete="email" required maxLength={254} /></label><label>Telefon<input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label><label className={s.wide}>Poznámka<textarea name="message" rows={3} maxLength={2000} placeholder="Například termín a terminál odletu." /></label></div><div className={s.honeypot} aria-hidden="true"><label>Web<input name="website" tabIndex={-1} autoComplete="off" /></label></div><label className={s.consent}><input type="checkbox" required name="consent" /><span>Beru na vědomí <Link href="/gdpr">zpracování osobních údajů</Link> pro vyřízení poptávky.</span></label><p className={s.notice}>Odesláním pošleš e-mailovou poptávku. Dostupnost ověřím a rezervaci osobně potvrdím. Termín se automaticky neblokuje. Platbu a předání spolu domluvíme.</p><button type="submit" className={s.button} disabled={!ready || busy} style={{ marginTop: 24 }}>{busy ? "Odesílám…" : "Odeslat poptávku rezervace ↗"}</button></>}
          {message && <p className={s.notice} role="alert">{message}</p>}
        </form>}
      </section>
    </div>
  </main>;
}
