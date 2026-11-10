import { Resend } from "resend";
import { configured, errorResponse, RentError } from "@/lib/rent/store";
import { isProduct, pragueToday, products, quote } from "@/lib/rent/pricing";

export async function POST(request: Request) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) throw new RentError("Neplatný formulář.", 415);
    const text = await request.text();
    if (text.length > 12000) throw new RentError("Formulář je příliš dlouhý.", 413);
    let body;
    try { body = JSON.parse(text); } catch { throw new RentError("Neplatný formulář.", 400); }
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new RentError("Neplatný formulář.", 400);
    if (body.website) throw new RentError("Neplatný formulář.", 400);
    const string = (key: string, max: number) => {
      if (typeof body[key] !== "string" || !body[key].trim() || body[key].length > max) throw new RentError("Vyplň prosím správně kontaktní údaje.", 400);
      return body[key].trim();
    };
    const product = body.product;
    if (!isProduct(product)) throw new RentError("Vyber vybavení.", 400);
    const name = string("name", 120), email = string("email", 254), phone = string("phone", 40);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[+\d\s()\-]{7,40}$/.test(phone)) throw new RentError("Zkontroluj e-mail a telefon.", 400);
    if (body.consent !== true) throw new RentError("Potvrď seznámení se zpracováním osobních údajů.", 400);
    if (typeof body.message !== "string" || body.message.length > 2000) throw new RentError("Poznámka může mít nejvýše 2000 znaků.", 400);
    const start = string("start", 10), end = string("end", 10);
    let price;
    try { price = quote(product, start, end, body.packing === true, body.unpacking === true); }
    catch (error) { throw new RentError(error instanceof Error ? error.message : "Neplatný termín.", 400); }
    if (start < pragueToday()) throw new RentError("Vyzvednutí nesmí být v minulosti.", 400);
    if (!/^[0-9a-f-]{36}$/i.test(body.requestId ?? "")) throw new RentError("Obnov stránku a zkus to znovu.", 400);
    if (!configured()) throw new RentError("Odesílání je dočasně nedostupné. Zavolej na +420 777 732 309.");
    const packing = product === "evoc" && body.packing === true;
    const unpacking = product === "evoc" && body.unpacking === true;
    const airport = product === "evoc" && body.airport === true;
    const date = (value: string) => value.split("-").reverse().join(".");
    const { data, error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: "info@customcyclinglab.com", to: "info@customcyclinglab.com", replyTo: email,
      subject: `CCL Rent – nová poptávka: ${products[product].name}`,
      text: `Nová poptávka CCL Rent\nČíslo: ${body.requestId}\n\nJméno: ${name}\nE-mail: ${email}\nTelefon: ${phone}\n\nVybavení: ${products[product].name}\nVyzvednutí: ${date(start)}\nVrácení: ${date(end)}\n${price.days} placených dní × ${price.rate} Kč; den vyzvednutí zdarma.\nPůjčovné: ${price.rental} Kč\nDoplňkové služby: ${price.services} Kč\nCelkem bez kauce: ${price.total} Kč\nVratná kauce zvlášť: ${price.deposit} Kč\n\nZabalení: ${packing ? "ano (+800 Kč)" : "ne"}\nSložení po návratu: ${unpacking ? "ano (+800 Kč)" : "ne"}\nDovoz k terminálu letiště v Praze: ${airport ? "ano, cenu dohodnout zvlášť" : "ne"}\n\nPředání: CCL, Podlešín 161/1, Podlešín\nPoznámka: ${body.message.trim()}\n\nOvěř dostupnost a zákazníkovi rezervaci osobně potvrď nebo navrhni jiný termín. Odpovědí na tento e-mail kontaktuješ přímo zákazníka. Termín se automaticky neblokuje.`,
    }, { idempotencyKey: `rent-${body.requestId}` });
    if (error || !data?.id) throw new RentError("Poptávku se nepodařilo odeslat. Zkus to znovu nebo zavolej na +420 777 732 309.");
    return Response.json({ id: body.requestId, price, status: "sent" }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) { return errorResponse(error); }
}
