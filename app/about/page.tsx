// app/about/page.tsx
import Link from "next/link";
import {
  companyInfo,
  stats,
  services,
} from "@/lib/data";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Shield,
  Star,
  Clock,
  Wrench,
  CheckCircle2,
  Building,
  Users,
  Award,
  Factory,
} from "lucide-react";

export const metadata = {
  title: "About Us | Al Reem Fibre Glass & Gen. Cont. Co. LLC",
  description:
    "Learn about Al Reem Fibre Glass — UAE's trusted shading and construction company since 1994. Based in Al Ain, serving government and private clients across the UAE.",
};

export default function AboutPage() {
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
            <span className="text-slate-300">About</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Who We Are</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              About Al Reem<br />
              <span className="text-blue-400">Fibre Glass & Gen. Cont.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A trusted name in the UAE's construction and shading industry — delivering
              top-tier fibre glass, PVC, and general contracting solutions since 1994
              from our base in Al Ain's Industrial Area, Mazyad.
            </p>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          COMPANY OVERVIEW
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-5">
              Three Decades of Building the UAE
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Founded in 1994, Al Reem Fibre Glass & Gen. Cont. Co. LLC has grown from a
              local Al Ain contractor into one of the UAE's most recognized names in shading
              systems and fibre glass fabrication. Over 30 years, we have delivered projects
              for royal palaces, government ministries, airports, national museums, shopping
              malls, and major private developers.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Our facility in Industrial Area, Mazyad houses state-of-the-art CNC machines,
              PVC welding rigs, sandblasting equipment, heavy-duty cranes, and scissor lifts —
              enabling us to handle complete design, fabrication, and installation entirely
              in-house. This end-to-end capability means faster delivery, tighter quality
              control, and full accountability on every project.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              As a licensed UAE general contractor, we serve both public sector bodies like
              Al Ain Municipality and top private contractors including Al-Faraa Group,
              Nael Construction, and Daewoo — building lasting partnerships grounded in
              quality, reliability, and trust.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-semibold text-sm rounded-lg hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Clock className="w-6 h-6" />, value: "1994", label: "Year Established", sub: "30+ years in operation" },
              { icon: <Building className="w-6 h-6" />, value: "22+", label: "Landmark Projects", sub: "Palaces, airports & malls" },
              { icon: <Users className="w-6 h-6" />, value: "21+", label: "Key Clients", sub: "Government & private sector" },
              { icon: <Award className="w-6 h-6" />, value: "500+", label: "Projects Completed", sub: "Across all categories" },
              { icon: <Factory className="w-6 h-6" />, value: "50+", label: "Equipment Units", sub: "CNC, cranes & welders" },
              { icon: <MapPin className="w-6 h-6" />, value: "UAE", label: "Nationwide Coverage", sub: "Al Ain · Abu Dhabi · All Emirates" },
            ].map((card) => (
              <div
                key={card.label}
                className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-100 transition-colors">
                  {card.icon}
                </div>
                <p className="text-2xl font-black text-slate-900 mb-0.5">{card.value}</p>
                <p className="text-slate-700 font-semibold text-xs mb-1">{card.label}</p>
                <p className="text-slate-400 text-xs leading-snug">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          MISSION & VISION
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Our Purpose</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
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
              { icon: <Shield className="w-5 h-5" />, label: "Durability", desc: "Products built for UAE's extreme climate" },
              { icon: <Star className="w-5 h-5" />, label: "Quality", desc: "Highest material and finish standards" },
              { icon: <Clock className="w-5 h-5" />, label: "Reliability", desc: "On-time delivery on every project" },
              { icon: <Wrench className="w-5 h-5" />, label: "Innovation", desc: "Modern CNC precision manufacturing" },
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Why Al Reem</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-3">
              What Sets Us Apart
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              From our in-house manufacturing to our field installation teams — every
              aspect of our operation is built around delivering exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Government-Trusted Contractor", desc: "Completed projects for UAE ministries, royal palaces, Al Ain Municipality, and national institutions." },
              { title: "In-House Manufacturing", desc: "Our Al Ain factory produces all components — ensuring quality control, faster lead times, and no third-party dependency." },
              { title: "CNC Precision Equipment", desc: "VMC-540 machining centres, CNC profile cutters, and lathe machines ensure every part is built to exact tolerances." },
              { title: "Full Project Lifecycle", desc: "From site survey and engineering drawings to fabrication, delivery, installation, and handover — all managed by us." },
              { title: "Climate-Engineered Products", desc: "All shading products are designed and tested for UAE conditions — extreme heat, UV radiation, and sandstorms." },
              { title: "Licensed UAE General Contractor", desc: "Fully registered and licensed to operate across Al Ain, Abu Dhabi, and all Emirates." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 shadow-sm">
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
          LOCATION
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Find Us</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">Our Location</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address card */}
            <div className="lg:col-span-1 space-y-4">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-slate-900 font-bold text-base mb-4">Head Office & Factory</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-700 font-medium">Al Reem Fibre Glass & Gen. Cont. Co. LLC</p>
                      <p className="text-slate-500">{companyInfo.poBox}</p>
                      <p className="text-slate-500">Industrial Area, Mazyad</p>
                      <p className="text-slate-500">Al Ain, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                    <div>
                      <a href={`tel:${companyInfo.phone1}`} className="text-slate-700 hover:text-blue-600 transition-colors block">{companyInfo.phone1}</a>
                      <a href={`tel:${companyInfo.phone2}`} className="text-slate-500 hover:text-blue-600 transition-colors block">{companyInfo.phone2}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                    <a href={`mailto:${companyInfo.email}`} className="text-slate-700 hover:text-blue-600 transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Map embed */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.7608410177327!2d55.838578!3d24.145035699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab90066b318b7%3A0x9907b22b9d0b785!2sAl%20Reem%20Fibre%20Glass%20and%20Gen%20Cont%20Co%20LLc!5e0!3m2!1sen!2sae!4v1771876197977!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Reem Fibre Glass Location - Industrial Area Mazyad Al Ain UAE"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
            Contact Al Reem Fibre Glass today for a free consultation and quotation on your
            next shading or construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors hover:shadow-lg"
            >
              <Mail className="w-4 h-4" /> Get a Free Quote
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
