import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type QuickService = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: "blue" | "green" | "saffron" | "navy";
  id?: string;
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  buttons: {
    label: string;
    href: string;
    variant: "default" | "secondary" | "outline";
  }[];
  icon: LucideIcon;
  accent: "blue" | "green" | "saffron";
  image?: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type StatisticCard = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export type UpdateItem = {
  category: string;
  title: string;
  description: string;
  date: string;
};

export type ContactItem = {
  label: string;
  value: string;
  description: string;
  href?: string;
  icon: LucideIcon;
};

export type SocialItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};
