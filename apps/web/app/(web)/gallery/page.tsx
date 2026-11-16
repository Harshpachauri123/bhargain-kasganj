import Gallery from "@/components/pages/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Official municipal website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function GalleryPage() {
  return (
    <div>
      <Gallery/>
    </div>
  )
}
