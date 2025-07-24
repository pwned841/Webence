"use client";
import React from "react";
import { Logo } from "./Logo";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

// Logo GitHub officiel noir ou blanc selon le thème
const GitHubLogo = ({ theme }: { theme: string | undefined }) => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill={theme === "dark" ? "#fff" : "#111"}/>
  </svg>
);

export const Footer = () => {
  const links = [
    {
      name: "Tarifs",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const legal = [
    {
      name: "Politique de confidentialité",
      href: "#",
    },
    {
      name: "Conditions d'utilisation",
      href: "#",
    },
    {
      name: "Politique de remboursement",
      href: "#",
    },
  ];
  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/remi-emeriau/",
    },
    {
      name: "GitHub",
      href: "https://github.com/pwned841",
    },
  ];
  const { resolvedTheme } = useTheme();
  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Logo />
            </div>
            <div>Copyright &copy; 2025 Rémi EMERIAU</div>
            <div className="mt-2">Tous droits réservés</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {socials.map((link) => (
                link.name === "LinkedIn" ? (
                  <a
                    key={link.name}
                    className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/logos/linkedin.png"
                      alt="LinkedIn"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg"
                      style={{ display: 'inline-block', verticalAlign: 'middle' }}
                    />
                  </a>
                ) : link.name === "GitHub" ? (
                  <a
                    key={link.name}
                    className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/logos/github.png"
                      alt="GitHub"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg"
                      style={{ display: 'inline-block', verticalAlign: 'middle' }}
                    />
                  </a>
                ) : null
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        Webence
      </p>
    </div>
  );
}; 