"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { tiers } from "@/constants/tier";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";

export function Pricing() {
  return (
    <div className="relative" id="pricing-section">
      <div className="mx-auto mt-4 md:mt-20   grid relative z-20 grid-cols-1 gap-4 items-center  md:grid-cols-2 xl:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={cn(
              tier.featured
                ? "relative bg-[radial-gradient(164.75%_100%_at_50%_0%,#111111_0%,#222222_100%)] dark:bg-[radial-gradient(164.75%_100%_at_50%_0%,#f3f3f3_0%,#e5e5e5_100%)] shadow-2xl"
                : " bg-white dark:bg-black",
              "rounded-lg px-6 py-8 sm:mx-8 lg:mx-0  h-full flex flex-col justify-between"
            )}
          >
            <div className="">
              <h3
                id={tier.id}
                className={cn(
                  tier.featured
                    ? "text-white dark:text-black"
                    : "text-muted dark:text-muted-dark",
                  "text-base font-semibold leading-7"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4">
                <span
                  className={cn(
                    "text-4xl font-bold tracking-tight  inline-block",
                    tier.featured
                      ? "text-white dark:text-black"
                      : "text-neutral-900 dark:text-neutral-200"
                  )}
                >
                  {tier.price}
                </span>
              </p>
              <p
                className={cn(
                  tier.featured
                    ? "text-neutral-300 dark:text-black"
                    : "text-neutral-600 dark:text-neutral-300",
                  "mt-6 text-sm leading-7  h-12 md:h-12 xl:h-12"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={cn(
                  tier.featured
                    ? "text-neutral-300 dark:text-black"
                    : "text-neutral-600 dark:text-neutral-300",
                  "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <IconCircleCheckFilled
                      className={cn(
                        tier.featured
                          ? "text-white dark:text-black"
                          : "text-neutral-600 dark:text-neutral-300",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Button
                onClick={tier.onClick}
                aria-describedby={tier.id}
                className={cn(
                  tier.featured
                    ? "bg-white text-black dark:bg-black dark:text-white shadow-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 focus-visible:outline-white dark:focus-visible:outline-black"
                    : "",
                  "mt-8 rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
                )}
              >
                {tier.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
