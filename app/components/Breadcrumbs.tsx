import Link from "next/link";
import { site } from "@/lib/site";
import StructuredData from "./StructuredData";
export default function Breadcrumbs({
  path,
  label,
}: {
  path: string;
  label: string;
}) {
  return (
    <>
      <nav aria-label="Drobečková navigace" className="mb-8 text-sm opacity-70">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="underline">
              Domů
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/servis-kol" className="underline">
              Servis kol
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{label}</li>
        </ol>
      </nav>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": site.origin + path + "#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Domů",
              item: site.origin,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Servis kol",
              item: site.origin + "/servis-kol",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: label,
              item: site.origin + path,
            },
          ],
        }}
      />
    </>
  );
}
