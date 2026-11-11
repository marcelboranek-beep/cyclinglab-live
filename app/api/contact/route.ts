import { Resend } from "resend";
import { bikeTypes, deliveryMethods, serviceOptions } from "@/lib/services";

const fail = (error: string, status = 400) =>
  Response.json(
    { error },
    { status, headers: { "Cache-Control": "no-store" } },
  );
export async function POST(req: Request) {
  try {
    if (!req.headers.get("content-type")?.includes("application/json"))
      return fail("Neplatný formulář.", 415);
    const text = await req.text();
    if (text.length > 16000) return fail("Formulář je příliš dlouhý.", 413);
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      return fail("Neplatný formulář.");
    }
    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body) ||
      body.website
    )
      return fail("Neplatný formulář.");
    const valid = (key: string, max: number) =>
      typeof body[key] === "string" &&
      body[key].trim().length > 0 &&
      body[key].length <= max;
    if (!valid("name", 120) || !valid("email", 254) || !valid("phone", 40))
      return fail("Vyplň jméno, e-mail a telefon.");
    const name = body.name.trim(),
      email = body.email.trim(),
      phone = body.phone.trim();
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^[+\d\s()\-]{7,40}$/.test(phone)
    )
      return fail("Zkontroluj e-mail a telefon.");
    if (
      !bikeTypes.some((value) => value === body.bikeType) ||
      !deliveryMethods.some((value) => value === body.deliveryMethod) ||
      !serviceOptions.some((option) => option.value === body.serviceType)
    )
      return fail("Vyber typ kola, službu a způsob předání.");
    if (
      typeof body.message !== "string" ||
      body.message.length > 4000 ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        body.requestId ?? "",
      )
    )
      return fail("Obnov stránku a vyplň formulář znovu.");
    if (!process.env.RESEND_API_KEY)
      return fail(
        "Odesílání je dočasně nedostupné. Zavolej na +420 777 732 309.",
        503,
      );
    const { data, error } = await new Resend(
      process.env.RESEND_API_KEY,
    ).emails.send(
      {
        from: "info@customcyclinglab.com",
        to: "info@customcyclinglab.com",
        replyTo: email,
        subject: `Nová servisní poptávka od ${name.replace(/[\r\n]/g, " ")}`,
        text: `Jméno: ${name}\nE-mail: ${email}\nTelefon: ${phone}\nTyp kola: ${body.bikeType}\nSlužba: ${body.serviceType}\nPředání: ${body.deliveryMethod}\n\nPopis: ${body.message.trim()}\n\nČíslo poptávky: ${body.requestId}`,
      },
      { idempotencyKey: `service-${body.requestId}` },
    );
    if (error || !data?.id)
      return fail(
        "Poptávku se nepodařilo odeslat. Zkus to znovu nebo zavolej na +420 777 732 309.",
        502,
      );
    return Response.json(
      { status: "sent" },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return fail(
      "Poptávku se nepodařilo odeslat. Zkus to znovu nebo zavolej na +420 777 732 309.",
      503,
    );
  }
}
