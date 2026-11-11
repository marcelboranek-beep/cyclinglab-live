import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/servis-kol",
    "/cenik",
    "/pece-o-retez",
    "/keramicka-ochrana-kola",
    "/stavby-kol",
    "/o-mne",
    "/vyzvednuti",
    "/konzultace",
    "/ccl-rent",
    "/kontakt",
    "/gdpr",
    "/cookies",
  ].map((path) => ({ url: site.origin + path }));
}
