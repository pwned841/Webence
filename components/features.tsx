import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonThree } from "./skeletons/third";
import { Globe } from "./globe";
import { HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineStar, HiOutlineSearchCircle } from "react-icons/hi";

export const Features = () => {
  const features = [
    {
      title: "Votre vitrine 24h/24",
      description:
        "Un site web professionnel inspire confiance et permet à vos clients de vous trouver à tout moment, même en dehors des horaires d’ouverture.",
      icon: <HiOutlineGlobeAlt className="h-10 w-10 mx-auto mb-4 text-black dark:text-white" />,
    },
    {
      title: "Générez des contacts et des ventes",
      description:
        "Un site bien conçu transforme vos visiteurs en prospects ou clients grâce à des appels à l’action efficaces et un parcours utilisateur optimisé.",
      icon: <HiOutlineUserGroup className="h-10 w-10 mx-auto mb-4 text-black dark:text-white" />,
    },
    {
      title: "Valorisez votre image",
      description:
        "Montrez votre expertise, vos réalisations et vos valeurs avec un design moderne, adapté à votre secteur et à votre cible.",
      icon: <HiOutlineStar className="h-10 w-10 mx-auto mb-4 text-black dark:text-white" />,
    },
    {
      title: "Soyez visible sur Google",
      description:
        "Un site optimisé pour le référencement (SEO) vous permet d’apparaître dans les résultats de recherche et d’attirer de nouveaux clients.",
      icon: <HiOutlineSearchCircle className="h-10 w-10 mx-auto mb-4 text-black dark:text-white" />,
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-32 overflow-hidden lg:overflow-visible">
      <Heading as="h2">Pourquoi avoir un site web professionnel&nbsp;?</Heading>
      <Subheading className="text-center ">
        Un site internet bien conçu est un investissement rentable : il rassure, attire de nouveaux clients et valorise votre activité, quelle que soit votre taille ou votre secteur.
      </Subheading>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
        <div className="hidden lg:block w-1/3">
          <Globe />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-2/3">
          {features.map((feature) => (
            <FeatureCard key={feature.title}>
              <div className="flex flex-col items-center justify-center text-center h-full">
                {feature.icon}
                <FeatureTitle>
                  <span className="block w-full text-center">{feature.title}</span>
                </FeatureTitle>
                <FeatureDescription>
                  <span className="block w-full text-center">{feature.description}</span>
                </FeatureDescription>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-sm mx-0 lg:text-sm my-2">
      {children}
    </Subheading>
  );
};
