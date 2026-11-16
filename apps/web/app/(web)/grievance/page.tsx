import PublicGrievance from "@/components/pages/publicGrievance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Grievance",
  description:
    "Official municipal website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function GrievancePage() {
  return (
    <div>
      <PublicGrievance />
    </div>
  );
}
