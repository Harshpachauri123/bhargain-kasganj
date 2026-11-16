"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, UserPlus } from "lucide-react";
import { primaryNavigation, secondaryNavigation } from "@/data/navigation";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const allItems = [...primaryNavigation, ...secondaryNavigation];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col overflow-y-auto">
        <SheetHeader className="pr-8">
          <SheetTitle>Town Panchayat Bhargain</SheetTitle>
          <SheetDescription>Uttar Pradesh, India</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-3">
          <label htmlFor="mobile-site-search" className="sr-only">
            Search website
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />
            <Input
              id="mobile-site-search"
              type="search"
              placeholder="Search municipal services"
              className="pl-9"
            />
          </div>
          <Button asChild className="w-full justify-center">
            <Link href="#" onClick={() => setOpen(false)}>
              <UserPlus className="mr-2 h-4 w-4" aria-hidden="true" />
              Sign Up
            </Link>
          </Button>
        </div>

        <nav className="mt-7" aria-label="Mobile navigation">
          <ul className="grid gap-2">
            {allItems.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
