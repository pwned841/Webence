import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "./pricing-table";
import { Companies } from "@/components/companies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs - Webence",
  description:
    "Webence est une plateforme qui fournit une large gamme d'outils et de services d'IA pour vous aider à rester au top de votre entreprise. Générez des images, du texte et tout ce dont vous avez besoin pour lancer votre activité.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Nos offres de création de site web</Heading>
          <Subheading className="text-center">
            Découvrez nos formules adaptées à tous les besoins : indépendant, entreprise ou projet sur-mesure. Chaque offre inclut un accompagnement personnalisé, un design moderne et une mise en ligne rapide.
          </Subheading>
        </div>
        <Pricing />
        <PricingTable />
      </Container>
    </div>
  );
}
