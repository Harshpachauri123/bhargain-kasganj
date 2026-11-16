import Staff from "@/components/pages/staff";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Staff",
  description:
    "Official website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function StaffPage() {
  return (
    <div>
      <Staff />
    </div>
  );
}
