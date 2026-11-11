"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const firstButton = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem("cookie-consent");
    } catch {}
    setAccepted(consent === "accepted");
    setVisible(consent !== "accepted" && consent !== "rejected");
    const open = () => {
      previousFocus.current = document.activeElement as HTMLElement;
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);
  useEffect(() => {
    const value = accepted ? "granted" : "denied";
    window.gtag?.("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
  }, [accepted]);
  useEffect(() => {
    if (visible && previousFocus.current) firstButton.current?.focus();
  }, [visible]);
  function choose(allow: boolean) {
    try {
      localStorage.setItem("cookie-consent", allow ? "accepted" : "rejected");
    } catch {}
    if (!allow)
      window.gtag?.("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    setAccepted(allow);
    setVisible(false);
    if (!allow) {
      // Remove existing first-party Google measurement cookies when consent is withdrawn.
      const host = location.hostname;
      const domains = [
        "",
        host,
        `.${host}`,
        ".customcyclinglab.com",
        ".customcyclinglab.cz",
      ];
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0].trim();
        if (!/^_(ga|gid|gat|gcl|gac)(_|$)/.test(name)) continue;
        for (const domain of domains)
          document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""} SameSite=Lax`;
      }
    }
    previousFocus.current?.focus();
    previousFocus.current = null;
    if (accepted && !allow) location.reload();
  }
  return (
    <>
      {accepted && (
        <Script
          id="google-ads-loader"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18220669308"
          strategy="afterInteractive"
          onReady={() => {
            window.gtag?.("config", "AW-18220669308");
          }}
        />
      )}
      {visible && (
        <section
          role="region"
          aria-label="Nastavení cookies"
          className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-3xl bg-[#171d1b] text-white border border-white/30 shadow-xl p-6"
        >
          <h2 className="text-xl font-light">Nastavení cookies</h2>
          <p className="mt-3 text-sm text-white/75">
            Volitelné cookies používám k měření reklam Google Ads. Reklamní
            měření se načte až po tvém souhlasu. Volbu můžeš kdykoli změnit v
            patičce.{" "}
            <Link href="/cookies" className="underline">
              Více o cookies
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              ref={firstButton}
              type="button"
              onClick={() => choose(false)}
              className="border border-white px-5 py-3 text-sm"
            >
              Pouze nezbytné
            </button>
            <button
              type="button"
              onClick={() => choose(true)}
              className="border border-white px-5 py-3 text-sm"
            >
              Přijmout volitelné
            </button>
          </div>
        </section>
      )}
    </>
  );
}
