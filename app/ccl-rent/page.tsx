import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentContent from "./RentContent";
import { configured } from "@/lib/rent/store";

export const dynamic = "force-dynamic";
export const metadata: Metadata = pageMetadata(
  "/ccl-rent",
  "Půjčovna kufru Evoc a nosiče Thule | CCL Rent Podlešín",
  "Půjčovna Evoc Road Bike Bag PRO za 250 Kč/den, od 15 dní 200 Kč/den. Nosič Thule EasyFold XT 933 za 150 Kč/den. Předání v Podlešíně po domluvě.",
);

export default function RentPage() {
  return (
    <>
      <Header />
      <RentContent enabled={configured()} />
      <Footer />
    </>
  );
}
