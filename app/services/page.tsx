// app/services/page.tsx
import Link from "next/link";
import { companyInfo, services } from "@/lib/data";
import {
  ArrowRight,
  Phone,
  Mail,
  CarFront,
  Layers,
  Tent,
  Building2,
  LayoutGrid,
  HardHat,
  CheckCircle2,
  Wrench,
  Shield,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Al Reem Fibre Glass & Gen. Cont. Co. LLC",
  description:
    "Explore Al Reem Fibre Glass specializations — car parking shades, GRP lining, HDPE & PVC structures, sandwich panels, aluminium sheds, khaimas and general contracting across UAE.",
};

const iconMap: Record<string, React.ReactNode> = {
  CarFront: <CarFront className="w-7 h-7" />,
  Layers: <Layers className="w-7 h-7" />,
  Tent: <Tent className="w-7 h-7" />,
  Building2: <Building2 className="w-7 h-7" />,
  LayoutGrid: <LayoutGrid className="w-7 h-7" />,
  HardHat: <HardHat className="w-7 h-7" />,
};

const serviceDetails: Record<
  number,
  { features: string[]; applications: string[]; seoText: string }
> = {
  1: {
    features: [
      "Custom-engineered fibre glass panels",
      "UV-resistant and weatherproof coating",
      "Single, double, and cantilever designs",
      "Powder-coated steel support structures",
      "Available in various colors and finishes",
      "Designed for UAE extreme temperatures",
    ],
    applications: [
      "Residential community parking",
      "Government facility parking",
      "Commercial mall parking",
      "Industrial compound vehicles",
      "Airport parking areas",
    ],
    seoText:
      "Al Reem Fibre Glass manufactures and installs high-quality fibre glass car parking shades across Al Ain and Abu Dhabi. Our GRP shades are engineered specifically for the UAE's harsh climate — resistant to UV radiation, sandstorms, and temperatures exceeding 50°C.",
  },
  2: {
    features: [
      "Hand lay-up and spray-up GRP fabrication",
      "Custom mould manufacturing",
      "Smooth gel coat interior finish",
      "Chemical and corrosion resistant",
      "Available in standard and custom sizes",
      "Anti-slip surface options available",
    ],
    applications: [
      "Commercial and hotel bathtubs",
      "Water tanks and reservoirs",
      "Swimming pool lining",
      "Industrial chemical tanks",
      "Agricultural water storage",
    ],
    seoText:
      "Our GRP (Glass Reinforced Plastic) lining and bathtub fabrication services deliver durable, corrosion-resistant fibre glass products for residential, commercial, and industrial use. All products are manufactured at our Al Ain facility with precision moulds.",
  },
  3: {
    features: [
      "High-density polyethylene (HDPE) fabric",
      "PVC-coated polyester membrane",
      "Tensile structure engineering",
      "Wide-span coverage capability",
      "UV stabilized and flame retardant",
      "Custom shapes: sail, pyramid, hypar",
    ],
    applications: [
      "School and nursery playgrounds",
      "Public walkways and promenades",
      "Open-air markets and souqs",
      "Sports courts and recreational areas",
      "Theme parks and resorts",
    ],
    seoText:
      "Al Reem's HDPE and PVC shade structures provide cost-effective, long-lasting coverage for outdoor spaces across the UAE. Our tensile fabric structures are engineered for maximum wind and UV resistance, ideal for playgrounds, walkways, and public open spaces.",
  },
  4: {
    features: [
      "Hot-dip galvanized steel framework",
      "Extruded aluminium profile systems",
      "Polycarbonate and metal sheet roofing",
      "Modular and expandable design",
      "Corrosion-resistant finishes",
      "Suitable for heavy-duty loads",
    ],
    applications: [
      "Industrial warehouses",
      "Agricultural storage",
      "Vehicle workshops",
      "Equipment storage yards",
      "Temporary site offices",
    ],
    seoText:
      "Our galvanized iron and aluminium profile shed systems combine structural strength with aesthetic versatility. Suitable for industrial, commercial, and residential applications, these sheds are engineered to last in the UAE's demanding outdoor environment.",
  },
  5: {
    features: [
      "PIR and EPS core insulation panels",
      "Pre-painted steel face sheets",
      "Tongue and groove interlocking",
      "Fire-rated options available",
      "Excellent thermal performance",
      "Fast installation system",
    ],
    applications: [
      "Cold storage facilities",
      "Industrial warehouses",
      "Labour accommodation",
      "Farm storage buildings",
      "Prefabricated offices",
    ],
    seoText:
      "Sandwich panel shed systems from Al Reem offer superior thermal insulation and rapid installation for industrial and commercial buildings. Our panels are sourced from certified manufacturers and installed by our experienced field teams across the UAE.",
  },
  6: {
    features: [
      "Traditional and modern khaima designs",
      "Structural steel and fabric construction",
      "Custom dimensions up to 50m x 25m",
      "Full civil and MEP works capability",
      "Government tender experience",
      "Complete project management",
    ],
    applications: [
      "Royal and VIP events",
      "Government gatherings",
      "Wedding and celebration venues",
      "Commercial exhibitions",
      "Ramadan and seasonal setups",
    ],
    seoText:
      "Al Reem has extensive experience in constructing traditional Khaimas and undertaking general civil contracting works across Al Ain and Abu Dhabi. From large-scale royal event structures to municipal infrastructure — our teams deliver on time and to specification.",
  },
};

