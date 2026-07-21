"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[99999] flex items-center justify-between px-6 md:px-16 py-8">

        {/* Logo */}
        <div className="relative h-64 w-[768px] ml-0 md:ml-[-180px]">
          <img
            src="/logo-white.png"
            alt="Custom Cycling Lab"
            className="object-contain h-full w-full"
          />
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-[0.25em]">

          <Link href="#services" className="hover:opacity-70 transition">
            Služby
          </Link>

          <Link href="/o-mne" className="hover:opacity-70 transition">
            O mně
          </Link>

          <Link href="/stavby-kol" className="hover:opacity-70 transition">
            Stavby kol
          </Link>

          <Link href="/kontakt" className="hover:opacity-70 transition">
            Kontakt
          </Link>

        </nav>

        {/* Hamburger */}
        <button
  onClick={() => alert("funguje")}
  style={{
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 999999,
    width: "100px",
    height: "100px",
    background: "red",
    color: "white",
    fontSize: "20px",
  }}
>
  TEST
</button>

      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black text-white z-[9999] transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-8">

          <button
            onClick={() => setOpen(false)}
            className="text-4xl"
          >
            ✕
          </button>

        </div>

        <nav className="flex flex-col items-center gap-10 mt-20 text-3xl uppercase tracking-[0.2em]">

          <Link href="/" onClick={() => setOpen(false)}>
            Domů
          </Link>

          <Link href="/o-mne" onClick={() => setOpen(false)}>
            O mně
          </Link>

          <Link href="/stavby-kol" onClick={() => setOpen(false)}>
            Stavby kol
          </Link>

          <Link href="/kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </Link>

        </nav>

      </div>
    </>
  );
}