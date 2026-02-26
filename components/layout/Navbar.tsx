// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { companyInfo } from "@/lib/data";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "Projects",  href: "/projects" },
  { label: "Clients",   href: "/clients" },
  { label: "Equipment", href: "/equipment" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/80 border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo image — white version on hero, full colour when scrolled */}
            <div className="relative h-10 w-auto">
              {/* Colour logo (scrolled) */}
              <img
                src="/images/logo.png"
                alt="Al Reem Fibre Glass Logo"
                className={`h-10 w-auto object-contain transition-opacity duration-300 ${
                  scrolled ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* White/light logo (on dark hero) */}
              <img
                src="/images/logo-white.png"
                alt="Al Reem Fibre Glass Logo"
                className={`h-10 w-auto object-contain absolute top-0 left-0 transition-opacity duration-300 ${
                  scrolled ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>

            {/* Company name text */}
            <div className="leading-tight">
              <p
                className={`font-bold text-sm tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Al Reem Fibre Glass
              </p>
              <p
                className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-blue-500" : "text-blue-300"
                }`}
              >
                Est. {companyInfo.founded}
              </p>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                    isActive
                      ? "text-blue-600"
                      : scrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-blue-500 rounded-full transition-all duration-300 ${
                      isActive ? "w-4" : "w-0 group-hover:w-4"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone1}`}
              className={`text-sm font-mono transition-colors duration-200 ${
                scrolled
                  ? "text-slate-500 hover:text-blue-600"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {companyInfo.phone1}
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">

          {/* Mobile logo row */}
          <div className="flex items-center gap-3 px-4 pb-3 mb-1 border-b border-slate-100">
            <img
              src="/images/logo.png"
              alt="Al Reem Fibre Glass Logo"
              className="h-8 w-auto object-contain"
            />
            <div className="leading-tight">
              <p className="font-bold text-sm text-slate-900">Al Reem Fibre Glass</p>
              <p className="text-[10px] text-blue-500 tracking-widest uppercase">Est. {companyInfo.founded}</p>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-l-2 border-blue-500"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${companyInfo.phone1}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              📞 {companyInfo.phone1}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
