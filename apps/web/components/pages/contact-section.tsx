
"use client";

import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldAlert,
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <div className="civic-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr]">
          {/* Contact Information */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-blue-950">
              Contact Information
            </h2>
            <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-slate-500">
              Feel free to reach out to us for any support, queries, complaints
              or general assistance.
            </p>

            <div className="mt-7 space-y-4">
              <InfoCard
                icon={<MapPin className="h-5 w-5" />}
                iconClassName="bg-blue-600"
                label="Office Address"
                value="Town Panchayat Bhargain, Patiali Tehsil, Kasganj, Uttar Pradesh - 207244"
              />

              <InfoCard
                icon={<Phone className="h-5 w-5" />}
                iconClassName="bg-emerald-600"
                label="Phone Number"
                value="+91 0000000000"
              />

              <InfoCard
                icon={<Mail className="h-5 w-5" />}
                iconClassName="bg-orange-500"
                label="Email Address"
                value="office@example.gov.in"
              />
            </div>

            <div className="mt-7 border-t border-slate-200 pt-6">
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-900" />
                <div>
                  <h3 className="text-sm font-black text-blue-950">
                    Office Hours
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Monday - Saturday (10:00 AM to 05:00 PM)
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-4">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <h3 className="text-sm font-black text-red-600">
                    Emergency Helpline
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Available 24x7 for essential municipal services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-black tracking-tight text-blue-950">
              Send Us a Message
            </h2>
            <p className="mt-3 text-sm font-medium text-slate-500">
              Our team will get back to you shortly.
            </p>

            <form
              className="mt-8 space-y-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </Field>

                <Field label="Your Email">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone Number">
                  <input
                    type="tel"
                    placeholder="Enter 10-digit phone number"
                    className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </Field>

                <Field label="Subject">
                  <input
                    type="text"
                    placeholder="Message subject"
                    className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </Field>
              </div>

              <Field label="Your Message">
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-white p-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </Field>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-blue-900 px-6 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-950"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 text-orange-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Below */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70">
          <div className="mb-4 flex items-center gap-3 px-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-blue-950">
                Office Location
              </h2>
              <p className="text-xs font-medium text-slate-500">
                Town Panchayat Bhargain, Kasganj, Uttar Pradesh
              </p>
            </div>
          </div>

          <iframe
            title="Bhargain Town Panchayat Map"
            src="https://maps.google.com/maps?q=Bhargain,%20Kasganj,%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full rounded-2xl border-0 sm:h-96"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  iconClassName,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconClassName: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-md ${iconClassName}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-extrabold leading-5 text-blue-950">
          {value}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-black uppercase tracking-wider text-blue-900">
        {label}
      </span>
      {children}
    </label>
  );
}
