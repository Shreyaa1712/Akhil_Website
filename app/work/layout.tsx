import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | AR Legal",
  description: "Representative matters and selected mandates of AR Legal.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
