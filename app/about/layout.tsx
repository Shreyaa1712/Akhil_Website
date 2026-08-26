import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AR Legal",
  description: "Learn about AR Legal and Dr. Raina. We provide specialist expertise in international trade law.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
