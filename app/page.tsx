// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { companyInfo, services, projects, clients, stats } from "@/lib/data";
import {
  Phone,
  ChevronDown,
  Mail,
  MapPin,
  CarFront,
  Layers,
  Tent,
  Building2,
  LayoutGrid,
  HardHat,
  ArrowRight,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  Wrench,
  Building,
  Users,
  Award,
  Hammer,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  CarFront: <CarFront className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Tent: <Tent className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6" />,
  HardHat: <HardHat className="w-6 h-6" />,
};

// ── WhatsApp SVG ──
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className ?? "w-4 h-4"} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HomePage() {
  const [quickForm, setQuickForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
*New Enquiry — Al Reem Fibre Glass Website*

*Name:* ${quickForm.name}
*Phone:* ${quickForm.phone}
*Service Required:* ${quickForm.service}

*Message:*
${quickForm.message}
    `.trim();

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/971506180569?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-white text-slate-900">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
                Trusted Since {companyInfo.founded} · Al Ain, UAE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              UAE's Leading{" "}
              <span className="text-blue-400">Shading &</span>
              <br />
              <span className="text-blue-400">Fibre Glass</span>{" "}
              Specialists
              <br />
              <span className="text-slate-400 text-2xl sm:text-3xl lg:text-4xl font-light mt-2 block">
                Car Parking Shades · PVC Structures · GRP Lining · General Contracting
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Al Reem Fibre Glass & Gen. Cont. Co. LLC has been the UAE's trusted partner for
              high-quality shading systems and construction solutions since 1994. From royal palaces
              to public infrastructure — we design, manufacture, and install across Al Ain,
              Abu Dhabi, and all Emirates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                View Our Projects
              </Link>
              <a
                href={`tel:${companyInfo.phone1}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 hover:border-blue-400/60 text-white hover:text-blue-300 font-medium text-sm rounded-lg backdrop-blur-sm bg-white/5 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.phone1}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 hover:border-blue-400/60 text-white hover:text-blue-300 font-medium text-sm rounded-lg backdrop-blur-sm bg-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Get a Free Quote
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {[
                "Car Parking Shades UAE",
                "PVC & HDPE Structures",
                "Fibre Glass GRP Lining",
                "Sandwich Panel Sheds",
                "Khaima Construction",
                "Aluminium Profile Sheds",
                "General Contracting Al Ain",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs text-slate-300 border border-white/15 rounded-full bg-white/8 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-slate-900/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center py-6 px-4 gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-400">{stat.value}</span>
                  <span className="text-xs text-slate-400 text-center tracking-widest uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-28 right-8 z-10 hidden lg:flex flex-col items-center gap-1 text-slate-500">
          <span className="text-[10px] tracking-widest uppercase [writing-mode:vertical-rl]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </div>
      </section>


      {/* ════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Our Core Specializations
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              From custom fibre glass car parking shades to full-scale general contracting,
              Al Reem delivers end-to-end solutions — design, fabrication, and on-site installation —
              all from our Al Ain facility serving clients across the UAE since 1994.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1"
              >
                <span className="absolute top-5 right-5 text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors select-none">
                  {String(service.id).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-100 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-blue-200 text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          MISSION & VISION
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-3">
              Driven by Quality. Built on Trust.
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Our mission and vision define every project we take on — from a small parking shade
              to a large-scale palace installation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div
              className="p-8 rounded-2xl border border-blue-200 shadow-md"
              style={{
                background: "linear-gradient(135deg, rgba(219,234,254,0.6) 0%, rgba(255,255,255,0.9) 100%)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-200">
                <span className="text-white text-base font-black">M</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{companyInfo.mission}</p>
            </div>
            <div
              className="p-8 rounded-2xl border border-slate-200 shadow-md"
              style={{
                background: "linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(255,255,255,0.95) 100%)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center mb-5 shadow-lg shadow-slate-200">
                <span className="text-white text-base font-black">V</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{companyInfo.vision}</p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Shield className="w-5 h-5" />, label: "Durability",  desc: "Built for UAE's extreme climate" },
              { icon: <Star className="w-5 h-5" />,   label: "Quality",     desc: "ISO-grade materials & finishes" },
              { icon: <Clock className="w-5 h-5" />,  label: "Reliability", desc: "On-time delivery, every project" },
              { icon: <Wrench className="w-5 h-5" />, label: "Innovation",  desc: "Modern CNC manufacturing" },
            ].map((val) => (
              <div key={val.label} className="flex flex-col items-center text-center p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                  {val.icon}
                </div>
                <p className="text-slate-900 font-bold text-sm mb-1">{val.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-5">
                30+ Years of Excellence in UAE Construction
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Since 1994, Al Reem Fibre Glass has been the go-to contractor for both government
                and private sector clients across the UAE. Our end-to-end capability — from
                in-house CNC manufacturing to field installation — means every project is
                handled with complete accountability and precision.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Government & Royal Palace Projects",  desc: "Completed projects for UAE ministries, royal palaces, airports, and public institutions." },
                  { title: "In-House Manufacturing Facility",     desc: "Our Al Ain factory houses CNC machines, PVC welding rigs, sandblasting equipment, and more." },
                  { title: "End-to-End Service",                  desc: "We handle design, engineering, fabrication, transport, and installation under one roof." },
                  { title: "Climate-Tested Products",             desc: "All products are designed and tested to withstand UAE temperatures, UV exposure, and sandstorms." },
                  { title: "Licensed UAE Contractor",             desc: "Fully licensed general contractor operating across Al Ain, Abu Dhabi, and all Emirates." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-900 font-semibold text-sm mb-0.5">{item.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock className="w-6 h-6" />,   value: "1994",  label: "Year Established",    sub: "Over 30 years in business" },
                { icon: <Building className="w-6 h-6" />, value: "22+",   label: "Major Landmarks",     sub: "Palaces, airports, malls" },
                { icon: <Users className="w-6 h-6" />,    value: "21+",   label: "Key Clients",         sub: "Public & private sector" },
                { icon: <Award className="w-6 h-6" />,    value: "UAE",   label: "Nationwide Coverage", sub: "Al Ain · Abu Dhabi · All Emirates" },
                { icon: <Wrench className="w-6 h-6" />,   value: "50+",   label: "Equipment Units",     sub: "CNC machines, cranes, lifts" },
                { icon: <Hammer className="w-6 h-6" />,   value: "500+",  label: "Projects Done",       sub: "Across all categories" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors">
                    {card.icon}
                  </div>
                  <p className="text-2xl font-black text-slate-900 mb-0.5">{card.value}</p>
                  <p className="text-slate-700 font-semibold text-xs mb-1">{card.label}</p>
                  <p className="text-slate-400 text-xs leading-snug">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          PROJECTS PREVIEW
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div>
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Our Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
                Landmark Projects Across the UAE
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 font-semibold transition-colors"
            >
              View All 22 Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-3xl">
            Our project portfolio spans royal palaces, government offices, airports, national museums,
            shopping malls, sports clubs, and camel farms — a testament to the breadth and scale of
            our expertise across the UAE.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 9).map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all duration-200 group"
              >
                <span className="text-3xl font-black text-slate-100 group-hover:text-blue-100 transition-colors w-12 shrink-0 font-mono leading-none">
                  {String(project.id).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-slate-800 text-sm font-semibold leading-snug">{project.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
            >
              See All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Our Project Process
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              From your first enquiry to final installation — here's how we deliver every project
              on time and to specification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation & Site Survey",  desc: "We visit your site, understand your requirements, and assess dimensions, load, and environmental factors.", icon: <Users className="w-5 h-5" /> },
              { step: "02", title: "Design & Engineering",        desc: "Our team produces detailed structural drawings and material specifications tailored to your project.",        icon: <Building className="w-5 h-5" /> },
              { step: "03", title: "In-House Manufacturing",      desc: "All components are fabricated at our Al Ain facility using CNC machines, PVC welders, and precision tools.",  icon: <Wrench className="w-5 h-5" /> },
              { step: "04", title: "Installation & Handover",     desc: "Our field crews install, inspect, and hand over with full quality assurance and post-installation support.",   icon: <CheckCircle2 className="w-5 h-5" /> },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-0px)] w-full h-px bg-gradient-to-r from-blue-200 to-transparent z-0" />
                )}
                <div className="relative z-10 p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-200 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-slate-900 font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CLIENTS MARQUEE
      ════════════════════════════════════════ */}
      <section className="py-16 border-y border-slate-100 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Our Clients</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-2">
            Trusted by Leading UAE Organizations
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Over three decades, we've built lasting partnerships with government bodies,
            royal households, major contractors, and private enterprises across the UAE.
          </p>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-marquee whitespace-nowrap px-4">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium shrink-0 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 font-semibold transition-colors"
          >
            View All Clients <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* ════════════════════════════════════════
          INTRO BAND
      ════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Al Ain's Most Experienced Shading & Construction Company
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                With over 30 years of hands-on experience, Al Reem Fibre Glass has completed
                projects for UAE government ministries, royal palaces, airports, malls, zoos,
                and major private contractors. Our in-house manufacturing facility in Al Ain's
                Industrial Area ensures every product meets the highest standards of durability
                and precision — built to withstand the UAE's extreme climate conditions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors"
              >
                About Our Company <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${companyInfo.phone1}`}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium text-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SEO TEXT BLOCK
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Car Parking Shades in UAE</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Al Reem Fibre Glass is one of the UAE's most experienced manufacturers of fibre
                glass car parking shades. Our shades are custom-built to withstand high temperatures,
                UV radiation, and sandstorms — making them the preferred choice for government
                parking facilities, malls, residential communities, and commercial properties
                across Al Ain and Abu Dhabi.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">PVC & HDPE Shade Structures</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our HDPE fabric and PVC shade structures are ideal for playgrounds, walkways,
                open-air markets, and recreational spaces. Engineered for maximum tensile strength
                and UV resistance, these structures provide long-lasting shade solutions at
                competitive costs — backed by Al Reem's full installation and after-sales service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">General Contracting in Al Ain</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Beyond shading, Al Reem is a licensed general contractor with a full portfolio of
                civil and structural work. From sandwich panel buildings and aluminium profile
                structures to khaima construction and infrastructure works — we serve both
                public sector clients like Al Ain Municipality and top private contractors
                including Al-Faraa Group and Nael Construction.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CONTACT CTA
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Contact Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Whether you need a single car parking shade or a large-scale shading system for
                a government project — our team is ready to consult, design, and deliver. Contact
                us today for a free site survey and quotation.
              </p>

              <div className="space-y-4">
                <a href={`tel:${companyInfo.phone1}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Call Us</p>
                    <p className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">{companyInfo.phone1}</p>
                  </div>
                </a>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Email Us</p>
                    <p className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">{companyInfo.email}</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/971506180569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-500/30 transition-colors">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">WhatsApp</p>
                    <p className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">+971 50 618 0569</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Visit Us</p>
                    <p className="text-white font-semibold text-sm">{companyInfo.poBox}, Industrial Area, Mazyad, Al Ain</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Contact Form */}
            <div
              className="p-8 rounded-2xl border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center shadow-md shadow-green-900/30">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">Request a Free Quote</h3>
                  <p className="text-slate-400 text-xs">Sends directly to our WhatsApp</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6">
                Fill in your details and we'll get back to you instantly on WhatsApp.
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/8 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-green-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={quickForm.phone}
                    onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/8 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-green-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">
                    Service Required <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    value={quickForm.service}
                    onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/8 border border-white/10 text-slate-400 text-sm focus:outline-none focus:border-green-500/60 transition-colors appearance-none"
                  >
                    <option value="" className="bg-slate-800">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title} className="bg-slate-800">{s.title}</option>
                    ))}
                    <option value="Other" className="bg-slate-800">Other / General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={quickForm.message}
                    onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                    placeholder="Describe your project briefly..."
                    className="w-full px-4 py-2.5 rounded-lg bg-white/8 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-green-500/60 transition-colors resize-none"
                  />
                </div>

                {/* ── WhatsApp Submit Button ── */}
                <button
                  type="submit"
                  className="flex items-center justify-center w-full gap-2 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  Send via WhatsApp
                </button>

                <p className="text-center text-slate-500 text-xs">
                  Opens WhatsApp with your message pre-filled — just hit Send.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
