"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, HelpCircle, PhoneCall, Sparkles } from "lucide-react";
import { quickServices } from "@/data/home-data";
import { cn } from "@/lib/utils";

const accentConfigs = {
  blue: {
    iconBg: "bg-blue-50 text-blue-600 border-blue-200/80 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-blue-500/25",
    glow: "from-blue-500/10 via-blue-400/5 to-transparent",
    topBar: "from-blue-500 to-indigo-600",
    badge: "bg-blue-50 text-blue-700 border-blue-200/70",
    actionHover: "group-hover:text-blue-700",
    buttonHover: "group-hover:bg-blue-600 group-hover:border-blue-600",
  },
  green: {
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-emerald-500/25",
    glow: "from-emerald-500/10 via-emerald-400/5 to-transparent",
    topBar: "from-emerald-500 to-teal-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    actionHover: "group-hover:text-emerald-700",
    buttonHover: "group-hover:bg-emerald-600 group-hover:border-emerald-600",
  },
  saffron: {
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:shadow-amber-500/25",
    glow: "from-amber-500/10 via-amber-400/5 to-transparent",
    topBar: "from-amber-500 to-orange-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200/70",
    actionHover: "group-hover:text-amber-700",
    buttonHover: "group-hover:bg-amber-500 group-hover:border-amber-500",
  },
  navy: {
    iconBg: "bg-slate-100 text-slate-800 border-slate-200/90 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 group-hover:shadow-slate-900/25",
    glow: "from-slate-600/10 via-slate-500/5 to-transparent",
    topBar: "from-slate-700 to-slate-900",
    badge: "bg-slate-100 text-slate-700 border-slate-200/80",
    actionHover: "group-hover:text-slate-900",
    buttonHover: "group-hover:bg-slate-900 group-hover:border-slate-900",
  },
};

const serviceMetadata: Record<string, { tag: string; hindiTag: string }> = {
  "Public Grievance": { tag: "Grievance Redressal", hindiTag: "जनसुनवाई पोर्टल" },
  "Property Tax": { tag: "Assessment & Tax", hindiTag: "गृह एवं संपत्ति कर" },
  "Government Schemes": { tag: "Welfare Schemes", hindiTag: "जनकल्याण योजनाएं" },
  "RTI Information": { tag: "Right to Information", hindiTag: "सूचना का अधिकार" },
  "Contact Office": { tag: "Help & Support", hindiTag: "नागरिक सहायता" },
};

export function QuickServices() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-slate-50/70"
    >
      {/* Decorative Grid Pattern & Ambient Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 bg-gradient-to-b from-blue-100/40 via-sky-50/20 to-transparent blur-2xl" />

      <div className="civic-container relative">
        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between border-b border-slate-200/80 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1 text-xs font-semibold text-blue-800 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>नागरिक सेवाएं • Citizen Services</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Quick Municipal <span className="text-blue-700">E-Services</span>
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              नगर पंचायत भार्गैन द्वारा नागरिकों की सुविधा हेतु डिजिटल सेवाएं। घर बैठे आवेदन करें, स्थिति जांचें एवं जन-समस्याएं दर्ज कराएं।
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              24×7 Online Access
            </span>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-blue-800"
            >
              All Services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickServices.map((service, index) => {
            const Icon = service.icon;
            const config = accentConfigs[service.accent] || accentConfigs.blue;
            const meta = serviceMetadata[service.title] || {
              tag: "Digital Service",
              hindiTag: "ऑनलाइन ई-सेवा",
            };

            return (
              <div
                key={service.title}
                id={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
              >
                {/* Top Subtle Color Accent Bar */}
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 bg-gradient-to-r transition-all duration-300 opacity-80 group-hover:h-1.5 group-hover:opacity-100",
                    config.topBar
                  )}
                />

                {/* Subtle Ambient Hover Glow in Corner */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100",
                    config.glow
                  )}
                />

                <div>
                  {/* Top Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "flex h-13 w-13 items-center justify-center rounded-xl border shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md",
                        config.iconBg
                      )}
                    >
                      <Icon className="h-6 w-6 transition-transform duration-300" aria-hidden="true" />
                    </span>

                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide shadow-2xs",
                        config.badge
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                      {meta.tag}
                    </span>
                  </div>

                  {/* Hindi Category Label */}
                  <div className="mt-5 text-xs font-semibold text-slate-400">
                    {meta.hindiTag}
                  </div>

                  {/* Service Title */}
                  <h3 className="mt-1 text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-900">
                    <Link
                      href={service.href}
                      className="after:absolute after:inset-0 focus:outline-none"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  {/* Service Description */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer: Action Indicator */}
                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span
                    className={cn(
                      "text-xs font-semibold text-slate-700 transition-colors duration-200",
                      config.actionHover
                    )}
                  >
                    पोर्टल खोलें • Access Service
                  </span>

                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white shadow-2xs",
                      config.buttonHover
                    )}
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-blue-50/90 p-4 sm:flex-row sm:px-6 shadow-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">
              <HelpCircle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">
                क्या आपको किसी सेवा में सहायता की आवश्यकता है?
              </p>
              <p className="text-xs text-slate-600">
                हमारे नागरिक सहायता डेस्क या कार्यालय से संपर्क कर अपनी समस्या का त्वरित समाधान पाएं।
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-white px-3.5 py-2 text-xs font-bold text-blue-900 shadow-xs transition hover:bg-blue-50 hover:border-blue-300"
            >
              <PhoneCall className="h-3.5 w-3.5 text-blue-700" />
              Contact Helpdesk
            </Link>
            <Link
              href="/grievance"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-blue-800"
            >
              जनसुनवाई पोर्टल
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
