"use client";
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="underline hover:text-white text-left"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      Nastavení cookies
    </button>
  );
}
