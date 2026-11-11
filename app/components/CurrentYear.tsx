"use client";
import { useEffect, useState } from "react";
export default function CurrentYear({ initialYear }: { initialYear: number }) {
  const [year, setYear] = useState(initialYear);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);
  return <>{year}</>;
}
