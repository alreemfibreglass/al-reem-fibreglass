// app/clients/page.tsx
import Link from "next/link";
import { companyInfo, clients, projects } from "@/lib/data";
import {
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Shield,
  Star,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Our Clients | Al Reem Fibre Glass & Gen. Cont. Co. LLC",
  description:
    "Al Reem Fibre Glass has worked with 20+ major UAE clients including Al Ain Municipality, Al-Faraa Group, Nael Construction, Daewoo, and more since 1994.",
};

const clientDetails: {
  name: string;
  type: string;
  typeColor: string;
  location: string;
}[] = [
  { name: "Al Ain Municipality",                    type: "Government",   typeColor: "bg-slate-100 text-slate-700 border-slate-200",   location: "Al Ain" },
  { name: "Al-Geemi & Partners",                    type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Abu Dhabi" },
  { name: "Nael Construction",                      type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "UAE" },
  { name: "Al-Faraa Group",                         type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "UAE" },
  { name: "M/S Development Construction",           type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Abu Dhabi" },
  { name: "Ganthoot Transport & Gen. Cont.",        type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Abu Dhabi" },
  { name: "Lucent Gen. Contracting",                type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Al Ain" },
  { name: "Al Andalus Construction",                type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Al Ain" },
  { name: "Daewoo",                                 type: "Corporate",    typeColor: "bg-purple-50 text-purple-700 border-purple-200", location: "Al Ain" },
  { name: "Zarooni Transemirates",                  type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Al Ain" },
  { name: "Insaf General Contracting",              type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Abu Dhabi" },
  { name: "Co-operative Society",                   type: "Government",   typeColor: "bg-slate-100 text-slate-700 border-slate-200",   location: "Abu Dhabi" },
  { name: "Nael & Bin Harmal Groups",               type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "UAE" },
  { name: "Al Fahjan Transport & Gen. Cont. Co.",   type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "UAE" },
  { name: "Premier Motors",                         type: "Corporate",    typeColor: "bg-purple-50 text-purple-700 border-purple-200", location: "Al Ain & Abu Dhabi" },
  { name: "Bin Hamooda Group",                      type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Al Ain" },
  { name: "Western Bainoona",                       type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Abu Dhabi" },
  { name: "Al Nasr Properties",                     type: "Real Estate",  typeColor: "bg-green-50 text-green-700 border-green-200",    location: "Abu Dhabi" },
  { name: "Al Hamairi Contracting",                 type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Al Ain" },
  { name: "Skyline General Contracting",            type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Abu Dhabi" },
  { name: "Ideal Engineering Contracting",          type: "Contractor",   typeColor: "bg-blue-50 text-blue-700 border-blue-200",       location: "Abu Dhabi" },
];

const clientStats = [
  { value: "21+",  label: "Total Clients",        icon: <Users className="w-5 h-5" /> },
  { value: "30+",  label: "Years of Partnerships", icon: <Star className="w-5 h-5" /> },
  { value: "2",    label: "Government Bodies",     icon: <Building2 className="w-5 h-5" /> },
  { value: "100%", label: "Repeat Clients",        icon: <Shield className="w-5 h-5" /> },
];

export default function ClientsPage() {
  return (
    <div className="bg-white text-slate-900">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Clients</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Who We Serve</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Trusted By Leading<br />
              <span className="text-blue-400">UAE Organizations</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Over three decades, Al Reem Fibre Glass has built lasting partnerships with
              government bodies, royal households, major contractors, and private enterprises
              across Al Ain, Abu Dhabi, and the entire UAE.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {clientStats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                <div className="flex justify-center text-blue-400 mb-2">{s.icon}</div>
                <p className="text-2xl font-black text-blue-400">{s.value}</p>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          TRUST BAND
      ════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              A Client List Built on Decades of Delivered Quality
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Every client on our list has trusted Al Reem Fibre Glass with their infrastructure
              and construction needs. From the UAE's largest contractors and real estate developers
              to government ministries and royal palaces — our reputation for quality,
              reliability, and on-time delivery keeps clients coming back project after project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors"
            >
              Become a Client <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${companyInfo.phone1}`}
              className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CLIENT CARDS GRID
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Our Clients</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-3">
              Companies We've Worked With
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Our client base spans government authorities, international corporations,
              major UAE contractors, and leading real estate developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientDetails.map((client, i) => (
              <div
                key={client.name}
                className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                {/* Avatar */}
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-base shrink-0 group-hover:bg-blue-100 transition-colors">
                  {client.name.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-slate-900 font-semibold text-sm leading-snug">
                      {client.name}
                    </h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-medium shrink-0 ${client.typeColor}`}>
                      {client.type}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    <Building2 className="w-3 h-3 shrink-0" />
                    {client.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CLIENT TYPE BREAKDOWN
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Client Mix</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
              Serving Diverse Sectors
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Our client portfolio spans multiple industries and sectors across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                type: "Government & Municipal",
                count: 2,
                color: "border-slate-200 bg-white",
                iconColor: "bg-slate-100 text-slate-600",
                desc: "Al Ain Municipality and Co-operative Society — representing our government sector partnerships.",
                examples: ["Al Ain Municipality", "Co-operative Society"],
              },
              {
                type: "General Contractors",
                count: 15,
                color: "border-blue-200 bg-blue-50/30",
                iconColor: "bg-blue-100 text-blue-600",
                desc: "The majority of our client base — UAE's top construction and contracting firms.",
                examples: ["Al-Faraa Group", "Nael Construction", "Al Andalus Construction"],
              },
              {
                type: "Corporate & Automotive",
                count: 2,
                color: "border-purple-200 bg-purple-50/30",
                iconColor: "bg-purple-100 text-purple-600",
                desc: "Corporate clients including international brands and premium automotive groups.",
                examples: ["Daewoo", "Premier Motors"],
              },
              {
                type: "Real Estate & Property",
                count: 1,
                color: "border-green-200 bg-green-50/30",
                iconColor: "bg-green-100 text-green-600",
                desc: "Real estate developers and property management companies across Abu Dhabi.",
                examples: ["Al Nasr Properties"],
              },
            ].map((sector) => (
              <div
                key={sector.type}
                className={`p-6 rounded-2xl border ${sector.color} shadow-sm hover:shadow-md transition-all duration-200`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-2xl font-black mb-4 ${sector.iconColor}`}>
                  {sector.count}
                </div>
                <h3 className="text-slate-900 font-bold text-sm mb-2">{sector.type}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{sector.desc}</p>
                <div className="space-y-1">
                  {sector.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <section className="py-14 bg-white border-b border-slate-100 overflow-hidden">
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-marquee whitespace-nowrap px-4">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium shrink-0 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          WHY CLIENTS CHOOSE US
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Why They Choose Us</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
              What Our Clients Value Most
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Consistent Quality", desc: "Every project — large or small — receives the same level of attention to detail, material quality, and finish standards." },
              { title: "On-Time Delivery", desc: "We understand the cost of delays. Our in-house manufacturing and dedicated project managers ensure schedules are met." },
              { title: "End-to-End Accountability", desc: "One point of contact from design to installation — no passing the buck between contractors and suppliers." },
              { title: "Competitive Pricing", desc: "In-house manufacturing eliminates middlemen, allowing us to deliver premium quality at competitive market rates." },
              { title: "After-Sales Support", desc: "Our relationship doesn't end at handover. We provide maintenance, repairs, and modifications as needed." },
              { title: "Licensed & Insured", desc: "Fully licensed UAE general contractor with proper insurance and compliance documentation for all project types." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-900 font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Join Our Client List</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Ready to Work With Al Reem?
          </h2>
          <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Join over 21 leading UAE organizations who trust Al Reem Fibre Glass for
            their shading and construction needs. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <Mail className="w-4 h-4" /> Get a Free Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone1}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 hover:border-blue-400/60 text-white font-medium text-sm rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-200"
            >
              <Phone className="w-4 h-4" /> {companyInfo.phone1}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
