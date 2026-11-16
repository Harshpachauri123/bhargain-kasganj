import Link from "next/link";
import type { NavigationItem } from "@/types";

type DesktopNavigationProps = {
  items: NavigationItem[];
  variant?: "primary" | "secondary";
};

export function DesktopNavigation({
  items,
  variant = "primary",
}: DesktopNavigationProps) {
  const isSecondary = variant === "secondary";

  return (
    <nav aria-label={isSecondary ? "Secondary navigation" : "Primary navigation"}>
      <ul
        className={
          isSecondary
            ? "flex flex-wrap items-center justify-center gap-1"
            : "flex items-center gap-1"
        }
      >
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={
                isSecondary
                  ? "inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10"
                  : "inline-flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-primary focus-visible:bg-blue-50"
              }
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
