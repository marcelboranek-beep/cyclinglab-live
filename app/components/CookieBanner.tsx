"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }

    if (consent === "accepted") {
      window.gtag?.("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");

    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });

    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 bg-black border border-white/20 p-6">
      <p className="text-sm text-white mb-4">
  Tento web používá cookies pro měření reklam Google Ads.
  Více informací naleznete v{" "}
  <Link href="/gdpr" className="underline">
    Zásadách ochrany osobních údajů
  </Link>{" "}
  a{" "}
  <Link href="/cookies" className="underline">
    Zásadách používání cookies
  </Link>.
</p>

      <div className="flex gap-3">
        <button
          onClick={accept}
          className="border border-white px-4 py-2"
        >
          Přijmout
        </button>

        <button
          onClick={reject}
          className="border border-white/40 px-4 py-2"
        >
          Odmítnout
        </button>
      </div>
    </div>
  );
}