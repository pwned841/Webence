export type Tier = {
  name: string;
  id: string;
  href: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "Essentiel",
    id: "tier-essentiel",
    href: "#devis",
    price: "à partir de 500 €",
    description: "Idéal pour les indépendants et petits projets",
    features: [
      "Site vitrine 1 à 5 pages",
      "Design personnalisé (template optimisé)",
      "Version mobile responsive",
      "Livraison sous 7 à 10 jours",
      "SEO de base",
      "Maintenance 3 mois incluse"
    ],
    featured: false,
    cta: "Choisir l'offre Essentiel",
    onClick: () => {},
  },
  {
    name: "Professionnel",
    id: "tier-professionnel",
    href: "#appel",
    price: "à partir de 1 000 €",
    description: "Pour les entreprises ou projets à forte visibilité",
    features: [
      "Design 100 % sur-mesure",
      "Jusqu’à 10 pages",
      "Intégration CMS (WordPress ou autre)",
      "SEO technique & sémantique",
      "Hébergement inclus 1 an",
      "Statistiques & tracking",
      "Maintenance 1 an incluse"
    ],
    featured: true,
    cta: "Choisir l'offre Professionnel",
    onClick: () => {},
  },
  {
    name: "Sur-mesure / Premium",
    id: "tier-surmesure",
    href: "#contact",
    price: "sur devis",
    description: "Pour projets complexes, e-commerce ou spécifiques",
    features: [
      "Site e-commerce (WooCommerce / Shopify / autre)",
      "Blog, multi-langue, intégrations avancées",
      "Accompagnement UX/UI",
      "Formations ou suivi long terme",
      "Interface d’administration personnalisée",
      "SLA & support prioritaire"
    ],
    featured: false,
    cta: "Choisir l'offre Sur-mesure",
    onClick: () => {},
  },
];
