"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Domů" },
  { href: "/servis-kol", label: "Servis" },
  { href: "/cenik", label: "Ceník" },
  { href: "/stavby-kol", label: "Stavby kol" },
  { href: "/o-mne", label: "O mně" },
  { href: "/ccl-rent", label: "CCL Rent" },
  { href: "/kontakt", label: "Kontakt" },
];
export default function Header() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let last = window.scrollY;
    const scroll = () => {
      const next = window.scrollY;
      setShow(next < 50 || next < last);
      last = next;
    };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function close() {
    setOpen(false);
    toggle.current?.focus();
  }
  function keys(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
    if (event.key !== "Tab") return;
    const items = panel.current?.querySelectorAll<HTMLElement>("a,button");
    if (!items?.length) return;
    if (event.shiftKey && document.activeElement === items[0]) {
      event.preventDefault();
      items[items.length - 1].focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === items[items.length - 1]
    ) {
      event.preventDefault();
      items[0].focus();
    }
  }
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:p-3"
      >
        Přejít na obsah
      </a>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-[#171d1b]/95 backdrop-blur transition-transform duration-300 ${show || open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 gap-4">
          <Link
            href="/"
            aria-label="Custom Cycling Lab — domů"
            className="relative block h-24 w-64 min-w-24 lg:h-32 lg:w-80"
          >
            <Image
              src="/logo-white.png"
              alt="Custom Cycling Lab"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>
          <nav
            aria-label="Hlavní navigace"
            className="hidden lg:flex gap-6 whitespace-nowrap uppercase tracking-[0.12em] text-xs text-white"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="lg:hidden flex shrink-0 items-center gap-5 text-white">
            <Link href="/cenik" className="text-xs uppercase tracking-[0.15em]">
              Ceník
            </Link>
            <button
              ref={toggle}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Otevřít menu"
              onClick={() => setOpen(true)}
              className="border border-white/60 px-4 py-2 text-xs uppercase tracking-[0.15em]"
            >
              Menu ☰
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div
          ref={panel}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigace webu"
          onKeyDown={keys}
          className="fixed inset-0 z-[80] bg-[#171d1b] text-white overflow-y-auto px-8 py-24"
        >
          <nav
            aria-label="Mobilní navigace"
            className="mx-auto max-w-lg flex flex-col gap-6 text-2xl font-light"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={close}>
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={close}
              className="mt-6 border border-white/50 p-3 text-base"
            >
              Zavřít menu ×
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
