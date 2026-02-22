// components/layout/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail, Triangle } from "lucide-react";
import { companyInfo, services } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Equipment", href: "/equipment" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      {/* ── TOP STRIP ── */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            📍 {companyInfo.poBox}, {companyInfo.location}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phone1}`}
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-mono"
            >
              {companyInfo.phone1}
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={`tel:${companyInfo.phone2}`}
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-mono"
            >
              {companyInfo.phone2}
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── COL 1: Brand ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50">
                <Triangle className="w-4 h-4 text-white" fill="white" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-sm tracking-wide">Al Reem Fibre Glass</p>
                <p className="text-blue-400 text-[10px] tracking-widest uppercase">Est. {companyInfo.founded}</p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A trusted name in the UAE's construction and shading industry. Based in Al Ain, delivering quality since 1994.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone1}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                {companyInfo.phone1}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{companyInfo.poBox}, Industrial Area, Mazyad, Al Ain, UAE</span>
              </div>
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5 pb-3 border-b border-white/8">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Services ── */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5 pb-3 border-b border-white/8">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors shrink-0" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: CTA Card ── */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5 pb-3 border-b border-white/8">
              Get In Touch
            </h4>

            <div
              className="rounded-xl p-5 mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(30,58,138,0.2) 100%)",
                border: "1px solid rgba(59,130,246,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Need a custom shading solution? Our team is ready to help with a free consultation.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/50"
              >
                Request a Quote
              </Link>
            </div>

            {/* License note */}
            <div className="flex items-start gap-2 p-3 rounded-lg bg-white/3 border border-white/5">
              <span className="text-lg">🏛️</span>
              <div>
                <p className="text-white text-xs font-medium">Licensed & Registered</p>
                <p className="text-slate-500 text-xs mt-0.5">UAE Government Licensed General Contractor</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Industrial Area, Mazyad · Al Ain, UAE
          </p>
        </div>
      </div>

    </footer>
  );
}
