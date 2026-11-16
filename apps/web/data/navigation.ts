import type { NavigationItem } from "@/types";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Chairman", href: "/chairman" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const secondaryNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Department", href: "/department" },
  { label: "Our Services", href: "/services" },
  { label: "Public Grievance", href: "/grievance" },
  { label: "Schemes", href: "/schemes" },
  { label: "Staff", href: "/staff" },
  { label: "Property Tax", href: "/propertytax" },
];

export const footerQuickLinks: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Chairman", href: "/chairman" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerCitizenLinks: NavigationItem[] = [
  { label: "Public Grievance", href: "/grievance" },
  { label: "Property Tax", href: "/propertytax" },
  { label: "Schemes", href: "/schemes" },
  { label: "Events", href: "/events" },
];
