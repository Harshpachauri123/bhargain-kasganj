import Link from "next/link";
import { footerCitizenLinks, footerQuickLinks } from "@/data/navigation";
import { footerContact, socialLinks } from "@/data/home-data";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="civic-container py-12 lg:py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.25fr]">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              {/* 🖼️ Logo Image round box ke andar */}
          <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-blue-100 bg-blue-50 text-sm font-bold text-primary shadow-sm">
            <img
              src="https://cdn.s3waas.gov.in/s30336dcbab05b9d5ad24f4333c7658a0e/uploads/2018/02/2018021632.png"
              alt="Town Panchayat Logo"
              className="h-full w-full object-cover"
            />
          </span>
              <span className="text-lg font-bold leading-snug">
                Town Panchayat Bhargain, Kasganj
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
              A citizen-focused website for services, updates,
              contact information and public welfare communication.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Button
                    asChild
                    key={item.label}
                    size="icon"
                    variant="secondary"
                    className="bg-white/10 text-white hover:bg-white/20"
                  >
                    <Link href={item.href} aria-label={item.label}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Quick Links" items={footerQuickLinks} />
          <FooterColumn title="Citizen Services" items={footerCitizenLinks} />

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-normal text-blue-100">
              Contact Information
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-blue-50">
              <div>
                <dt className="font-semibold text-white">Address</dt>
                <dd>{footerContact.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Phone</dt>
                <dd>{footerContact.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Email</dt>
                <dd>{footerContact.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Office hours</dt>
                <dd>{footerContact.hours}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="civic-container flex flex-col gap-3 py-5 text-sm text-blue-100 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {currentYear} Town Panchayat Bhargain, Kasganj. All rights 
            reserved.
          </p>
          <nav aria-label="Footer legal links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Accessibility
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-normal text-blue-100">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-blue-50">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
