import "server-only";

export class RentError extends Error {
  constructor(message: string, public status = 503) { super(message); }
}

export function configured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export function errorResponse(error: unknown) {
  return Response.json({ error: error instanceof RentError ? error.message : "Služba je dočasně nedostupná. Zkus to znovu nebo nám zavolej." }, {
    status: error instanceof RentError ? error.status : 503,
    headers: { "Cache-Control": "no-store" },
  });
}
