

import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Users, 
  GraduationCap, 
  Home, 
  FileText, 
  MessageSquareWarning, 
  Droplets, 
  Receipt, 
  Award, 
  FileCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";

// नगर पंचायत की मुख्य सेवाएं
const municipalServices = [
  {
    title: "जन्म एवं मृत्यु पंजीकरण",
    description: "सी० आर० एस० पोर्टल के माध्यम से ऑनलाइन जन्म-मृत्यु प्रमाण पत्र आवेदन।",
    icon: FileText,
    accent: "from-blue-500/10 to-cyan-500/10 text-blue-600 border-blue-200/60",
    hoverGlow: "group-hover:shadow-blue-500/10 group-hover:border-blue-400",
  },
  {
    title: "शिकायत दर्ज करें",
    description: "जनसुनवाई पोर्टल (IGRS) या संपर्क फॉर्म के माध्यम से अपनी शिकायत दर्ज करें।",
    icon: MessageSquareWarning,
    accent: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/60",
    hoverGlow: "group-hover:shadow-amber-500/10 group-hover:border-amber-400",
  },
  {
    title: "जल आपूर्ति व कनेक्शन",
    description: "ऑनलाइन नए वाटर कनेक्शन आवेदन एवं जलकर (Water Tax) भुगतान सुविधा।",
    icon: Droplets,
    accent: "from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-200/60",
    hoverGlow: "group-hover:shadow-sky-500/10 group-hover:border-sky-400",
  },
  {
    title: "गृह एवं संपत्ति कर",
    description: "भवन/गृह कर निर्धारण एवं ऑनलाइन व ऑफलाइन कर भुगतान प्रणाली।",
    icon: Receipt,
    accent: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/60",
    hoverGlow: "group-hover:shadow-emerald-500/10 group-hover:border-emerald-400",
  },
  {
    title: "व्यापारिक लाइसेंस",
    description: "विभिन्न प्रकार के व्यावसायिक लाइसेंस निर्गमन एवं समय पर नवीनीकरण।",
    icon: Award,
    accent: "from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-200/60",
    hoverGlow: "group-hover:shadow-purple-500/10 group-hover:border-purple-400",
  },
  {
    title: "संपत्ति नामांतरण व अनुमति",
    description: "संपत्ति नामांतरण एवं नगर नियोजन हेतु भवन निर्माण स्वीकृति अनुमति।",
    icon: FileCheck,
    accent: "from-indigo-500/10 to-rose-500/10 text-indigo-600 border-indigo-200/60",
    hoverGlow: "group-hover:shadow-indigo-500/10 group-hover:border-indigo-400",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-slate-50/80">
      
      {/* Background Glows */}
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-emerald-400/15 via-teal-300/10 to-transparent blur-3xl" />

      <div className="civic-container space-y-20">
        
        {/* SECTION 1: ABOUT & IMAGE SHOWCASE */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-3.5 py-1.5 text-xs font-extrabold text-blue-700 ring-1 ring-inset ring-blue-600/20 shadow-sm">
              <Building2 className="h-4 w-4 text-blue-600" />
              परिचय • Nagar Panchayat Bhargain
            </span>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              नगर पंचायत <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">भरगैन</span>, कासगंज
            </h2>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              भरगैन, जनपद कासगंज (उत्तर प्रदेश) का एक प्रमुख व निरंतर विकासशील नगर निकाय है। कुल <strong className="text-blue-700 font-bold">14 सुव्यवस्थित वार्डों</strong> में विभाजित इस नगर पंचायत में पारदर्शी लोकतांत्रिक प्रक्रिया से जनहित कार्य संपन्न कराए जाते हैं।
            </p>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              जनगणना 2011 के अनुसार नगर की कुल जनसंख्या <strong className="text-slate-900 font-semibold">21,891</strong> है। नगर पंचायत क्षेत्र में <strong className="text-slate-900 font-semibold">3,132 से अधिक परिवार</strong> निवास करते हैं। हमारा मुख्य लक्ष्य उन्नत स्वच्छता, मजबूत इंफ्रास्ट्रक्चर, स्वच्छ पेयजल, और ई-गवर्नेंस से नागरिक जीवन को सुगम बनाना है।
            </p>

            {/* Visual Highlight Card: Building Overview */}
            <div className="pt-2">
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/50 p-4 shadow-sm flex items-center gap-4">
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-200 shadow-xs">
                  <Image 
                    src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/05/18/9cec061cf386fb98dc64ef7485503b5d_original.jpg?impolicy=abp_cdn&imwidth=470" 
                    alt="पंचायत भवन कासगंज"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700">
                    <MapPin className="h-3 w-3" /> कासगंज जिला क्षेत्र
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900">पंचायत सचिवालय एवं प्रशासनिक कार्यालय</h4>
                  <p className="text-xs text-slate-600">नागरिक सेवाओं व जनसुनवाई का मुख्य केंद्र।</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20 font-bold transition-all duration-300 hover:scale-[1.02]">
                <Link href="#services" className="inline-flex items-center gap-2">
                  नागरिक सेवाएं देखें
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Key Stats Card */}
          <div className="lg:col-span-5">
            <Card className="relative overflow-hidden border border-slate-200/80 bg-white/90 backdrop-blur-md p-6 shadow-2xl shadow-slate-300/40 rounded-3xl">
              
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-1.5">
                    भरगैन : एक नज़र में
                    <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                  </h3>
                  <p className="text-xs font-medium text-slate-500">आधिकारिक जनगणना व मुख्य आंकड़े</p>
                </div>
                <span className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                  14 वार्ड
                </span>
              </div>

              {/* Stats Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3.5">
                
                {/* Population */}
                <div className="col-span-2 flex items-center justify-between rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 p-4 shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">कुल जनसंख्या</p>
                      <p className="text-2xl font-black text-slate-900">21,891</p>
                    </div>
                  </div>
                  <div className="text-right text-xs space-y-1">
                    <div className="bg-white/80 px-2.5 py-1 rounded-md border border-blue-100/50">
                      पुरुष: <span className="font-extrabold text-blue-700">11,222</span>
                    </div>
                    <div className="bg-white/80 px-2.5 py-1 rounded-md border border-blue-100/50">
                      महिला: <span className="font-extrabold text-indigo-700">10,669</span>
                    </div>
                  </div>
                </div>

                {/* Literacy Rate */}
                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50/60 to-teal-50/30 p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-xs font-extrabold">साक्षरता दर</span>
                  </div>
                  <p className="mt-2 text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    52.59%
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-slate-600">
                    पुरुष: <span className="font-bold">65.28%</span>
                  </p>
                </div>

                {/* Households */}
                <div className="rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50/60 to-orange-50/30 p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-700">
                    <Home className="h-4 w-4" />
                    <span className="text-xs font-extrabold">कुल आवास</span>
                  </div>
                  <p className="mt-2 text-2xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    3,132+
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-slate-600">
                    नागरिक परिवार
                  </p>
                </div>

                {/* Sex Ratio Badge */}
                <div className="col-span-2 rounded-xl border border-purple-100 bg-purple-50/50 p-3 text-center">
                  <p className="text-xs font-medium text-slate-700 flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                    महिला लिंगानुपात: <strong className="text-purple-700 font-extrabold text-sm">951</strong> (राज्य औसत से बेहतर)
                  </p>
                </div>

              </div>
            </Card>
          </div>

        </div>

        {/* SECTION 2: SERVICES OFFERED */}
        <div id="services" className="space-y-10 pt-10 border-t border-slate-200/80">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3.5 py-1 text-xs font-extrabold text-emerald-800 ring-1 ring-inset ring-emerald-600/20">
              ई-गवर्नेंस एवं नागरिक सुविधाएं
            </span>
            
            <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
              नगर पंचायत भरगैन द्वारा <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">प्रदत्त प्रमुख सेवाएं</span>
            </h3>
            
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              नगर वासियों की सुविधा एवं पारदर्शिता के लिए डिजिटल ई-गवर्नेंस सेवाएं उपलब्ध कराई जा रही हैं।
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {municipalServices.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  className={`group relative overflow-hidden rounded-2xl border bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${service.hoverGlow}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} border shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
