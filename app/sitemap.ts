import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/servis-kol",
    "/cenik",
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
