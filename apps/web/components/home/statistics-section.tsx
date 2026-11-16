import { statisticsCards } from "@/data/home-data";
import { Card } from "@workspace/ui/components/card";
import { BarChart3, TrendingUp } from "lucide-react";

export function StatisticsSection() {
  // Vibrant color themes array for each card to make them look distinct and colorful
  const colorThemes = [
    {
      borderHover: "hover:border-blue-400 hover:shadow-blue-500/15",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200/60",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30",
      accentGradient: "from-blue-500 to-indigo-600",
      glowBg: "bg-blue-400/10",
      textHighlight: "text-blue-600",
    },
    {
      borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/15",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30",
      accentGradient: "from-emerald-500 to-teal-600",
      glowBg: "bg-emerald-400/10",
      textHighlight: "text-emerald-600",
    },
    {
      borderHover: "hover:border-amber-400 hover:shadow-amber-500/15",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200/60",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30",
      accentGradient: "from-amber-500 to-orange-600",
      glowBg: "bg-amber-400/10",
      textHighlight: "text-amber-600",
    },
    {
      borderHover: "hover:border-purple-400 hover:shadow-purple-500/15",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200/60",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30",
      accentGradient: "from-purple-500 to-pink-600",
      glowBg: "bg-purple-400/10",
      textHighlight: "text-purple-600",
    },
  ];

  return (
    <section id="department" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 py-16 sm:py-24">
      
      {/* Background Ambient Glow Accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-300/15 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-indigo-300/15 blur-3xl" />
      </div>

      <div className="civic-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700 border border-blue-200/60 shadow-sm">
              <BarChart3 className="h-4 w-4 text-blue-600" />
              विभाग एवं आंकड़े • Municipal Insights
            </span>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              प्रशासनिक आंकड़े एवं विभाग
            </h2>

            <p className="text-base leading-relaxed text-slate-600">
              नगर पंचायत भरगैन की प्रशासनिक व्यवस्था, कुल वार्डों, अधिकारियों एवं नागरिक सुविधाओं से जुड़े मुख्य आंकड़े।
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 rounded-2xl bg-white p-4 shadow-md border border-slate-200/80">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
              <p className="text-sm font-black text-slate-800">Fully Operational</p>
            </div>
          </div>
        </div>

        {/* Statistics Cards Grid with Vibrant Themes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statisticsCards.map((card, index) => {
            const Icon = card.icon;
            // Added `!` non-null assertion operator here to satisfy TypeScript completely
            const theme = colorThemes[index % colorThemes.length]!;

            return (
              <Card
                key={card.label}
                id={index === 3 ? "staff" : undefined}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-md p-7 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${theme.borderHover}`}
              >
                {/* Top Colored Glow Accent Bar */}
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.accentGradient} opacity-80 transition-all duration-300 group-hover:h-2.5`} />

                {/* Decorative Background Blob */}
                <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${theme.glowBg} transition-transform duration-700 ease-out group-hover:scale-150 blur-xl`} />

                {/* Card Header: Icon & Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-wider border shadow-sm ${theme.badgeBg}`}>
                    Live Data
                  </span>
                </div>

                {/* Stat Value */}
                <div className="mt-6 relative z-10">
                  <p className="text-4xl font-black tracking-tight text-slate-900 group-hover:scale-105 transition-transform origin-left duration-300">
                    {card.value}
                  </p>
                </div>

                {/* Stat Title */}
                <h3 className={`mt-2 text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:${theme.textHighlight}`}>
                  {card.label}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-slate-600 font-medium">
                  {card.description}
                </p>

                {/* Subtle Bottom Arrow Indicator on Hover */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                  <span>View Details</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
