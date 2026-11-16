import { ContactSection } from "@/components/pages/contact-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Official municipal website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}
