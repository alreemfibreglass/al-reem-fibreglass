// app/equipment/page.tsx
import Link from "next/link";
import { companyInfo, equipment } from "@/lib/data";
import {
  Phone,
  Mail,
  ArrowRight,
  Wrench,
  Settings,
  Zap,
  Layers,
  Truck,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Equipment & Machinery | Al Reem Fibre Glass & Gen. Cont. Co. LLC",
  description:
    "Al Reem Fibre Glass operates 50+ units of industrial equipment including CNC machines, PVC welders, boom cranes, scissor lifts, and sandblasting units at our Al Ain facility.",
};

const equipmentCategories = [
  {
    id: 1,
    title: "CNC & Precision Machining",
    icon: <Settings className="w-6 h-6" />,
    color: "border-blue-200 bg-blue-50/40",
    iconColor: "bg-blue-100 text-blue-600",
    desc: "State-of-the-art CNC machining centres for high-precision aluminium cutting, profiling, and component fabrication.",
    items: [
      "CNC Aluminum Cutting Machine",
      "CNC Profile Cutting Machine",
      "CNC Marking Machine",
      "CNC Head Man Machining Centre VMC-540",
      "CNC Head Man Lathe Machine",
      "Manual Lathe Machine",
      "Lathe Mill Combo",
      "Universal Tool Grinder",
      "Bar Threading Machine",
    ],
  },
  {
    id: 2,
    title: "PVC Welding & Fabrication",
    icon: <Zap className="w-6 h-6" />,
    color: "border-amber-200 bg-amber-50/40",
    iconColor: "bg-amber-100 text-amber-600",
    desc: "Industrial PVC welding machines for precision joining of PVC shade structures and membranes.",
    items: [
      "PVC Welding Machine – 20M Moving Type",
      "PVC Welding Machine – Still Type (×2)",
      "PVC Welding Machine – Moving Type",
      "Drill & Frasing Machine",
      "Aluminum Cutting Saw",
      "Disc Cutting Machine",
      "Pneumatic Tapping Machine",
      "Magnet Drill",
      "Jig Saw",
    ],
  },
  {
    id: 3,
    title: "Surface Treatment",
    icon: <Layers className="w-6 h-6" />,
    color: "border-orange-200 bg-orange-50/40",
    iconColor: "bg-orange-100 text-orange-600",
    desc: "Professional surface preparation and finishing equipment for steel, aluminium, and fibre glass components.",
    items: [
      "Sandblasting Machine – Open Type",
      "Sandblasting Machine – Cabin Type",
      "Hand Grinder",
      "Manuel Grinder",
      "Manuel Disc Cutting",
      "Hand Drills",
      "Hilti Drill Machine",
      "Spindle Moulder",
      "PS 53 Thicknessing Machine",
    ],
  },
  {
    id: 4,
    title: "Heavy Lifting & Material Handling",
    icon: <Truck className="w-6 h-6" />,
    color: "border-green-200 bg-green-50/40",
    iconColor: "bg-green-100 text-green-600",
    desc: "Heavy-duty lifting and transport equipment for on-site installation of large-scale shading structures.",
    items: [
      "Boom Lifting Cranes",
      "Loading Crane / Trouvery Truck",
      "Scissor Lift Truck",
      "Lifting Jack",
      "Heavy Duty Jack",
      "5× Manual Pallet Jacks",
      "Universal Iron Worker",
      "Iron Bending Machine",
      "Rebar Tying Machines",
    ],
  },
  {
    id: 5,
    title: "Workshop & Support",
    icon: <Wrench className="w-6 h-6" />,
    color: "border-purple-200 bg-purple-50/40",
    iconColor: "bg-purple-100 text-purple-600",
    desc: "Supporting workshop tools and equipment that keep our manufacturing facility running at full capacity.",
    items: [
      "Battery Charger",
      "Concrete Disc Cutting Machine",
      "Vacuum Cleaner – Small",
      "Vacuum Cleaner – Heavy Duty",
      "Manuel Drill Machine",
    ],
  },
];

