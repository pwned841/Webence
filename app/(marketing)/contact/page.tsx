"use client";

import { Background } from "@/components/background";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Logo } from "@/components/Logo";

// Custom Select avec animation
function AnimatedSelect({ value, onChange, ...props }: any) {
  const selectRef = useRef<HTMLSelectElement>(null);
  return (
    <div className="relative">
      <select
        ref={selectRef}
        value={value}
        onChange={onChange}
        className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 pr-10 bg-white dark:bg-black text-black dark:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white appearance-none"
        style={{ transition: 'box-shadow 0.3s, border-color 0.3s' }}
        {...props}
      >
        {props.children}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </span>
    </div>
  );
}

// Logo LinkedIn officiel noir et blanc
const LinkedInLogo = () => (
  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#fff"/>
    <path d="M10.666 13.333h2.667v8H10.666v-8zm1.333-4a1.547 1.547 0 1 1 0 3.094 1.547 1.547 0 0 1 0-3.094zm3.334 4h2.56v1.093h.037c.357-.677 1.23-1.393 2.533-1.393 2.71 0 3.214 1.786 3.214 4.106v4.194h-2.667v-3.724c0-.888-.016-2.032-1.24-2.032-1.24 0-1.429.97-1.429 1.97v3.786h-2.667v-8z" fill="#111"/>
  </svg>
);

// SVG du logo Webence seul (sans texte)
const WebenceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 mt-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
  </svg>
);

const offers = [
  { value: "", label: "Sélectionnez une offre" },
  { value: "essentiel", label: "Essentiel" },
  { value: "professionnel", label: "Professionnel" },
  { value: "surmesure", label: "Sur-mesure" },
  { value: "autre", label: "Autre / Je ne sais pas" },
];

export default function ContactPage() {
  const [selectedOffer, setSelectedOffer] = useState("");
  const { resolvedTheme } = useTheme();
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <div className="flex flex-col justify-center items-center w-full h-full p-8 relative z-10">
          <div className="mt-8" />
          <h1 className="text-3xl font-bold mb-4 text-center">Contactez&#39;nous</h1>
          <p className="mb-8 text-center text-black dark:text-white max-w-lg">
            Vous avez un projet ou une question ? Remplissez le formulaire ci-dessous, nous vous répondrons rapidement. Sélectionnez l&#39;offre qui vous intéresse pour un accompagnement personnalisé.
          </p>
          <form className="w-full max-w-md space-y-6">
            <div>
              <label htmlFor="offer" className="block mb-2 font-medium">Offre souhaitée</label>
              <div className="relative">
                <select
                  id="offer"
                  name="offer"
                  value={selectedOffer}
                  onChange={e => setSelectedOffer(e.target.value)}
                  required
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 pr-10 bg-white dark:bg-black text-black dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                >
                  {offers.map((offer) => (
                    <option key={offer.value} value={offer.value}>{offer.label}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
              <input type="text" id="name" name="name" required className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email" id="email" name="email" required className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Votre message</label>
              <textarea id="message" name="message" rows={5} required className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white" />
            </div>
            <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg py-3 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition">Envoyer</button>
          </form>
          <div className="flex flex-row gap-6 justify-center items-center mt-8">
            <a href="https://www.linkedin.com/in/remi-emeriau/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image
                src="/logos/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
                style={{ display: 'block' }}
              />
            </a>
            <a href="https://github.com/pwned841" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Image
                src="/logos/github.png"
                alt="GitHub"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg"
                style={{ display: 'block' }}
              />
            </a>
          </div>
        </div>
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <span className="text-5xl md:text-7xl font-extrabold text-black dark:text-white text-center select-none mb-8">Webence</span>
            <WebenceIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
