export type ProductId = "evoc" | "thule";
export const products = {
  evoc: { name: "Evoc Road Bike Bag PRO", deposit: 10000 },
  thule: { name: "Thule EasyFold XT 933", deposit: 7000 },
} as const;

export function isProduct(value: unknown): value is ProductId {
  return value === "evoc" || value === "thule";
}

export function parseDay(value: string): number {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error("Vyber platné datum.");
  const timestamp = Date.parse(`${value}T00:00:00Z`);
  if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== value) {
    throw new Error("Vyber platné datum.");
  }
  return timestamp;
}

export function pragueToday() {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Prague" }).format(new Date());
}

export function quote(product: ProductId, start: string, end: string, packing = false, unpacking = false) {
  // Dates are civil dates: UTC arithmetic avoids daylight-saving changes.
  const days = (parseDay(end) - parseDay(start)) / 86400000;
  if (days < 1) throw new Error("Vrácení musí být nejdříve den po vyzvednutí. Pro vrácení tentýž den nám zavolej.");
  const rate = product === "thule" ? 150 : days > 14 ? 200 : 250;
  const services = product === "evoc" ? (Number(packing) + Number(unpacking)) * 800 : 0;
  return { days, rate, rental: days * rate, services, total: days * rate + services, deposit: products[product].deposit };
}

export const currency = (value: number) => new Intl.NumberFormat("cs-CZ").format(value) + " Kč";
