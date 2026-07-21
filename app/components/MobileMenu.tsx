"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tlačítko hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-8 right-8 z-[9999] text-white text-3xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Menu */}
      {open && (
        <div className="fixed inset-0 z-[9998] bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl uppercase tracking-[0.2em]">
          
          <a href="#services" onClick={() => setOpen(false)}>
            Služby
          </a>

          <a href="/o-mne" onClick={() => setOpen(false)}>
            O mně
          </a>

          <a href="/stavby-kol" onClick={() => setOpen(false)}>
            Stavby kol
          </a>

          <a href="/kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </a>

        </div>
      )}
    </>
  );
}