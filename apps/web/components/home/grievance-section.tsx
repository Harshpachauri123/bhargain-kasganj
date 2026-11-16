
import Link from "next/link";
import { MessageSquareText, PhoneCall, ShieldAlert } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export function GrievanceSection() {
  return (
    <section id="grievance" className="section-padding relative overflow-hidden my-6">
      
      {/* Background with Vibrant Gradient Banner (Footer se bilkul alag look) */}
      <div className="civic-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 p-8 sm:p-12 text-white shadow-2xl shadow-blue-900/20 ring-1 ring-white/10">
          
          {/* Background Decorative Blur & Patterns */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-blue-400/20 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur-md border border-white/20">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-300" />
                जन शिकायत निवारण • Public Grievance
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
                नगर पंचायत से संबंधित कोई शिकायत या सुझाव है?
              </h2>

              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-blue-100">
                अपनी समस्या या सुझाव ऑनलाइन दर्ज कराएं। नगर पंचायत भरगैन पारदर्शी और त्वरित समाधान के लिए सदैव तत्पर है।
              </p>
            </div>

            {/* Right Action Buttons Column */}
            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row lg:justify-end">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold shadow-lg shadow-black/10 transition-transform active:scale-95"
              >
                <Link href="#grievance">
                  <MessageSquareText className="mr-2 h-5 w-5 text-blue-600" aria-hidden="true" />
                  शिकायत दर्ज करें
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white hover:border-white font-semibold transition-all"
              >
                <Link href="#contact">
                  <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
                  संपर्क कार्यालय
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
