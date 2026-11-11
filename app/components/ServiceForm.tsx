"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { bikeTypes, deliveryMethods, serviceOptions } from "@/lib/services";

export default function ServiceForm() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const requestId = useRef<string | null>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    requestId.current ??= crypto.randomUUID();
    const body = Object.fromEntries(fields.entries());
    setPending(true);
    setResult(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, requestId: requestId.current }),
      });
      const data = await response.json();
      if (!response.ok || data.status !== "sent")
        throw new Error(
          data.error ||
            "Poptávku se nepodařilo odeslat. Zkus to znovu nebo zavolej na +420 777 732 309.",
        );
      setResult({
        ok: true,
        text: "Poptávka byla odeslána. Ozvu se ti s návrhem termínu a rozsahu servisu. Termín spolu ještě potvrdíme.",
      });
      try {
        if (localStorage.getItem("cookie-consent") === "accepted")
          window.gtag?.("event", "conversion", {
            send_to: "AW-18220669308/inX7CMinv7wcEPyypfBD",
          });
      } catch {}
      form.reset();
      requestId.current = null;
    } catch (error) {
      setResult({
        ok: false,
        text:
          error instanceof Error && error.message !== "Failed to fetch"
            ? error.message
            : "Poptávku se nepodařilo odeslat. Zkontroluj připojení a zkus to znovu nebo zavolej na +420 777 732 309.",
      });
    } finally {
      setPending(false);
    }
  }
  const fieldClass =
    "mt-3 w-full bg-black text-white border-b border-white/40 pb-4 outline-none focus:border-white text-base";
  return (
    <form
      onSubmit={submit}
      onChange={() => {
        requestId.current = null;
      }}
      aria-busy={pending}
    >
      <fieldset disabled={pending} className="space-y-8 disabled:opacity-70">
        <legend className="sr-only">Poptávka servisu kola</legend>
        <label className="block" htmlFor="service-name">
          Jméno a příjmení *
          <input
            id="service-name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            className={fieldClass}
          />
        </label>
        <label className="block" htmlFor="service-email">
          E-mail *
          <input
            id="service-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className={fieldClass}
          />
        </label>
        <label className="block" htmlFor="service-phone">
          Telefon *
          <input
            id="service-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={40}
            className={fieldClass}
          />
        </label>
        <label className="block" htmlFor="service-bike">
          Typ kola *
          <select
            id="service-bike"
            name="bikeType"
            defaultValue=""
            required
            className={fieldClass}
          >
            <option value="" disabled>
              Vyber typ kola
            </option>
            {bikeTypes.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className="block" htmlFor="service-type">
          Služba *
          <select
            id="service-type"
            name="serviceType"
            defaultValue=""
            required
            className={fieldClass}
          >
            <option value="" disabled>
              Vyber servisní balíček
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block" htmlFor="service-delivery">
          Předání kola *
          <select
            id="service-delivery"
            name="deliveryMethod"
            defaultValue=""
            required
            className={fieldClass}
          >
            <option value="" disabled>
              Vyber způsob předání
            </option>
            {deliveryMethods.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <span className="mt-2 block text-sm text-white/60">
            Svoz za 8 Kč/km podle jednosměrné vzdálenosti od dílny zahrnuje
            vyzvednutí i vrácení kola.
          </span>
        </label>
        <label className="block" htmlFor="service-message">
          Dotaz nebo popis problému
          <textarea
            id="service-message"
            name="message"
            maxLength={4000}
            rows={5}
            className={fieldClass}
          />
        </label>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="service-website">
            Web
            <input
              id="service-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <button
          type="submit"
          className="border border-white px-8 py-4 uppercase tracking-[0.15em] hover:bg-white hover:text-black transition disabled:cursor-wait"
        >
          {pending ? "Odesílám…" : "Odeslat poptávku"}
        </button>
      </fieldset>
      {result && (
        <p
          role={result.ok ? "status" : "alert"}
          className={`mt-6 border p-5 ${result.ok ? "border-lime-200/50" : "border-red-300"}`}
        >
          {result.text}
        </p>
      )}
      <p className="mt-5 text-sm text-white/60">
        Odesláním formuláře bereš na vědomí{" "}
        <Link href="/gdpr" className="underline">
          zpracování osobních údajů
        </Link>
        . Potvrzení termínu probíhá osobně po domluvě.
      </p>
    </form>
  );
}
