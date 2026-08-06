import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arlegal.eu"),
  title: "AR Legal | International Trade Law & Policy",
  description: "AR Legal advises governments and businesses navigating the complex landscape of international trade law and policy. Based in Brussels and New Delhi.",
  keywords: ["International Trade Law", "Trade Defence", "WTO Litigation", "Customs", "ESG", "AR Legal", "Akhil Raina"],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "AR Legal | International Trade Law & Policy",
    description: "AR Legal advises governments and businesses navigating the complex landscape of international trade law and policy. Based in Brussels and New Delhi.",
    url: "https://www.arlegal.eu",
    siteName: "AR Legal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Legal | International Trade Law & Policy",
    description: "AR Legal advises governments and businesses navigating the complex landscape of international trade law and policy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased min-h-screen flex flex-col`}>
        <DisclaimerModal />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
