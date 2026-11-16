import {
  BadgeHelp,
  Bell,
  BookOpenCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Handshake,
  Headphones,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  MessagesSquare,
  Newspaper,
  Phone,
  ReceiptIndianRupee,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type {
  ContactItem,
  FeatureItem,
  HeroSlide,
  QuickService,
  SocialItem,
  StatisticCard,
  UpdateItem,
} from "@/types";


export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Services",
    title: "Welcome to Town Panchayat Bhargain",
    description:
      "Working towards clean, transparent and citizen-friendly municipal services.",
    buttons: [
      { label: "Explore Services", href: "/services", variant: "default" },
      { label: "Contact Us", href: "/contact", variant: "outline" },
    ],
    icon: Landmark,
    accent: "blue",
    image: "https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2026/04/17775345344929.png",
  },
  {
    eyebrow: "Clean Town Mission",
    title: "Clean Bhargain, Healthy Bhargain",
    description:
      "Supporting sanitation, waste management and cleaner public spaces.",
    buttons: [
      { label: "View Our Services", href: "/services", variant: "default" },
    ],
    icon: Sparkles,
    accent: "green",
    image: "https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5",
  },
  {
    eyebrow: "Digital Access",
    title: "Digital Services",
    description:
      "Access grievances, forms, schemes and municipal information from one place.",
    buttons: [
      { label: "Public Grievance", href: "/grievance", variant: "default" },
      { label: "Property Tax", href: "#property-tax", variant: "secondary" },
    ],
    icon: ClipboardList,
    accent: "saffron",
    image: "https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2026/04/17775345298586.png",
  },
];

export const quickServices: QuickService[] = [
  {
    title: "Public Grievance",
    description: "Share civic complaints and suggestions with the office.",
    href: "/grievance",
    icon: MessagesSquare,
    accent: "blue",
  },
  {
    title: "Property Tax",
    description: "View property-tax related information and notices.",
    href: "#property-tax",
    icon: ReceiptIndianRupee,
    accent: "green",
    id: "property-tax",
  },
  {
    title: "Government Schemes",
    description: "Explore welfare schemes and public program updates.",
    href: "/schemes",
    icon: BookOpenCheck,
    accent: "blue",
  },
  {
    title: "RTI Information",
    description: "Access Right to Information related guidance.",
    href: "#rti",
    icon: Scale,
    accent: "navy",
    id: "rti",
  },
  {
    title: "Contact Office",
    description: "Reach the Town Panchayat office for assistance.",
    href: "/contact",
    icon: Headphones,
    accent: "green",
  },
];

export const aboutFeatures: FeatureItem[] = [
  {
    title: "Digital Services",
    description: "Citizen information, forms and service links organized online.",
    icon: ClipboardList,
  },
  {
    title: "Transparent Administration",
    description: "Public notices, updates and service information made easier to access.",
    icon: ShieldCheck,
  },
  {
    title: "Citizen Support",
    description: "Clear channels for questions, grievances and office contact.",
    icon: Handshake,
  },
];

export const statisticsCards: StatisticCard[] = [
  {
    label: "Services",
    value: "24+",
    description: "Editable service categories for citizen convenience.",
    icon: Building2,
  },
  {
    label: "Wards",
    value: "14",
    description: "Editable scheme listings and welfare updates.",
    icon: BadgeHelp,
  },
  {
    label: "Citizen Forms",
    value: "18",
    description: "Editable forms and downloadable document placeholders.",
    icon: FileText,
  },
  {
    label: "Departments",
    value: "08",
    description: "Editable department cards for municipal information.",
    icon: Users,
  },
];

export const latestSchemes: UpdateItem[] = [
  {
    category: "Scheme",
    title: "Urban sanitation awareness drive",
    description: "Information placeholder for a local public welfare initiative.",
    date: "Editable date",
  },
  {
    category: "Scheme",
    title: "Water conservation support",
    description: "Program details can be updated by the municipal team.",
    date: "Editable date",
  },
  {
    category: "Scheme",
    title: "Citizen facilitation camp",
    description: "A placeholder update for future scheme-related announcements.",
    date: "Editable date",
  },
];

export const publicNotices: UpdateItem[] = [
  {
    category: "Notice",
    title: "Office service timing notice",
    description: "Use this card for official municipal office announcements.",
    date: "Editable date",
  },
  {
    category: "Notice",
    title: "Sanitation route information",
    description: "Add ward-level service updates and public instructions here.",
    date: "Editable date",
  },
  {
    category: "Notice",
    title: "Document verification camp",
    description: "A modern notice layout ready for real office updates.",
    date: "Editable date",
  },
];

export const upcomingEvents: UpdateItem[] = [
  {
    category: "Event",
    title: "Cleanliness awareness meeting",
    description: "Use this area to publish community meetings and drives.",
    date: "Editable date",
  },
  {
    category: "Event",
    title: "Public service help desk",
    description: "A placeholder event card for citizen support sessions.",
    date: "Editable date",
  },
  {
    category: "Event",
    title: "Ward-level review program",
    description: "Editable event content for future municipal updates.",
    date: "Editable date",
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "Office",
    value: "Town Panchayat Bhargain, Kasganj, Uttar Pradesh",
    description: "office address",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "Editable placeholder number",
    description: "Office contact number",
    href: "tel:+910000000000",
    icon: Phone,
  },
  {
    label: "Email",
    value: "Editable placeholder official email",
    description: "Official email address",
    href: "mailto:office@example.gov.in",
    icon: Mail,
  },
  {
    label: "Office Hours",
    value: "Monday to Saturday, 10:00 AM to 5:00 PM",
    description: "Citizen support timing",
    icon: CalendarDays,
  },
];

export const socialLinks: SocialItem[] = [];

export const updateTabs = [
  {
    label: "Latest Schemes",
    icon: CheckCircle2,
    items: latestSchemes,
  },
  {
    label: "Public Notices",
    icon: Newspaper,
    items: publicNotices,
  },
  {
    label: "Upcoming Events",
    icon: Bell,
    items: upcomingEvents,
  },
];

export const footerContact = {
  address: "Town Panchayat Bhargain, Kasganj, Uttar Pradesh",
  phone: "+91 xxxxxxxxxx",
  email: "npbhargaimkashganj@gmail.com",
  hours: "Monday to Saturday, 10:00 AM to 5:00 PM",
};

export const departmentHighlights = [
  "Sanitation and public cleanliness coordination",
  "Water supply and infrastructure support",
  "Citizen records, forms and public welfare services",
  "Public notices, meetings and municipal coordination",
];

export const officeUpdates = [
  {
    label: "Public Notices",
    icon: Megaphone,
  },
  {
    label: "Citizen Forms",
    icon: FileText,
  },
  {
    label: "Department Desk",
    icon: Building2,
  },
];
