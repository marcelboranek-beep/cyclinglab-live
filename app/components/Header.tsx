"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Domů" },
  { href: "/o-mne", label: "O mně" },
  { href: "/stavby-kol", label: "Stavby kol" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
 

const [showHeader, setShowHeader] = useState(true);

useEffect(() => {
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 50) {
      setShowHeader(true);
    } else if (currentScrollY > lastScrollY) {
      // rolování dolů
      setShowHeader(false);
    } else {
      // rolování nahoru
      setShowHeader(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
   <header
  className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  }`}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
       <Link href="/" className="relative block h-24 w-80 md:h-40 md:w-[650px]">
          <Image
            src="/logo-white.png"
            alt="Custom Cycling Lab"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-10 uppercase tracking-[0.18em] text-sm text-white">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white/70 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobil */}
        <Link
          href="/kontakt"
          className="md:hidden border border-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
        >
          Kontakt
        </Link>
      </div>
    </header>
  );
}