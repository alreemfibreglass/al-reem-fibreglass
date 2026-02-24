// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { companyInfo, services } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `
*New Enquiry — Al Reem Fibre Glass Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Service Required:* ${formData.service}

*Project Details:*
${formData.message}
    `.trim();

    const encoded = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/971506180569?text=${encoded}`;

    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);
    setSubmitted(true);
    window.open(whatsappURL, "_blank");
  };

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
            <span className="text-slate-300">Contact</span>
          </div>
          <div className="max-w-3xl">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Let's Build Something<br />
              <span className="text-blue-400">Great Together</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need a single car parking shade or a large-scale government
              installation — our team is ready to consult, design, and deliver.
              Reach out today for a free site survey and quotation.
            </p>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          CONTACT INFO + FORM
      ════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── LEFT: Contact Info ── */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Contact Details</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-1">Reach Us Directly</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our team is available during business hours for calls, emails,
                and site visits. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">

              {/* Mobile */}
              <a
                href={`tel:${companyInfo.phone1}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">Mobile</p>
                  <p className="text-slate-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                    {companyInfo.phone1}
                  </p>
                </div>
              </a>

              {/* Landline */}
              <a
                href={`tel:${companyInfo.phone2}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">Landline</p>
                  <p className="text-slate-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                    {companyInfo.phone2}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971506180569"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-green-200 bg-green-50/30 hover:border-green-300 hover:shadow-lg hover:shadow-green-50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">WhatsApp</p>
                  <p className="text-green-700 font-semibold text-sm group-hover:text-green-600 transition-colors">
                    Chat with us on WhatsApp
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">Email</p>
                  <p className="text-slate-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                    {companyInfo.email}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">Address</p>
                  <p className="text-slate-900 font-semibold text-sm">Al Reem Fibre Glass & Gen. Cont. Co. LLC</p>
                  <p className="text-slate-500 text-xs mt-0.5">{companyInfo.poBox}</p>
                  <p className="text-slate-500 text-xs">Industrial Area, Mazyad</p>
                  <p className="text-slate-500 text-xs">Al Ain, UAE</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-xs mb-2">Business Hours</p>
                  <div className="space-y-1.5">
                    {[
                      { day: "Mon – Thu", hours: "8:00 AM – 6:00 PM", closed: false },
                      { day: "Friday",    hours: "8:00 AM – 12:00 PM", closed: false },
                      { day: "Saturday",  hours: "8:00 AM – 5:00 PM", closed: false },
                      { day: "Sunday",    hours: "Closed", closed: true },
                    ].map((t) => (
                      <div key={t.day} className="flex items-center justify-between">
                        <span className="text-slate-500 text-xs">{t.day}</span>
                        <span className={`text-xs font-semibold ${t.closed ? "text-red-500" : "text-slate-900"}`}>
                          {t.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

              {/* Form header */}
              <div className="px-8 py-6 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shadow-md shadow-green-200">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-slate-900 font-bold text-lg">Request a Free Quote</h2>
                    <p className="text-slate-500 text-xs">Sends directly to our WhatsApp — instant response</p>
                  </div>
                </div>
              </div>

              {/* Form body */}
              <div className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-slate-900 font-bold text-xl mb-2">WhatsApp Opened!</h3>
                    <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
                      Your enquiry has been pre-filled in WhatsApp. Just hit
                      <strong className="text-slate-700"> Send </strong>
                      to reach our team instantly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Send Another Enquiry <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-700 text-xs font-semibold mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 text-xs font-semibold mb-1.5">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+971 XX XXX XXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-slate-700 text-xs font-semibold mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-slate-700 text-xs font-semibold mb-1.5">
                        Service Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Other">Other / General Enquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-slate-700 text-xs font-semibold mb-1.5">
                        Project Details <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project — location, size, requirements, timeline..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] disabled:bg-[#25D366]/60 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Send via WhatsApp
                        </>
                      )}
                    </button>

                    <p className="text-center text-slate-400 text-xs">
                      This will open WhatsApp with your enquiry pre-filled — just hit Send to reach our team instantly.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          MAP
      ════════════════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-slate-700 text-sm font-semibold">
                Industrial Area, Mazyad · Al Ain, UAE
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.7608410177327!2d55.838578!3d24.145035699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab90066b318b7%3A0x9907b22b9d0b785!2sAl%20Reem%20Fibre%20Glass%20and%20Gen%20Cont%20Co%20LLc!5e0!3m2!1sen!2sae!4v1771876197977!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Reem Fibre Glass Location"
            />
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          WHAT HAPPENS NEXT
      ════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">What Happens After You Contact Us</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Here's exactly what to expect when you reach out to Al Reem Fibre Glass.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "We Call You Back",    desc: "Within 24 hours of your enquiry, our team will contact you to understand your requirements." },
              { step: "02", title: "Free Site Survey",    desc: "We visit your location at no cost to assess dimensions, ground conditions, and access." },
              { step: "03", title: "Custom Quotation",    desc: "You receive a detailed, itemized quote with material specs, timeline, and total cost." },
              { step: "04", title: "Project Kickoff",     desc: "Once approved, we schedule manufacturing and installation at your convenience." },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
                <span className="text-4xl font-black text-slate-100 group-hover:text-blue-50 transition-colors block mb-4">
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
          BOTTOM CTA
      ════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prefer to Call Directly?
          </h2>
          <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
            Our team is available Sat–Thu during business hours. Call us now for
            an instant response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone1}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors hover:shadow-lg"
            >
              <Phone className="w-4 h-4" /> {companyInfo.phone1}
            </a>
            <a
              href="https://wa.me/971506180569"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm rounded-lg transition-colors hover:shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
