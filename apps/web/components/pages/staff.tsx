'use client';

import { Button } from '@workspace/ui/components/button';
import { Award, Calendar, Eye, Quote, Target } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type TabType = 'welcome' | 'vision' | 'mission';

interface OfficerRowProps {
  id: string;
  roleTitle: string;
  designation: string;
  name: string;
  subText: string;
  imgSrc: string;
  term: string;
  status: string;
  welcomeQuote: string;
  welcomeText1: string;
  welcomeText2: string;
  visionTitle: string;
  visionDesc: string;
  visionPoints: string[];
  missionDesc: string;
  missionTargets: { title: string; desc: string }[];
}

function OfficerRow({ data }: { data: OfficerRowProps }) {
  const [activeTab, setActiveTab] = useState<TabType>('welcome');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-200/60 pb-16 last:border-0 last:pb-0">
      {/* बायाँ कॉलम: अधिकारी प्रोफाइल कार्ड */}
      <div className="lg:col-span-4 flex flex-col items-center w-full">
        <div
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg text-center w-full max-w-xs relative group"
        >
          {/* पदनाम ओवरले */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border border-slate-700 tracking-wider shadow-sm z-10 whitespace-nowrap">
            {data.roleTitle}
          </div>

          {/* पोर्ट्रेट फ़्रेम (Next.js Image के साथ अपडेटेड) */}
          {/* <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
            <Image
              src={data.imgSrc || "/images/placeholder.png"}
              alt={`${data.name} - ${data.designation}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 320px"
              priority={data.id === 'chairman'}
            />
          </div> */}

          {/* नाम और विवरण */}
          <h3 className="text-lg font-black text-blue-950 tracking-tight leading-tight">{data.name}</h3>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mt-1">{data.designation}</p>
          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{data.subText}</p>
        </div>
      </div>

      {/* दायाँ कॉलम: गतिशील सूचना पत्रक */}
      <div className="lg:col-span-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8 min-h-95 flex flex-col justify-between">
          {/* टैब चयनकर्ता हेडर */}
          <div className="flex border-b border-slate-100 pb-3 gap-2 overflow-x-auto">
            <Button
              onClick={() => setActiveTab('welcome')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'welcome' ? 'bg-blue-800 text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>संदेश</span>
            </Button>
            <Button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'vision' ? 'bg-blue-800 text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>हमारा दृष्टिकोण (Vision)</span>
            </Button>
            <Button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'mission' ? 'bg-blue-800 text-white shadow-xs' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>हमारा मिशन (Mission)</span>
            </Button>
          </div>

          {/* गतिशील टैब सामग्री */}
          <div className="py-6 flex-1">
            {activeTab === 'welcome' && (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Quote className="w-10 h-10 text-orange-500/20 shrink-0 rotate-180" />
                  <div>
                    <p className="text-sm font-bold text-slate-800 italic leading-relaxed">"{data.welcomeQuote}"</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.welcomeText1}</p>
                {data.welcomeText2 && <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.welcomeText2}</p>}
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-950">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">{data.visionTitle}</h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.visionDesc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {data.visionPoints.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                      <Award className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-950">
                  <Target className="w-5 h-5 text-orange-500" />
                  <h4 className="text-sm font-bold uppercase tracking-wide">प्रमुख लक्ष्य और उद्देश्य</h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{data.missionDesc}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  {data.missionTargets.map((item) => (
                    <div key={item.title} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <h5 className="text-xs font-black text-blue-800">{item.title}</h5>
                      <p className="text-[10px] text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* आधिकारिक पाद लेख / पता */}
          <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span>कार्यालय का पता: नगर पंचायत कार्यालय, भरगैन, जनपद कासगंज, UP - 207244</span>
            </div>
            <div className="text-left sm:text-right sm:border-l sm:border-slate-200 sm:pl-4">
              <p className="text-blue-950">नगर पंचायत, भरगैन (कासगंज)</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                सरकारी पंजीकरण स्वीकृत
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Staff() {
  const leadersData: OfficerRowProps[] = [
    {
      id: 'chairman',
      roleTitle: 'निर्वाचित अध्यक्ष',
      designation: 'अध्यक्ष (Chairman)',
      name: 'अध्यक्ष पद (नगर पंचायत भरगैन)',
      subText: 'नगर पंचायत, भरगैन, कासगंज',
      imgSrc: '', // <--- public/images/chairman.png फ़ोल्डर में फ़ोटो रखें
      term: '',
      status: '',
      welcomeQuote: 'भरगैन: समृद्ध विरासत, स्वच्छ एवं आधुनिक कल',
      welcomeText1: 'नगर पंचायत भरगैन का इतिहास और सांस्कृतिक पहचान हम सभी निवासियों के लिए गर्व का विषय है। जन-प्रतिनिधि के रूप में हमारा निरंतर प्रयास है कि हम भरगैन की बुनियादी सुविधाओं को सुदृढ़ करें और आधुनिक विकास की दिशा में तेजी से कदम बढ़ाएं।',
      welcomeText2: 'हमारा नगर पंचायत प्रशासन पूर्ण पारदर्शिता, ईमानदारी और जन-सेवा के भाव के साथ कार्य करने के लिए प्रतिबद्ध है। आपके सहयोग और सुझावों से ही हम भरगैन को एक स्वच्छ, सुंदर, सुरक्षित और आत्मनिर्भर नगर बनाने के अपने संकल्प को सिद्ध कर सकते हैं।',
      visionTitle: 'हमारा दृष्टिकोण (Our Vision)',
      visionDesc: 'हमारा विजन भरगैन को एक आदर्श, स्वच्छ और आत्मनिर्भर नगर पंचायत के रूप में विकसित करना है।',
      visionPoints: [
        'समावेशी विकास: समाज के प्रत्येक वर्ग को विकास की मुख्यधारा से जोड़ना।',
        'नागरिक सुविधाओं का सुदृढ़ीकरण एवं आधुनिक तकनीक का समावेश।',
        'पर्यावरण संरक्षण: हरित भरगैन, स्वच्छ भरगैन की संकल्पना।',
        'आने वाली पीढ़ियों के लिए स्वास्थ्यप्रद और सुरक्षित वातावरण।',
      ],
      missionDesc: 'हमारा मिशन जमीनी स्तर पर ऐसे नागरिक-केंद्रित सुधार लागू करना है जिससे दैनिक जीवन सुगम और बेहतर बन सके।',
      missionTargets: [
        { title: 'बुनियादी सुविधाएँ', desc: '24/7 शुद्ध पेयजल, सुव्यवस्थित नाली-नाला निर्माण एवं एलईडी स्ट्रीट लाइट।' },
        { title: 'स्वच्छता अभियान', desc: 'डोर-टू-डोर कचरा संग्रहण एवं वैज्ञानिक अपशिष्ट प्रबंधन प्रणाली।' },
        { title: 'डिजिटल नागरिक सेवा', desc: 'ऑनलाइन प्रमाण-पत्र, पारदर्शी कर भुगतान एवं त्वरित जन-शिकायत निवारण।' },
      ],
    },
    {
      id: 'eo',
      roleTitle: 'प्रशासनिक प्रमुख',
      designation: 'अधिशासी अधिकारी (EO)',
      name: 'अधिशासी अधिकारी',
      subText: 'नगर पंचायत, भरगैन, कासगंज',
      imgSrc: '', // <--- public/images/eo.png फ़ोल्डर में फ़ोटो रखें
      term: 'शासकीय नियुक्ति',
      status: 'कार्यकारी प्रमुख',
      welcomeQuote: 'पारदर्शी प्रशासन - उत्तरदायी नगर पंचायत भरगैन',
      welcomeText1: 'नगर पंचायत भरगैन के कार्यकारी कार्यालय का मुख्य ध्येय सभी नगर पालिका सेवाओं को त्वरित, पारदर्शी और जन-सुलभ बनाना है। एक कुशल प्रशासन वही है जो आम जन की समस्याओं को समझे और समयबद्ध तरीके से उनका निस्तारण करे।',
      welcomeText2: 'हम यह सुनिश्चित करने के लिए तत्पर हैं कि उत्तर प्रदेश शासन की समस्त जन-कल्याणकारी योजनाएं बिना किसी रुकावट के अंतिम व्यक्ति तक पहुँचें। भरगैन के समग्र विकास हेतु आपके रचनात्मक सुझावों का सदैव स्वागत है।',
      visionTitle: 'प्रशासनिक दृष्टिकोण',
      visionDesc: 'कार्यालय की कार्यप्रणाली को डिजिटलाइज्ड बनाना ताकि जन-सुविधाएं, आवेदन और शिकायतें बिना किसी विलंब के तय समय-सीमा में निस्तारित हों।',
      visionPoints: [
        'ई-ऑफिस एवं डिजिटल फाइलिंग द्वारा कार्यप्रणाली में तेजी और पारदर्शिता।',
        'जन-सामान्य को समयबद्ध नागरिक सेवाएं उपलब्ध कराना।',
        'सरकारी कल्याणकारी योजनाओं का निष्पक्ष एवं शत-प्रतिशत क्रियान्वयन।',
        'जन-समस्याओं के निवारण के लिए सुदृढ़ शिकायत निवारण प्रणाली।',
      ],
      missionDesc: 'शहरी विकास की योजनाओं को धरातल पर प्रभावी रूप से लागू करना तथा जन-प्रतिनिधियों व आम जनता के साथ बेहतर सामंजस्य स्थापित करना।',
      missionTargets: [
        { title: 'डिजिटल सेवाएं', desc: 'ई-नगरपालिका पोर्टल के माध्यम से ऑनलाइन सेवाओं का एकीकरण।' },
        { title: 'वित्तीय पारदर्शिता', desc: 'विकास कोष का शत-प्रतिशत निष्पक्ष और जनहित में उपयोग।' },
        { title: 'त्वरित समाधान', desc: 'नागरिकों की मूलभूत समस्याओं का त्वरित एवं प्रभावी निवारण।' },
      ],
    },
    {
      id: 'head-clerk',
      roleTitle: 'कार्यालय अधीक्षक',
      designation: 'मुख्य लिपिक (Head Clerk)',
      name: 'मुख्य लिपिक / कार्यालय अधीक्षक',
      subText: 'नगर पंचायत, भरगैन, कासगंज',
      imgSrc: '', // <--- public/images/clerk.png फ़ोल्डर में फ़ोटो रखें
      term: 'वरिष्ठ प्रशासन',
      status: 'रजिस्ट्री प्रभारी',
      welcomeQuote: 'नागरिक सेवा एवं सहयोग हेतु सदैव समर्पित',
      welcomeText1: 'नगर पंचायत भरगैन कार्यालय के मुख्य लिपिकीय पटल से हमारा ध्येय कार्यालयीन कार्यों को सुसंगत, पारदर्शी और नागरिक-अनुकूल बनाए रखना है। यह पटल प्रशासनिक प्रक्रियाओं और नागरिकों की आवश्यकताओं के मध्य एक सेतु का कार्य करता है।',
      welcomeText2: 'हमारा सतत प्रयास रहता है कि जन्म-मृत्यु प्रमाण पत्र, कर संग्रहण, अनापत्ति प्रमाण पत्र (NOC) एवं अन्य प्रशासनिक सेवाएं आम जनता को बिना किसी असुविधा के प्राप्त हों। हम नियमों के पालन और निष्ठापूर्वक कार्य निष्पादन हेतु प्रतिबद्ध हैं।',
      visionTitle: 'त्रुटिहीन अभिलेख एवं डेटा प्रबंधन',
      visionDesc: 'भौतिक अभिलेखागारों और सरकारी रजिस्टरों को आधुनिक एवं सुरक्षित डिजिटल क्लाउड डेटाबेस में संरक्षित करना।',
      visionPoints: [
        'ऐतिहासिक एवं प्रशासनिक रिकॉर्ड का पूर्ण डिजिटलीकरण।',
        'विभिन्न प्रमाण-पत्रों के सत्यापन हेतु सुव्यवस्थित प्रक्रिया।',
        'आवेदनों के निस्तारण में लगने वाले समय को कम से कम करना।',
        'कार्यालय में आने वाले नागरिकों हेतु हेल्पडेस्क सुविधा।',
      ],
      missionDesc: 'दैनिक कार्यालयीन कार्यों में सटीकता, अभिलेखों की सुरक्षा तथा बिना किसी अनावश्यक देरी के नागरिक आवेदनों को संसाधित करना।',
      missionTargets: [
        { title: 'त्वरित प्रमाण-पत्र', desc: 'जन्म एवं मृत्यु प्रमाण-पत्रों का त्वरित एवं त्रुटिहीन निर्गमन।' },
        { title: 'नागरिक सहायता', desc: 'वरिष्ठ नागरिकों एवं दिव्यांगजनों हेतु प्राथमिकता के आधार पर सहायता।' },
        { title: 'सुरक्षित रिकॉर्ड', desc: 'हाउस टैक्स, वाटर टैक्स और भू-अभिलेखों का सुरक्षित डिजिटल प्रबंधन।' },
      ],
    },
  ];

  return (
    <section id="about-us" className="py-20 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      {/* पृष्ठभूमि सजावट */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* अनुभाग हेडर */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-orange-500/20">
            नेतृत्व एवं प्रशासन
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight mt-3">
            अध्यक्ष एवं प्रशासनिक पटल
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            नगर पंचायत, भरगैन (कासगंज) के आधिकारिक प्रशासनिक पोर्टल पर आपका स्वागत है।
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* लंबवत सूची लेआउट */}
        <div className="space-y-16">
          {leadersData.map((leader) => (
            <OfficerRow key={leader.id} data={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
