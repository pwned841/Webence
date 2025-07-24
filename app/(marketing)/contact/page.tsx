"use client";

import { Background } from "@/components/background";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { FlippingText } from "@/components/ui/flipping-text";
import { useTheme } from "next-themes";
import { Logo } from "@/components/Logo";

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

const businessTypes = [
  "restaurant",
  "boutique",
  "startup",
  "cabinet",
  "salon",
  "freelance"
];


export default function ContactPage() {
  const [selectedOffer, setSelectedOffer] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: selectedOffer
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const { resolvedTheme } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOfferChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOffer(value);
    setFormData(prev => ({
      ...prev,
      budget: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          budget: selectedOffer,
          subject: formData.subject || `Demande ${selectedOffer || 'générale'}`
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.'
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
          budget: ""
        });
        setSelectedOffer("");
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Une erreur est survenue lors de l\'envoi.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur de connexion. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <div className="flex flex-col justify-center items-center w-full h-full p-8 relative z-10">
          <div className="mt-20 md:mt-24" />
          <h1 className="text-3xl font-bold mb-4 text-center">Contactez nous</h1>
          <p className="mb-8 text-center text-black dark:text-white max-w-lg">
            Vous avez un projet ou une question ? Remplissez le formulaire ci-dessous, nous vous répondrons rapidement. Sélectionnez l&#39;offre qui vous intéresse pour un accompagnement personnalisé.
          </p>

          {submitStatus && (
            <div className={`w-full max-w-md mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700' 
                : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div>
              <label htmlFor="offer" className="block mb-2 font-medium">Offre souhaitée</label>
              <div className="relative">
                <select
                  id="offer"
                  name="offer"
                  value={selectedOffer}
                  onChange={handleOfferChange}
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
              <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" 
              />
            </div>

            <div>
              <label htmlFor="company" className="block mb-2 font-medium">Entreprise</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleInputChange}
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" 
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Laissez vide pour génération automatique"
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" 
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Votre message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleInputChange}
                required 
                className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-2 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg py-3 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
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
          <div className="flex flex-col items-center justify-center w-full px-8">
                        <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 leading-tight">
                Avec Webence,<br />
                <span className="inline-flex items-baseline justify-center gap-2">
                  <span>créez un site de</span>
                  <span className="inline-block w-[180px] text-left">
                    <FlippingText words={businessTypes} className="text-blue-600 dark:text-blue-400" />
                  </span>
                </span>
              </h2>
              </div>
            <WebenceIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
