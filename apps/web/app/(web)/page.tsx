import { AboutSection } from "@/components/pages/about-section";
import { ChairmanMessage } from "@/components/home/chairman-message";
import { GrievanceSection } from "@/components/home/grievance-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { QuickServices } from "@/components/home/quick-services";
import { StatisticsSection } from "@/components/home/statistics-section";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroCarousel />
        <QuickServices />
        <AboutSection />
        <ChairmanMessage />
        <StatisticsSection />
        <GrievanceSection />
      </main>
    </div>
  );
}
