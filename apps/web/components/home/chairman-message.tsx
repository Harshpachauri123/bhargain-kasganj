
import Link from "next/link";
import Image from "next/image";
import { Quote, User, ArrowRight, Award } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";

export function ChairmanMessage() {
  return (
    <section id="chairman" className="section-padding relative overflow-hidden bg-white">
      <div className="civic-container">
        <Card className="relative overflow-hidden border-blue-100 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:p-10 rounded-3xl">
          
          {/* Background Decorative Accent */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Chairman Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-3 shadow-lg shadow-slate-200/80">
                
                {/* Chairman Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                    alt="अध्यक्ष - नगर पंचायत भरगैन"
                    fill
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Official Badge Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur-md border border-white/40 shadow-sm">
                    <Award className="h-3.5 w-3.5 text-primary" />
                    अध्यक्ष संदेश
                  </div>

                  {/* Name Overlay over Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-extrabold leading-tight">अध्यक्ष / चेयरमैन</h3>
                    <p className="text-xs font-medium text-blue-200">नगर पंचायत भरगैन, कासगंज</p>
                  </div>
                </div>

                {/* Subtitle Card */}
                <div className="mt-3 flex items-center justify-between rounded-xl bg-blue-50/60 p-3 text-xs font-semibold text-slate-700">
                  <span>जनसेवा एवं विकास के लिए समर्पित</span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

              </div>
            </div>

            {/* Right Column: Message Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                  <Quote className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    अध्यक्ष का संदेश • Chairman Message
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                    "हमारा लक्ष्य : स्वच्छ, सुंदर और सशक्त भरगैन"
                  </h2>
                </div>
              </div>

              {/* Message Body */}
              <div className="space-y-3 pt-2 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p className="font-medium text-slate-900">
                  प्रिय नगरवासियों,
                </p>
                <p>
                  नगर पंचायत भरगैन की प्राथमिक जिम्मेदारी हर नागरिक को सुलभ, पारदर्शी और त्वरित नागरिक सुविधाएं प्रदान करना है। हम नगर के सर्वांगीण विकास, स्वच्छ पेयजल, सुदृढ़ सड़कों, बेहतर प्रकाश व्यवस्था तथा कचरा प्रबंधन के लिए निरंतर कार्यरत हैं।
                </p>
                <p>
                  जनभागीदारी और जनसुनवाई के माध्यम से हम भरगैन को एक मॉडल नगर पंचायत बनाने की दिशा में प्रतिबद्ध हैं। आपके सुझाव और सहयोग ही हमारी प्रगति की आधारशिला हैं।
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-xl shadow-lg shadow-blue-500/10 font-bold">
                  <Link href="/chairman" className="inline-flex items-center gap-2">
                    Read Full Message
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}
