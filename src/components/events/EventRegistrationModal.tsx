"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  UserCheck,
  X,
} from "lucide-react";
import type { FestivalEvent } from "@/types";

interface EventRegistrationModalProps {
  event: FestivalEvent;
  isOpen: boolean;
  onClose: () => void;
}

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  teamName: string;
}

export function EventRegistrationModal({
  event,
  isOpen,
  onClose,
}: EventRegistrationModalProps) {
  const isDemo = event.isDemo || event.registrationStatus === "demo";

  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    phone: "",
    college: "",
    teamName: "",
  });

  const [submittedData, setSubmittedData] = useState<RegistrationFormData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFillSample = () => {
    setFormData({
      name: "Ananya Ramesh",
      email: "ananya.ramesh@cek.ac.in",
      phone: "+91 98765 43210",
      college: "College of Engineering Karunagappally",
      teamName: "Apex Builders",
    });
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Contact phone is required";
    if (!formData.college.trim()) newErrors.college = "College / Institution is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      id: `${isDemo ? "demo" : "reg"}-${Date.now()}`,
      eventSlug: event.slug,
      eventTitle: event.title,
      categoryLabel: event.categoryLabel,
      ...formData,
      isDemo,
      submittedAt: new Date().toISOString(),
    };

    // Separate demo submissions from live registrations in persistent storage
    try {
      const storageKey = isDemo ? "aarambh_demo_registrations" : "aarambh_live_registrations";
      const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
      existing.push(payload);
      localStorage.setItem(storageKey, JSON.stringify(existing));
    } catch {
      // Local storage fallback for restricted sandboxes
    }

    setSubmittedData(formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      teamName: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close registration dialog"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-white/5 text-[var(--text-secondary)] transition-colors hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[var(--brand-primary)]/40 bg-[var(--brand-primary)]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[var(--brand-secondary)]">
                  {event.categoryLabel}
                </span>
                {isDemo && (
                  <span className="rounded-full border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--brand-gold)]">
                    Demo Mode
                  </span>
                )}
              </div>

              <h2 id="reg-modal-title" className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Register for {event.title}
              </h2>
              <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                {isDemo
                  ? "Test the registration flow with sample details or enter your own information."
                  : "Complete your entry details below to secure your team spot."}
              </p>
            </div>

            {/* Demo Quick-Fill Pill Button */}
            {isDemo && (
              <div className="mt-4 flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-white/[0.03] p-3 text-xs">
                <span className="text-[var(--text-secondary)]">Want to test quickly?</span>
                <button
                  type="button"
                  onClick={handleFillSample}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/15 px-3 py-1 font-semibold text-[var(--brand-gold)] transition-colors hover:bg-[var(--brand-gold)]/25"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Use sample details</span>
                </button>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-left">
              <div>
                <label htmlFor="reg-name" className="block text-xs font-semibold text-white">
                  Full Name <span className="text-[var(--brand-primary)]">*</span>
                </label>
                <input
                  id="reg-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Ananya Ramesh"
                  className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-[var(--text-muted)] focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                />
                {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="reg-email" className="block text-xs font-semibold text-white">
                    Email Address <span className="text-[var(--brand-primary)]">*</span>
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@college.ac.in"
                    className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-[var(--text-muted)] focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="reg-phone" className="block text-xs font-semibold text-white">
                    Phone Number <span className="text-[var(--brand-primary)]">*</span>
                  </label>
                  <input
                    id="reg-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+91 98765 43210"
                    className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-[var(--text-muted)] focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                  />
                  {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="reg-college" className="block text-xs font-semibold text-white">
                  College / Institution <span className="text-[var(--brand-primary)]">*</span>
                </label>
                <input
                  id="reg-college"
                  type="text"
                  value={formData.college}
                  onChange={(e) => {
                    setFormData({ ...formData, college: e.target.value });
                    if (errors.college) setErrors({ ...errors, college: undefined });
                  }}
                  placeholder="e.g. College of Engineering Karunagappally"
                  className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-[var(--text-muted)] focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                />
                {errors.college && <p className="mt-1 text-[11px] text-red-400">{errors.college}</p>}
              </div>

              <div>
                <label htmlFor="reg-team" className="block text-xs font-semibold text-white">
                  Team Name <span className="text-[var(--text-muted)] font-normal">(optional)</span>
                </label>
                <input
                  id="reg-team"
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="e.g. Team Apex"
                  className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-[var(--text-muted)] focus:border-[var(--brand-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-brand flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
                >
                  <span>{isDemo ? "Try demo registration" : "Register Now"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-2">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/15 text-[var(--brand-secondary)]">
              {isDemo ? (
                <CheckCircle2 className="h-7 w-7 text-[var(--brand-secondary)]" />
              ) : (
                <UserCheck className="h-7 w-7 text-emerald-400" />
              )}
            </div>

            <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
              {isDemo ? "Demo complete — no place has been reserved." : "Registration Confirmed!"}
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              {isDemo
                ? "Your sample registration was processed locally in demo mode. No payment was taken and no festival seat was booked."
                : `Your entry for ${event.title} has been successfully recorded.`}
            </p>

            {/* Confirmed Event & Participant Summary Card */}
            <div className="mt-5 rounded-xl border border-[var(--border-subtle)] bg-black/35 p-4 text-left text-xs space-y-2">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[var(--text-muted)]">Event Selected</span>
                <span className="font-bold text-white">{event.title}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[var(--text-muted)]">Track</span>
                <span className="text-[var(--brand-gold)] font-medium">{event.categoryLabel}</span>
              </div>
              {submittedData && (
                <>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[var(--text-muted)]">Participant</span>
                    <span className="text-white font-medium">{submittedData.name}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[var(--text-muted)]">Email</span>
                    <span className="text-[var(--text-secondary)]">{submittedData.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-muted)]">Institution</span>
                    <span className="text-[var(--text-secondary)] line-clamp-1">{submittedData.college}</span>
                  </div>
                </>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleReset}
                className="btn-brand min-h-[44px] flex-1 rounded-xl px-5 py-2.5 text-xs font-bold sm:text-sm"
              >
                Back to event
              </button>
              <Link
                href="/events"
                onClick={onClose}
                className="btn-outline-glass min-h-[44px] flex-1 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-xs font-semibold sm:text-sm"
              >
                Browse other events
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