const facilityStats = [
  { value: "50+",    label: "Equipment Units",       icon: <Wrench className="w-5 h-5" /> },
  { value: "5",      label: "CNC Machines",           icon: <Settings className="w-5 h-5" /> },
  { value: "3+",     label: "Cranes & Lifts",         icon: <Truck className="w-5 h-5" /> },
  { value: "Al Ain", label: "Manufacturing Base",     icon: <Shield className="w-5 h-5" /> },
];

export default function EquipmentPage() {
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
            <span className="text-slate-300">Equipment</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Our Facility</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Industrial Equipment<br />
              <span className="text-blue-400">&amp; Manufacturing Facility</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Al Reem Fibre Glass operates a fully equipped manufacturing facility in
              Al Ain's Industrial Area, Mazyad. Our 50+ units of industrial machinery —
              from CNC machining centres to boom cranes — enable complete in-house
              fabrication and installation of all shading and construction products.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {facilityStats.map((s) => (
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
          WHY IN-HOUSE MATTERS BAND
      ════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Why In-House Manufacturing Matters
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              By owning and operating our full suite of manufacturing equipment, Al Reem
              eliminates reliance on third-party fabricators. This means faster turnaround
              times, tighter quality control, lower costs for clients, and complete
              accountability from the first cut to final installation. Every component
              that goes into your project is made right here in our Al Ain facility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
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
          EQUIPMENT CATEGORIES
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Machinery</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Equipment by Category
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Our facility is organized into specialized zones — each equipped with the
              right tools for its purpose, from CNC precision cutting to heavy-lift installation.
            </p>
          </div>

          <div className="space-y-6">
            {equipmentCategories.map((cat) => (
              <div
                key={cat.id}
                className={`group rounded-2xl border ${cat.color} transition-all duration-300 hover:shadow-xl overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4">

                  {/* Left: Category info */}
                  <div className="p-8 lg:border-r border-slate-200/60">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.iconColor}`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-slate-900 font-bold text-lg mb-3">{cat.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600">
                      {cat.items.length} units
                    </span>
                  </div>

                  {/* Right: Equipment list */}
                  <div className="lg:col-span-3 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          <span className="text-slate-700 text-xs font-medium leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          FULL EQUIPMENT LIST
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Complete Inventory</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
              Full Equipment List
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              A complete inventory of all equipment operated at our Al Ain manufacturing facility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {equipment.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
              >
                <span className="text-blue-400/60 text-xs font-mono font-bold w-6 shrink-0 group-hover:text-blue-500 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-slate-700 text-xs font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CAPABILITIES STRIP
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">What This Means For You</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3">
              Our Manufacturing Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Settings className="w-5 h-5" />,
                title: "CNC Precision Fabrication",
                desc: "Our VMC-540 machining centre and CNC profile cutters produce components to exact tolerances — ensuring perfect fit and finish on every project.",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "PVC & Membrane Welding",
                desc: "Industrial PVC welding machines — both moving and static types — allow us to fabricate large-scale shade membranes with clean, watertight seams.",
              },
              {
                icon: <Layers className="w-5 h-5" />,
                title: "Surface Blasting & Finishing",
                desc: "Open and cabin-type sandblasting units prepare all steel and aluminium components for powder coating and paint — ensuring maximum corrosion resistance.",
              },
              {
                icon: <Truck className="w-5 h-5" />,
                title: "Heavy Lift & Installation",
                desc: "Boom cranes and scissor lifts allow our teams to safely install large shading structures at height without relying on third-party equipment hire.",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Steel & Iron Work",
                desc: "Iron bending machines, rebar tying equipment, and universal iron workers enable full in-house structural steel fabrication for shed and shed frames.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Quality Controlled Output",
                desc: "Every component produced in our facility passes through quality checks before dispatch — ensuring no defects reach your project site.",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
                  {cap.icon}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm mb-1">{cap.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{cap.desc}</p>
                </div>
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
            Built In-House. Delivered With Precision.
          </h2>
          <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
            Our manufacturing capability means your project is built faster, better,
            and at a more competitive price. Contact us to discuss your requirements.
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
