import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer.client";

export const metadata: Metadata = {
  title: "Webence",
  description:
    "Webence est une plateforme qui fournit une large gamme d'outils et de services d'IA pour vous aider à rester au top de votre entreprise. Générez des images, du texte et tout ce dont vous avez besoin pour lancer votre activité.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
