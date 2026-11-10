import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentContent from "./RentContent";
import { configured } from "@/lib/rent/store";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "CCL Rent | Půjčovna Evoc a Thule | Custom Cycling Lab",
  description: "Půjčení Evoc Road Bike Bag PRO a nosiče Thule EasyFold XT 933. Předání v Podlešíně, možnost zabalení kola a dovozu k terminálu letiště v Praze.",
};

export default function RentPage() {
  return <><Header /><RentContent enabled={configured()} /><Footer /></>;
}
