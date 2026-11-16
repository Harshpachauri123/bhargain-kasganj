import { AboutSection } from "@/components/pages/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Official municipal website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutSection/>
    </div>
  );
}
