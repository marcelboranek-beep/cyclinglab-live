import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      bikeType,
      deliveryMethod,
      message,
    } = body;

    const data = await resend.emails.send({
      from: "info@customcyclinglab.com",
      to: "info@customcyclinglab.com",
      subject: `Nová servisní poptávka od ${name}`,
      html: `
        <h2>Nová servisní poptávka</h2>

        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>

        <hr>

        <p><strong>Typ kola:</strong> ${bikeType}</p>
        <p><strong>Způsob předání:</strong> ${deliveryMethod}</p>

        <hr>

        <p><strong>Popis servisu:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Nepodařilo se odeslat formulář." },
      { status: 500 }
    );
  }
}