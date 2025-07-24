"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import { tiers } from "@/constants/tier";

export function PricingTable({ pricing }: any) {
  const CheckIcon = () => {
    return (
      <IconCheck className="mx-auto h-4 w-4 flex-shrink-0 text-black dark:text-white" />
    );
  };

  const tableFeatures = [
    {
      title: "Site vitrine (1 à 5 pages)",
      essentiel: <CheckIcon />,
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "Design personnalisé",
      essentiel: <CheckIcon />,
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "Version mobile responsive",
      essentiel: <CheckIcon />,
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "Livraison rapide (7 à 10 jours)",
      essentiel: <CheckIcon />,
      professionnel: "Sur demande",
      surmesure: "Sur devis",
    },
    {
      title: "SEO de base",
      essentiel: <CheckIcon />,
      professionnel: "Avancé",
      surmesure: "Sur-mesure",
    },
    {
      title: "Maintenance incluse",
      essentiel: "3 mois",
      professionnel: "1 an",
      surmesure: "Sur-mesure",
    },
    {
      title: "Jusqu'à 10 pages",
      essentiel: "-",
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "Intégration CMS (WordPress ou autre)",
      essentiel: "-",
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "SEO technique & sémantique",
      essentiel: "-",
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "Hébergement inclus 1 an",
      essentiel: "-",
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "Statistiques & tracking",
      essentiel: "-",
      professionnel: <CheckIcon />,
      surmesure: <CheckIcon />,
    },
    {
      title: "Site e-commerce / fonctionnalités avancées",
      essentiel: "-",
      professionnel: "-",
      surmesure: <CheckIcon />,
    },
    {
      title: "Blog, multi-langue, intégrations avancées",
      essentiel: "-",
      professionnel: "-",
      surmesure: <CheckIcon />,
    },
    {
      title: "Accompagnement UX/UI, formation, suivi",
      essentiel: "-",
      professionnel: "-",
      surmesure: <CheckIcon />,
    },
    {
      title: "Interface d’administration personnalisée",
      essentiel: "-",
      professionnel: "-",
      surmesure: <CheckIcon />,
    },
    {
      title: "SLA & support prioritaire",
      essentiel: "-",
      professionnel: "-",
      surmesure: <CheckIcon />,
    },
  ];

  return (
    <div className="mx-auto w-full relative z-20 px-4 py-40">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="max-w-xs py-3.5 pl-4 pr-3 text-left text-3xl  font-extrabold text-neutral-900 dark:text-white sm:pl-0"
                  ></th>
                  <th className="px-3 py-3.5 text-center text-lg font-semibold text-neutral-900 dark:text-white">Essentiel</th>
                  <th className="px-3 py-3.5 text-center text-lg font-semibold text-neutral-900 dark:text-white">Professionnel</th>
                  <th className="px-3 py-3.5 text-center text-lg font-semibold text-neutral-900 dark:text-white">Sur-mesure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-800">
                {tableFeatures.map((feature) => (
                  <tr key={feature.title}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-neutral-900 dark:text-white sm:pl-0">
                      {feature.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center">
                      {feature.essentiel}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center">
                      {feature.professionnel}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-muted dark:text-muted-dark text-center">
                      {feature.surmesure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <FreeTrial /> */}
      </div>
    </div>
  );
}
