"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  MessageSquareWarning,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  Send,
  FileCheck,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

// Inline Type Definition
interface GrievanceFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  complaintCategory: string;
  municipalWard: string;
  incidentAddress: string;
  description: string;
}

const initialFormData: GrievanceFormData = {
  fullName: "",
  mobileNumber: "",
  email: "",
  complaintCategory: "",
  municipalWard: "",
  incidentAddress: "",
  description: "",
};

const complaintCategories = [
  "Sanitation / Garbage Dumping",
  "Water Supply / Pipeline Leakage",
  "Potholes / Damaged Roadways",
  "Street Lights Malfunction",
  "Illegal Encroachment",
];

const wardNumbers = Array.from({ length: 14 }, (_, i) => `Ward No. ${i + 1}`);

export default function GrievancePage() {
  const [formData, setFormData] = useState<GrievanceFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Mobile number digits check
    if (name === "mobileNumber") {
      const sanitized = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMsg("");
  };

  const scrollToForm = () => {
    const section = document.getElementById("grievance-form");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      setErrorMsg("Please enter a valid full name.");
      return false;
    }
    if (formData.mobileNumber.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (!formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    if (!formData.complaintCategory) {
      setErrorMsg("Please select a complaint category.");
      return false;
    }
    if (!formData.municipalWard) {
      setErrorMsg("Please select a municipal ward.");
      return false;
    }
    if (!formData.incidentAddress.trim()) {
      setErrorMsg("Please enter the incident landmark / address.");
      return false;
    }
    if (formData.description.trim().length < 10) {
      setErrorMsg("Please provide a detailed description (min 10 characters).");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomId = Math.floor(100000 + Math.random() * 900000);
      setTrackingId(`KASHGANJ-GRV-${randomId}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setErrorMsg("");
  };

  const handleRegisterAnother = () => {
    setFormData(initialFormData);
    setSubmitted(false);
    setTrackingId("");
    setErrorMsg("");
  };

  return (
    <main className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
              <MessageSquareWarning className="w-4 h-4 text-blue-600" />
              <span>Public Grievance Redressal System</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Your Voice Matters, <br />
              <span className="text-blue-600">And We Act On It</span>
            </h1>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Town Panchayat Bhargain, Kashganj is committed to delivering a responsive and responsible grievance redressal ecosystem. Citizens are encouraged to report civic issues affecting daily life.
              </p>
              <p>
                Each grievance registered is tracked through a structured monitoring system, ensuring timely resolution by the concerned department.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">Transparent Tracking</h3>
                <p className="text-xs text-slate-500 mt-1">Monitor complaint status at every stage.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm">Quick Resolution</h3>
                <p className="text-xs text-slate-500 mt-1">Faster response by concerned departments.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md shadow-blue-500/20 transition-all duration-200 cursor-pointer"
              >
                <span>Submit Your Grievance</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Container with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop"
                alt="Grievance Support"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Top Right Floating Badge */}
            <div className="absolute -top-4 right-4 sm:-top-5 sm:right-6 bg-blue-600 text-white p-3 sm:p-4 rounded-2xl shadow-lg text-center">
              <div className="text-lg sm:text-xl font-black">24/7</div>
              <div className="text-[10px] sm:text-xs font-medium opacity-90">Citizen Support System</div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-8 sm:right-8 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Grievance Redressal Portal</h4>
                <p className="text-xs text-slate-500">Quick • Transparent • Citizen-Centric</p>
              </div>
            </div>
          </div>
        </section>


        {/* ================= FORM SECTION ================= */}
        <section id="grievance-form" className="scroll-mt-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 px-6 sm:px-8 py-5 text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                  Grievance Submission Form
                </h2>
                <p className="text-[11px] sm:text-xs text-blue-100 font-medium">
                  Please fill in correct details. False complaints are subject to legal checks.
                </p>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                /* Success View */
                <div className="max-w-md mx-auto text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Grievance Registered Successfully</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your complaint reference number is generated below:
                  </p>
                  <div className="inline-block bg-slate-100 border border-slate-200 px-6 py-2.5 rounded-xl font-mono text-base font-extrabold text-blue-700 tracking-wider">
                    {trackingId}
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleRegisterAnother}
                      className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-all"
                    >
                      Register Another Grievance
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Full Name, Mobile Number, Email */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="rahul@domain.com"
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Category, Ward */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                        Complaint Category
                      </label>
                      <select
                        name="complaintCategory"
                        value={formData.complaintCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
                      >
                        <option value="">Select Category</option>
                        {complaintCategories.map((cat, idx) => (
                          <option key={idx} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                        Select Municipal Ward
                      </label>
                      <select
                        name="municipalWard"
                        value={formData.municipalWard}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
                      >
                        <option value="">Select Ward</option>
                        {wardNumbers.map((ward, idx) => (
                          <option key={idx} value={ward}>
                            {ward}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Address */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                      Incident Landmark / Address
                    </label>
                    <input
                      type="text"
                      name="incidentAddress"
                      value={formData.incidentAddress}
                      onChange={handleInputChange}
                      placeholder="e.g. Near Hanuman Temple, Railway Road"
                      className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Row 4: Description */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-500 mb-1.5 tracking-wider">
                      Detailed Description of Grievance
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please explain the issue and exact location"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Amber Audit Notice Box */}
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs font-medium text-amber-900 flex items-start sm:items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 text-[11px] font-bold">
                      !
                    </div>
                    <p className="leading-relaxed">
                      Before submitting, please review all inputs. Reference tickets are logged directly into the Chief Officer&apos;s dashboard for verification audits.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleClear}
                      disabled={isSubmitting}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50 transition-all"
                    >
                      Clear Fields
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs shadow-md transition-all disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <LoaderCircle className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Official Grievance</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
