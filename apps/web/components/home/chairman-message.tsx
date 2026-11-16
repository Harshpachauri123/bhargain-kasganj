import Link from "next/link";
import Image from "next/image";
import { Quote, ArrowRight, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";

export function ChairmanMessage() {
  return (
    <section id="chairman" className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 py-16 sm:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="civic-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border border-slate-200/80 bg-white/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-blue-900/10 rounded-3xl transition-all duration-300 hover:shadow-blue-900/15">
          
          {/* Top subtle badge accent */}
          <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/0 rounded-full pointer-events-none blur-2xl" />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Chairman Image Card with Advanced Framing */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md group">
                {/* Glow Effect Behind Image */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-lg transition duration-500 group-hover:opacity-40" />

                <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xl shadow-slate-200/50">
                  
                  {/* Chairman Image Container */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                      alt="अध्यक्ष - नगर पंचायत भरगैन"
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    
                    {/* Official Badge Overlay */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-slate-900 backdrop-blur-md border border-white/50 shadow-md">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span>अध्यक्ष संदेश</span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md shadow-md">
                      <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                      <span>Active</span>
                    </div>

                    {/* Name & Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-600/80 text-[11px] font-semibold mb-1.5 backdrop-blur-sm">
                        Honorable Chairperson
                      </div>
                      <h3 className="text-xl font-black tracking-tight text-white drop-shadow-sm">अध्यक्ष / चेयरमैन</h3>
                      <p className="text-xs font-medium text-blue-200">नगर पंचायत भरगैन, कासगंज (उत्तर प्रदेश)</p>
                    </div>
                  </div>

                  {/* Subtitle / Trust Footer */}
                  <div className="mt-3.5 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50/50 p-3.5 text-xs font-semibold text-slate-700 border border-blue-100/60">
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-blue-600" />
                      जनसेवा एवं विकास के लिए समर्पित
                    </span>
                    <span className="text-blue-700 font-bold">2026-2031</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Message Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase border border-blue-200/60 shadow-sm">
                  <Quote className="h-3.5 w-3.5" />
                  <span>Chairman's Desk • अध्यक्ष का संदेश</span>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-4xl leading-tight">
                  "हमारा लक्ष्य : स्वच्छ, सुंदर और सशक्त भरगैन"
                </h2>
              </div>

              {/* Message Body with Styled Paragraphs */}
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p className="font-semibold text-slate-900 text-lg">
                  प्रिय नगरवासियों,
                </p>
                <p className="relative pl-4 border-l-4 border-blue-600/80 text-slate-700 font-medium bg-blue-50/30 py-2 rounded-r-lg">
                  नगर पंचायत भरगैन की प्राथमिक जिम्मेदारी हर नागरिक को सुलभ, पारदर्शी और त्वरित नागरिक सुविधाएं प्रदान करना है। हम नगर के सर्वांगीण विकास, स्वच्छ पेयजल, सुदृढ़ सड़कों, बेहतर प्रकाश व्यवस्था तथा कचरा प्रबंधन के लिए निरंतर कार्यरत हैं।
                </p>
                <p className="text-slate-600">
                  जनभागीदारी और जनसुनवाई के माध्यम से हम भरगैन को एक मॉडल नगर पंचायत बनाने की दिशा में प्रतिबद्ध हैं। आपके सुझाव और सहयोग ही हमारी प्रगति की आधारशिला हैं। आइए मिलकर अपने नगर को नई ऊंचाइयों पर ले जाएं।
                </p>
              </div>

              {/* Key Highlights / Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>पारदर्शी प्रशासन</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>त्वरित जनसुनवाई</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800 col-span-2 sm:col-span-1 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>सतत विकास</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-xl px-7 py-6 text-base font-bold shadow-xl shadow-blue-600/20 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:translate-y-[-2px]">
                  <Link href="/chairman" className="inline-flex items-center gap-2.5">
                    <span>Read Full Message</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <div className="text-xs font-semibold text-slate-500">
                  Office of the Chairman • Nagar Panchayat Bhargain
                </div>
              </div>

            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}
