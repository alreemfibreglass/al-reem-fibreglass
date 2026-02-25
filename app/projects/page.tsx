// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import { companyInfo, projects } from "@/lib/data";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Building,
  Building2,
  Landmark,
  ShoppingBag,
  Trees,
  Warehouse,
} from "lucide-react";

export const metadata = {
  title: "Major Projects | Al Reem Fibre Glass & Gen. Cont. Co. LLC",
  description:
    "Explore Al Reem Fibre Glass major projects across UAE — royal palaces, airports, national museums, malls, government offices, and more since 1994.",
};

const categoryMap: Record<number, { label: string; icon: React.ReactNode; color: string }> = {
  1:  { label: "Palace",      icon: <Landmark className="w-3.5 h-3.5" />,    color: "bg-purple-50 text-purple-600 border-purple-200" },
  2:  { label: "Palace",      icon: <Landmark className="w-3.5 h-3.5" />,    color: "bg-purple-50 text-purple-600 border-purple-200" },
  3:  { label: "Airport",     icon: <Building className="w-3.5 h-3.5" />,    color: "bg-blue-50 text-blue-600 border-blue-200" },
  4:  { label: "Government",  icon: <Building2 className="w-3.5 h-3.5" />,   color: "bg-slate-100 text-slate-600 border-slate-200" },
  5:  { label: "Government",  icon: <Building2 className="w-3.5 h-3.5" />,   color: "bg-slate-100 text-slate-600 border-slate-200" },
  6:  { label: "Museum",      icon: <Landmark className="w-3.5 h-3.5" />,    color: "bg-amber-50 text-amber-600 border-amber-200" },
  7:  { label: "Government",  icon: <Building2 className="w-3.5 h-3.5" />,   color: "bg-slate-100 text-slate-600 border-slate-200" },
  8:  { label: "Government",  icon: <Building2 className="w-3.5 h-3.5" />,   color: "bg-slate-100 text-slate-600 border-slate-200" },
  9:  { label: "Government",  icon: <Building2 className="w-3.5 h-3.5" />,   color: "bg-slate-100 text-slate-600 border-slate-200" },
  10: { label: "Government",  icon: <Building2 className="w-3.5 h-3.5" />,   color: "bg-slate-100 text-slate-600 border-slate-200" },
  11: { label: "Palace",      icon: <Landmark className="w-3.5 h-3.5" />,    color: "bg-purple-50 text-purple-600 border-purple-200" },
  12: { label: "Palace",      icon: <Landmark className="w-3.5 h-3.5" />,    color: "bg-purple-50 text-purple-600 border-purple-200" },
  13: { label: "Public",      icon: <Trees className="w-3.5 h-3.5" />,       color: "bg-green-50 text-green-600 border-green-200" },
  14: { label: "Sports",      icon: <Building className="w-3.5 h-3.5" />,    color: "bg-orange-50 text-orange-600 border-orange-200" },
  15: { label: "Farm / Shed", icon: <Warehouse className="w-3.5 h-3.5" />,  color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  16: { label: "Farm / Shed", icon: <Warehouse className="w-3.5 h-3.5" />,  color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  17: { label: "Palace",      icon: <Landmark className="w-3.5 h-3.5" />,    color: "bg-purple-50 text-purple-600 border-purple-200" },
  18: { label: "Municipality", icon: <Building2 className="w-3.5 h-3.5" />, color: "bg-slate-100 text-slate-600 border-slate-200" },
  19: { label: "Museum",      icon: <Landmark className="w-3.5 h-3.5" />,    color: "bg-amber-50 text-amber-600 border-amber-200" },
  20: { label: "Mall",        icon: <ShoppingBag className="w-3.5 h-3.5" />, color: "bg-pink-50 text-pink-600 border-pink-200" },
  21: { label: "Government",  icon: <Building2 className="w-3.5 h-3.5" />,   color: "bg-slate-100 text-slate-600 border-slate-200" },
  22: { label: "Municipality", icon: <Building2 className="w-3.5 h-3.5" />, color: "bg-slate-100 text-slate-600 border-slate-200" },
};

const categoryCounts = [
  { label: "Royal Palaces",       count: 5, color: "bg-purple-50 border-purple-200 text-purple-700" },
  { label: "Government",          count: 8, color: "bg-slate-100 border-slate-200 text-slate-700" },
  { label: "Museums",             count: 2, color: "bg-amber-50 border-amber-200 text-amber-700" },
  { label: "Airports",            count: 1, color: "bg-blue-50 border-blue-200 text-blue-700" },
  { label: "Malls",               count: 1, color: "bg-pink-50 border-pink-200 text-pink-700" },
  { label: "Farms & Sheds",       count: 2, color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
  { label: "Sports & Public",     count: 2, color: "bg-green-50 border-green-200 text-green-700" },
  { label: "Ongoing (2010–2025)", count: 1, color: "bg-blue-50 border-blue-200 text-blue-700" },
];

const featuredProjects = [
  {
    id: 1,
    name: "Al Wattaba Palace",
    location: "Abu Dhabi",
    image: "/images/projects/al-wattaba-palace.jpg",
    desc: "Large-scale fibre glass shading installation for the royal palace compound in Abu Dhabi — one of our most prestigious government projects.",
    tag: "Royal Palace",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: 3,
    name: "Ameeri Airport",
    location: "Abu Dhabi",
    image: "/images/projects/ameeri-airport.jpg",
    desc: "Custom shading and structural work for Abu Dhabi's Ameeri Airport — requiring precision engineering and strict aviation authority compliance.",
    tag: "Airport",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: 10,
    name: "Al Ain Municipality Parking",
    location: "Al Ain",
    image: "/images/projects/al-ain-municipality-parking.jpg",
    desc: "Comprehensive shading and structural installations for one of Al Ain Muncipality parking",
    tag: "Municipality Project",
    tagColor: "bg-pink-50 text-pink-700 border-pink-200",
  },
];

// ── Fallback placeholder when image is missing ──
function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative bg-slate-100 overflow-hidden ${className}`}>
      {/* Gradient placeholder always visible underneath */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
        <Building2 className="w-10 h-10 text-slate-300 mb-2" />
        <p className="text-slate-400 text-xs text-center px-4 font-medium">{alt}</p>
      </div>
      {/* Real image sits on top once file exists */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default function ProjectsPage() {
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
            <span className="text-slate-300">Projects</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Our Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Landmark Projects<br />
              <span className="text-blue-400">Across the UAE</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Over 30 years of delivering exceptional shading and construction projects for
              royal palaces, government institutions, airports, national museums, shopping
              malls, and private developments across Al Ain, Abu Dhabi, and the UAE.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {[
              { value: "22+", label: "Major Projects" },
              { value: "30+", label: "Years Active" },
              { value: "5",   label: "Royal Palaces" },
              { value: "UAE", label: "Nationwide" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                <p className="text-2xl font-black text-blue-400">{s.value}</p>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CATEGORY BREAKDOWN
      ════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h2 className="text-lg font-bold text-slate-900">Projects by Category</h2>
            <span className="text-sm text-slate-400">22 total projects</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categoryCounts.map((cat) => (
              <div
                key={cat.label}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${cat.color}`}
              >
                {cat.label}
                <span className="w-5 h-5 rounded-full bg-white/70 flex items-center justify-center text-xs font-bold">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          FEATURED PROJECTS
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Highlights</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
              Notable Completed Projects
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              A selection of our most prestigious and technically demanding
              projects across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="group rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Image */}
                <ProjectImage src={p.image} alt={p.name} className="h-52 w-full" />

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-slate-100 group-hover:text-blue-50 transition-colors font-mono">
                      {String(p.id).padStart(2, "0")}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-medium ${p.tagColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          ALL PROJECTS GRID
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Complete List</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3">All Major Projects</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Every major project completed by Al Reem Fibre Glass since our founding in 1994.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => {
              const cat = categoryMap[project.id];
              return (
                <div
                  key={project.id}
                  className="group rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all duration-200 overflow-hidden"
                >
                  {/* Image */}
                  <ProjectImage
                    src={project.image}
                    alt={project.name}
                    className="h-40 w-full"
                  />

                  {/* Content */}
                  <div className="flex items-center gap-3 p-4">
                    <span className="text-2xl font-black text-slate-100 group-hover:text-blue-100 transition-colors w-10 shrink-0 font-mono leading-none">
                      {String(project.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-800 text-sm font-semibold leading-snug truncate">
                        {project.name}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 shrink-0" />
                        {project.location}
                      </p>
                    </div>
                    {cat && (
                      <span className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium shrink-0 ${cat.color}`}>
                        {cat.icon}
                        {cat.label}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          ONGOING WORK BAND
      ════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">Ongoing Partnership</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-2">
              PWD & Municipality Works — 2010 to 2025
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Al Reem has maintained a long-standing ongoing relationship with the Public
              Works Department (PWD) and Al Ain Municipality — delivering continuous shading,
              maintenance, and construction works from 2010 through 2025. This extended
              partnership is a testament to our reliability and quality of work.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
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
          CTA
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Work With Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Add Your Project to Our Portfolio
          </h2>
          <p className="text-slate-500 text-base mb-8 max-w-xl mx-auto">
            Whether it's a single parking shade or a large-scale government installation —
            contact us today for a free site survey and quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
            >
              <Mail className="w-4 h-4" /> Get a Free Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone1}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-200 text-slate-700 font-medium text-sm rounded-lg hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <Phone className="w-4 h-4" /> {companyInfo.phone1}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
