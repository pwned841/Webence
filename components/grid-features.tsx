import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Sites ultra-rapides",
      description:
        "Des performances optimales pour un référencement et une expérience utilisateur au top.",
      icon: <IconCloud />,
    },
    {
      title: "Design sur-mesure",
      description:
        "Chaque projet est unique : nous créons des interfaces modernes, élégantes et adaptées à votre image.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Accompagnement humain",
      description:
        "Conseils, suivi, pédagogie : nous vous guidons à chaque étape, même après la mise en ligne.",
      icon: <IconHelp />,
    },
    {
      title: "SEO & visibilité",
      description:
        "Optimisation technique et sémantique pour que votre site soit vu et génère des contacts.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Responsive & mobile first",
      description:
        "Votre site est parfait sur ordinateur, tablette et mobile, sans compromis.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Intégrations avancées",
      description:
        "Newsletter, analytics, paiement, multi-langue, blog, e-commerce… tout est possible.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Maintenance & sécurité",
      description:
        "Nous veillons sur votre site : sauvegardes, mises à jour, support rapide en cas de besoin.",
      icon: <IconHeart />,
    },
    {
      title: "Transparence & honnêteté",
      description:
        "Des devis clairs, pas de frais cachés, et un vrai partenaire sur le long terme.",
      icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-black dark:group-hover:bg-white transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
