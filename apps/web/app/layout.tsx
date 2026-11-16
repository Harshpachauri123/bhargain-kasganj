import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Town Panchayat Bhargain, Kasganj",
  description:
    "Official website of Town Panchayat Bhargain, Kasganj, Uttar Pradesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
