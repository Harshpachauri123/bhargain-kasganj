
import Link from "next/link";
import { Search, UserPlus } from "lucide-react";
import { primaryNavigation, secondaryNavigation } from "@/data/navigation";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90">
      {/* 🔹 py-5 aur min-h-24 se header ki height/length badh gayi hai */}
      <div className="civic-container flex min-h-24 items-center justify-between gap-3 py-5">
        <Link
          href="#home"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Town Panchayat Bhargain home"
        >
          {/* 🖼️ Logo Image  */}
          <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-blue-100 bg-blue-50 text-sm font-bold text-primary shadow-sm">
            <img
              src="https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2018/02/2018021632.png"
              alt="Town Panchayat Logo"
              className="h-full w-full object-cover"
            />
          </span>

          <span className="min-w-0">
            <span className="hidden text-xl font-bold leading-tight text-blue-900 sm:block lg:text-2xl">
              Town Panchayat Bhargain, Kasganj
            </span>
            <span className="block truncate text-base font-bold leading-tight text-blue-900 sm:hidden">
              Town Panchayat Bhargain
            </span>
            <span className="block text-xs font-medium text-slate-600 sm:text-base">
              Uttar Pradesh, India
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          <DesktopNavigation items={primaryNavigation} />
          <div className="relative ml-2 w-60 xl:w-72">
            <label htmlFor="desktop-site-search" className="sr-only">
              Search website
            </label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
            <Input
              id="desktop-site-search"
              type="search"
              placeholder="Search"
              className="pl-9"
            />
          </div>
        </div>

        <MobileNavigation />
      </div>

      <div className="hidden bg-primary lg:block">
        <div className="civic-container">
          <DesktopNavigation items={secondaryNavigation} variant="secondary" />
        </div>
      </div>
    </header>
  );
}