export default function ServicesPage() {
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
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Services</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">What We Offer</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Our Core<br />
              <span className="text-blue-400">Specializations</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Six decades of combined expertise in fibre glass, shading systems, and general
              contracting. Every service is backed by in-house manufacturing, skilled
              installation teams, and 30+ years of UAE project experience.
            </p>
          </div>

          {/* Service quick-jump pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#service-${s.id}`}
                className="px-4 py-2 rounded-full border border-white/15 bg-white/8 text-white/70 text-xs font-medium hover:border-blue-400/50 hover:text-blue-300 transition-colors backdrop-blur-sm"
              >
                {String(s.id).padStart(2, "0")} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SERVICE CARDS
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => {
            const details = serviceDetails[service.id];
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 overflow-hidden scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${isEven ? "" : "lg:flex-row-reverse"}`}>

                  {/* Left: Service info */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
                        {iconMap[service.icon]}
                      </div>
                      <div>
                        <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                          Service {String(service.id).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl font-bold text-slate-900 mt-1">{service.title}</h2>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {details.seoText}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-slate-900 font-semibold text-sm mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {details.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-blue-200"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right: Applications */}
                  <div className="lg:col-span-2 p-8 lg:p-10 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-100">
                    <h3 className="text-slate-900 font-semibold text-sm mb-4 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-500" />
                      Applications
                    </h3>
                    <ul className="space-y-2.5 mb-8">
                      {details.applications.map((app) => (
                        <li key={app} className="flex items-center gap-2.5 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>

                    {/* Mini badges */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 border border-blue-100 text-xs text-blue-700">
                        <Shield className="w-3.5 h-3.5" />
                        UAE climate-tested & certified
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600">
                        <Clock className="w-3.5 h-3.5" />
                        In-house manufacturing · Fast delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-3">
              From Enquiry to Installation
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Our streamlined process ensures every project is delivered on time,
              within budget, and to the highest quality standards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation & Survey", desc: "We visit your site, assess requirements, measure dimensions and environmental factors." },
              { step: "02", title: "Design & Engineering", desc: "Structural drawings and material specifications tailored to your exact project needs." },
              { step: "03", title: "In-House Manufacturing", desc: "All components fabricated at our Al Ain CNC facility — no outsourcing, full control." },
              { step: "04", title: "Installation & Handover", desc: "Expert field crews install, inspect, and hand over with full post-installation support." },
            ].map((item) => (
              <div key={item.step} className="relative p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group">
                <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors block mb-4">
                  {item.step}
                </span>
                <h3 className="text-slate-900 font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Custom Shading Solution?
          </h2>
          <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
            Our team is ready to consult, design, and deliver. Contact Al Reem today for
            a free site survey and project quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors hover:shadow-lg"
            >
              <Mail className="w-4 h-4" /> Request a Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone1}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-medium text-sm rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> {companyInfo.phone1}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
