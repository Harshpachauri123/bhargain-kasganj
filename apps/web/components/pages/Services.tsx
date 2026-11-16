
'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  FileText,
  AlertCircle,
  Scale,
  MapPin,
  FileCheck,
  DollarSign,
  Award,
  Sparkles,
  Headphones,
  ExternalLink,
  Building2,
  ShieldCheck
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'etender',
      title: 'E-Tender Portal',
      description: 'Access live tenders, download bid documents & participate in municipal procurement.',
      icon: FileText,
      link: '#',
      badge: 'Live Bids',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 'grievance',
      title: 'Public Grievance',
      description: 'Submit civic complaints & track your grievance resolution in real time.',
      icon: AlertCircle,
      link: '/grievance', // Direct Route
      badge: '24x7 Priority',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'rti',
      title: 'Right to Information (RTI)',
      description: 'Submit RTI applications online & access transparency-related public documents.',
      icon: Scale,
      link: '#',
      badge: 'Transparent',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'wards',
      title: 'Zones / Wards Map',
      description: 'Check ward boundaries, zone maps & local administrative officer details.',
      icon: MapPin,
      link: '#',
      badge: 'Interactive',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      id: 'charter',
      title: 'Citizen Charter',
      description: 'View service time limits, officer responsibilities & citizen rights guarantee.',
      icon: FileCheck,
      link: '#',
      badge: 'Guidelines',
      tagColor: 'bg-slate-100 text-slate-700 border-slate-200'
    },
    {
      id: 'tax',
      title: 'Property Tax Online',
      description: 'Check pending dues, generate payment challans & pay property tax securely.',
      icon: DollarSign,
      link: '#',
      badge: 'Instant Receipt',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: 'certificate',
      title: 'Birth / Death Certificate',
      description: 'Apply for official certificates, track application status & download digitally signed copies.',
      icon: Award,
      link: '#',
      badge: 'E-Signed',
      tagColor: 'bg-sky-50 text-sky-700 border-sky-200'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-slate-50/70 font-sans">
      
      {/* ================= HERO SECTION (GOVERNMENT ARCHITECTURE BG) ================= */}
      <section className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Official Government Administrative Architecture Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        
        {/* Official Dark Blue / Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/85 to-indigo-950/80 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl space-y-4 text-center sm:text-left">
            
            {/* Government Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 text-xs font-semibold backdrop-blur-md shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-amber-300" />
              <span>नगर पंचायत भार्गेन • Nagrik Seva Kendra</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Citizen Services & <span className="text-amber-400">E-Governance</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl">
              Town Panchayat Bhargain is committed to providing fast, transparent, and technology-driven municipal services to ensure efficient civic governance for all citizens.
            </p>

            {/* Trust Tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Official Portal
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Direct Grievance Redressal
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAIN SERVICES CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30 pb-20">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${service.tagColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  <Link href={service.link} className="inline-flex items-center gap-1.5 hover:underline">
                    <span>Access Service</span>
                    {service.link === '#' ? (
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* ================= HELP / CTA SECTION ================= */}
        <section className="mt-16 bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Background Decorative Blur Circle */}
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2 text-center sm:text-left z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold backdrop-blur-sm mb-1">
              <Headphones className="w-3.5 h-3.5" />
              <span>Need Assistance?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Have Questions About Municipal Services?</h2>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              Our support team is dedicated to guiding citizens through online processes and grievance resolutions.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <Link
              href="/grievance"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <span>File Official Grievance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </section>

      </div>
    </div>
  )
}
