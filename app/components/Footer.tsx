import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import CurrentYear from "./CurrentYear";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white px-8 py-16 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-4xl font-light">CCL</h3>
          <p className="mt-3 text-xl">Custom Cycling Lab</p>
          <p className="mt-2 uppercase tracking-[0.3em] text-sm text-white/50">
            Marcel Bořánek
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-white/50">
            Kontakt
          </p>

          <div className="mt-6 space-y-3 text-white/80">
            <a
              href="tel:+420777732309"
              className="block hover:text-white transition"
            >
              +420 777 732 309
            </a>

            <a
              href="mailto:info@customcyclinglab.com"
              className="block hover:text-white transition"
            >
              info@customcyclinglab.com
            </a>

            <p>{site.address}</p>
            <a
              href={site.map}
              target="_blank"
              rel="noopener noreferrer"
              className="block underline"
            >
              Navigovat do dílny ↗
            </a>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-white/50">
            Otevírací doba
          </p>

          <div className="mt-6 space-y-3 text-white/80">
            <p>Otevřeno dle telefonické domluvy</p>
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-white/50">
            Sleduj mě
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://instagram.com/custom_cycling_lab"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 rounded-full px-5 py-3 hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/10 pt-8 text-sm text-white/40 flex flex-col md:flex-row justify-between gap-4">
        <p>© <CurrentYear initialYear={new Date().getFullYear()} /> Custom Cycling Lab</p>

        <div className="flex flex-wrap gap-6">
          <Link href="/cenik" className="underline hover:text-white">
            Ceník
          </Link>
          <Link
            href="/gdpr"
            className="underline cursor-pointer hover:text-white"
          >
            Zásady ochrany osobních údajů
          </Link>

          <Link
            href="/cookies"
            className="underline cursor-pointer hover:text-white"
          >
            Cookies
          </Link>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
