"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
  { href: "/projetos", label: "Cases" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-dark/95 backdrop-blur-md border-b border-brand/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group">
            <Image
              src="/logoLynvex.webp"
              alt="Lynvex logo"
              width={128}
              height={128}
              className="w-24 h-24 object-contain -mt-1 -ml-7 -mr-4 shrink-0"
            />
            <span className="font-display font-bold text-xl text-light tracking-tight">
              LYNVEX<span className="text-brand"> TECH</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-light text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contato"
              className="hidden md:inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 glow-brand-sm hover:glow-brand"
            >
              Solicitar Orçamento
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menu"
              className="md:hidden p-2 rounded-lg text-muted hover:text-light hover:bg-dark-3 transition-colors"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-dark ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 border-t border-brand/10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 text-muted hover:text-light hover:bg-dark-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center bg-brand hover:bg-brand-light text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
