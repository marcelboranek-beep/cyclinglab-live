import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentContent from "./RentContent";
import { configured } from "@/lib/rent/store";

export const dynamic = "force-dynamic";
export const metadata: Metadata = pageMetadata(
  "/ccl-rent",
  "CCL Rent | Půjčovna Evoc a Thule | Custom Cycling Lab",
  "Půjčení Evoc Road Bike Bag PRO a nosiče Thule EasyFold XT 933. Předání v Podlešíně 161/1, možnost zabalení kola a dovozu na letiště Praha.",
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
