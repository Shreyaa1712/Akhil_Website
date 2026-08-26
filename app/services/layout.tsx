import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | AR Legal",
  description: "AR Legal provides expert advisory and litigation services in WTO Dispute Settlement, Trade Defence, Customs & Importation, and ESG & Regulatory Advisory.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
