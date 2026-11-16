
import { statisticsCards } from "@/data/home-data";
import { Card } from "@workspace/ui/components/card";
import { BarChart3 } from "lucide-react";

export function StatisticsSection() {
  return (
    <section id="department" className="section-padding relative overflow-hidden bg-slate-50/80">
      
      {/* Background Subtle Accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />

      <div className="civic-container">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-bold text-primary ring-1 ring-inset ring-blue-700/10">
            <BarChart3 className="h-3.5 w-3.5" />
            विभाग एवं आंकड़े • Statistics
          </span>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            प्रशासनिक आंकड़े एवं विभाग
          </h2>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            नगर पंचायत भरगैन की प्रशासनिक व्यवस्था, कुल वार्डों, अधिकारियों एवं नागरिक सुविधाओं से जुड़े मुख्य आंकड़े।
          </p>
        </div>

        {/* Statistics Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statisticsCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Card
                key={card.label}
                id={index === 3 ? "staff" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Top Subtle Hover Accent Bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Decorative Top Right Circle */}
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-blue-50/60 transition-transform duration-500 group-hover:scale-125" />

                {/* Icon Box */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Stat Value */}
                <p className="relative mt-5 text-3xl font-black tracking-tight text-slate-900 lg:text-4xl">
                  {card.value}
                </p>

                {/* Stat Title */}
                <h3 className="relative mt-2 text-base font-bold text-slate-800 transition-colors group-hover:text-primary">
                  {card.label}
                </h3>

                {/* Description */}
                <p className="relative mt-1.5 text-xs leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
