import ChaimanProfile from "@/components/pages/ChairmanProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Town Panchayat Bhargain, Kasganj",
  description:
    "Official municipal website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function ChairmanProfilePage() {
  return (
    <div>
      <ChaimanProfile />
    </div>
  );
}
