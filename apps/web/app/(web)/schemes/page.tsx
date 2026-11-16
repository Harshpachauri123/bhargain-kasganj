import Schemes from "@/components/pages/schemes";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Schemes",
  description:
    "Official website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function SchemesPage() {
  return (
    <div>
      <Schemes />
    </div>
  );
}
