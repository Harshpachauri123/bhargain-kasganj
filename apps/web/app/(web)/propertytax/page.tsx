import PropertyTax from "@/components/pages/propertytax";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Tax",
  description:
    "Official municipal website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function PropertyTaxPage() {
  return (
    <div>
      <PropertyTax />
    </div>
  );
}
