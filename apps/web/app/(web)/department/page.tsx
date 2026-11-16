import Department from "@/components/pages/department";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Departments",
  description:
    "Official municipal website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function DepartmentPage() {
  return (
    <div>
      <Department/>
    </div>
  )
}
