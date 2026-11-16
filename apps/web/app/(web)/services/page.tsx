import Services from "@/components/pages/Services";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services",
  description:
    "Official website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function ServicesPage() {
  return (
    <div>
      <Services />
    </div>
  );
}
